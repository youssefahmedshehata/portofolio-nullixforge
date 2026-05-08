export type GraphicsPerformanceTier = 'low' | 'medium' | 'high';

export type ReducedGraphicsReason =
    | 'none'
    | 'prefers-reduced-motion'
    | 'save-data'
    | 'low-tier';

export type RenderLoopFrame = {
    timestamp: number;
    deltaMs: number;
    elapsedMs: number;
    frame: number;
};

export type ViewportRenderLoopOptions = {
    enabled?: boolean;
    pauseWhenOffscreen?: boolean;
    rootMargin?: string;
    threshold?: number;
    maxFps?: number;
};

export type DevicePerformanceProfile = {
    tier: GraphicsPerformanceTier;
    dpr: number;
    cappedDpr: number;
    cores: number;
    memoryGb: number | null;
    isMobileLike: boolean;
    saveData: boolean;
};

export type ReducedGraphicsState = {
    reducedGraphics: boolean;
    reason: ReducedGraphicsReason;
    prefersReducedMotion: boolean;
    saveData: boolean;
};