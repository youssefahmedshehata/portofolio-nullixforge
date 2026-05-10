import { useMemo, useEffect, useState } from 'react';

const generateStars = (count: number, sizeRange: [number, number], colorMix: string[], opacityRange: [number, number]) => {
  return Array.from({ length: count }).map((_, i) => {
    const size = sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]);
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const color = colorMix[Math.floor(Math.random() * colorMix.length)];
    const opacity = opacityRange[0] + Math.random() * (opacityRange[1] - opacityRange[0]);
    const animationDelay = Math.random() * 10 + 's';
    const animationDuration = 5 + Math.random() * 8 + 's';

    return {
      id: i,
      size,
      top,
      left,
      color,
      opacity,
      animationDelay,
      animationDuration,
    };
  });
};

const generateDust = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    size: 0.5 + Math.random() * 1.5,
    startX: Math.random() * 100,
    startY: 80 + Math.random() * 20,
    duration: 16 + Math.random() * 20 + 's',
    delay: Math.random() * -20 + 's',
  }));
};

export function GenesisDawnField({ currentPage }: { currentPage: string }) {
  const { layerA, layerB, layerC, layerD, dustParticles } = useMemo(() => {
    return {
      layerA: generateStars(100, [0.5, 1.2], ['#FFF1D2', '#FFE6B0', '#FFFFFF'], [0.1, 0.4]),
      layerB: generateStars(60, [1.0, 1.8], ['#FFF1D2', '#DFA55B', '#FFFFFF'], [0.2, 0.6]),
      layerC: generateStars(30, [1.5, 2.5], ['#FFFFFF', '#DFA55B'], [0.4, 0.8]),
      layerD: generateStars(12, [2.0, 3.5], ['#FFF1D2', '#FFC46B', '#FF6A2A'], [0.4, 0.7]),
      dustParticles: generateDust(45)
    };
  }, []);

  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Intensity settings based on the current page
  const pageState = useMemo(() => {
    if (currentPage === 'work') {
      return { dawnOpacity: 0.65, dustOpacity: 0.6, raysOpacity: 0.5, starsOpacity: 0.8 };
    } else if (currentPage === 'approach') {
      return { dawnOpacity: 0.4, dustOpacity: 0.3, raysOpacity: 0.3, starsOpacity: 0.7 };
    }
    // Default to home page
    return { dawnOpacity: 1, dustOpacity: 1, raysOpacity: 1, starsOpacity: 1 };
  }, [currentPage]);

  const renderStarLayer = (stars: any[], layerName: string, driftDuration: string) => (
    <div 
      className="absolute inset-0 pointer-events-none overflow-hidden" 
      data-layer={`cinematic-starfield-${layerName}`}
    >
      <div 
        className="absolute inset-0" 
        style={{
          animation: reduceMotion ? 'none' : `drift-up ${driftDuration} linear infinite`,
          height: '200%',
        }}
      >
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top / 2}%`,
              left: `${star.left}%`,
              backgroundColor: star.color,
              opacity: star.opacity,
              boxShadow: star.size > 2 ? `0 0 ${star.size * 2}px ${star.color}` : 'none',
              animation: reduceMotion ? 'none' : `twinkle ${star.animationDuration} ease-in-out infinite alternate`,
              animationDelay: star.animationDelay,
            }}
          />
        ))}
         {stars.map((star) => (
          <div
            key={`${star.id}-clone`}
            className="absolute rounded-full"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${50 + (star.top / 2)}%`, 
              left: `${star.left}%`,
              backgroundColor: star.color,
              opacity: star.opacity,
              boxShadow: star.size > 2 ? `0 0 ${star.size * 2}px ${star.color}` : 'none',
              animation: reduceMotion ? 'none' : `twinkle ${star.animationDuration} ease-in-out infinite alternate`,
              animationDelay: star.animationDelay,
            }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes drift-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes dawn-breathe {
          0% { transform: scaleY(1); opacity: 0.8; }
          100% { transform: scaleY(1.05); opacity: 1; }
        }
        @keyframes rays-sway {
          0% { transform: scale(1) rotate(-2deg); opacity: 0.7; }
          100% { transform: scale(1.05) rotate(2deg); opacity: 1; }
        }
        @keyframes dust-rise {
          0% { transform: translate(0, 0) scale(1); opacity: 0; }
          20% { opacity: 0.6; }
          80% { opacity: 0.4; }
          100% { transform: translate(calc(var(--tx) * 1px), -200px) scale(0.5); opacity: 0; }
        }
        @keyframes arc-pulse {
          0% { opacity: 0.2; transform: scale(0.98); }
          100% { opacity: 0.6; transform: scale(1.02); }
        }
      `}</style>
      
      {/* Container for organization. z-[-9999] is the base. */}
      <div className="fixed inset-0 w-screen h-screen z-[-9999] pointer-events-none overflow-hidden" data-layer="genesis-dawn-field" data-future="webgl-shader-ready">
        
        {/* Layer 1: Void Depth Base */}
        <div 
          data-layer="void-depth" 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 120%, #0B0D10 0%, #08090B 35%, #050607 65%, #030304 100%)'
          }}
        />

        {/* Layer 2: Cinematic Starfield */}
        <div className="absolute inset-0 transition-opacity duration-1000" style={{ opacity: pageState.starsOpacity }} data-layer="cinematic-starfield">
          {renderStarLayer(layerA, 'mist', '120s')}
          {renderStarLayer(layerB, 'mid', '90s')}
          {renderStarLayer(layerC, 'foreground', '60s')}
          {renderStarLayer(layerD, 'stellar', '180s')}
        </div>

        {/* Layer 5: System Orbits / Signal Arcs */}
        <div data-layer="system-orbits" className="absolute inset-0 overflow-hidden transition-opacity duration-1000" style={{ opacity: pageState.starsOpacity }}>
          {/* Subtle orbital ring */}
          <div 
            className="absolute left-1/2 bottom-[-40vh] w-[120vw] h-[120vw] max-w-[1600px] max-h-[1600px] -translate-x-1/2 rounded-full border border-[rgba(223,165,91,0.06)]"
            style={{
              animation: reduceMotion ? 'none' : 'arc-pulse 30s cubic-bezier(0.16, 1, 0.3, 1) infinite alternate'
            }}
          />
          {/* Inner signal path */}
          <div 
            className="absolute left-1/2 bottom-[-20vh] w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] -translate-x-1/2 rounded-full border border-[rgba(255,241,210,0.04)]"
            style={{
              animation: reduceMotion ? 'none' : 'arc-pulse 24s cubic-bezier(0.16, 1, 0.3, 1) infinite alternate-reverse'
            }}
          />
        </div>

        {/* Layer 3: Solar Forge Dawn */}
        <div className="absolute inset-x-0 bottom-0 origin-bottom transition-opacity duration-1000" style={{ opacity: pageState.dawnOpacity, height: '70vh' }}>
          <div 
            data-layer="solar-forge-dawn"
            className="absolute inset-0 origin-bottom"
            style={{
              background: 'radial-gradient(ellipse at 50% 100%, rgba(255, 241, 210, 0.12) 0%, rgba(223, 165, 91, 0.08) 25%, rgba(255, 196, 107, 0.05) 50%, rgba(255, 106, 42, 0.02) 75%, transparent 100%)',
              animation: reduceMotion ? 'none' : 'dawn-breathe 24s cubic-bezier(0.16, 1, 0.3, 1) infinite alternate'
            }}
          />

          {/* Volumetric Core Glow */}
          <div 
            className="absolute left-1/2 bottom-[-150px] -translate-x-1/2 w-[60vw] max-w-[800px] h-[300px] rounded-[50%]"
            style={{
              background: 'radial-gradient(ellipse at 50% 50%, rgba(255, 241, 210, 0.15) 0%, rgba(223, 165, 91, 0.08) 40%, rgba(166, 58, 22, 0.03) 70%, transparent 100%)',
              filter: 'blur(40px)',
              animation: reduceMotion ? 'none' : 'dawn-breathe 18s cubic-bezier(0.16, 1, 0.3, 1) infinite alternate-reverse'
            }}
          />
        </div>

        {/* Layer 4: Volumetric Light Rays (CSS emulation) */}
        <div data-layer="volumetric-rays" className="absolute inset-0 overflow-hidden mix-blend-screen transition-opacity duration-1000" style={{ opacity: pageState.raysOpacity * 0.6 }}>
          <div 
            className="absolute left-1/2 bottom-0 w-[4px] h-[50vh] origin-bottom -translate-x-1/2 blur-[8px]"
            style={{
              background: 'linear-gradient(to top, rgba(255,241,210,0.1), transparent)',
              transform: 'translateX(-50%) rotate(-15deg)',
              animation: reduceMotion ? 'none' : 'rays-sway 32s ease-in-out infinite alternate'
            }}
          />
          <div 
            className="absolute left-1/2 bottom-0 w-[12px] h-[70vh] origin-bottom -translate-x-1/2 blur-[16px]"
            style={{
              background: 'linear-gradient(to top, rgba(223,165,91,0.08), transparent)',
              transform: 'translateX(-50%) rotate(8deg)',
              animation: reduceMotion ? 'none' : 'rays-sway 45s ease-in-out infinite alternate-reverse'
            }}
          />
          <div 
            className="absolute left-1/2 bottom-0 w-[24px] h-[60vh] origin-bottom -translate-x-1/2 blur-[24px]"
            style={{
              background: 'linear-gradient(to top, rgba(255,106,42,0.06), transparent)',
              transform: 'translateX(-50%) rotate(-25deg)',
              animation: reduceMotion ? 'none' : 'rays-sway 28s ease-in-out infinite alternate'
            }}
          />
        </div>

        {/* Layer 6: Cinematic Dust */}
        <div data-layer="light-dust" className="absolute inset-x-0 bottom-[10vh] h-[40vh] pointer-events-none transition-opacity duration-1000" style={{ opacity: pageState.dustOpacity }}>
          {!reduceMotion && dustParticles.map(dust => (
            <div
              key={`dust-${dust.id}`}
              className="absolute rounded-full"
              style={{
                width: `${dust.size}px`,
                height: `${dust.size}px`,
                left: `${dust.startX}%`,
                top: `${dust.startY}%`,
                background: '#FFF1D2',
                boxShadow: `0 0 4px rgba(223,165,91,0.8)`,
                '--tx': (Math.random() - 0.5) * 60,
                animation: `dust-rise ${dust.duration} linear infinite`,
                animationDelay: dust.delay
              } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Layer 7: Atmospheric Veil */}
        <div 
          data-layer="atmospheric-veil"
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(3,3,4,0.72) 0%, rgba(3,3,4,0.54) 42%, rgba(3,3,4,0.78) 100%)'
          }}
        />
      </div>
    </>
  );
}
