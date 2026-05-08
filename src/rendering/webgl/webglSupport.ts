import { canUseDOM } from '../../superanimation/featureSupport';

export type TileForgeGL = WebGLRenderingContext | WebGL2RenderingContext;

export type WebGLSupportResult = {
    supported: boolean;
    contextName: 'webgl2' | 'webgl' | 'none';
    reason: string | null;
};

export function getWebGLSupport(): WebGLSupportResult {
    if (!canUseDOM) {
        return {
            supported: false,
            contextName: 'none',
            reason: 'DOM is not available.',
        };
    }

    try {
        const canvas = document.createElement('canvas');

        const webgl2 = canvas.getContext('webgl2', {
            alpha: true,
            antialias: true,
            depth: false,
            stencil: false,
            premultipliedAlpha: true,
            preserveDrawingBuffer: false,
            powerPreference: 'high-performance',
            failIfMajorPerformanceCaveat: false,
        });

        if (webgl2) {
            return {
                supported: true,
                contextName: 'webgl2',
                reason: null,
            };
        }

        const webgl = canvas.getContext('webgl', {
            alpha: true,
            antialias: true,
            depth: false,
            stencil: false,
            premultipliedAlpha: true,
            preserveDrawingBuffer: false,
            powerPreference: 'high-performance',
            failIfMajorPerformanceCaveat: false,
        });

        if (webgl) {
            return {
                supported: true,
                contextName: 'webgl',
                reason: null,
            };
        }

        return {
            supported: false,
            contextName: 'none',
            reason: 'WebGL context creation returned null.',
        };
    } catch {
        return {
            supported: false,
            contextName: 'none',
            reason: 'WebGL context creation threw.',
        };
    }
}

export function supportsWebGL(): boolean {
    return getWebGLSupport().supported;
}

export function getBestWebGLContext(canvas: HTMLCanvasElement): TileForgeGL | null {
    try {
        const webgl2 = canvas.getContext('webgl2', {
            alpha: true,
            antialias: true,
            depth: false,
            stencil: false,
            premultipliedAlpha: true,
            preserveDrawingBuffer: false,
            powerPreference: 'high-performance',
            failIfMajorPerformanceCaveat: false,
        });

        if (webgl2) return webgl2;
    } catch {
        // Continue to WebGL1 fallback.
    }

    try {
        return canvas.getContext('webgl', {
            alpha: true,
            antialias: true,
            depth: false,
            stencil: false,
            premultipliedAlpha: true,
            preserveDrawingBuffer: false,
            powerPreference: 'high-performance',
            failIfMajorPerformanceCaveat: false,
        });
    } catch {
        return null;
    }
}

export function isContextLost(gl: TileForgeGL | null): boolean {
    try {
        return gl?.isContextLost?.() === true;
    } catch {
        return true;
    }
}