import { useCallback, useEffect, useRef } from 'react';
import {
    getCanvas2DContext,
    getCappedDevicePixelRatio,
} from '../superanimation/featureSupport';
import { useDevicePerformanceTier } from './useDevicePerformanceTier';
import { useReducedGraphicsMode } from './useReducedGraphicsMode';
import { useViewportRenderLoop } from './useViewportRenderLoop';
import type { TileForgeTile } from '../superanimation/types';

type CanvasFallbackTileForgeProps = {
    tiles: readonly TileForgeTile[];
    className?: string;
};

const FIELD_SIZE = 324;
const CELL = 18;
const LOOP_MS = 32000;

type TileSample = {
    x: number;
    y: number;
    rot: number;
};

function normalizeProgress(timestamp: number): number {
    return ((timestamp % LOOP_MS) / LOOP_MS) * 100;
}

function sampleTile(tile: TileForgeTile, progress: number): TileSample {
    const path = tile.path;

    if (!path.length) {
        return { x: 0, y: 0, rot: 0 };
    }

    let left = path[0];
    let right = path[path.length - 1];

    for (let i = 0; i < path.length - 1; i += 1) {
        const current = path[i];
        const next = path[i + 1];

        if (progress >= current.p && progress <= next.p) {
            left = current;
            right = next;
            break;
        }
    }

    const span = Math.max(0.0001, right.p - left.p);
    const t = Math.max(0, Math.min(1, (progress - left.p) / span));
    const eased = 1 - Math.pow(1 - t, 3);

    const c = left.c + (right.c - left.c) * eased;
    const r = left.r + (right.r - left.r) * eased;
    const rot = left.rot + (right.rot - left.rot) * eased;

    return {
        x: (c - 1) * CELL,
        y: (r - 1) * CELL,
        rot,
    };
}

function phaseOpacity(progress: number, start: number, end: number): number {
    return progress >= start && progress <= end ? 1 : 0;
}

function drawTile(
    ctx: CanvasRenderingContext2D,
    tile: TileForgeTile,
    progress: number,
) {
    const sample = sampleTile(tile, progress);

    const redA = phaseOpacity(progress, tile.redAStart, 36.25);
    const redB = phaseOpacity(progress, tile.redBStart, 63.75);
    const green = phaseOpacity(progress, tile.greenStart, 94.375);

    const unstable = Math.max(redA, redB);
    const stable = green;

    ctx.save();
    ctx.translate(sample.x + 9, sample.y + 9);
    ctx.rotate((sample.rot * Math.PI) / 180);
    ctx.translate(-7, -7);

    const baseOpacity = stable ? 1 : unstable ? 0.96 : 0.92;

    ctx.globalAlpha = baseOpacity;
    ctx.fillStyle = '#0b0e13';
    ctx.strokeStyle = stable
        ? 'rgba(110,231,168,0.14)'
        : unstable
            ? 'rgba(255,75,62,0.12)'
            : 'rgba(244,240,232,0.095)';

    ctx.shadowColor = 'rgba(0,0,0,0.34)';
    ctx.shadowBlur = 10;
    ctx.fillRect(0, 0, 14, 14);
    ctx.shadowBlur = 0;
    ctx.strokeRect(0.5, 0.5, 13, 13);

    if (unstable || stable) {
        ctx.globalAlpha = unstable ? 0.55 : 0.65;
        ctx.fillStyle = stable ? 'rgba(110,231,168,0.07)' : 'rgba(255,75,62,0.06)';
        ctx.fillRect(0, 0, 14, 14);

        ctx.globalAlpha = unstable ? 0.8 : 1;
        ctx.fillStyle = stable ? 'rgba(110,231,168,0.7)' : 'rgba(255,75,62,0.6)';
    } else {
        ctx.globalAlpha = 1;
        ctx.fillStyle = 'rgba(223,165,91,0.36)';
    }

    ctx.fillRect(10, 10, 2, 2);

    ctx.globalAlpha = 1;
    ctx.fillStyle = stable
        ? 'rgba(110,231,168,0.3)'
        : unstable
            ? 'rgba(255,75,62,0.3)'
            : 'rgba(244,240,232,0.12)';

    ctx.fillRect(3, 4, 7, 1);
    ctx.fillRect(3, 4, 1, 6);

    ctx.restore();
}

function resizeCanvas(canvas: HTMLCanvasElement, dpr: number) {
    const target = Math.max(1, Math.floor(FIELD_SIZE * dpr));

    if (canvas.width !== target || canvas.height !== target) {
        canvas.width = target;
        canvas.height = target;
    }

    canvas.style.width = `${FIELD_SIZE}px`;
    canvas.style.height = `${FIELD_SIZE}px`;
}

export function CanvasFallbackTileForge({
    tiles,
    className,
}: CanvasFallbackTileForgeProps) {
    const rootRef = useRef<HTMLDivElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const profile = useDevicePerformanceTier();
    const reduced = useReducedGraphicsMode(profile.tier);

    const draw = useCallback(
        (timestamp: number) => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const dpr = getCappedDevicePixelRatio(profile.tier);
            const ctx = getCanvas2DContext(canvas);
            if (!ctx) return;

            resizeCanvas(canvas, dpr);

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.clearRect(0, 0, FIELD_SIZE, FIELD_SIZE);

            const progress = reduced.reducedGraphics ? 90 : normalizeProgress(timestamp);

            tiles.forEach((tile) => drawTile(ctx, tile, progress));
        },
        [profile.tier, reduced.reducedGraphics, tiles],
    );

    useEffect(() => {
        draw(0);
    }, [draw]);

    useViewportRenderLoop(
        rootRef,
        (frame) => draw(frame.timestamp),
        {
            enabled: !reduced.reducedGraphics,
            pauseWhenOffscreen: true,
            rootMargin: '160px',
            threshold: 0.01,
            maxFps: profile.tier === 'low' ? 30 : 60,
        },
    );

    return (
        <div
            ref={rootRef}
            className={className}
            data-sa-tile-forge-fallback
            aria-hidden="true"
        >
            <canvas className="sa-webgl-surface" ref={canvasRef} />
        </div>
    );
}