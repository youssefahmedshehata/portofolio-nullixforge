import type {
    CompositorAnimateOptions,
    CompositorAnimationHandle,
    SuperAnimationCleanup,
} from './types';
import { prefersReducedMotion, safeCancelAnimation, supportsWAAPI } from './featureSupport';

function normalizeWillChange(value: string | undefined): string {
    return value && value.trim().length > 0 ? value : 'transform, opacity';
}

export function animateOnCompositor(
    element: Element,
    keyframes: Keyframe[] | PropertyIndexedKeyframes,
    options: CompositorAnimateOptions = {},
): CompositorAnimationHandle {
    if (!supportsWAAPI() || prefersReducedMotion()) {
        return {
            animation: null,
            cancel: () => { },
            finish: () => { },
        };
    }

    const htmlElement = element as HTMLElement;
    const previousWillChange = htmlElement.style.willChange;
    const willChange = normalizeWillChange(options.willChange);

    htmlElement.style.willChange = willChange;

    const {
        willChange: _willChange,
        cleanupWillChange = true,
        ...timingOptions
    } = options;

    const animation = htmlElement.animate(keyframes, timingOptions);

    animation.ready.catch(() => {
        // The animation may be cancelled during StrictMode cleanup.
    });

    const shouldCleanupWillChange =
        cleanupWillChange &&
        timingOptions.iterations !== Infinity &&
        timingOptions.iterations !== Number.POSITIVE_INFINITY;

    animation.onfinish = () => {
        if (shouldCleanupWillChange) {
            htmlElement.style.willChange = previousWillChange;
        }
    };

    animation.oncancel = () => {
        if (shouldCleanupWillChange) {
            htmlElement.style.willChange = previousWillChange;
        }
    };

    return {
        animation,
        cancel: () => {
            safeCancelAnimation(animation);
            if (cleanupWillChange) {
                htmlElement.style.willChange = previousWillChange;
            }
        },
        finish: () => {
            try {
                animation.finish();
            } catch {
                safeCancelAnimation(animation);
            }

            if (cleanupWillChange) {
                htmlElement.style.willChange = previousWillChange;
            }
        },
    };
}

export function createCleanupStack(): {
    add: (cleanup: SuperAnimationCleanup | CompositorAnimationHandle) => void;
    run: SuperAnimationCleanup;
} {
    const cleanups: SuperAnimationCleanup[] = [];

    return {
        add(cleanup) {
            if (typeof cleanup === 'function') {
                cleanups.push(cleanup);
                return;
            }

            cleanups.push(cleanup.cancel);
        },

        run() {
            while (cleanups.length > 0) {
                const cleanup = cleanups.pop();

                try {
                    cleanup?.();
                } catch {
                    // Cleanup must be non-fatal.
                }
            }
        },
    };
}

export const CompositorBridge = {
    animate: animateOnCompositor,
    createCleanupStack,
};