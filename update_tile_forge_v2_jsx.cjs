const fs = require('fs');

const tsPath = './src/components/TileEntityForge.tsx';
let code = fs.readFileSync(tsPath, 'utf8');

// Replace the responsive scale classes in the grid container
// from: scale-[0.72] md:scale-[0.88] lg:scale-100
// to: scale-[0.74] min-[390px]:scale-[0.88] min-[520px]:scale-100
code = code.replace(/scale-\[0\.72\].*?lg:scale-100/, "scale-[0.74] min-[390px]:scale-[0.88] min-[520px]:scale-100");

// Replace Grid sizes and backgrounds
code = code.replace(/width: '252px',\s*height: '252px',\s*background: 'linear-gradient\(180deg, rgba\(8,10,13,0\.90\), rgba\(3,4,5,0\.94\)\)',\s*border: '1px solid rgba\(255,255,255,0\.085\)',\s*boxShadow: '0 28px 80px rgba\(0,0,0,0\.48\), inset 0 1px 0 rgba\(255,255,255,0\.04\)',\s*backgroundImage: `[\s\S]*?`,\s*backgroundSize: '28px 28px'/, `width: '324px',
          height: '324px',
          background: 'linear-gradient(180deg, rgba(7,9,12,0.94), rgba(2,3,4,0.96))',
          border: '1px solid rgba(244,240,232,0.075)',
          boxShadow: '0 28px 80px rgba(0,0,0,0.48), inset 0 1px 0 rgba(255,255,255,0.04)',
          backgroundImage: \`
            linear-gradient(rgba(244,240,232,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(244,240,232,0.028) 1px, transparent 1px)
          \`,
          backgroundSize: '18px 18px'`);

// Replace the grid container's children (we'll replace the loop completely using a regex finding)
const oldGridChildrenRegex = /<div className="absolute inset-0 pointer-events-none">[\s\S]*?<\/div>(\s*<\/div>\s*<\/div>\s*\);)/;
const newGridChildren = `<div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: \`
                linear-gradient(rgba(223,165,91,0.055) 1px, transparent 1px),
                linear-gradient(90deg, rgba(223,165,91,0.055) 1px, transparent 1px)
              \`,
              backgroundSize: '108px 108px'
            }}
          ></div>

          {Array.from({ length: 18 }).map((_, i) => (
            <React.Fragment key={\`tick-\${i}\`}>
              <div className="absolute top-[-3px]" style={{ left: \`\${i * 18 + 8.5}px\`, width: '1px', height: '3px', background: i % 6 === 0 ? 'rgba(223,165,91,0.18)' : 'rgba(244,240,232,0.12)' }}></div>
              <div className="absolute left-[-3px]" style={{ top: \`\${i * 18 + 8.5}px\`, width: '3px', height: '1px', background: i % 6 === 0 ? 'rgba(223,165,91,0.18)' : 'rgba(244,240,232,0.12)' }}></div>
            </React.Fragment>
          ))}
          <div className="absolute top-[-16px] left-[-2px] font-mono text-[8px] text-[rgba(244,240,232,0.26)]">00</div>
          <div className="absolute top-[-16px] right-[-4px] font-mono text-[8px] text-[rgba(244,240,232,0.26)]">18</div>
          <div className="absolute bottom-[-16px] left-[-4px] font-mono text-[8px] text-[rgba(244,240,232,0.26)]">18</div>

          {TILES.map((tile) => (
            <div
              key={tile.id}
              className="absolute"
              style={{
                width: '18px',
                height: '18px',
                transformOrigin: 'center center',
                animation: \`move-\${tile.id} 20s cubic-bezier(0.16, 1, 0.3, 1) infinite\`,
              }}
            >
              <div 
                className="absolute left-[2px] top-[2px] w-[14px] h-[14px] rounded-[2px] overflow-hidden"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.000) 38%), linear-gradient(135deg, #161B22 0%, #0B0E13 52%, #050607 100%)',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.34), inset 0 1px 0 rgba(255,255,255,0.055), inset 0 -1px 0 rgba(0,0,0,0.38)',
                  border: '1px solid transparent',
                  animation: \`tile-base-\${tile.id} 20s cubic-bezier(0.16, 1, 0.3, 1) infinite\`
                }}
              >
                <div 
                  className="absolute inset-[0px] rounded-[1px] pointer-events-none"
                  style={{
                    animation: \`glow-\${tile.id} 20s cubic-bezier(0.16, 1, 0.3, 1) infinite\`,
                  }}
                ></div>

                <div 
                  className="absolute right-[3px] bottom-[3px] w-[2px] h-[2px] rounded-[1px] pointer-events-none"
                  style={{
                    animation: \`terminal-glow-\${tile.id} 20s cubic-bezier(0.16, 1, 0.3, 1) infinite\`
                  }}
                ></div>
                <div 
                  className="absolute left-[3px] top-[4px] w-[7px] h-[1px] pointer-events-none"
                  style={{
                    animation: \`trace-glow-\${tile.id} 20s cubic-bezier(0.16, 1, 0.3, 1) infinite\`
                  }}
                ></div>
                <div 
                  className="absolute left-[3px] top-[4px] w-[1px] h-[6px] pointer-events-none"
                  style={{
                    animation: \`trace-glow-\${tile.id} 20s cubic-bezier(0.16, 1, 0.3, 1) infinite\`
                  }}
                ></div>
                
                <div className="absolute inset-[0px] rounded-[1px] opacity-0 motion-reduce:opacity-100 pointer-events-none" style={{
                  background: 'radial-gradient(circle at 50% 42%, rgba(110,231,168,0.07), transparent 68%)',
                  boxShadow: 'inset 0 0 0 1px rgba(110,231,168,0.18), 0 0 10px rgba(110,231,168,0.10)'
                }}></div>
              </div>
            </div>
          ))}
        </div>$1`;
code = code.replace(oldGridChildrenRegex, newGridChildren);

// Replace Bottom Right Label
code = code.replace(/<div className="absolute bottom-\[28px\] right-\[32px\] font-mono text-\[10px\] tracking-\[0\.16em\] text-\[rgba\(244,240,232,0\.58\)\] uppercase">TILE FIELD \[9x9\]<\/div>/, `<div className="absolute bottom-[28px] right-[32px] font-mono text-[10px] tracking-[0.16em] text-[rgba(244,240,232,0.58)] uppercase text-right">TILE FIELD [18x18]<br/><span className="text-[8px] opacity-70">CONTROLLED CELLULAR FIELD</span></div>`);

fs.writeFileSync(tsPath, code);

