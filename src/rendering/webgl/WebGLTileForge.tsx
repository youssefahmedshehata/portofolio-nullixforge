import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
    getCappedDevicePixelRatio,
    prefersReducedMotion,
} from '../../superanimation/featureSupport';
import type { TileForgeTile } from '../../superanimation/types';
import { useDevicePerformanceTier } from '../useDevicePerformanceTier';
import { useReducedGraphicsMode } from '../useReducedGraphicsMode';
import { useViewportRenderLoop } from '../useViewportRenderLoop';
import { CanvasFallbackTileForge } from '../CanvasFallbackTileForge';
import {
    getBestWebGLContext,
    isContextLost,
    supportsWebGL,
    type TileForgeGL,
} from './webglSupport';
import {
    createTileForgeProgram,
    uploadTileForgeVertices,
    type TileForgeProgram,
} from './tileForgeProgram';

type WebGLTileForgeProps = {
    tiles: readonly TileForgeTile[];
    className?: string;
};

type RendererState = {
    gl: TileForgeGL;
    program: TileForgeProgram;
};

type TileSample = {
    x: number;
    y: number;
    rot: number;
};

const FIELD_SIZE = 324;
const CELL = 18;
const LOOP_MS = 32000;
const FLOATS_PER_VERTEX = 14;
const VERTICES_PER_RECT = 6;

function clamp01(value: number): number {
    return Math.max(0, Math.min(1, value));
}

function normalizeProgress(timestamp: number): number {
    return ((timestamp % LOOP_MS) / LOOP_MS) * 100;
}

function easeOutCubic(t: number): number {
    const x = clamp01(t);
    return 1 - Math.pow(1 - x, 3);
}

function sampleTile(tile: TileForgeTile, progress: number): TileSample {
    if (tile.path.length === 0) {
        return { x: 0, y: 0, rot: 0 };
    }

    let left = tile.path[0];
    let right = tile.path[tile.path.length - 1];

    for (let i = 0; i < tile.path.length - 1; i += 1) {
        const current = tile.path[i];
        const next = tile.path[i + 1];

        if (progress >= current.p && progress <= next.p) {
            left = current;
            right = next;
            break;
        }
    }

    const span = Math.max(0.0001, right.p - left.p);
    const t = easeOutCubic((progress - left.p) / span);

    const c = left.c + (right.c - left.c) * t;
    const r = left.r + (right.r - left.r) * t;
    const rot = left.rot + (right.rot - left.rot) * t;

    return {
        x: (c - 1) * CELL,
        y: (r - 1) * CELL,
        rot,
    };
}

function phaseOpacity(progress: number, start: number, end: number): number {
    return progress >= start && progress <= end ? 1 : 0;
}

function color(r: number, g: number, b: number, a: number): [number, number, number, number] {
    return [r / 255, g / 255, b / 255, a];
}

function rotatePoint(
    x: number,
    y: number,
    cx: number,
    cy: number,
    radians: number,
): [number, number] {
    const dx = x - cx;
    const dy = y - cy;
    const s = Math.sin(radians);
    const c = Math.cos(radians);

    return [
        cx + dx * c - dy * s,
        cy + dx * s + dy * c,
    ];
}

function pushVertex(
    out: number[],
    x: number,
    y: number,
    localX: number,
    localY: number,
    kind: number,
    rgba: [number, number, number, number],
    opacity: number,
    radius: number,
    softness: number,
) {
    out.push(
        x,
        y,
        localX,
        localY,
        kind,
        rgba[0],
        rgba[1],
        rgba[2],
        rgba[3],
        opacity,
        radius,
        softness,
        0,
        0,
    );
}

