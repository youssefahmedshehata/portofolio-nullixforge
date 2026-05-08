import { useEffect, useLayoutEffect, type DependencyList, type RefObject } from 'react';
import { CompositorBridge } from './CompositorBridge';
import { startStarfield } from './ProceduralAnimator';
import { supportsWAAPI } from './featureSupport';

export function useStarfieldSuperAnimation(ref: RefObject<HTMLElement | null>): void {
    useEffect(() => {
        const root = ref.current;
        if (!root) return undefined;

        return startStarfield(root);
    }, [ref]);
}

export function useSuperAnimationScope(
    ref: RefObject<HTMLElement | null>,
    deps: DependencyList = [],
): void {
    useLayoutEffect(() => {
        const element = ref.current;
        if (!element || !supportsWAAPI()) return undefined;

        element.dataset.saScope = 'mounted';

        const stack = CompositorBridge.createCleanupStack();

        const promoteTargets = Array.from(
            element.querySelectorAll<HTMLElement>('[data-sa-promote], [data-sa-reveal], [data-sa-tile]'),
        );

        promoteTargets.forEach((target) => {
            const previous = target.style.willChange;
            target.style.willChange = target.dataset.saWillChange || 'transform, opacity';

            stack.add(() => {
                target.style.willChange = previous;
            });
        });

        return stack.run;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}