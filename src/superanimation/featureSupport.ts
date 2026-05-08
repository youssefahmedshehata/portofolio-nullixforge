export const canUseDOM = typeof window !== 'undefined' && typeof document !== 'undefined';

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