function pushRect(
    out: number[],
    x: number,
    y: number,
    width: number,
    height: number,
    rotationDeg: number,
    kind: number,
    rgba: [number, number, number, number],
    opacity: number,
    radius = 0.08,
    softness = 0.02,
) {
    const cx = x + width / 2;
    const cy = y + height / 2;
    const radians = (rotationDeg * Math.PI) / 180;

    const corners = [
        [x, y, -0.5, -0.5],
        [x + width, y, 0.5, -0.5],
        [x + width, y + height, 0.5, 0.5],
        [x, y + height, -0.5, 0.5],
    ] as const;

    const rotated = corners.map(([px, py, lx, ly]) => {
        const [rx, ry] = rotatePoint(px, py, cx, cy, radians);
        return [rx, ry, lx, ly] as const;
    });

    const order = [0, 1, 2, 0, 2, 3];

    order.forEach((index) => {
        const [rx, ry, lx, ly] = rotated[index];
        pushVertex(out, rx, ry, lx, ly, kind, rgba, opacity, radius, softness);
    });
}

function pushTile(out: number[], tile: TileForgeTile, progress: number) {
    const sample = sampleTile(tile, progress);

    const redA = phaseOpacity(progress, tile.redAStart, 36.25);
    const redB = phaseOpacity(progress, tile.redBStart, 63.75);
    const green = phaseOpacity(progress, tile.greenStart, 94.375);

    const unstable = Math.max(redA, redB);
    const stable = green;

    const bodyOpacity = stable ? 1 : unstable ? 0.96 : 0.92;
    const borderColor = stable
        ? color(110, 231, 168, 0.14)
        : unstable
            ? color(255, 75, 62, 0.12)
            : color(244, 240, 232, 0.095);

    // Tile body.
    pushRect(
        out,
        sample.x + 2,
        sample.y + 2,
        14,
        14,
        sample.rot,
        0,
        color(11, 14, 19, 1),
        bodyOpacity,
        0.12,
        0.025,
    );

    // Soft active glow.
    if (unstable > 0 || stable > 0) {
        pushRect(
            out,
            sample.x + 1,
            sample.y + 1,
            16,
            16,
            sample.rot,
            1,
            stable ? color(110, 231, 168, 0.12) : color(255, 75, 62, 0.11),
            stable ? 0.85 : 0.7,
            0.5,
            0.08,
        );
    }

    // Border overlays.
    pushRect(
        out,
        sample.x + 2,
        sample.y + 2,
        14,
        1,
        sample.rot,
        0,
        borderColor,
        1,
        0.02,
        0.01,
    );
    pushRect(
        out,
        sample.x + 2,
        sample.y + 15,
        14,
        1,
        sample.rot,
        0,
        borderColor,
        1,
        0.02,
        0.01,
    );
    pushRect(
        out,
        sample.x + 2,
        sample.y + 2,
        1,
        14,
        sample.rot,
        0,
        borderColor,
        1,
        0.02,
        0.01,
    );
    pushRect(
        out,
        sample.x + 15,
        sample.y + 2,
        1,
        14,
        sample.rot,
        0,
        borderColor,
        1,
        0.02,
        0.01,
    );

    // Terminal dot.
    pushRect(
        out,
        sample.x + 12,
        sample.y + 12,
        2,
        2,
        sample.rot,
        2,
        stable
            ? color(110, 231, 168, 0.7)
            : unstable
                ? color(255, 75, 62, 0.6)
                : color(223, 165, 91, 0.36),
        1,
        0.45,
        0.03,
    );

    // Trace lines.
    const traceColor = stable
        ? color(110, 231, 168, 0.3)
        : unstable
            ? color(255, 75, 62, 0.3)
            : color(244, 240, 232, 0.12);

    pushRect(out, sample.x + 5, sample.y + 6, 7, 1, sample.rot, 0, traceColor, 1, 0.01, 0.01);
    pushRect(out, sample.x + 5, sample.y + 6, 1, 6, sample.rot, 0, traceColor, 1, 0.01, 0.01);
}

function buildVertices(tiles: readonly TileForgeTile[], progress: number): Float32Array {
    const out: number[] = [];

    tiles.forEach((tile) => pushTile(out, tile, progress));

    return new Float32Array(out);
}

function resizeCanvas(
    canvas: HTMLCanvasElement,
    gl: TileForgeGL,
    dpr: number,
): void {
    const targetWidth = Math.max(1, Math.floor(FIELD_SIZE * dpr));
    const targetHeight = Math.max(1, Math.floor(FIELD_SIZE * dpr));

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
        canvas.width = targetWidth;
        canvas.height = targetHeight;
    }

    canvas.style.width = `${FIELD_SIZE}px`;
    canvas.style.height = `${FIELD_SIZE}px`;

    gl.viewport(0, 0, targetWidth, targetHeight);
}

