const fs = require('fs');
const tsPath = './src/components/TileEntityForge.tsx';

let code = fs.readFileSync(tsPath, 'utf8');

const newUseEffect = 
  "  useEffect(() => {\n" +
  "    let css = \"\";\n" +
  "    TILES.forEach(tile => {\n" +
  "      // Create movement path\n" +
  "      css += `@keyframes move-${tile.id} {\\n`;\n" +
  "      tile.path.forEach(kp => {\n" +
  "        const left = (kp.c - 1) * 28;\n" +
  "        const top = (kp.r - 1) * 28;\n" +
  "        css += `  ${kp.p}% { transform: translate3d(${left}px, ${top}px, 0) rotate(${kp.rot}deg); }\\n`;\n" +
  "      });\n" +
  "      css += `}\\n`;\n" +
  "\n" +
  "      // Glow logic\n" +
  "      css += `@keyframes glow-${tile.id} {\\n`;\n" +
  "      css += `  0% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\\n`;\n" +
  "      css += `  10% { opacity: 0; }\\n`;\n" +
  "      css += `  15% { opacity: 0.15; background: radial-gradient(circle at 50% 42%, rgba(255,106,42,0.1), transparent 68%); }\\n`;\n" +
  "      css += `  26% { opacity: 0.15; background: radial-gradient(circle at 50% 42%, rgba(255,106,42,0.1), transparent 68%); }\\n`;\n" +
  "      css += `  27% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\\n`;\n" +
  "      css += `  ${tile.redAStart}% { opacity: 1; background: radial-gradient(circle at 50% 42%, rgba(255,75,62,0.14), transparent 68%); box-shadow: inset 0 0 0 1px rgba(255,75,62,0.24), 0 0 12px rgba(255,75,62,0.16); }\\n`;\n" +
  "      css += `  34.5% { opacity: 1; background: radial-gradient(circle at 50% 42%, rgba(255,75,62,0.14), transparent 68%); box-shadow: inset 0 0 0 1px rgba(255,75,62,0.24), 0 0 12px rgba(255,75,62,0.16); }\\n`;\n" +
  "      css += `  35% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\\n`;\n" +
  "      css += `  40% { opacity: 0.15; background: radial-gradient(circle at 50% 42%, rgba(255,106,42,0.1), transparent 68%); }\\n`;\n" +
  "      css += `  50% { opacity: 0.15; background: radial-gradient(circle at 50% 42%, rgba(255,106,42,0.1), transparent 68%); }\\n`;\n" +
  "      css += `  51% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\\n`;\n" +
  "      css += `  ${tile.redBStart}% { opacity: 1; background: radial-gradient(circle at 50% 42%, rgba(255,75,62,0.10), transparent 68%); box-shadow: inset 0 0 0 1px rgba(255,75,62,0.18), 0 0 10px rgba(255,75,62,0.11); }\\n`;\n" +
  "      css += `  58.5% { opacity: 1; background: radial-gradient(circle at 50% 42%, rgba(255,75,62,0.10), transparent 68%); box-shadow: inset 0 0 0 1px rgba(255,75,62,0.18), 0 0 10px rgba(255,75,62,0.11); }\\n`;\n" +
  "      css += `  59% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\\n`;\n" +
  "      css += `  65% { opacity: 0.15; background: radial-gradient(circle at 50% 42%, rgba(255,106,42,0.1), transparent 68%); }\\n`;\n" +
  "      css += `  76% { opacity: 0.15; background: radial-gradient(circle at 50% 42%, rgba(255,106,42,0.1), transparent 68%); }\\n`;\n" +
  "      css += `  77% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\\n`;\n" +
  "      css += `  ${tile.greenStart}% { opacity: 1; background: radial-gradient(circle at 50% 42%, rgba(110,231,168,0.15), transparent 68%); box-shadow: inset 0 0 0 1px rgba(110,231,168,0.26), 0 0 14px rgba(110,231,168,0.18); }\\n`;\n" +
  "      css += `  89% { opacity: 1; background: radial-gradient(circle at 50% 42%, rgba(110,231,168,0.15), transparent 68%); box-shadow: inset 0 0 0 1px rgba(110,231,168,0.26), 0 0 14px rgba(110,231,168,0.18); }\\n`;\n" +
  "      css += `  90% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\\n`;\n" +
  "      css += `  100% { opacity: 0; }\\n`;\n" +
  "      css += `}\\n`;\n" +
  "\n" +
  "      // Base tile styling adjustments based on state (opacity)\n" +
  "      css += `@keyframes tile-base-${tile.id} {\\n`;\n" +
  "      css += `  0% { opacity: 0.78; border-color: rgba(255,255,255,0.10); }\\n`;\n" +
  "      css += `  10% { opacity: 0.78; border-color: rgba(255,255,255,0.10); }\\n`;\n" +
  "      css += `  18% { opacity: 0.88; }\\n`;\n" +
  "      css += `  26% { opacity: 0.92; border-color: rgba(255,255,255,0.10); }\\n`;\n" +
  "      css += `  27.5% { opacity: 0.92; border-color: rgba(255,255,255,0.10); }\\n`;\n" +
  "      css += `  ${tile.redAStart}% { opacity: 0.94; border-color: rgba(255,75,62,0.24); }\\n`;\n" +
  "      css += `  35% { opacity: 0.94; border-color: rgba(255,75,62,0.24); }\\n`;\n" +
  "      css += `  35.001% { opacity: 0.92; border-color: rgba(255,255,255,0.10); }\\n`;\n" +
  "      css += `  50% { opacity: 0.95; border-color: rgba(255,255,255,0.10); }\\n`;\n" +
  "      css += `  51.5% { opacity: 0.95; border-color: rgba(255,255,255,0.10); }\\n`;\n" +
  "      css += `  ${tile.redBStart}% { opacity: 0.96; border-color: rgba(255,75,62,0.18); }\\n`;\n" +
  "      css += `  59% { opacity: 0.96; border-color: rgba(255,75,62,0.18); }\\n`;\n" +
  "      css += `  59.001% { opacity: 0.95; border-color: rgba(255,255,255,0.10); }\\n`;\n" +
  "      css += `  76% { opacity: 1.0; border-color: rgba(255,255,255,0.10); }\\n`;\n" +
  "      css += `  77.5% { opacity: 1.0; border-color: rgba(255,255,255,0.10); }\\n`;\n" +
  "      css += `  ${tile.greenStart}% { opacity: 1.0; border-color: rgba(110,231,168,0.26); }\\n`;\n" +
  "      css += `  90% { opacity: 1.0; border-color: rgba(110,231,168,0.26); }\\n`;\n" +
  "      css += `  90.001% { opacity: 1.0; border-color: rgba(255,255,255,0.10); }\\n`;\n" +
  "      css += `  100% { opacity: 0.78; border-color: rgba(255,255,255,0.10); }\\n`;\n" +
  "      css += `}\\n`;\n" +
  "    });\n" +
  "\n" +
  "    // Label animation\n" +
  "    css += `@keyframes state-label {\\n`;\n" +
  "    css += `  0% { content: \"STATE: FORMING\"; color: inherit; }\\n`;\n" +
  "    css += `  27.499% { content: \"STATE: FORMING\"; color: inherit; }\\n`;\n" +
  "    css += `  27.5% { content: \"STATE: UNSTABLE\"; color: rgba(255,75,62,0.8); }\\n`;\n" +
  "    css += `  35% { content: \"STATE: UNSTABLE\"; color: rgba(255,75,62,0.8); }\\n`;\n" +
  "    css += `  35.001% { content: \"STATE: FORMING\"; color: inherit; }\\n`;\n" +
  "    css += `  51.499% { content: \"STATE: FORMING\"; color: inherit; }\\n`;\n" +
  "    css += `  51.5% { content: \"STATE: UNSTABLE\"; color: rgba(255,75,62,0.8); }\\n`;\n" +
  "    css += `  59% { content: \"STATE: UNSTABLE\"; color: rgba(255,75,62,0.8); }\\n`;\n" +
  "    css += `  59.001% { content: \"STATE: FORMING\"; color: inherit; }\\n`;\n" +
  "    css += `  77.499% { content: \"STATE: FORMING\"; color: inherit; }\\n`;\n" +
  "    css += `  77.5% { content: \"STATE: STABLE\"; color: rgba(110,231,168,0.8); }\\n`;\n" +
  "    css += `  90% { content: \"STATE: STABLE\"; color: rgba(110,231,168,0.8); }\\n`;\n" +
  "    css += `  90.001% { content: \"STATE: FORMING\"; color: inherit; }\\n`;\n" +
  "    css += `  100% { content: \"STATE: FORMING\"; color: inherit; }\\n`;\n" +
  "    css += `}\\n`;\n" +
  "\n" +
  "    setAnimationStyle(css);\n" +
  "  }, []);";

const newCode = code.replace(/  useEffect\(\(\) => \{[\s\S]*?setAnimationStyle\(css\);\n  \}, \[\]\);/, newUseEffect);

fs.writeFileSync(tsPath, newCode);
console.log('Replaced useEffect correctly.');
