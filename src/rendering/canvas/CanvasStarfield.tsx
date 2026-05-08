import {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    type CSSProperties,
} from 'react';
import {
    canUseDOM,
    getCanvas2DContext,
    supportsCanvas2D,
} from '../../superanimation/featureSupport';
import type { GraphicsPerformanceTier, RenderLoopFrame } from '../renderingTypes';
import { useDevicePerformanceTier } from '../useDevicePerformanceTier';
import { useReducedGraphicsMode } from '../useReducedGraphicsMode';
import { useViewportRenderLoop } from '../useViewportRenderLoop';

type CanvasStarfieldProps = {
    className?: string;
    style?: CSSProperties;
};

type StarColorKey = 'heatedIvory' | 'starGold' | 'starBright' | 'starEmber';

type StarParticle = {
    x: number;
    y: number;
    size: number;
    colorKey: StarColorKey;
    baseOpacity: number;
    twinkleDelayMs: number;
    twinkleDurationMs: number;
};

type StarLayer = {
    name: string;
    driftMs: number;
    stars: StarParticle[];
};

type ResolvedPalette = Record<StarColorKey, string>;

const FALLBACK_PALETTE: ResolvedPalette = {
    heatedIvory: '#fff1d2',
    starGold: '#dfa55b',
    starBright: '#fff7e6',
    starEmber: '#ff6a2a',
};

const BASE_LAYERS = [
    {
        name: 'mist',
        count: 40,
        sizeRange: [1, 1.5] as [number, number],
        colors: ['heatedIvory'] as StarColorKey[],
        opacityRange: [0.1, 0.4] as [number, number],
        driftMs: 120000,
    },
    {
        name: 'mid',
        count: 25,
        sizeRange: [1.5, 2] as [number, number],
        colors: ['heatedIvory', 'starGold'] as StarColorKey[],
        opacityRange: [0.3, 0.6] as [number, number],
        driftMs: 90000,
    },
    {
        name: 'foreground',
        count: 10,
        sizeRange: [2, 3] as [number, number],
        colors: ['starBright', 'starGold'] as StarColorKey[],
        opacityRange: [0.6, 0.9] as [number, number],
        driftMs: 60000,
    },
    {
        name: 'signals',
        count: 5,
        sizeRange: [2.5, 4] as [number, number],
        colors: ['starBright', 'starEmber'] as StarColorKey[],
        opacityRange: [0.8, 1] as [number, number],
        driftMs: 180000,
    },
];

function createSeededRandom(seed: number) {
    let state = seed >>> 0;

    return () => {
        state = (state * 1664525 + 1013904223) >>> 0;
        return state / 4294967296;
    };
}

function lerp(min: number, max: number, t: number): number {
    return min + (max - min) * t;
}

function tierMultiplier(tier: GraphicsPerformanceTier): number {
    if (tier === 'low') return 0.45;
    if (tier === 'medium') return 0.72;
    return 1;
}

function buildLayers(tier: GraphicsPerformanceTier, reducedGraphics: boolean): StarLayer[] {
    const random = createSeededRandom(0x51a7f13d);
    const multiplier = reducedGraphics ? 0.34 : tierMultiplier(tier);

    return BASE_LAYERS.map((layer) => {
        const count = Math.max(2, Math.round(layer.count * multiplier));

        return {
            name: layer.name,
            driftMs: reducedGraphics ? layer.driftMs * 1.6 : layer.driftMs,
            stars: Array.from({ length: count }).map(() => {
                const size = lerp(layer.sizeRange[0], layer.sizeRange[1], random());
                const colorKey =
                    layer.colors[Math.floor(random() * layer.colors.length)] ?? layer.colors[0];
                const baseOpacity = lerp(layer.opacityRange[0], layer.opacityRange[1], random());

                return {
                    x: random(),
                    y: random(),
                    size,
                    colorKey,
                    baseOpacity,
                    twinkleDelayMs: random() * 10000,
                    twinkleDurationMs: 3000 + random() * 6000,
                };
            }),
        };
    });
}

function resolveCssColor(variableName: string, fallback: string): string {
    if (!canUseDOM) return fallback;

    const value = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue(variableName)
        .trim();

    return value || fallback;
}

function resolvePalette(): ResolvedPalette {
    return {
        heatedIvory: resolveCssColor('--heated-ivory', FALLBACK_PALETTE.heatedIvory),
        starGold: resolveCssColor(
            '--star-gold',
            resolveCssColor('--molten-gold', FALLBACK_PALETTE.starGold),
        ),
        starBright: resolveCssColor('--star-bright', FALLBACK_PALETTE.starBright),
        starEmber: resolveCssColor(
            '--star-ember',
            resolveCssColor('--ember', FALLBACK_PALETTE.starEmber),
        ),
    };
}

function resizeCanvas(
    canvas: HTMLCanvasElement,
    width: number,
    height: number,
    dpr: number,
): boolean {
    const safeWidth = Math.max(1, Math.floor(width));
    const safeHeight = Math.max(1, Math.floor(height));
    const safeDpr = Math.max(1, dpr);

    const nextWidth = Math.max(1, Math.floor(safeWidth * safeDpr));
    const nextHeight = Math.max(1, Math.floor(safeHeight * safeDpr));

    const changed = canvas.width !== nextWidth || canvas.height !== nextHeight;

    if (changed) {
        canvas.width = nextWidth;
        canvas.height = nextHeight;
    }

    canvas.style.width = `${safeWidth}px`;
    canvas.style.height = `${safeHeight}px`;

    return changed;
}

