export type SuperAnimationCleanup = () => void;

export type MotionAxis = 'x' | 'y' | 'scale' | 'opacity';

export type NumericMotionState = {
    position: number;
    velocity: number;
};

export type NumericSolver = (elapsedMs: number) => NumericMotionState;

export type SpringParams = {
    stiffness?: number;
    damping?: number;
    mass?: number;
    duration?: number;
    precisionMs?: number;
};

export type BakedScalarMotion = {
    duration: number;
    easing: string;
    solver: NumericSolver;
    points: Array<{
        timeMs: number;
        position: number;
        velocity: number;
        progress: number;
    }>;
};

export type CompositorAnimationHandle = {
    animation: Animation | null;
    cancel: () => void;
    finish: () => void;
};

export type CompositorAnimateOptions = KeyframeAnimationOptions & {
    willChange?: string;
    cleanupWillChange?: boolean;
};

export type PrimeHarmonicLayer = {
    property: string;
    duration: number;
    amplitude?: number;
    phase?: number;
    resolution?: number;
};

export type TileForgeMotionPoint = {
    p: number;
    c: number;
    r: number;
    rot: number;
};

export type TileForgeTile = {
    id: string;
    path: readonly TileForgeMotionPoint[];
    redAStart: number;
    redBStart: number;
    greenStart: number;
};

export type WebGLRendererState = {
    contextLost: boolean;
    fallbackActive: boolean;
    dpr: number;
    frame: number;
};