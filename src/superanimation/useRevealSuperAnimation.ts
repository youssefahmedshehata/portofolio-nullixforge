import { useLayoutEffect, type DependencyList, type RefObject } from 'react';
import { animateOnCompositor, createCleanupStack } from './CompositorBridge';
import { canUseDOM, prefersReducedMotion, supportsWAAPI } from './featureSupport';
import { PhysicsFactory } from './PhysicsFactory';

type RevealOptions = {
    selector?: string;
    rootMargin?: string;
    threshold?: number;
    once?: boolean;
};

function readNumber(value: string | undefined, fallback: number): number {
    if (!value) return fallback;

    const parsed = Number.parseFloat(value);
    return Number.isFinite(parsed) ? parsed : fallback;
}

function prepareElement(element: HTMLElement, y: number): () => void {
    const previousOpacity = element.style.opacity;
    const previousTransform = element.style.transform;
    const previousWillChange = element.style.willChange;

    element.style.opacity = '0';
    element.style.transform = `translate3d(0, ${y}px, 0)`;
    element.style.willChange = element.dataset.saWillChange || 'opacity, transform';

    return () => {
        element.style.opacity = previousOpacity;
        element.style.transform = previousTransform;
        element.style.willChange = previousWillChange;
    };
}

export function useRevealSuperAnimation(
    rootRef: RefObject<HTMLElement | null>,
    deps: DependencyList = [],
    options: RevealOptions = {},
): void {
    useLayoutEffect(() => {
        const root = rootRef.current;

        if (!root || !canUseDOM) return undefined;

        const selector = options.selector ?? '[data-sa-reveal]';
        const targets = Array.from(root.querySelectorAll<HTMLElement>(selector));

        if (targets.length === 0) return undefined;

        const stack = createCleanupStack();

        if (!supportsWAAPI() || prefersReducedMotion()) {
            targets.forEach((target) => {
                target.style.opacity = '1';
                target.style.transform = 'none';
            });

            return undefined;
        }

        const revealed = new Set<HTMLElement>();

        targets.forEach((target) => {
            const y = readNumber(target.dataset.saRevealY, 18);
            stack.add(prepareElement(target, y));
        });

        const reveal = (target: HTMLElement, index: number) => {
            if (revealed.has(target)) return;

            revealed.add(target);

            const y = readNumber(target.dataset.saRevealY, 18);
            const duration = readNumber(target.dataset.saRevealDuration, 680);
            const delay = readNumber(target.dataset.saRevealDelay, index * 70);

            const motion = PhysicsFactory.bakeSpringScalar(0, 1, 0, {
                stiffness: 170,
                damping: 30,
                duration,
                precisionMs: 5,
            });

            const handle = animateOnCompositor(
                target,
                [
                    {
                        opacity: '0',
                        transform: `translate3d(0, ${y}px, 0)`,
                    },
                    {
                        opacity: '1',
                        transform: 'translate3d(0, 0, 0)',
                    },
                ],
                {
                    duration: motion.duration,
                    delay,
                    easing: motion.easing,
                    fill: 'forwards',
                    willChange: 'opacity, transform',
                },
            );

            handle.animation?.addEventListener(
                'finish',
                () => {
                    target.style.opacity = '1';
                    target.style.transform = 'translate3d(0, 0, 0)';
                },
                { once: true },
            );

            stack.add(handle);
        };

        if (!('IntersectionObserver' in window)) {
            targets.forEach((target, index) => reveal(target, index));
            return stack.run;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    const target = entry.target as HTMLElement;
                    const index = targets.indexOf(target);

                    reveal(target, Math.max(0, index));

                    if (options.once !== false) {
                        observer.unobserve(target);
                    }
                });
            },
            {
                root: null,
                rootMargin: options.rootMargin ?? '0px 0px -8% 0px',
                threshold: options.threshold ?? 0.14,
            },
        );

        targets.forEach((target) => observer.observe(target));

        stack.add(() => observer.disconnect());

        return stack.run;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}