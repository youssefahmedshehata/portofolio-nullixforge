const fs = require('fs');
const tsPath = './src/components/TileEntityForge.tsx';

let code = fs.readFileSync(tsPath, 'utf8');

const returnIdx = code.indexOf('  return (');
if (returnIdx === -1) throw new Error("Could not find '  return ('");

code = code.substring(0, returnIdx);

const jsxReplacement = `  return (
    <div 
      className="relative w-full h-full flex flex-col items-center justify-center rounded-[32px] overflow-hidden chamber-panel"
      style={{
        minHeight: '360px',
        background: 'linear-gradient(180deg, rgba(13,16,20,0.98), rgba(5,6,8,0.99))',
        border: '1px solid rgba(255,255,255,0.11)',
        boxShadow: '0 36px 110px rgba(0,0,0,0.58), inset 0 1px 0 rgba(255,255,255,0.045)'
      }}
      aria-label="Self-assembling tile entity animation representing nullixforge systems trying unstable forms before becoming stable structure"
    >
      <style dangerouslySetInnerHTML={{ __html: animationStyle }} />
      <style dangerouslySetInnerHTML={{ __html: \\\`
        @media (min-width: 768px) {
          .chamber-panel { min-height: 420px !important; }
        }
        @media (min-width: 1024px) {
          .chamber-panel { min-height: 520px !important; }
        }
      \\\`}} />

      {/* Deep base layer - handled by container background, but can add explicit layer if needed */}
      
      {/* Warm lower forge glow */}
      <div 
        className="absolute bottom-[-80px] left-1/2 w-[360px] h-[180px] -translate-x-1/2 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,106,42,0.18), rgba(223,165,91,0.055), transparent 68%)',
          opacity: 0.7
        }}
      ></div>

      {/* Structural panel grid layer */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: \\\`
            linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)
          \\\`,
          backgroundSize: '28px 28px',
          opacity: 0.38
        }}
      ></div>

      {/* Corner marks */}
      <div className="absolute top-[24px] left-[24px] w-[22px] h-[22px] border-t border-l border-[rgba(223,165,91,0.18)] pointer-events-none"></div>
      <div className="absolute top-[24px] right-[24px] w-[22px] h-[22px] border-t border-r border-[rgba(223,165,91,0.18)] pointer-events-none"></div>
      <div className="absolute bottom-[24px] left-[24px] w-[22px] h-[22px] border-b border-l border-[rgba(223,165,91,0.18)] pointer-events-none"></div>
      <div className="absolute bottom-[24px] right-[24px] w-[22px] h-[22px] border-b border-r border-[rgba(223,165,91,0.18)] pointer-events-none"></div>

      {/* Labels */}
      <div className="absolute top-[28px] left-[32px] font-mono text-[10px] tracking-[0.16em] text-[rgba(244,240,232,0.58)] uppercase">ENTITY FORGE</div>
      <div className="absolute top-[28px] right-[32px] font-mono text-[10px] tracking-[0.16em] text-[rgba(244,240,232,0.58)] uppercase after:content-['STATE:_FORMING'] after:animate-[state-label_20s_cubic-bezier(0.16,1,0.3,1)_infinite] motion-reduce:after:content-['STATE:_STABLE'] motion-reduce:after:animate-none"></div>
      <div className="absolute bottom-[28px] right-[32px] font-mono text-[10px] tracking-[0.16em] text-[rgba(244,240,232,0.58)] uppercase">TILE FIELD [9x9]</div>

      {/* Forge Grid Container */}
      <div className="relative rounded-[20px] scale-[0.72] md:scale-[0.88] lg:scale-100"
        style={{
          width: '252px',
          height: '252px',
          background: 'linear-gradient(180deg, rgba(8,10,13,0.90), rgba(3,4,5,0.94))',
          border: '1px solid rgba(255,255,255,0.085)',
          boxShadow: '0 28px 80px rgba(0,0,0,0.48), inset 0 1px 0 rgba(255,255,255,0.04)',
          backgroundImage: \\\`
            linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)
          \\\`,
          backgroundSize: '28px 28px'
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          {TILES.map((tile) => (
            <div
              key={tile.id}
              className="absolute"
              style={{
                width: '28px',
                height: '28px',
                transformOrigin: 'center center',
                animation: \\\`move-\\\${tile.id} 20s cubic-bezier(0.16, 1, 0.3, 1) infinite\\\`,
              }}
            >
              {/* Visible Tile Body */}
              <div 
                className="absolute left-[2px] top-[2px] w-[24px] h-[24px] rounded-[6px] overflow-hidden border border-[rgba(255,255,255,0.10)]"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.015) 12%, transparent 32%), linear-gradient(145deg, #151A22 0%, #0C0F14 48%, #060708 100%)',
                  boxShadow: '0 8px 18px rgba(0,0,0,0.46), inset 0 1px 0 rgba(255,255,255,0.07), inset 0 -1px 0 rgba(0,0,0,0.42)',
                  animation: \\\`tile-base-\\\${tile.id} 20s cubic-bezier(0.16, 1, 0.3, 1) infinite\\\`
                }}
              >
                {/* Inner Glow controlled by animation */}
                <div 
                  className="absolute inset-[3px] rounded-[4px] pointer-events-none"
                  style={{
                    animation: \\\`glow-\\\${tile.id} 20s cubic-bezier(0.16, 1, 0.3, 1) infinite\\\`,
                  }}
                ></div>
                {/* Surface inner bevel effect (::after equivalent) */}
                <div 
                  className="absolute left-[4px] right-[4px] top-[3px] h-[1px] pointer-events-none"
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    opacity: 0.55
                  }}
                ></div>
                
                {/* Fallback for reduced motion */}
                <div className="absolute inset-[3px] rounded-[4px] opacity-0 motion-reduce:opacity-100 pointer-events-none" style={{
                  background: 'radial-gradient(circle at 50% 42%, rgba(110,231,168,0.15), transparent 68%)',
                  boxShadow: 'inset 0 0 0 1px rgba(110,231,168,0.26), 0 0 14px rgba(110,231,168,0.18)'
                }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TileEntityForge;
`;

fs.writeFileSync(tsPath, code + jsxReplacement);

console.log("Updated JSX 3");
