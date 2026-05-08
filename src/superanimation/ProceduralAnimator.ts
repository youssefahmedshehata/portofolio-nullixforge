import type { PrimeHarmonicLayer, SuperAnimationCleanup } from './types';
import { animateOnCompositor, createCleanupStack } from './CompositorBridge';
import {
    parseMs,
    prefersReducedMotion,
    supportsRegisterProperty,
    supportsWAAPI,
} from './featureSupport';
import { pointsToLinear } from './PhysicsCompressor';

const DEFAULT_PRIME_DURATIONS = [7001, 11003, 13007, 17011];

function registerNumericProperty(name: string): void {
    if (!supportsRegisterProperty()) return;

    try {
        CSS.registerProperty({
            name,
            syntax: '<number>',
            inherits: false,
            initialValue: '0',
        });
    } catch {
        // Double registration is safe to ignore.
    }
}

function bakeLoopedWave(resolution: number, amplitude = 1, phase = 0): string {
    const count = Math.max(12, resolution);
    const points = [];

    for (let i = 0; i <= count; i += 1) {
        const t = i / count;
        const angle = t * Math.PI * 2;

        const value =
            Math.sin(angle + phase) * amplitude +
            Math.sin(angle * 3 + phase * 0.37) * amplitude * 0.35;

        points.push({
            t,
            v: value,
        });
    }

    points[points.length - 1].v = points[0].v;

    return pointsToLinear(points, 0.0005);
}

export function startPrimeHarmonics(
    element: HTMLElement,
    layers: PrimeHarmonicLayer[],
): SuperAnimationCleanup {
    const stack = createCleanupStack();

    if (!supportsWAAPI() || prefersReducedMotion()) {
        return stack.run;
    }

    layers.forEach((layer, index) => {
        registerNumericProperty(layer.property);

        const duration = layer.duration || DEFAULT_PRIME_DURATIONS[index % DEFAULT_PRIME_DURATIONS.length];
        const easing = bakeLoopedWave(
            layer.resolution ?? Math.ceil(duration / 1000) * 30,
            layer.amplitude ?? 1,
            layer.phase ?? index * 0.777,
        );

        const handle = animateOnCompositor(
            element,
            {
                [layer.property]: [0, 1],
            } as PropertyIndexedKeyframes,
            {
                duration,
                iterations: Infinity,
                easing,
                composite: 'replace',
                willChange: 'transform, opacity',
                cleanupWillChange: false,
            },
        );

        stack.add(handle);
    });

    return stack.run;
}

export function startStarfield(root: HTMLElement): SuperAnimationCleanup {
    const stack = createCleanupStack();

    if (!supportsWAAPI() || prefersReducedMotion()) {
        return stack.run;
    }

    const driftElements = Array.from(root.querySelectorAll<HTMLElement>('[data-sa-drift]'));

    driftElements.forEach((element) => {
        const duration = parseMs(element.dataset.saDurationMs, 120000);

        element.style.animation = 'none';

        stack.add(
            animateOnCompositor(
                element,
                [
                    { transform: 'translateY(0)' },
                    { transform: 'translateY(-50%)' },
                ],
                {
                    duration,
                    iterations: Infinity,
                    easing: 'linear',
                    willChange: 'transform',
                    cleanupWillChange: false,
                },
            ),
        );
    });

    const twinkleElements = Array.from(root.querySelectorAll<HTMLElement>('[data-sa-twinkle]'));

    twinkleElements.forEach((element) => {
        const duration = parseMs(element.dataset.saDurationMs, 5000);
        const delay = parseMs(element.dataset.saDelayMs, 0);

        element.style.animation = 'none';

        stack.add(
            animateOnCompositor(
                element,
                [
                    { opacity: 0.3 },
                    { opacity: 1 },
                ],
                {
                    duration,
                    delay,
                    iterations: Infinity,
                    direction: 'alternate',
                    easing: 'ease-in-out',
                    willChange: 'opacity',
                    cleanupWillChange: false,
                },
            ),
        );
    });

    return stack.run;
}

export const ProceduralAnimator = {
    DEFAULT_PRIME_DURATIONS,
    registerNumericProperty,
    startPrimeHarmonics,
    startStarfield,
};