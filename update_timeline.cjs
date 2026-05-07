const fs = require('fs');

const tsPath = './src/components/TileEntityForge.tsx';
let code = fs.readFileSync(tsPath, 'utf8');

const tilesMatch = code.match(/const TILES = (\[.*?\]);/);
if (!tilesMatch) throw new Error("Couldn't find TILES array");

let tilesStr = tilesMatch[1];
let tiles = eval(tilesStr);

function mapP(p) {
  if (p === 0) return 0;
  if (p === 10) return 8.75;
  if (p > 10 && p < 26) return 8.75 + (p - 10) * ((25 - 8.75) / 16);
  if (p === 26) return 25;
  if (p > 26 && p < 27.5) return 25 + (p - 26) * ((27.5 - 25) / 1.5);
  if (p === 27.5) return 27.5;
  if (p > 27.5 && p < 35) return 27.5 + (p - 27.5) * ((36.25 - 27.5) / 7.5);
  if (p === 35) return 36.25;
  if (p > 35 && p < 35.001) return 36.25 + (p - 35) * ((36.251 - 36.25) / 0.001);
  if (p === 35.001) return 36.251;
  if (p > 35.001 && p < 50) return 36.251 + (p - 35.001) * ((51.25 - 36.251) / 14.999);
  if (p === 50) return 51.25;
  if (p > 50 && p < 51.5) return 51.25 + (p - 50) * ((53.75 - 51.25) / 1.5);
  if (p === 51.5) return 53.75;
  if (p > 51.5 && p < 59) return 53.75 + (p - 51.5) * ((63.75 - 53.75) / 7.5);
  if (p === 59) return 63.75;
  if (p > 59 && p < 59.001) return 63.75 + (p - 59) * ((63.751 - 63.75) / 0.001);
  if (p === 59.001) return 63.751;
  if (p > 59.001 && p < 76) return 63.751 + (p - 59.001) * ((81.25 - 63.751) / 16.999);
  if (p === 76) return 81.25;
  if (p > 76 && p < 77.5) return 81.25 + (p - 76) * ((83.75 - 81.25) / 1.5);
  if (p === 77.5) return 83.75;
  if (p > 77.5 && p < 90) return 83.75 + (p - 77.5) * ((94.375 - 83.75) / 12.5);
  if (p === 90) return 94.375;
  if (p > 90 && p < 100) return 94.375 + (p - 90) * ((100 - 94.375) / 10);
  if (p === 100) return 100;
  return p;
}

tiles = tiles.map(t => {
  let redAStart = 32.8125;
  if (["T07", "T12", "T16"].includes(t.id)) redAStart = 27.5;
  else if (["T02", "T04", "T10", "T14"].includes(t.id)) redAStart = 30.0;

  let redBStart = 60.0;
  if (["T01", "T12", "T17", "T18"].includes(t.id)) redBStart = 53.75;
  else if (["T06", "T07", "T13", "T14"].includes(t.id)) redBStart = 56.5625;

  let greenStart = 92.675;
  if (["T12", "T07", "T16", "T03"].includes(t.id)) greenStart = 83.75;
  else if (["T06", "T08", "T11", "T13", "T02", "T04", "T15", "T17"].includes(t.id)) greenStart = 86.725;
  else if (["T01", "T05", "T09", "T10", "T14", "T18"].includes(t.id)) greenStart = 90.125;

  return {
    ...t,
    path: t.path.map(p => ({
      ...p,
      p: parseFloat(mapP(p.p).toFixed(3))
    })),
    redAStart,
    redBStart,
    greenStart
  };
});

const newTilesStr = `const TILES = ${JSON.stringify(tiles)};`;
code = code.replace(/const TILES = \[.*?\];/, newTilesStr);

