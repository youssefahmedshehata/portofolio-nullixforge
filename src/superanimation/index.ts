import { canUseDOM } from './featureSupport';
import { ProceduralAnimator } from './ProceduralAnimator';
import { LogicKernel } from './LogicKernel';

let bootstrapped = false;

export function bootstrapSuperAnimation(): void {
    if (!canUseDOM || bootstrapped) return;

    bootstrapped = true;

    document.documentElement.dataset.superanimation = 'ready';

    ['--sa-noise-1', '--sa-noise-2', '--sa-noise-3', '--sa-noise-4'].forEach((property) => {
        ProceduralAnimator.registerNumericProperty(property);
    });

    LogicKernel.configure(30);
}

export * from './types';
export * from './featureSupport';
export * from './PhysicsCompressor';
export * from './PhysicsFactory';
export * from './CompositorBridge';
export * from './MotionController';
export * from './ProceduralAnimator';
export * from './ReactiveIndexer';
export * from './LogicKernel';
export * from './useSuperAnimation';
export * from './useTileFieldSuperAnimation';
export * from './useRevealSuperAnimation';