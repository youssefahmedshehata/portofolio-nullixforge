import type { GraphicsPerformanceTier } from '../rendering/renderingTypes';

export const canUseDOM = typeof window !== 'undefined' && typeof document !== 'undefined';

type NavigatorConnectionLike = {
    saveData?: boolean;
};

type NavigatorWithOptionalHardware = Navigator & {
    deviceMemory?: number;
    connection?: NavigatorConnectionLike;
    mozConnection?: NavigatorConnectionLike;
    webkitConnection?: NavigatorConnectionLike;
};

export function getTimelineNow(): number {
    if (!canUseDOM) return 0;
    return document.timeline.currentTime ?? performance.now();
}

export function supportsWAAPI(): boolean {
    return canUseDOM && typeof Element !== 'undefined' && 'animate' in Element.prototype;
}

export function supportsRegisterProperty(): boolean {
    return canUseDOM && 'CSS' in window && typeof CSS.registerProperty === 'function';
}

export function supportsLinearEasing(): boolean {
    return canUseDOM && 'CSS' in window && CSS.supports?.('animation-timing-function', 'linear(0, 1)') === true;
}

export function supportsCanvas2D(): boolean {
    if (!canUseDOM) return false;

    try {
        const canvas = document.createElement('canvas');
        return typeof canvas.getContext === 'function' && canvas.getContext('2d') !== null;
    } catch {
        return false;
    }
}

export function supportsOffscreenCanvas2D(): boolean {
    if (!canUseDOM || typeof OffscreenCanvas === 'undefined') return false;

    try {
        const canvas = new OffscreenCanvas(1, 1);
        return canvas.getContext('2d') !== null;
    } catch {
        return false;
    }
}

export function getCanvas2DContext(
    canvas: HTMLCanvasElement,
): CanvasRenderingContext2D | null {
    try {
        return canvas.getContext('2d', {
            alpha: true,
            desynchronized: true,
        } as CanvasRenderingContext2DSettings);
    } catch {
        try {
            return canvas.getContext('2d');
        } catch {
            return null;
        }
    }
}

export function getNavigatorHardwareConcurrency(): number {
    if (!canUseDOM) return 4;

    const cores = navigator.hardwareConcurrency;

    return Number.isFinite(cores) && cores > 0 ? cores : 4;
}

export function getNavigatorDeviceMemory(): number | null {
    if (!canUseDOM) return null;

    const nav = navigator as NavigatorWithOptionalHardware;
    const memory = nav.deviceMemory;

    return Number.isFinite(memory) && memory ? memory : null;
}

export function getNavigatorSaveData(): boolean {
    if (!canUseDOM) return false;

    const nav = navigator as NavigatorWithOptionalHardware;
    const connection = nav.connection ?? nav.mozConnection ?? nav.webkitConnection;

    return connection?.saveData === true;
}

export function getCappedDevicePixelRatio(tier: GraphicsPerformanceTier = 'medium'): number {
    if (!canUseDOM) return 1;

    const rawDpr = window.devicePixelRatio || 1;

    if (!Number.isFinite(rawDpr) || rawDpr <= 0) return 1;

    if (tier === 'low') return Math.min(rawDpr, 1);
    if (tier === 'medium') return Math.min(rawDpr, 1.5);

    return Math.min(rawDpr, 2);
}

export function prefersReducedMotion(): boolean {
    return canUseDOM && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true;
}

export function parseMs(value: string | number | undefined | null, fallback = 0): number {
    if (typeof value === 'number' && Number.isFinite(value)) return value;
    if (!value) return fallback;

    const text = String(value).trim();

    if (text.endsWith('ms')) {
        const n = Number.parseFloat(text);
        return Number.isFinite(n) ? n : fallback;
    }

    if (text.endsWith('s')) {
        const n = Number.parseFloat(text);
        return Number.isFinite(n) ? n * 1000 : fallback;
    }

    const n = Number.parseFloat(text);
    return Number.isFinite(n) ? n : fallback;
}

export function safeCancelAnimation(animation: Animation | null | undefined): void {
    try {
        animation?.cancel();
    } catch {
        // Browser animation objects may throw if already detached.
    }
}


export function supportsWebGL(): boolean {
    if (!canUseDOM) return false;

    try {
        const canvas = document.createElement('canvas');
        const gl =
            canvas.getContext('webgl2') ??
            canvas.getContext('webgl') ??
            canvas.getContext('experimental-webgl');

        return gl !== null;
    } catch {
        return false;
    }
}

export function supportsHighPerformanceWebGL(): boolean {
    if (!canUseDOM) return false;

    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl', {
            failIfMajorPerformanceCaveat: true,
            powerPreference: 'high-performance',
        } as WebGLContextAttributes);

        return gl !== null;
    } catch {
        return false;
    }
}



