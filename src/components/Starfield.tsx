import { useMemo, useRef } from 'react';
import { useStarfieldSuperAnimation } from '../superanimation';

type Star = {
  id: number;
  size: number;
  top: number;
  left: number;
  color: string;
  opacity: number;
  animationDelay: string;
  animationDuration: string;
  animationDelayMs: number;
  animationDurationMs: number;
};

const generateStars = (
  count: number,
  sizeRange: [number, number],
  colorMix: string[],
  opacityRange: [number, number],
): Star[] => {
  return Array.from({ length: count }).map((_, i) => {
    const size = sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]);
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const color = colorMix[Math.floor(Math.random() * colorMix.length)];
    const opacity = opacityRange[0] + Math.random() * (opacityRange[1] - opacityRange[0]);

    const animationDelayMs = Math.random() * 10000;
    const animationDurationMs = 3000 + Math.random() * 6000;

    const animationDelay = `${animationDelayMs}ms`;
    const animationDuration = `${animationDurationMs}ms`;

    return {
      id: i,
      size,
      top,
      left,
      color,
      opacity,
      animationDelay,
      animationDuration,
      animationDelayMs,
      animationDurationMs,
    };
  });
};

function driftToMs(driftDuration: string): number {
  if (driftDuration.endsWith('ms')) return Number.parseFloat(driftDuration);
  if (driftDuration.endsWith('s')) return Number.parseFloat(driftDuration) * 1000;

  const value = Number.parseFloat(driftDuration);
  return Number.isFinite(value) ? value : 120000;
}

export function Starfield() {
  const starfieldRef = useRef<HTMLDivElement | null>(null);
  useStarfieldSuperAnimation(starfieldRef);

  const { layerA, layerB, layerC, layerD } = useMemo(() => {
    return {
      layerA: generateStars(40, [1, 1.5], ['var(--heated-ivory)'], [0.1, 0.4]),
      layerB: generateStars(25, [1.5, 2], ['var(--heated-ivory)', 'var(--star-gold)'], [0.3, 0.6]),
      layerC: generateStars(10, [2, 3], ['var(--star-bright)', 'var(--star-gold)'], [0.6, 0.9]),
      layerD: generateStars(5, [2.5, 4], ['var(--star-bright)', 'var(--star-ember)'], [0.8, 1]),
    };
  }, []);

  const renderStar = (star: Star, top: number, key: string | number) => (
    <div
      key={key}
      className="absolute rounded-full"
      data-sa-twinkle
      data-sa-duration-ms={star.animationDurationMs}
      data-sa-delay-ms={star.animationDelayMs}
      style={{
        width: `${star.size}px`,
        height: `${star.size}px`,
        top: `${top}%`,
        left: `${star.left}%`,
        backgroundColor: star.color,
        opacity: star.opacity,
        boxShadow: star.size > 2 ? `0 0 ${star.size * 2}px ${star.color}` : 'none',

        // CSS fallback. SuperAnimation disables this at runtime when WAAPI is available
        // and recreates the exact same opacity animation on the compositor.
        animation: `twinkle ${star.animationDuration} ease-in-out infinite alternate`,
        animationDelay: star.animationDelay,
      }}
    />
  );

  const renderLayer = (stars: Star[], layerName: string, driftDuration: string) => {
    const driftDurationMs = driftToMs(driftDuration);

    return (
      <div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        data-layer={`starfield-${layerName}`}
      >
        <div
          className="absolute inset-0"
          data-sa-drift
          data-sa-duration-ms={driftDurationMs}
          style={{
            // CSS fallback. SuperAnimation disables this at runtime when WAAPI is available
            // and recreates the exact same transform animation on the compositor.
            animation: `drift ${driftDuration} linear infinite`,
            height: '200%',
          }}
        >
          {stars.map((star) => renderStar(star, star.top / 2, star.id))}

          {/* Second set for seamless scrolling */}
          {stars.map((star) => renderStar(star, 50 + star.top / 2, `${star.id}-clone`))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="fixed inset-0 z-[-3] pointer-events-none bg-[#030304]" aria-hidden="true" />

      <div
        ref={starfieldRef}
        className="fixed inset-0 z-[-2] pointer-events-none opacity-60"
        aria-hidden="true"
      >
        {renderLayer(layerA, 'mist', '120s')}
        {renderLayer(layerB, 'mid', '90s')}
        {renderLayer(layerC, 'foreground', '60s')}
        {renderLayer(layerD, 'signals', '180s')}
      </div>

      <div
        className="fixed inset-0 z-[-1] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(180deg, rgba(3,3,4,0.88) 0%, rgba(6,7,8,0.94) 42%, rgba(8,9,11,0.98) 100%)',
        }}
      />

      <div
        className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }}
      />

      <div className="fixed bottom-0 inset-x-0 h-[40vh] z-[-1] pointer-events-none bg-gradient-to-t from-molten-gold/[0.03] to-transparent" />
    </>
  );
}