import type { SuperAnimationCleanup } from './types';
import { canUseDOM } from './featureSupport';

type LogicCallback = (deltaMs: number, timestamp: number) => void;

class DeterministicLogicKernel {
    private fps = 30;
    private interval = 1000 / 30;
    private lastTime = 0;
    private rafId = 0;
    private callbacks = new Set<LogicCallback>();

    configure(fps: number): void {
        this.fps = Math.max(1, Math.min(120, fps));
        this.interval = 1000 / this.fps;
    }

    add(callback: LogicCallback): SuperAnimationCleanup {
        this.callbacks.add(callback);
        this.start();

        return () => {
            this.callbacks.delete(callback);

            if (this.callbacks.size === 0) {
                this.stop();
            }
        };
    }

    private start(): void {
        if (!canUseDOM || this.rafId) return;

        const loop = (timestamp: number) => {
            this.rafId = requestAnimationFrame(loop);

            if (!this.lastTime) {
                this.lastTime = timestamp;
                return;
            }

            const elapsed = timestamp - this.lastTime;

            if (elapsed >= this.interval) {
                this.lastTime = timestamp - (elapsed % this.interval);

                this.callbacks.forEach((callback) => {
                    callback(elapsed, timestamp);
                });
            }
        };

        this.rafId = requestAnimationFrame(loop);
    }

    private stop(): void {
        if (!this.rafId) return;

        cancelAnimationFrame(this.rafId);
        this.rafId = 0;
        this.lastTime = 0;
    }
}

export const LogicKernel = new DeterministicLogicKernel();