const newUseEffect = `  useEffect(() => {
    let css = "";
    TILES.forEach(tile => {
      css += \`@keyframes move-\${tile.id} {\\n\`;
      tile.path.forEach(kp => {
        const left = (kp.c - 1) * 18;
        const top = (kp.r - 1) * 18;
        css += \`  \${kp.p}% { transform: translate3d(\${left}px, \${top}px, 0) rotate(\${kp.rot}deg); }\\n\`;
      });
      css += \`}\\n\`;

      css += \`@keyframes glow-\${tile.id} {\\n\`;
      css += \`  0% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\\n\`;
      css += \`  8.75% { opacity: 0; }\\n\`;
      
      css += \`  12% { opacity: 0.10; background: radial-gradient(circle at 50% 42%, rgba(255,106,42,0.1), transparent 68%); }\\n\`;
      css += \`  25% { opacity: 0.10; background: radial-gradient(circle at 50% 42%, rgba(255,106,42,0.1), transparent 68%); }\\n\`;
      
      css += \`  27.499% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\\n\`;
      css += \`  \${tile.redAStart - 0.001}% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\\n\`;
      css += \`  \${tile.redAStart}% { opacity: 1; background: radial-gradient(circle at 50% 42%, rgba(255,75,62,0.06), transparent 68%); box-shadow: inset 0 0 0 1px rgba(255,75,62,0.16), 0 0 8px rgba(255,75,62,0.08); }\\n\`;
      css += \`  36.25% { opacity: 1; background: radial-gradient(circle at 50% 42%, rgba(255,75,62,0.06), transparent 68%); box-shadow: inset 0 0 0 1px rgba(255,75,62,0.16), 0 0 8px rgba(255,75,62,0.08); }\\n\`;
      
      css += \`  36.251% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\\n\`;
      css += \`  40% { opacity: 0.10; background: radial-gradient(circle at 50% 42%, rgba(255,106,42,0.1), transparent 68%); }\\n\`;
      css += \`  51.25% { opacity: 0.10; background: radial-gradient(circle at 50% 42%, rgba(255,106,42,0.1), transparent 68%); }\\n\`;
      
      css += \`  53.749% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\\n\`;
      css += \`  \${tile.redBStart - 0.001}% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\\n\`;
      css += \`  \${tile.redBStart}% { opacity: 1; background: radial-gradient(circle at 50% 42%, rgba(255,75,62,0.04), transparent 68%); box-shadow: inset 0 0 0 1px rgba(255,75,62,0.12), 0 0 6px rgba(255,75,62,0.06); }\\n\`;
      css += \`  63.75% { opacity: 1; background: radial-gradient(circle at 50% 42%, rgba(255,75,62,0.04), transparent 68%); box-shadow: inset 0 0 0 1px rgba(255,75,62,0.12), 0 0 6px rgba(255,75,62,0.06); }\\n\`;
      
      css += \`  63.751% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\\n\`;
      css += \`  70% { opacity: 0.10; background: radial-gradient(circle at 50% 42%, rgba(255,106,42,0.1), transparent 68%); }\\n\`;
      css += \`  81.25% { opacity: 0.10; background: radial-gradient(circle at 50% 42%, rgba(255,106,42,0.1), transparent 68%); }\\n\`;
      
      css += \`  83.749% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\\n\`;
      css += \`  \${tile.greenStart - 0.001}% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\\n\`;
      css += \`  \${tile.greenStart}% { opacity: 1; background: radial-gradient(circle at 50% 42%, rgba(110,231,168,0.07), transparent 68%); box-shadow: inset 0 0 0 1px rgba(110,231,168,0.18), 0 0 10px rgba(110,231,168,0.10); }\\n\`;
      css += \`  94.375% { opacity: 1; background: radial-gradient(circle at 50% 42%, rgba(110,231,168,0.07), transparent 68%); box-shadow: inset 0 0 0 1px rgba(110,231,168,0.18), 0 0 10px rgba(110,231,168,0.10); }\\n\`;
      css += \`  94.376% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\\n\`;
      css += \`  100% { opacity: 0; }\\n\`;
      css += \`}\\n\`;

      css += \`@keyframes tile-base-\${tile.id} {\\n\`;
      css += \`  0% { opacity: 0.78; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  8.75% { opacity: 0.78; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  15% { opacity: 0.92; }\\n\`;
      css += \`  25% { opacity: 0.92; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  27.499% { opacity: 0.92; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  \${tile.redAStart - 0.001}% { opacity: 0.92; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  \${tile.redAStart}% { opacity: 0.94; border-color: rgba(255,75,62,0.12); }\\n\`;
      css += \`  36.25% { opacity: 0.94; border-color: rgba(255,75,62,0.12); }\\n\`;
      css += \`  36.251% { opacity: 0.92; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  40% { opacity: 0.92; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  51.25% { opacity: 0.92; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  53.749% { opacity: 0.95; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  \${tile.redBStart - 0.001}% { opacity: 0.95; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  \${tile.redBStart}% { opacity: 0.96; border-color: rgba(255,75,62,0.10); }\\n\`;
      css += \`  63.75% { opacity: 0.96; border-color: rgba(255,75,62,0.10); }\\n\`;
      css += \`  63.751% { opacity: 0.95; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  68% { opacity: 0.95; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  81.25% { opacity: 1.0; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  83.749% { opacity: 1.0; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  \${tile.greenStart - 0.001}% { opacity: 1.0; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  \${tile.greenStart}% { opacity: 1.0; border-color: rgba(110,231,168,0.14); }\\n\`;
      css += \`  94.375% { opacity: 1.0; border-color: rgba(110,231,168,0.14); }\\n\`;
      css += \`  94.376% { opacity: 1.0; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  100% { opacity: 0.78; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`}\\n\`;

      css += \`@keyframes terminal-glow-\${tile.id} {\\n\`;
      css += \`  0% { background: rgba(223,165,91,0.36); }\\n\`;
      css += \`  \${tile.redAStart - 0.001}% { background: rgba(223,165,91,0.36); }\\n\`;
      css += \`  \${tile.redAStart}% { background: rgba(255,75,62,0.6); }\\n\`;
      css += \`  36.25% { background: rgba(255,75,62,0.6); }\\n\`;
      css += \`  36.251% { background: rgba(223,165,91,0.36); }\\n\`;
      css += \`  \${tile.redBStart - 0.001}% { background: rgba(223,165,91,0.36); }\\n\`;
      css += \`  \${tile.redBStart}% { background: rgba(255,75,62,0.5); }\\n\`;
      css += \`  63.75% { background: rgba(255,75,62,0.5); }\\n\`;
      css += \`  63.751% { background: rgba(223,165,91,0.36); }\\n\`;
      css += \`  \${tile.greenStart - 0.001}% { background: rgba(223,165,91,0.36); }\\n\`;
      css += \`  \${tile.greenStart}% { background: rgba(110,231,168,0.7); }\\n\`;
      css += \`  94.375% { background: rgba(110,231,168,0.7); }\\n\`;
      css += \`  94.376% { background: rgba(223,165,91,0.36); }\\n\`;
      css += \`  100% { background: rgba(223,165,91,0.36); }\\n\`;
      css += \`}\\n\`;
      
      css += \`@keyframes trace-glow-\${tile.id} {\\n\`;
      css += \`  0% { background: rgba(244,240,232,0.12); }\\n\`;
      css += \`  \${tile.redAStart - 0.001}% { background: rgba(244,240,232,0.12); }\\n\`;
      css += \`  \${tile.redAStart}% { background: rgba(255,75,62,0.3); }\\n\`;
      css += \`  36.25% { background: rgba(255,75,62,0.3); }\\n\`;
      css += \`  36.251% { background: rgba(244,240,232,0.12); }\\n\`;
      css += \`  \${tile.redBStart - 0.001}% { background: rgba(244,240,232,0.12); }\\n\`;
      css += \`  \${tile.redBStart}% { background: rgba(255,75,62,0.3); }\\n\`;
      css += \`  63.75% { background: rgba(255,75,62,0.3); }\\n\`;
      css += \`  63.751% { background: rgba(244,240,232,0.12); }\\n\`;
      css += \`  \${tile.greenStart - 0.001}% { background: rgba(244,240,232,0.12); }\\n\`;
      css += \`  \${tile.greenStart}% { background: rgba(110,231,168,0.3); }\\n\`;
      css += \`  94.375% { background: rgba(110,231,168,0.3); }\\n\`;
      css += \`  94.376% { background: rgba(244,240,232,0.12); }\\n\`;
      css += \`  100% { background: rgba(244,240,232,0.12); }\\n\`;
      css += \`}\\n\`;

    });

    css += \`@keyframes state-label {\\n\`;
    css += \`  0% { content: "STATE: FORMING"; color: inherit; }\\n\`;
    css += \`  27.499% { content: "STATE: FORMING"; color: inherit; }\\n\`;
    css += \`  27.5% { content: "STATE: UNSTABLE"; color: rgba(255,75,62,0.8); }\\n\`;
    css += \`  36.25% { content: "STATE: UNSTABLE"; color: rgba(255,75,62,0.8); }\\n\`;
    css += \`  36.251% { content: "STATE: FORMING"; color: inherit; }\\n\`;
    css += \`  53.749% { content: "STATE: FORMING"; color: inherit; }\\n\`;
    css += \`  53.75% { content: "STATE: UNSTABLE"; color: rgba(255,75,62,0.8); }\\n\`;
    css += \`  63.75% { content: "STATE: UNSTABLE"; color: rgba(255,75,62,0.8); }\\n\`;
    css += \`  63.751% { content: "STATE: FORMING"; color: inherit; }\\n\`;
    css += \`  83.749% { content: "STATE: FORMING"; color: inherit; }\\n\`;
    css += \`  83.75% { content: "STATE: STABLE"; color: rgba(110,231,168,0.8); }\\n\`;
    css += \`  94.375% { content: "STATE: STABLE"; color: rgba(110,231,168,0.8); }\\n\`;
    css += \`  94.376% { content: "STATE: FORMING"; color: inherit; }\\n\`;
    css += \`  100% { content: "STATE: FORMING"; color: inherit; }\\n\`;
    css += \`}\\n\`;

    setAnimationStyle(css);
  }, []);`;

code = code.replace(/  useEffect\(\(\) => \{[\s\S]*?setAnimationStyle\(css\);\n  \}, \[\]\);/, newUseEffect);

// Replace 20s with 32s in JSX
code = code.replace(/20s cubic-bezier\(0\.16, 1, 0\.3, 1\)/g, '32s cubic-bezier(0.16, 1, 0.3, 1)');

fs.writeFileSync(tsPath, code);
