import type { BakedScalarMotion, NumericMotionState, SpringParams } from './types';
import { pointsToLinear } from './PhysicsCompressor';

function interpolateState(
    points: BakedScalarMotion['points'],
    elapsedMs: number,
): NumericMotionState {
    if (points.length === 0) {
        return { position: 0, velocity: 0 };
    }

    if (elapsedMs <= 0) {
        return {
            position: points[0].position,
            velocity: points[0].velocity,
        };
    }

    const last = points[points.length - 1];

    if (elapsedMs >= last.timeMs) {
        return {
            position: last.position,
            velocity: last.velocity,
        };
    }

    let low = 0;
    let high = points.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (points[mid].timeMs < elapsedMs) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    const right = points[Math.max(1, low)];
    const left = points[right === points[0] ? 0 : Math.max(0, low - 1)];

    const span = right.timeMs - left.timeMs || 1;
    const t = (elapsedMs - left.timeMs) / span;

    return {
        position: left.position + (right.position - left.position) * t,
        velocity: left.velocity + (right.velocity - left.velocity) * t,
    };
}

export function bakeSpringScalar(
    start: number,
    end: number,
    initialVelocity = 0,
    params: SpringParams = {},
): BakedScalarMotion {
    const stiffness = params.stiffness ?? 220;
    const damping = params.damping ?? 24;
    const mass = params.mass ?? 1;
    const duration = params.duration ?? 760;
    const precisionMs = params.precisionMs ?? 5;

    const points: BakedScalarMotion['points'] = [];

    let position = start;
    let velocity = initialVelocity;

    const distance = end - start;
    const normalize = Math.abs(distance) < 0.000001
        ? () => 1
        : (value: number) => (value - start) / distance;

    const stepSeconds = precisionMs / 1000;
    const totalSteps = Math.max(2, Math.ceil(duration / precisionMs));

    points.push({
        timeMs: 0,
        position,
        velocity,
        progress: normalize(position),
    });

    for (let i = 1; i <= totalSteps; i += 1) {
        const force = -stiffness * (position - end);
        const dampingForce = -damping * velocity;
        const acceleration = (force + dampingForce) / mass;

        velocity += acceleration * stepSeconds;
        position += velocity * stepSeconds;

        const timeMs = Math.min(duration, i * precisionMs);

        points.push({
            timeMs,
            position,
            velocity,
            progress: normalize(position),
        });
    }

    const compressedInput = points.map((point) => ({
        t: point.timeMs / duration,
        v: point.progress,
    }));

    const easing = pointsToLinear(compressedInput, 0.0005);

    return {
        duration,
        easing,
        points,
        solver: (elapsedMs: number) => interpolateState(points, elapsedMs),
    };
}

export const PhysicsFactory = {
    bakeSpringScalar,
};