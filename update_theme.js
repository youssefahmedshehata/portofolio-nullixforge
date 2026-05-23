const fs = require('fs');
let content = fs.readFileSync('src/components/FeatureSpaceLab.tsx', 'utf8');

const replacements = {
  'bg-[#0a0a0a]': 'bg-white',
  'bg-[#111111]': 'bg-gray-50',
  'border-[#222222]': 'border-gray-200',
  'border-[#2a2a2a]': 'border-gray-300',
  'text-[#ffffff]': 'text-gray-900',
  'text-[#e5e5e5]': 'text-gray-800',
  'text-[#d4d4d4]': 'text-gray-700',
  'text-[#a3a3a3]': 'text-gray-600',
  'text-[#888888]': 'text-gray-500',
  'text-[#737373]': 'text-gray-500',
  'text-[#333333]': 'text-gray-400',
  'border-[#333333]': 'border-gray-300',
  'shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]': 'shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]',
  'shadow-[0_10px_30px_rgba(0,0,0,0.8)]': 'shadow-[0_10px_30px_rgba(0,0,0,0.15)]',
  'border-[#4a1c1c]': 'border-red-200',
  'bg-[#2a1111]': 'bg-red-50',
  'bg-[#222222]': 'bg-gray-200',
  'hover:bg-white/[0.04]': 'hover:bg-gray-100',
  'rgba(255, 255, 255, 0.04)': 'rgba(0, 0, 0, 0.04)',
  'background: #0a0a0a;': 'background: #ffffff;',
  'background: #222222;': 'background: #e5e5e5;',
  'background: #333333;': 'background: #d4d4d4;',
  'border-[#222222]/50': 'border-gray-200',
};

for (const [key, value] of Object.entries(replacements)) {
  content = content.split(key).join(value);
}

fs.writeFileSync('src/components/FeatureSpaceLab.tsx', content, 'utf8');
console.log('Replaced colors successfully');