export function WebGLTileForge({ tiles, className }: WebGLTileForgeProps) {
    const rootRef = useRef<HTMLDivElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const rendererRef = useRef<RendererState | null>(null);
    const [webglFailed, setWebglFailed] = useState(false);

    const profile = useDevicePerformanceTier();
    const reduced = useReducedGraphicsMode(profile.tier);

    const shouldFallback = useMemo(() => {
        return webglFailed || !supportsWebGL() || prefersReducedMotion();
    }, [webglFailed]);

    const disposeRenderer = useCallback(() => {
        rendererRef.current?.program.dispose();
        rendererRef.current = null;
    }, []);

    const initRenderer = useCallback(() => {
        const canvas = canvasRef.current;

        if (!canvas) return false;

        const gl = getBestWebGLContext(canvas);

        if (!gl) return false;

        const program = createTileForgeProgram(gl);

        if (!program) return false;

        gl.disable(gl.DEPTH_TEST);
        gl.disable(gl.CULL_FACE);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.clearColor(0, 0, 0, 0);

        rendererRef.current = {
            gl,
            program,
        };

        return true;
    }, []);

    const draw = useCallback(
        (timestamp: number) => {
            const renderer = rendererRef.current;
            const canvas = canvasRef.current;

            if (!renderer || !canvas || isContextLost(renderer.gl)) return;

            const { gl, program } = renderer;
            const dpr = getCappedDevicePixelRatio(profile.tier);
            const progress = reduced.reducedGraphics ? 90 : normalizeProgress(timestamp);

            resizeCanvas(canvas, gl, dpr);

            gl.useProgram(program.program);
            gl.uniform2f(
                program.uniformLocations.resolution,
                FIELD_SIZE,
                FIELD_SIZE,
            );

            gl.clear(gl.COLOR_BUFFER_BIT);

            const vertices = buildVertices(tiles, progress);

            uploadTileForgeVertices(gl, program, vertices);

            const vertexCount = vertices.length / FLOATS_PER_VERTEX;

            if (vertexCount > 0) {
                gl.drawArrays(gl.TRIANGLES, 0, vertexCount);
            }
        },
        [profile.tier, reduced.reducedGraphics, tiles],
    );

    useEffect(() => {
        if (shouldFallback) return undefined;

        disposeRenderer();

        const ok = initRenderer();

        if (!ok) {
            disposeRenderer();
            setWebglFailed(true);
            return undefined;
        }

        draw(0);

        const canvas = canvasRef.current;

        const handleContextLost = (event: Event) => {
            event.preventDefault();
            disposeRenderer();
            setWebglFailed(true);
        };

        const handleContextRestored = () => {
            setWebglFailed(false);
            disposeRenderer();
            initRenderer();
            draw(performance.now());
        };

        canvas?.addEventListener('webglcontextlost', handleContextLost);
        canvas?.addEventListener('webglcontextrestored', handleContextRestored);

        return () => {
            canvas?.removeEventListener('webglcontextlost', handleContextLost);
            canvas?.removeEventListener('webglcontextrestored', handleContextRestored);
            disposeRenderer();
        };
    }, [disposeRenderer, draw, initRenderer, shouldFallback]);

    useViewportRenderLoop(
        rootRef,
        (frame) => draw(frame.timestamp),
        {
            enabled: !shouldFallback && !reduced.reducedGraphics,
            pauseWhenOffscreen: true,
            rootMargin: '180px',
            threshold: 0.01,
            maxFps: profile.tier === 'low' ? 30 : 60,
        },
    );

    if (shouldFallback) {
        return (
            <CanvasFallbackTileForge
                tiles={tiles}
                className={className}
            />
        );
    }

    return (
        <div
            ref={rootRef}
            className={className}
            data-sa-webgl-tile-forge
            aria-hidden="true"
        >
            <canvas
                ref={canvasRef}
                className="sa-webgl-surface"
                aria-hidden="true"
            />
        </div>
    );
}