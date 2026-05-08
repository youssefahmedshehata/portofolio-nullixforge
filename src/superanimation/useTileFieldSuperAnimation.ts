import { useLayoutEffect, type RefObject } from 'react';
import { animateOnCompositor, createCleanupStack } from './CompositorBridge';
import { prefersReducedMotion, supportsWAAPI } from './featureSupport';

type TileMotionPoint = {
    p: number;
    c: number;
    r: number;
    rot: number;
};

type TileMotionDefinition = {
    id: string;
    path: readonly TileMotionPoint[];
};

const TILE_LOOP_MS = 32000;
const TILE_SEGMENT_EASING = 'cubic-bezier(0.16, 1, 0.3, 1)';

function clampOffset(value: number): number {
    return Math.max(0, Math.min(1, value));
}

function tilePointToTransform(point: TileMotionPoint): string {
    const left = (point.c - 1) * 18;
    const top = (point.r - 1) * 18;

    return `translate3d(${left}px, ${top}px, 0) rotate(${point.rot}deg)`;
}

function buildTileKeyframes(tile: TileMotionDefinition): Keyframe[] {
    return tile.path.map((point, index) => {
        const isLast = index === tile.path.length - 1;

        return {
            offset: clampOffset(point.p / 100),
            transform: tilePointToTransform(point),
            easing: isLast ? undefined : TILE_SEGMENT_EASING,
        };
    });
}

export function useTileFieldSuperAnimation(
    rootRef: RefObject<HTMLElement | null>,
    tiles: readonly TileMotionDefinition[],
): void {
    useLayoutEffect(() => {
        const root = rootRef.current;

        if (!root || !supportsWAAPI() || prefersReducedMotion()) {
            return undefined;
        }

        const stack = createCleanupStack();

        tiles.forEach((tile) => {
            const element = root.querySelector<HTMLElement>(`[data-sa-tile-motion="${tile.id}"]`);

            if (!element) return;

            const previousAnimation = element.style.animation;
            const previousWillChange = element.style.willChange;

            stack.add(() => {
                element.style.animation = previousAnimation;
                element.style.willChange = previousWillChange;
            });

            // CSS animation remains as fallback. When WAAPI exists, SuperAnimation owns transform.
            element.style.animation = 'none';
            element.style.willChange = 'transform';

            stack.add(
                animateOnCompositor(element, buildTileKeyframes(tile), {
                    duration: TILE_LOOP_MS,
                    iterations: Infinity,
                    easing: 'linear',
                    fill: 'both',
                    composite: 'replace',
                    willChange: 'transform',
                    cleanupWillChange: false,
                }),
            );
        });

        return stack.run;
    }, [rootRef, tiles]);
}