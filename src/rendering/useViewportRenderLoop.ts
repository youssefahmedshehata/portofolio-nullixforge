import { useEffect, useRef, type RefObject } from 'react';
import { canUseDOM } from '../superanimation/featureSupport';
import type { RenderLoopFrame, ViewportRenderLoopOptions } from './renderingTypes';

type FrameCallback = (frame: RenderLoopFrame) => void;

const DEFAULT_MAX_FPS = 60;

function clampFps(value: number | undefined): number {
    if (!Number.isFinite(value) || !value) return DEFAULT_MAX_FPS;
    return Math.max(1, Math.min(60, value));
}

export function useViewportRenderLoop(
    targetRef: RefObject<Element | null>,
    callback: FrameCallback,
    options: ViewportRenderLoopOptions = {},
): void {
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        if (!canUseDOM || options.enabled === false) return undefined;

        const target = targetRef.current;
        if (!target) return undefined;

        const maxFps = clampFps(options.maxFps);
        const minFrameMs = 1000 / maxFps;

        let animationFrameId: number | null = null;
        let isVisible = !options.pauseWhenOffscreen;
        let isDestroyed = false;
        let lastTimestamp = 0;
        let startTimestamp = 0;
        let frameCount = 0;

        const cancelLoop = () => {
            if (animationFrameId !== null) {
                window.cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
        };

        const shouldRun = () => {
            if (isDestroyed) return false;
            if (document.hidden) return false;
            if (options.pauseWhenOffscreen && !isVisible) return false;
            return true;
        };

        const tick = (timestamp: number) => {
            if (!shouldRun()) {
                cancelLoop();
                return;
            }

            if (startTimestamp === 0) startTimestamp = timestamp;

            const deltaMs = lastTimestamp === 0 ? 16.67 : timestamp - lastTimestamp;

            if (deltaMs >= minFrameMs || lastTimestamp === 0) {
                lastTimestamp = timestamp;
                frameCount += 1;

                callbackRef.current({
                    timestamp,
                    deltaMs,
                    elapsedMs: timestamp - startTimestamp,
                    frame: frameCount,
                });
            }

            animationFrameId = window.requestAnimationFrame(tick);
        };

        const startLoop = () => {
            if (!shouldRun()) return;
            if (animationFrameId !== null) return;

            animationFrameId = window.requestAnimationFrame(tick);
        };

        const handleVisibilityChange = () => {
            if (document.hidden) {
                cancelLoop();
                lastTimestamp = 0;
                return;
            }

            startLoop();
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        let observer: IntersectionObserver | null = null;

        if (options.pauseWhenOffscreen && 'IntersectionObserver' in window) {
            observer = new IntersectionObserver(
                (entries) => {
                    const entry = entries[0];

                    isVisible = entry?.isIntersecting === true;

                    if (isVisible) {
                        startLoop();
                    } else {
                        cancelLoop();
                        lastTimestamp = 0;
                    }
                },
                {
                    root: null,
                    rootMargin: options.rootMargin ?? '120px',
                    threshold: options.threshold ?? 0.01,
                },
            );

            observer.observe(target);
        } else {
            isVisible = true;
            startLoop();
        }

        return () => {
            isDestroyed = true;
            cancelLoop();
            observer?.disconnect();
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [
        targetRef,
        options.enabled,
        options.pauseWhenOffscreen,
        options.rootMargin,
        options.threshold,
        options.maxFps,
    ]);
}