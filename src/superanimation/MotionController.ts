import type { MotionAxis, SpringParams } from './types';
import { animateOnCompositor } from './CompositorBridge';
import { getTimelineNow, safeCancelAnimation } from './featureSupport';
import { PhysicsFactory } from './PhysicsFactory';

type MotionControllerOptions = SpringParams & {
    axis?: MotionAxis;
};

function transformForAxis(axis: MotionAxis, value: number): string {
    switch (axis) {
        case 'x':
            return `translate3d(${value}px, 0, 0)`;
        case 'y':
            return `translate3d(0, ${value}px, 0)`;
        case 'scale':
            return `scale(${value})`;
        case 'opacity':
            return '';
        default:
            return `translate3d(${value}px, 0, 0)`;
    }
}

export class MotionController {
    private element: HTMLElement;
    private animation: Animation | null = null;
    private startTime = 0;
    private solver: ((elapsedMs: number) => { position: number; velocity: number }) | null = null;
    private axis: MotionAxis = 'x';

    currentPosition = 0;
    currentVelocity = 0;

    constructor(element: HTMLElement, initialPosition = 0) {
        this.element = element;
        this.currentPosition = initialPosition;
    }

    to(target: number, options: MotionControllerOptions = {}): void {
        const axis = options.axis ?? this.axis;
        this.axis = axis;

        safeCancelAnimation(this.animation);

        const motion = PhysicsFactory.bakeSpringScalar(
            this.currentPosition,
            target,
            this.currentVelocity,
            options,
        );

        this.startTime = getTimelineNow();
        this.solver = motion.solver;

        const fromValue = this.currentPosition;
        const toValue = target;

        const keyframes: Keyframe[] =
            axis === 'opacity'
                ? [
                    { opacity: String(fromValue) },
                    { opacity: String(toValue) },
                ]
                : [
                    { transform: transformForAxis(axis, fromValue) },
                    { transform: transformForAxis(axis, toValue) },
                ];

        const handle = animateOnCompositor(this.element, keyframes, {
            duration: motion.duration,
            easing: motion.easing,
            fill: 'forwards',
            willChange: axis === 'opacity' ? 'opacity' : 'transform',
        });

        this.animation = handle.animation;

        if (this.animation) {
            this.animation.onfinish = () => {
                this.currentPosition = target;
                this.currentVelocity = 0;
                this.solver = null;
                this.animation = null;
            };
        }
    }

    interrupt(): { position: number; velocity: number } {
        if (!this.animation || !this.solver) {
            return {
                position: this.currentPosition,
                velocity: this.currentVelocity,
            };
        }

        const elapsed = getTimelineNow() - this.startTime;
        const snapshot = this.solver(elapsed);

        safeCancelAnimation(this.animation);

        this.currentPosition = snapshot.position;
        this.currentVelocity = snapshot.velocity;

        if (this.axis === 'opacity') {
            this.element.style.opacity = String(this.currentPosition);
        } else {
            this.element.style.transform = transformForAxis(this.axis, this.currentPosition);
        }

        this.animation = null;
        this.solver = null;

        return {
            position: this.currentPosition,
            velocity: this.currentVelocity,
        };
    }

    cancel(): void {
        safeCancelAnimation(this.animation);
        this.animation = null;
        this.solver = null;
    }
}