function getTwinkleAlpha(
    star: StarParticle,
    timestamp: number,
    reducedGraphics: boolean,
): number {
    if (reducedGraphics) {
        return star.baseOpacity * 0.72;
    }

    const phase =
        ((timestamp + star.twinkleDelayMs) % star.twinkleDurationMs) /
        star.twinkleDurationMs;

    const wave = 0.5 + 0.5 * Math.sin(phase * Math.PI * 2);
    const twinkle = 0.3 + wave * 0.7;

    return Math.max(0, Math.min(1, star.baseOpacity * twinkle));
}

function drawStar(
    ctx: CanvasRenderingContext2D,
    star: StarParticle,
    x: number,
    y: number,
    color: string,
    alpha: number,
    reducedGraphics: boolean,
) {
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;

    if (!reducedGraphics && star.size > 2) {
        ctx.shadowColor = color;
        ctx.shadowBlur = star.size * 2;
    } else {
        ctx.shadowBlur = 0;
    }

    ctx.beginPath();
    ctx.arc(x, y, star.size / 2, 0, Math.PI * 2);
    ctx.fill();

    ctx.shadowBlur = 0;
}

function drawFrame(
    canvas: HTMLCanvasElement,
    layers: StarLayer[],
    palette: ResolvedPalette,
    timestamp: number,
    dpr: number,
    reducedGraphics: boolean,
) {
    const ctx = getCanvas2DContext(canvas);
    if (!ctx) return;

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (width <= 0 || height <= 0) return;

    resizeCanvas(canvas, width, height, dpr);

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = 'source-over';

    layers.forEach((layer) => {
        const driftProgress = reducedGraphics ? 0 : ((timestamp % layer.driftMs) / layer.driftMs);
        const driftY = driftProgress * height;

        layer.stars.forEach((star) => {
            const x = star.x * width;
            const baseY = star.y * height;
            const y = ((baseY - driftY) % height + height) % height;
            const color = palette[star.colorKey];
            const alpha = getTwinkleAlpha(star, timestamp, reducedGraphics);

            drawStar(ctx, star, x, y, color, alpha, reducedGraphics);

            if (y < star.size * 3) {
                drawStar(ctx, star, x, y + height, color, alpha, reducedGraphics);
            } else if (y > height - star.size * 3) {
                drawStar(ctx, star, x, y - height, color, alpha, reducedGraphics);
            }
        });
    });

    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
}

export function CanvasStarfield({ className, style }: CanvasStarfieldProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const canvasSupported = supportsCanvas2D();
    const profile = useDevicePerformanceTier();
    const reducedState = useReducedGraphicsMode(profile.tier);

    const layers = useMemo(
        () => buildLayers(profile.tier, reducedState.reducedGraphics),
        [profile.tier, reducedState.reducedGraphics],
    );

    const paletteRef = useRef<ResolvedPalette>(FALLBACK_PALETTE);

    useEffect(() => {
        if (!canUseDOM) return;

        paletteRef.current = resolvePalette();
    }, []);

    const renderStaticFrame = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        drawFrame(
            canvas,
            layers,
            paletteRef.current,
            0,
            profile.cappedDpr,
            reducedState.reducedGraphics,
        );
    }, [layers, profile.cappedDpr, reducedState.reducedGraphics]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;

        if (!canvas || !container || !canvasSupported) return undefined;

        let resizeObserver: ResizeObserver | null = null;
        let frameId: number | null = null;

        const scheduleDraw = () => {
            if (frameId !== null) {
                window.cancelAnimationFrame(frameId);
            }

            frameId = window.requestAnimationFrame(() => {
                renderStaticFrame();
                frameId = null;
            });
        };

        scheduleDraw();

        if ('ResizeObserver' in window) {
            resizeObserver = new ResizeObserver(scheduleDraw);
            resizeObserver.observe(container);
        }

        window.addEventListener('resize', scheduleDraw, { passive: true });
        window.addEventListener('orientationchange', scheduleDraw, { passive: true });

        return () => {
            if (frameId !== null) {
                window.cancelAnimationFrame(frameId);
            }

            resizeObserver?.disconnect();
            window.removeEventListener('resize', scheduleDraw);
            window.removeEventListener('orientationchange', scheduleDraw);
        };
    }, [canvasSupported, renderStaticFrame]);

    useViewportRenderLoop(
        containerRef,
        (frame: RenderLoopFrame) => {
            const canvas = canvasRef.current;
            if (!canvas || !canvasSupported) return;

            drawFrame(
                canvas,
                layers,
                paletteRef.current,
                frame.timestamp,
                profile.cappedDpr,
                false,
            );
        },
        {
            enabled: canvasSupported && !reducedState.reducedGraphics,
            pauseWhenOffscreen: true,
            rootMargin: '160px',
            threshold: 0.01,
            maxFps: profile.tier === 'low' ? 30 : 60,
        },
    );

    if (!canvasSupported) {
        return (
            <div
                className={className}
                style={{
                    ...style,
                    backgroundImage:
                        'radial-gradient(circle at 20% 30%, rgba(255,241,210,0.12) 0 1px, transparent 2px), radial-gradient(circle at 70% 65%, rgba(223,165,91,0.14) 0 1px, transparent 2px)',
                    backgroundSize: '180px 180px, 260px 260px',
                }}
                aria-hidden="true"
            />
        );
    }

    return (
        <div
            ref={containerRef}
            className={className}
            style={style}
            aria-hidden="true"
            data-sa-canvas-starfield
        >
            <canvas
                ref={canvasRef}
                className="sa-canvas-surface"
                aria-hidden="true"
            />
        </div>
    );
}