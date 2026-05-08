import { supportsLinearEasing } from './featureSupport';

type CompressionPoint = {
    t: number;
    v: number;
};

function perpendicularDistance(point: CompressionPoint, start: CompressionPoint, end: CompressionPoint): number {
    let dx = end.t - start.t;
    let dy = end.v - start.v;
    const magnitude = Math.hypot(dx, dy);

    if (magnitude === 0) {
        return Math.hypot(point.t - start.t, point.v - start.v);
    }

    dx /= magnitude;
    dy /= magnitude;

    const pvx = point.t - start.t;
    const pvy = point.v - start.v;
    const projected = dx * pvx + dy * pvy;

    const nearestX = projected * dx;
    const nearestY = projected * dy;

    return Math.hypot(pvx - nearestX, pvy - nearestY);
}

export function simplifyPoints(points: CompressionPoint[], epsilon = 0.0005): CompressionPoint[] {
    if (points.length < 3) return points;

    const first = points[0];
    const last = points[points.length - 1];

    let maxDistance = 0;
    let index = -1;

    for (let i = 1; i < points.length - 1; i += 1) {
        const distance = perpendicularDistance(points[i], first, last);

        if (distance > maxDistance) {
            maxDistance = distance;
            index = i;
        }
    }

    if (maxDistance > epsilon && index !== -1) {
        const left = simplifyPoints(points.slice(0, index + 1), epsilon);
        const right = simplifyPoints(points.slice(index), epsilon);
        return left.slice(0, -1).concat(right);
    }

    return [first, last];
}

export function pointsToLinear(points: CompressionPoint[], epsilon = 0.0005): string {
    if (!supportsLinearEasing()) return 'linear';

    if (points.length === 0) return 'linear';
    if (points.length === 1) return `linear(${points[0].v.toFixed(4)})`;

    const normalized = points
        .map((point) => ({
            t: Math.max(0, Math.min(1, point.t)),
            v: point.v,
        }))
        .sort((a, b) => a.t - b.t);

    const compressed = simplifyPoints(normalized, epsilon);

    const stops = compressed
        .map((point, index) => {
            const value = Number.isFinite(point.v) ? point.v : 0;
            const percent = Math.max(0, Math.min(100, point.t * 100));

            if (index === 0) return `${value.toFixed(4)} 0%`;
            if (index === compressed.length - 1) return `${value.toFixed(4)} 100%`;

            return `${value.toFixed(4)} ${percent.toFixed(2)}%`;
        })
        .join(', ');

    return `linear(${stops})`;
}

export const PhysicsCompressor = {
    simplifyPoints,
    pointsToLinear,
};