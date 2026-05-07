const fs = require('fs');

const tsPath = './src/components/TileEntityForge.tsx';
let code = fs.readFileSync(tsPath, 'utf8');

// 1. Extract the TILES array string
const tilesMatch = code.match(/const TILES = (\[.*?\]);/);
if (!tilesMatch) throw new Error("Couldn't find TILES array");

let tilesStr = tilesMatch[1];
let tiles = eval(tilesStr);

// Transform the tiles array
const rotationMap = {
  4: 1.4,
  "-4": -1.4,
  2: 0.9,
  "-2": -0.9,
  1.4: 0.55,
  "-1.4": -0.55,
  0.9: 0.35,
  "-0.9": -0.35,
  0: 0
};

tiles = tiles.map(t => {
  return {
    ...t,
    path: t.path.map(p => ({
      ...p,
      c: p.c + 4,
      r: p.r + 4,
      rot: rotationMap[p.rot] !== undefined ? rotationMap[p.rot] : p.rot
    }))
  };
});

const newTilesStr = `const TILES = ${JSON.stringify(tiles)};`;

// Replace TILES array
code = code.replace(/const TILES = \[.*?\];/, newTilesStr);

// 2. Generate new useEffect content
const newUseEffect = `  useEffect(() => {
    let css = "";
    TILES.forEach(tile => {
      // Create movement path
      css += \`@keyframes move-\${tile.id} {\\n\`;
      tile.path.forEach(kp => {
        const left = (kp.c - 1) * 18;
        const top = (kp.r - 1) * 18;
        css += \`  \${kp.p}% { transform: translate3d(\${left}px, \${top}px, 0) rotate(\${kp.rot}deg); }\\n\`;
      });
      css += \`}\\n\`;

      // Glow logic
      css += \`@keyframes glow-\${tile.id} {\\n\`;
      css += \`  0% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\\n\`;
      css += \`  10% { opacity: 0; }\\n\`;
      css += \`  15% { opacity: 0.10; background: radial-gradient(circle at 50% 42%, rgba(255,106,42,0.1), transparent 68%); }\\n\`;
      css += \`  26% { opacity: 0.10; background: radial-gradient(circle at 50% 42%, rgba(255,106,42,0.1), transparent 68%); }\\n\`;
      css += \`  27.499% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\\n\`;
      css += \`  \${tile.redAStart - 0.001}% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\\n\`;
      // Max red border: 0.16, outer: 0.08, inner: 0.06
      css += \`  \${tile.redAStart}% { opacity: 1; background: radial-gradient(circle at 50% 42%, rgba(255,75,62,0.06), transparent 68%); box-shadow: inset 0 0 0 1px rgba(255,75,62,0.16), 0 0 8px rgba(255,75,62,0.08); }\\n\`;
      css += \`  34.5% { opacity: 1; background: radial-gradient(circle at 50% 42%, rgba(255,75,62,0.06), transparent 68%); box-shadow: inset 0 0 0 1px rgba(255,75,62,0.16), 0 0 8px rgba(255,75,62,0.08); }\\n\`;
      css += \`  34.999% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\\n\`;
      css += \`  35% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\\n\`;
      css += \`  40% { opacity: 0.10; background: radial-gradient(circle at 50% 42%, rgba(255,106,42,0.1), transparent 68%); }\\n\`;
      css += \`  50% { opacity: 0.10; background: radial-gradient(circle at 50% 42%, rgba(255,106,42,0.1), transparent 68%); }\\n\`;
      css += \`  51.499% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\\n\`;
      css += \`  \${tile.redBStart - 0.001}% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\\n\`;
      // B red is slightly weaker
      css += \`  \${tile.redBStart}% { opacity: 1; background: radial-gradient(circle at 50% 42%, rgba(255,75,62,0.04), transparent 68%); box-shadow: inset 0 0 0 1px rgba(255,75,62,0.12), 0 0 6px rgba(255,75,62,0.06); }\\n\`;
      css += \`  58.5% { opacity: 1; background: radial-gradient(circle at 50% 42%, rgba(255,75,62,0.04), transparent 68%); box-shadow: inset 0 0 0 1px rgba(255,75,62,0.12), 0 0 6px rgba(255,75,62,0.06); }\\n\`;
      css += \`  58.999% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\\n\`;
      css += \`  59% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\\n\`;
      css += \`  65% { opacity: 0.10; background: radial-gradient(circle at 50% 42%, rgba(255,106,42,0.1), transparent 68%); }\\n\`;
      css += \`  76% { opacity: 0.10; background: radial-gradient(circle at 50% 42%, rgba(255,106,42,0.1), transparent 68%); }\\n\`;
      css += \`  77.499% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\\n\`;
      css += \`  \${tile.greenStart - 0.001}% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\\n\`;
      // Max green border: 0.18, outer opacity: 0.10, inner: 0.07
      css += \`  \${tile.greenStart}% { opacity: 1; background: radial-gradient(circle at 50% 42%, rgba(110,231,168,0.07), transparent 68%); box-shadow: inset 0 0 0 1px rgba(110,231,168,0.18), 0 0 10px rgba(110,231,168,0.10); }\\n\`;
      css += \`  89% { opacity: 1; background: radial-gradient(circle at 50% 42%, rgba(110,231,168,0.07), transparent 68%); box-shadow: inset 0 0 0 1px rgba(110,231,168,0.18), 0 0 10px rgba(110,231,168,0.10); }\\n\`;
      css += \`  89.999% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\\n\`;
      css += \`  90% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\\n\`;
      css += \`  100% { opacity: 0; }\\n\`;
      css += \`}\\n\`;

      css += \`@keyframes tile-base-\${tile.id} {\\n\`;
      css += \`  0% { opacity: 0.84; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  10% { opacity: 0.84; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  18% { opacity: 0.92; }\\n\`;
      css += \`  26% { opacity: 0.95; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  27.499% { opacity: 0.95; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  \${tile.redAStart - 0.001}% { opacity: 0.95; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  \${tile.redAStart}% { opacity: 1.0; border-color: rgba(255,75,62,0.12); }\\n\`;
      css += \`  34.5% { opacity: 1.0; border-color: rgba(255,75,62,0.12); }\\n\`;
      css += \`  34.999% { opacity: 0.95; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  35% { opacity: 0.95; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  50% { opacity: 0.96; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  51.499% { opacity: 0.96; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  \${tile.redBStart - 0.001}% { opacity: 0.96; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  \${tile.redBStart}% { opacity: 1.0; border-color: rgba(255,75,62,0.10); }\\n\`;
      css += \`  58.5% { opacity: 1.0; border-color: rgba(255,75,62,0.10); }\\n\`;
      css += \`  58.999% { opacity: 0.96; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  59% { opacity: 0.96; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  76% { opacity: 1.0; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  77.499% { opacity: 1.0; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  \${tile.greenStart - 0.001}% { opacity: 1.0; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  \${tile.greenStart}% { opacity: 1.0; border-color: rgba(110,231,168,0.14); }\\n\`;
      css += \`  89% { opacity: 1.0; border-color: rgba(110,231,168,0.14); }\\n\`;
      css += \`  89.999% { opacity: 1.0; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  90% { opacity: 1.0; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`  100% { opacity: 0.84; border-color: rgba(244,240,232,0.095); }\\n\`;
      css += \`}\\n\`;

      // Micro terminal dot glow
      css += \`@keyframes terminal-glow-\${tile.id} {\\n\`;
      css += \`  0% { background: rgba(223,165,91,0.36); }\\n\`;
      css += \`  \${tile.redAStart - 0.001}% { background: rgba(223,165,91,0.36); }\\n\`;
      css += \`  \${tile.redAStart}% { background: rgba(255,75,62,0.6); }\\n\`;
      css += \`  34.5% { background: rgba(255,75,62,0.6); }\\n\`;
      css += \`  34.999% { background: rgba(223,165,91,0.36); }\\n\`;
      css += \`  \${tile.redBStart - 0.001}% { background: rgba(223,165,91,0.36); }\\n\`;
      css += \`  \${tile.redBStart}% { background: rgba(255,75,62,0.5); }\\n\`;
      css += \`  58.5% { background: rgba(255,75,62,0.5); }\\n\`;
      css += \`  58.999% { background: rgba(223,165,91,0.36); }\\n\`;
      css += \`  \${tile.greenStart - 0.001}% { background: rgba(223,165,91,0.36); }\\n\`;
      css += \`  \${tile.greenStart}% { background: rgba(110,231,168,0.7); }\\n\`;
      css += \`  89% { background: rgba(110,231,168,0.7); }\\n\`;
      css += \`  89.999% { background: rgba(223,165,91,0.36); }\\n\`;
      css += \`  100% { background: rgba(223,165,91,0.36); }\\n\`;
      css += \`}\\n\`;
      
      // Logic trace lines color
      css += \`@keyframes trace-glow-\${tile.id} {\\n\`;
      css += \`  0% { background: rgba(244,240,232,0.12); }\\n\`;
      css += \`  \${tile.redAStart - 0.001}% { background: rgba(244,240,232,0.12); }\\n\`;
      css += \`  \${tile.redAStart}% { background: rgba(255,75,62,0.3); }\\n\`;
      css += \`  34.5% { background: rgba(255,75,62,0.3); }\\n\`;
      css += \`  34.999% { background: rgba(244,240,232,0.12); }\\n\`;
      css += \`  \${tile.redBStart - 0.001}% { background: rgba(244,240,232,0.12); }\\n\`;
      css += \`  \${tile.redBStart}% { background: rgba(255,75,62,0.3); }\\n\`;
      css += \`  58.5% { background: rgba(255,75,62,0.3); }\\n\`;
      css += \`  58.999% { background: rgba(244,240,232,0.12); }\\n\`;
      css += \`  \${tile.greenStart - 0.001}% { background: rgba(244,240,232,0.12); }\\n\`;
      css += \`  \${tile.greenStart}% { background: rgba(110,231,168,0.3); }\\n\`;
      css += \`  89% { background: rgba(110,231,168,0.3); }\\n\`;
      css += \`  89.999% { background: rgba(244,240,232,0.12); }\\n\`;
      css += \`  100% { background: rgba(244,240,232,0.12); }\\n\`;
      css += \`}\\n\`;

    });

    // Label animation
    css += \`@keyframes state-label {\\n\`;
    css += \`  0% { content: "STATE: FORMING"; color: inherit; }\\n\`;
    css += \`  27.499% { content: "STATE: FORMING"; color: inherit; }\\n\`;
    css += \`  27.5% { content: "STATE: UNSTABLE"; color: rgba(255,75,62,0.8); }\\n\`;
    css += \`  34.5% { content: "STATE: UNSTABLE"; color: rgba(255,75,62,0.8); }\\n\`;
    css += \`  34.999% { content: "STATE: FORMING"; color: inherit; }\\n\`;
    css += \`  35% { content: "STATE: FORMING"; color: inherit; }\\n\`;
    css += \`  51.499% { content: "STATE: FORMING"; color: inherit; }\\n\`;
    css += \`  51.5% { content: "STATE: UNSTABLE"; color: rgba(255,75,62,0.8); }\\n\`;
    css += \`  58.5% { content: "STATE: UNSTABLE"; color: rgba(255,75,62,0.8); }\\n\`;
    css += \`  58.999% { content: "STATE: FORMING"; color: inherit; }\\n\`;
    css += \`  59% { content: "STATE: FORMING"; color: inherit; }\\n\`;
    css += \`  77.499% { content: "STATE: FORMING"; color: inherit; }\\n\`;
    css += \`  77.5% { content: "STATE: STABLE"; color: rgba(110,231,168,0.8); }\\n\`;
    css += \`  89% { content: "STATE: STABLE"; color: rgba(110,231,168,0.8); }\\n\`;
    css += \`  89.999% { content: "STATE: FORMING"; color: inherit; }\\n\`;
    css += \`  90% { content: "STATE: FORMING"; color: inherit; }\\n\`;
    css += \`  100% { content: "STATE: FORMING"; color: inherit; }\\n\`;
    css += \`}\\n\`;

    setAnimationStyle(css);
  }, []);`;

code = code.replace(/  useEffect\(\(\) => \{[\s\S]*?setAnimationStyle\(css\);\n  \}, \[\]\);/, newUseEffect);

fs.writeFileSync(tsPath, code);
