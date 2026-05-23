import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function updateFile(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
  console.log(`Processing ${filePath}`);
  let content = fs.readFileSync(filePath, 'utf8');

  // Background and borders
  content = content.replace(/bg-\[#fafafa\]/g, 'bg-[#0a0a0a]');
  content = content.replace(/bg-\[#ffffff\]/g, 'bg-[#0a0a0a]');
  content = content.replace(/bg-white\b/g, 'bg-[#0a0a0a]');
  content = content.replace(/bg-\[#f5f5f5\]/g, 'bg-[#1a1c20]');
  content = content.replace(/bg-\[#ebebeb\]/g, 'bg-[#191919]');
  content = content.replace(/border-black\/5/g, 'border-[#212327]');
  content = content.replace(/border-\[#ebebeb\]/g, 'border-[#212327]');
  content = content.replace(/border-\[#e5e7eb\]/g, 'border-[#212327]');
  content = content.replace(/border-gray-200/g, 'border-[#212327]');
  content = content.replace(/border-gray-100/g, 'border-[#212327]');
  
  // Text
  content = content.replace(/text-\[#171717\]/g, 'text-white');
  content = content.replace(/text-gray-900\b/g, 'text-white');
  content = content.replace(/text-gray-800\b/g, 'text-[#dadbdf]');
  content = content.replace(/text-\[#4d4d4d\]/g, 'text-[#dadbdf]');
  content = content.replace(/text-neutral-500\b/g, 'text-[#7d8187]');
  content = content.replace(/text-gray-500\b/g, 'text-[#7d8187]');
  content = content.replace(/text-gray-600\b/g, 'text-[#7d8187]');
  content = content.replace(/text-\[#888888\]/g, 'text-[#7d8187]');

  // Primary buttons to xAI style white-outline pills
  content = content.replace(/bg-\[#171717\] text-white/g, 'bg-transparent text-white border border-white/25 rounded-full');
  content = content.replace(/bg-black text-white/g, 'bg-transparent text-white border border-white/25 rounded-full');
  
  // Hover states
  content = content.replace(/hover:text-\[#171717\]/g, 'hover:text-white');
  content = content.replace(/hover:bg-\[#333333\]/g, 'hover:bg-white/10');

  // Tracking adjustments
  // For standard elements this will remove Vercel's tracking
  content = content.replace(/tracking-tight/g, 'tracking-normal');
  content = content.replace(/tracking-tighter/g, 'tracking-normal');

  // Specific sizes logic for xAI displays:
  // Usually the huge headings need to have massive negative letter spacing like -2.4px
  content = content.replace(/text-4xl md:text-6xl font-medium/g, 'text-4xl md:text-5xl lg:text-7xl font-sans font-normal tracking-[-2.4px]');
  content = content.replace(/text-4xl md:text-5xl font-medium/g, 'text-4xl md:text-5xl font-sans font-normal tracking-[-1.8px]');
  content = content.replace(/text-3xl md:text-4xl font-medium/g, 'text-3xl md:text-4xl font-sans font-normal tracking-[-1.2px]');
  content = content.replace(/text-2xl font-medium/g, 'text-2xl font-sans font-normal tracking-[-0.6px]');

  // Eyebrows logic
  content = content.replace(/text-\[13px\] font-mono/g, 'text-[14px] font-mono tracking-[1.4px] uppercase');
  content = content.replace(/text-\[12px\] font-mono/g, 'text-[12px] font-mono tracking-[1.2px] uppercase');
  content = content.replace(/text-sm font-mono/g, 'text-sm font-mono tracking-[1.4px] uppercase');

  // CSS styled blocks
  content = content.replace(/background: #fafafa;/g, 'background: #0a0a0a;');
  content = content.replace(/background-color: #fafafa;/g, 'background-color: #0a0a0a;');
  content = content.replace(/color: #171717;/g, 'color: #ffffff;');
  content = content.replace(/background: #ffffff;/g, 'background: #0a0a0a;');
  content = content.replace(/background-color: #ffffff;/g, 'background-color: #0a0a0a;');
  content = content.replace(/background-color: #f5f5f5;/g, 'background-color: #1a1c20;');
  content = content.replace(/border-color: #ebebeb;/g, 'border-color: #212327;');
  content = content.replace(/border-color: #e5e7eb;/g, 'border-color: #212327;');
  content = content.replace(/border: 1px solid rgba\(0,0,0,0.1\);/g, 'border: 1px solid #212327;');

  fs.writeFileSync(filePath, content, 'utf8');
}

walkDir('./src', updateFile);
