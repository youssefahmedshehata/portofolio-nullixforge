import React, { useEffect, useState } from 'react';
import OverlayLayers from './OverlayLayers';

const TILES = [{"id":"T01","path":[{"p":0,"c":8,"r":5,"rot":0},{"p":8.75,"c":8,"r":5,"rot":0},{"p":16.875,"c":9,"r":5,"rot":1.4},{"p":25,"c":9,"r":6,"rot":0.9},{"p":27.5,"c":9,"r":6,"rot":0},{"p":31.583,"c":9,"r":6,"rot":0.55},{"p":36.25,"c":9,"r":6,"rot":-0.55},{"p":36.251,"c":9,"r":6,"rot":0},{"p":51.25,"c":10,"r":6,"rot":1.4},{"p":53.75,"c":10,"r":6,"rot":0},{"p":58.417,"c":10,"r":6,"rot":0.35},{"p":63.75,"c":10,"r":6,"rot":-0.35},{"p":63.751,"c":10,"r":6,"rot":0},{"p":81.25,"c":9,"r":6,"rot":-1.4},{"p":83.75,"c":9,"r":6,"rot":0},{"p":94.375,"c":9,"r":6,"rot":0},{"p":97.188,"c":8,"r":6,"rot":-1.4},{"p":100,"c":8,"r":5,"rot":-0.9}],"redAStart":32.8125,"redBStart":53.75,"greenStart":90.125},{"id":"T02","path":[{"p":0,"c":6,"r":6,"rot":0},{"p":8.75,"c":6,"r":6,"rot":0},{"p":16.875,"c":7,"r":6,"rot":1.4},{"p":25,"c":7,"r":7,"rot":0.9},{"p":27.5,"c":7,"r":7,"rot":0},{"p":31.583,"c":7,"r":7,"rot":0.55},{"p":36.25,"c":7,"r":7,"rot":-0.55},{"p":36.251,"c":7,"r":7,"rot":0},{"p":51.25,"c":8,"r":7,"rot":1.4},{"p":53.75,"c":8,"r":7,"rot":0},{"p":58.417,"c":8,"r":7,"rot":-0.35},{"p":63.75,"c":8,"r":7,"rot":0.35},{"p":63.751,"c":8,"r":7,"rot":0},{"p":81.25,"c":8,"r":7,"rot":0},{"p":83.75,"c":8,"r":7,"rot":0},{"p":94.375,"c":8,"r":7,"rot":0},{"p":96.25,"c":7,"r":7,"rot":-1.4},{"p":98.125,"c":6,"r":7,"rot":-1.4},{"p":100,"c":6,"r":6,"rot":-0.9}],"redAStart":30,"redBStart":60,"greenStart":86.725},{"id":"T03","path":[{"p":0,"c":9,"r":5,"rot":0},{"p":8.75,"c":9,"r":5,"rot":0},{"p":16.875,"c":9,"r":6,"rot":0.9},{"p":25,"c":9,"r":7,"rot":0.9},{"p":27.5,"c":9,"r":7,"rot":0},{"p":31.583,"c":9,"r":7,"rot":-0.55},{"p":36.25,"c":9,"r":7,"rot":0.55},{"p":36.251,"c":9,"r":7,"rot":0},{"p":51.25,"c":9,"r":7,"rot":0},{"p":53.75,"c":9,"r":7,"rot":0},{"p":58.417,"c":9,"r":7,"rot":0.35},{"p":63.75,"c":9,"r":7,"rot":-0.35},{"p":63.751,"c":9,"r":7,"rot":0},{"p":81.25,"c":9,"r":7,"rot":0},{"p":83.75,"c":9,"r":7,"rot":0},{"p":94.375,"c":9,"r":7,"rot":0},{"p":97.188,"c":9,"r":6,"rot":-0.9},{"p":100,"c":9,"r":5,"rot":-0.9}],"redAStart":32.8125,"redBStart":60,"greenStart":83.75},{"id":"T04","path":[{"p":0,"c":12,"r":6,"rot":0},{"p":8.75,"c":12,"r":6,"rot":0},{"p":16.875,"c":11,"r":6,"rot":-1.4},{"p":25,"c":11,"r":7,"rot":0.9},{"p":27.5,"c":11,"r":7,"rot":0},{"p":31.583,"c":11,"r":7,"rot":-0.55},{"p":36.25,"c":11,"r":7,"rot":0.55},{"p":36.251,"c":11,"r":7,"rot":0},{"p":51.25,"c":10,"r":7,"rot":-1.4},{"p":53.75,"c":10,"r":7,"rot":0},{"p":58.417,"c":10,"r":7,"rot":0.35},{"p":63.75,"c":10,"r":7,"rot":-0.35},{"p":63.751,"c":10,"r":7,"rot":0},{"p":81.25,"c":10,"r":7,"rot":0},{"p":83.75,"c":10,"r":7,"rot":0},{"p":94.375,"c":10,"r":7,"rot":0},{"p":96.25,"c":11,"r":7,"rot":1.4},{"p":98.125,"c":12,"r":7,"rot":1.4},{"p":100,"c":12,"r":6,"rot":-0.9}],"redAStart":30,"redBStart":60,"greenStart":86.725},{"id":"T05","path":[{"p":0,"c":5,"r":8,"rot":0},{"p":8.75,"c":5,"r":8,"rot":0},{"p":16.875,"c":6,"r":8,"rot":1.4},{"p":25,"c":7,"r":8,"rot":1.4},{"p":27.5,"c":7,"r":8,"rot":0},{"p":31.583,"c":7,"r":8,"rot":-0.55},{"p":36.25,"c":7,"r":8,"rot":0.55},{"p":36.251,"c":7,"r":8,"rot":0},{"p":51.25,"c":7,"r":8,"rot":0},{"p":53.75,"c":7,"r":8,"rot":0},{"p":58.417,"c":7,"r":8,"rot":-0.35},{"p":63.75,"c":7,"r":8,"rot":0.35},{"p":63.751,"c":7,"r":8,"rot":0},{"p":81.25,"c":7,"r":8,"rot":0},{"p":83.75,"c":7,"r":8,"rot":0},{"p":94.375,"c":7,"r":8,"rot":0},{"p":97.188,"c":6,"r":8,"rot":-1.4},{"p":100,"c":5,"r":8,"rot":-1.4}],"redAStart":32.8125,"redBStart":60,"greenStart":90.125},{"id":"T06","path":[{"p":0,"c":7,"r":7,"rot":0},{"p":8.75,"c":7,"r":7,"rot":0},{"p":16.875,"c":8,"r":7,"rot":1.4},{"p":25,"c":8,"r":8,"rot":0.9},{"p":27.5,"c":8,"r":8,"rot":0},{"p":31.583,"c":8,"r":8,"rot":0.55},{"p":36.25,"c":8,"r":8,"rot":-0.55},{"p":36.251,"c":8,"r":8,"rot":0},{"p":51.25,"c":9,"r":8,"rot":1.4},{"p":53.75,"c":9,"r":8,"rot":0},{"p":58.417,"c":9,"r":8,"rot":-0.35},{"p":63.75,"c":9,"r":8,"rot":0.35},{"p":63.751,"c":9,"r":8,"rot":0},{"p":81.25,"c":8,"r":8,"rot":-1.4},{"p":83.75,"c":8,"r":8,"rot":0},{"p":94.375,"c":8,"r":8,"rot":0},{"p":97.188,"c":7,"r":8,"rot":-1.4},{"p":100,"c":7,"r":7,"rot":-0.9}],"redAStart":32.8125,"redBStart":56.5625,"greenStart":86.725},{"id":"T07","path":[{"p":0,"c":10,"r":6,"rot":0},{"p":8.75,"c":10,"r":6,"rot":0},{"p":16.875,"c":10,"r":7,"rot":0.9},{"p":25,"c":10,"r":8,"rot":0.9},{"p":27.5,"c":10,"r":8,"rot":0},{"p":31.583,"c":10,"r":8,"rot":-0.55},{"p":36.25,"c":10,"r":8,"rot":0.55},{"p":36.251,"c":10,"r":8,"rot":0},{"p":51.25,"c":10,"r":8,"rot":0},{"p":53.75,"c":10,"r":8,"rot":0},{"p":58.417,"c":10,"r":8,"rot":0.35},{"p":63.75,"c":10,"r":8,"rot":-0.35},{"p":63.751,"c":10,"r":8,"rot":0},{"p":81.25,"c":9,"r":8,"rot":-1.4},{"p":83.75,"c":9,"r":8,"rot":0},{"p":94.375,"c":9,"r":8,"rot":0},{"p":96.25,"c":10,"r":8,"rot":1.4},{"p":98.125,"c":10,"r":7,"rot":-0.9},{"p":100,"c":10,"r":6,"rot":-0.9}],"redAStart":27.5,"redBStart":56.5625,"greenStart":83.75},{"id":"T08","path":[{"p":0,"c":12,"r":8,"rot":0},{"p":8.75,"c":12,"r":8,"rot":0},{"p":25,"c":11,"r":8,"rot":-1.4},{"p":27.5,"c":11,"r":8,"rot":0},{"p":31.583,"c":11,"r":8,"rot":-0.55},{"p":36.25,"c":11,"r":8,"rot":0.55},{"p":36.251,"c":11,"r":8,"rot":0},{"p":51.25,"c":11,"r":8,"rot":0},{"p":53.75,"c":11,"r":8,"rot":0},{"p":58.417,"c":11,"r":8,"rot":0.35},{"p":63.75,"c":11,"r":8,"rot":-0.35},{"p":63.751,"c":11,"r":8,"rot":0},{"p":81.25,"c":10,"r":8,"rot":-1.4},{"p":83.75,"c":10,"r":8,"rot":0},{"p":94.375,"c":10,"r":8,"rot":0},{"p":97.188,"c":11,"r":8,"rot":1.4},{"p":100,"c":12,"r":8,"rot":1.4}],"redAStart":32.8125,"redBStart":60,"greenStart":86.725},{"id":"T09","path":[{"p":0,"c":13,"r":9,"rot":0},{"p":8.75,"c":13,"r":9,"rot":0},{"p":16.875,"c":12,"r":9,"rot":-1.4},{"p":25,"c":12,"r":8,"rot":-0.9},{"p":27.5,"c":12,"r":8,"rot":0},{"p":31.583,"c":12,"r":8,"rot":-0.55},{"p":36.25,"c":12,"r":8,"rot":0.55},{"p":36.251,"c":12,"r":8,"rot":0},{"p":51.25,"c":12,"r":8,"rot":0},{"p":53.75,"c":12,"r":8,"rot":0},{"p":58.417,"c":12,"r":8,"rot":0.35},{"p":63.75,"c":12,"r":8,"rot":-0.35},{"p":63.751,"c":12,"r":8,"rot":0},{"p":81.25,"c":11,"r":8,"rot":-1.4},{"p":83.75,"c":11,"r":8,"rot":0},{"p":94.375,"c":11,"r":8,"rot":0},{"p":96.25,"c":12,"r":8,"rot":1.4},{"p":98.125,"c":13,"r":8,"rot":1.4},{"p":100,"c":13,"r":9,"rot":0.9}],"redAStart":32.8125,"redBStart":60,"greenStart":90.125},{"id":"T10","path":[{"p":0,"c":5,"r":10,"rot":0},{"p":8.75,"c":5,"r":10,"rot":0},{"p":16.875,"c":6,"r":10,"rot":1.4},{"p":25,"c":6,"r":9,"rot":-0.9},{"p":27.5,"c":6,"r":9,"rot":0},{"p":31.583,"c":6,"r":9,"rot":0.55},{"p":36.25,"c":6,"r":9,"rot":-0.55},{"p":36.251,"c":6,"r":9,"rot":0},{"p":51.25,"c":7,"r":9,"rot":1.4},{"p":53.75,"c":7,"r":9,"rot":0},{"p":58.417,"c":7,"r":9,"rot":0.35},{"p":63.75,"c":7,"r":9,"rot":-0.35},{"p":63.751,"c":7,"r":9,"rot":0},{"p":81.25,"c":7,"r":9,"rot":0},{"p":83.75,"c":7,"r":9,"rot":0},{"p":94.375,"c":7,"r":9,"rot":0},{"p":96.25,"c":6,"r":9,"rot":-1.4},{"p":98.125,"c":5,"r":9,"rot":-1.4},{"p":100,"c":5,"r":10,"rot":0.9}],"redAStart":30,"redBStart":60,"greenStart":90.125},{"id":"T11","path":[{"p":0,"c":7,"r":11,"rot":0},{"p":8.75,"c":7,"r":11,"rot":0},{"p":14.166,"c":8,"r":11,"rot":1.4},{"p":19.584,"c":8,"r":10,"rot":-0.9},{"p":25,"c":8,"r":9,"rot":-0.9},{"p":27.5,"c":8,"r":9,"rot":0},{"p":31.583,"c":8,"r":9,"rot":-0.55},{"p":36.25,"c":8,"r":9,"rot":0.55},{"p":36.251,"c":8,"r":9,"rot":0},{"p":51.25,"c":8,"r":9,"rot":0},{"p":53.75,"c":8,"r":9,"rot":0},{"p":58.417,"c":8,"r":9,"rot":0.35},{"p":63.75,"c":8,"r":9,"rot":-0.35},{"p":63.751,"c":8,"r":9,"rot":0},{"p":81.25,"c":8,"r":9,"rot":0},{"p":83.75,"c":8,"r":9,"rot":0},{"p":94.375,"c":8,"r":9,"rot":0},{"p":96.25,"c":7,"r":9,"rot":-1.4},{"p":98.125,"c":7,"r":10,"rot":0.9},{"p":100,"c":7,"r":11,"rot":0.9}],"redAStart":32.8125,"redBStart":60,"greenStart":86.725},{"id":"T12","path":[{"p":0,"c":9,"r":12,"rot":0},{"p":8.75,"c":9,"r":12,"rot":0},{"p":14.166,"c":9,"r":11,"rot":-0.9},{"p":19.584,"c":9,"r":10,"rot":-0.9},{"p":25,"c":9,"r":9,"rot":-0.9},{"p":27.5,"c":9,"r":9,"rot":0},{"p":31.583,"c":9,"r":9,"rot":-0.55},{"p":36.25,"c":9,"r":9,"rot":0.55},{"p":36.251,"c":9,"r":9,"rot":0},{"p":51.25,"c":10,"r":9,"rot":1.4},{"p":53.75,"c":10,"r":9,"rot":0},{"p":58.417,"c":10,"r":9,"rot":0.35},{"p":63.75,"c":10,"r":9,"rot":-0.35},{"p":63.751,"c":10,"r":9,"rot":0},{"p":81.25,"c":9,"r":9,"rot":-1.4},{"p":83.75,"c":9,"r":9,"rot":0},{"p":94.375,"c":9,"r":9,"rot":0},{"p":96.25,"c":9,"r":10,"rot":0.9},{"p":98.125,"c":9,"r":11,"rot":0.9},{"p":100,"c":9,"r":12,"rot":0.9}],"redAStart":27.5,"redBStart":53.75,"greenStart":83.75},{"id":"T13","path":[{"p":0,"c":11,"r":11,"rot":0},{"p":8.75,"c":11,"r":11,"rot":0},{"p":14.166,"c":10,"r":11,"rot":-1.4},{"p":19.584,"c":10,"r":10,"rot":-0.9},{"p":25,"c":10,"r":9,"rot":-0.9},{"p":27.5,"c":10,"r":9,"rot":0},{"p":31.583,"c":10,"r":9,"rot":0.55},{"p":36.25,"c":10,"r":9,"rot":-0.55},{"p":36.251,"c":10,"r":9,"rot":0},{"p":51.25,"c":11,"r":9,"rot":1.4},{"p":53.75,"c":11,"r":9,"rot":0},{"p":58.417,"c":11,"r":9,"rot":0.35},{"p":63.75,"c":11,"r":9,"rot":-0.35},{"p":63.751,"c":11,"r":9,"rot":0},{"p":81.25,"c":10,"r":9,"rot":-1.4},{"p":83.75,"c":10,"r":9,"rot":0},{"p":94.375,"c":10,"r":9,"rot":0},{"p":96.25,"c":11,"r":9,"rot":1.4},{"p":98.125,"c":11,"r":10,"rot":0.9},{"p":100,"c":11,"r":11,"rot":0.9}],"redAStart":32.8125,"redBStart":56.5625,"greenStart":86.725},{"id":"T14","path":[{"p":0,"c":13,"r":10,"rot":0},{"p":8.75,"c":13,"r":10,"rot":0},{"p":16.875,"c":12,"r":10,"rot":-1.4},{"p":25,"c":12,"r":9,"rot":-0.9},{"p":27.5,"c":12,"r":9,"rot":0},{"p":31.583,"c":12,"r":9,"rot":-0.55},{"p":36.25,"c":12,"r":9,"rot":0.55},{"p":36.251,"c":12,"r":9,"rot":0},{"p":51.25,"c":12,"r":9,"rot":0},{"p":53.75,"c":12,"r":9,"rot":0},{"p":58.417,"c":12,"r":9,"rot":0.35},{"p":63.75,"c":12,"r":9,"rot":-0.35},{"p":63.751,"c":12,"r":9,"rot":0},{"p":81.25,"c":11,"r":9,"rot":-1.4},{"p":83.75,"c":11,"r":9,"rot":0},{"p":94.375,"c":11,"r":9,"rot":0},{"p":96.25,"c":12,"r":9,"rot":1.4},{"p":98.125,"c":13,"r":9,"rot":1.4},{"p":100,"c":13,"r":10,"rot":0.9}],"redAStart":30,"redBStart":56.5625,"greenStart":90.125},{"id":"T15","path":[{"p":0,"c":6,"r":11,"rot":0},{"p":8.75,"c":6,"r":11,"rot":0},{"p":14.166,"c":7,"r":11,"rot":1.4},{"p":19.584,"c":8,"r":11,"rot":1.4},{"p":25,"c":8,"r":10,"rot":-0.9},{"p":27.5,"c":8,"r":10,"rot":0},{"p":31.583,"c":8,"r":10,"rot":0.55},{"p":36.25,"c":8,"r":10,"rot":-0.55},{"p":36.251,"c":8,"r":10,"rot":0},{"p":51.25,"c":8,"r":10,"rot":0},{"p":53.75,"c":8,"r":10,"rot":0},{"p":58.417,"c":8,"r":10,"rot":0.35},{"p":63.75,"c":8,"r":10,"rot":-0.35},{"p":63.751,"c":8,"r":10,"rot":0},{"p":81.25,"c":8,"r":10,"rot":0},{"p":83.75,"c":8,"r":10,"rot":0},{"p":94.375,"c":8,"r":10,"rot":0},{"p":96.25,"c":7,"r":10,"rot":-1.4},{"p":98.125,"c":6,"r":10,"rot":-1.4},{"p":100,"c":6,"r":11,"rot":0.9}],"redAStart":32.8125,"redBStart":60,"greenStart":86.725},{"id":"T16","path":[{"p":0,"c":8,"r":12,"rot":0},{"p":8.75,"c":8,"r":12,"rot":0},{"p":16.875,"c":9,"r":12,"rot":1.4},{"p":25,"c":9,"r":11,"rot":-0.9},{"p":27.5,"c":9,"r":11,"rot":0},{"p":31.583,"c":9,"r":11,"rot":-0.55},{"p":36.25,"c":9,"r":11,"rot":0.55},{"p":36.251,"c":9,"r":11,"rot":0},{"p":51.25,"c":9,"r":10,"rot":-0.9},{"p":53.75,"c":9,"r":10,"rot":0},{"p":58.417,"c":9,"r":10,"rot":-0.35},{"p":63.75,"c":9,"r":10,"rot":0.35},{"p":63.751,"c":9,"r":10,"rot":0},{"p":81.25,"c":9,"r":10,"rot":0},{"p":83.75,"c":9,"r":10,"rot":0},{"p":94.375,"c":9,"r":10,"rot":0},{"p":96.25,"c":8,"r":10,"rot":-1.4},{"p":98.125,"c":8,"r":11,"rot":0.9},{"p":100,"c":8,"r":12,"rot":0.9}],"redAStart":27.5,"redBStart":60,"greenStart":83.75},{"id":"T17","path":[{"p":0,"c":12,"r":11,"rot":0},{"p":8.75,"c":12,"r":11,"rot":0},{"p":14.166,"c":11,"r":11,"rot":-1.4},{"p":19.584,"c":10,"r":11,"rot":-1.4},{"p":25,"c":10,"r":10,"rot":-0.9},{"p":27.5,"c":10,"r":10,"rot":0},{"p":31.583,"c":10,"r":10,"rot":-0.55},{"p":36.25,"c":10,"r":10,"rot":0.55},{"p":36.251,"c":10,"r":10,"rot":0},{"p":51.25,"c":11,"r":10,"rot":1.4},{"p":53.75,"c":11,"r":10,"rot":0},{"p":58.417,"c":11,"r":10,"rot":0.35},{"p":63.75,"c":11,"r":10,"rot":-0.35},{"p":63.751,"c":11,"r":10,"rot":0},{"p":81.25,"c":10,"r":10,"rot":-1.4},{"p":83.75,"c":10,"r":10,"rot":0},{"p":94.375,"c":10,"r":10,"rot":0},{"p":96.25,"c":11,"r":10,"rot":1.4},{"p":98.125,"c":12,"r":10,"rot":1.4},{"p":100,"c":12,"r":11,"rot":0.9}],"redAStart":32.8125,"redBStart":53.75,"greenStart":86.725},{"id":"T18","path":[{"p":0,"c":10,"r":13,"rot":0},{"p":8.75,"c":10,"r":13,"rot":0},{"p":16.875,"c":9,"r":13,"rot":-1.4},{"p":25,"c":9,"r":12,"rot":-0.9},{"p":27.5,"c":9,"r":12,"rot":0},{"p":31.583,"c":9,"r":12,"rot":0.55},{"p":36.25,"c":9,"r":12,"rot":-0.55},{"p":36.251,"c":9,"r":12,"rot":0},{"p":43.75,"c":10,"r":12,"rot":1.4},{"p":51.25,"c":10,"r":11,"rot":-0.9},{"p":53.75,"c":10,"r":11,"rot":0},{"p":58.417,"c":10,"r":11,"rot":0.35},{"p":63.75,"c":10,"r":11,"rot":-0.35},{"p":63.751,"c":10,"r":11,"rot":0},{"p":81.25,"c":9,"r":11,"rot":-1.4},{"p":83.75,"c":9,"r":11,"rot":0},{"p":94.375,"c":9,"r":11,"rot":0},{"p":96.25,"c":10,"r":11,"rot":1.4},{"p":98.125,"c":10,"r":12,"rot":0.9},{"p":100,"c":10,"r":13,"rot":0.9}],"redAStart":32.8125,"redBStart":53.75,"greenStart":90.125}];

export default function TileEntityForge() {
  const [animationStyle, setAnimationStyle] = useState("");

  useEffect(() => {
    let css = "";
    TILES.forEach(tile => {
      css += `@keyframes move-${tile.id} {\n`;
      tile.path.forEach(kp => {
        const left = (kp.c - 1) * 18;
        const top = (kp.r - 1) * 18;
        css += `  ${kp.p}% { transform: translate3d(${left}px, ${top}px, 0) rotate(${kp.rot}deg); }\n`;
      });
      css += `}\n`;

      css += `@keyframes glow-${tile.id} {\n`;
      css += `  0% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\n`;
      css += `  8.75% { opacity: 0; }\n`;
      
      css += `  12% { opacity: 0.10; background: radial-gradient(circle at 50% 42%, rgba(255,106,42,0.1), transparent 68%); }\n`;
      css += `  25% { opacity: 0.10; background: radial-gradient(circle at 50% 42%, rgba(255,106,42,0.1), transparent 68%); }\n`;
      
      css += `  27.499% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\n`;
      css += `  ${tile.redAStart - 0.001}% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\n`;
      css += `  ${tile.redAStart}% { opacity: 1; background: radial-gradient(circle at 50% 42%, rgba(255,75,62,0.06), transparent 68%); box-shadow: inset 0 0 0 1px rgba(255,75,62,0.16), 0 0 8px rgba(255,75,62,0.08); }\n`;
      css += `  36.25% { opacity: 1; background: radial-gradient(circle at 50% 42%, rgba(255,75,62,0.06), transparent 68%); box-shadow: inset 0 0 0 1px rgba(255,75,62,0.16), 0 0 8px rgba(255,75,62,0.08); }\n`;
      
      css += `  36.251% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\n`;
      css += `  40% { opacity: 0.10; background: radial-gradient(circle at 50% 42%, rgba(255,106,42,0.1), transparent 68%); }\n`;
      css += `  51.25% { opacity: 0.10; background: radial-gradient(circle at 50% 42%, rgba(255,106,42,0.1), transparent 68%); }\n`;
      
      css += `  53.749% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\n`;
      css += `  ${tile.redBStart - 0.001}% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\n`;
      css += `  ${tile.redBStart}% { opacity: 1; background: radial-gradient(circle at 50% 42%, rgba(255,75,62,0.04), transparent 68%); box-shadow: inset 0 0 0 1px rgba(255,75,62,0.12), 0 0 6px rgba(255,75,62,0.06); }\n`;
      css += `  63.75% { opacity: 1; background: radial-gradient(circle at 50% 42%, rgba(255,75,62,0.04), transparent 68%); box-shadow: inset 0 0 0 1px rgba(255,75,62,0.12), 0 0 6px rgba(255,75,62,0.06); }\n`;
      
      css += `  63.751% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\n`;
      css += `  70% { opacity: 0.10; background: radial-gradient(circle at 50% 42%, rgba(255,106,42,0.1), transparent 68%); }\n`;
      css += `  81.25% { opacity: 0.10; background: radial-gradient(circle at 50% 42%, rgba(255,106,42,0.1), transparent 68%); }\n`;
      
      css += `  83.749% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\n`;
      css += `  ${tile.greenStart - 0.001}% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\n`;
      css += `  ${tile.greenStart}% { opacity: 1; background: radial-gradient(circle at 50% 42%, rgba(110,231,168,0.07), transparent 68%); box-shadow: inset 0 0 0 1px rgba(110,231,168,0.18), 0 0 10px rgba(110,231,168,0.10); }\n`;
      css += `  94.375% { opacity: 1; background: radial-gradient(circle at 50% 42%, rgba(110,231,168,0.07), transparent 68%); box-shadow: inset 0 0 0 1px rgba(110,231,168,0.18), 0 0 10px rgba(110,231,168,0.10); }\n`;
      css += `  94.376% { opacity: 0; background: transparent; box-shadow: none; border-color: transparent; }\n`;
      css += `  100% { opacity: 0; }\n`;
      css += `}\n`;

      css += `@keyframes tile-base-${tile.id} {\n`;
      css += `  0% { opacity: 0.78; border-color: rgba(244,240,232,0.095); }\n`;
      css += `  8.75% { opacity: 0.78; border-color: rgba(244,240,232,0.095); }\n`;
      css += `  15% { opacity: 0.92; }\n`;
      css += `  25% { opacity: 0.92; border-color: rgba(244,240,232,0.095); }\n`;
      css += `  27.499% { opacity: 0.92; border-color: rgba(244,240,232,0.095); }\n`;
      css += `  ${tile.redAStart - 0.001}% { opacity: 0.92; border-color: rgba(244,240,232,0.095); }\n`;
      css += `  ${tile.redAStart}% { opacity: 0.94; border-color: rgba(255,75,62,0.12); }\n`;
      css += `  36.25% { opacity: 0.94; border-color: rgba(255,75,62,0.12); }\n`;
      css += `  36.251% { opacity: 0.92; border-color: rgba(244,240,232,0.095); }\n`;
      css += `  40% { opacity: 0.92; border-color: rgba(244,240,232,0.095); }\n`;
      css += `  51.25% { opacity: 0.92; border-color: rgba(244,240,232,0.095); }\n`;
      css += `  53.749% { opacity: 0.95; border-color: rgba(244,240,232,0.095); }\n`;
      css += `  ${tile.redBStart - 0.001}% { opacity: 0.95; border-color: rgba(244,240,232,0.095); }\n`;
      css += `  ${tile.redBStart}% { opacity: 0.96; border-color: rgba(255,75,62,0.10); }\n`;
      css += `  63.75% { opacity: 0.96; border-color: rgba(255,75,62,0.10); }\n`;
      css += `  63.751% { opacity: 0.95; border-color: rgba(244,240,232,0.095); }\n`;
      css += `  68% { opacity: 0.95; border-color: rgba(244,240,232,0.095); }\n`;
      css += `  81.25% { opacity: 1.0; border-color: rgba(244,240,232,0.095); }\n`;
      css += `  83.749% { opacity: 1.0; border-color: rgba(244,240,232,0.095); }\n`;
      css += `  ${tile.greenStart - 0.001}% { opacity: 1.0; border-color: rgba(244,240,232,0.095); }\n`;
      css += `  ${tile.greenStart}% { opacity: 1.0; border-color: rgba(110,231,168,0.14); }\n`;
      css += `  94.375% { opacity: 1.0; border-color: rgba(110,231,168,0.14); }\n`;
      css += `  94.376% { opacity: 1.0; border-color: rgba(244,240,232,0.095); }\n`;
      css += `  100% { opacity: 0.78; border-color: rgba(244,240,232,0.095); }\n`;
      css += `}\n`;

      css += `@keyframes terminal-glow-${tile.id} {\n`;
      css += `  0% { background: rgba(223,165,91,0.36); }\n`;
      css += `  ${tile.redAStart - 0.001}% { background: rgba(223,165,91,0.36); }\n`;
      css += `  ${tile.redAStart}% { background: rgba(255,75,62,0.6); }\n`;
      css += `  36.25% { background: rgba(255,75,62,0.6); }\n`;
      css += `  36.251% { background: rgba(223,165,91,0.36); }\n`;
      css += `  ${tile.redBStart - 0.001}% { background: rgba(223,165,91,0.36); }\n`;
      css += `  ${tile.redBStart}% { background: rgba(255,75,62,0.5); }\n`;
      css += `  63.75% { background: rgba(255,75,62,0.5); }\n`;
      css += `  63.751% { background: rgba(223,165,91,0.36); }\n`;
      css += `  ${tile.greenStart - 0.001}% { background: rgba(223,165,91,0.36); }\n`;
      css += `  ${tile.greenStart}% { background: rgba(110,231,168,0.7); }\n`;
      css += `  94.375% { background: rgba(110,231,168,0.7); }\n`;
      css += `  94.376% { background: rgba(223,165,91,0.36); }\n`;
      css += `  100% { background: rgba(223,165,91,0.36); }\n`;
      css += `}\n`;
      
      css += `@keyframes trace-glow-${tile.id} {\n`;
      css += `  0% { background: rgba(244,240,232,0.12); }\n`;
      css += `  ${tile.redAStart - 0.001}% { background: rgba(244,240,232,0.12); }\n`;
      css += `  ${tile.redAStart}% { background: rgba(255,75,62,0.3); }\n`;
      css += `  36.25% { background: rgba(255,75,62,0.3); }\n`;
      css += `  36.251% { background: rgba(244,240,232,0.12); }\n`;
      css += `  ${tile.redBStart - 0.001}% { background: rgba(244,240,232,0.12); }\n`;
      css += `  ${tile.redBStart}% { background: rgba(255,75,62,0.3); }\n`;
      css += `  63.75% { background: rgba(255,75,62,0.3); }\n`;
      css += `  63.751% { background: rgba(244,240,232,0.12); }\n`;
      css += `  ${tile.greenStart - 0.001}% { background: rgba(244,240,232,0.12); }\n`;
      css += `  ${tile.greenStart}% { background: rgba(110,231,168,0.3); }\n`;
      css += `  94.375% { background: rgba(110,231,168,0.3); }\n`;
      css += `  94.376% { background: rgba(244,240,232,0.12); }\n`;
      css += `  100% { background: rgba(244,240,232,0.12); }\n`;
      css += `}\n`;

    });

    css += `@keyframes state-label {\n`;
    css += `  0% { content: "STATE: FORMING"; color: inherit; }\n`;
    css += `  27.499% { content: "STATE: FORMING"; color: inherit; }\n`;
    css += `  27.5% { content: "STATE: UNSTABLE"; color: rgba(255,75,62,0.8); }\n`;
    css += `  36.25% { content: "STATE: UNSTABLE"; color: rgba(255,75,62,0.8); }\n`;
    css += `  36.251% { content: "STATE: FORMING"; color: inherit; }\n`;
    css += `  53.749% { content: "STATE: FORMING"; color: inherit; }\n`;
    css += `  53.75% { content: "STATE: UNSTABLE"; color: rgba(255,75,62,0.8); }\n`;
    css += `  63.75% { content: "STATE: UNSTABLE"; color: rgba(255,75,62,0.8); }\n`;
    css += `  63.751% { content: "STATE: FORMING"; color: inherit; }\n`;
    css += `  83.749% { content: "STATE: FORMING"; color: inherit; }\n`;
    css += `  83.75% { content: "STATE: STABLE"; color: rgba(110,231,168,0.8); }\n`;
    css += `  94.375% { content: "STATE: STABLE"; color: rgba(110,231,168,0.8); }\n`;
    css += `  94.376% { content: "STATE: FORMING"; color: inherit; }\n`;
    css += `  100% { content: "STATE: FORMING"; color: inherit; }\n`;
    css += `}\n`;

    setAnimationStyle(css);
  }, []);

  return (
    <div 
      className="relative w-full h-full flex flex-col items-center justify-center rounded-[32px] overflow-hidden chamber-panel py-[40px] md:py-[60px]"
      style={{
        background: 'linear-gradient(180deg, rgba(13,16,20,0.98), rgba(5,6,8,0.99))',
        border: '1px solid rgba(255,255,255,0.11)',
        boxShadow: '0 36px 110px rgba(0,0,0,0.58), inset 0 1px 0 rgba(255,255,255,0.045)'
      }}
      aria-label="Self-assembling tile entity with nullixforge principle and computation trace, where learned constraints are pinned inside the trace as unstable formations become stable structure"
    >
      <style dangerouslySetInnerHTML={{ __html: animationStyle }} />
      <style dangerouslySetInnerHTML={{ __html: `
        .chamber-panel { min-height: 740px !important; }
        @media (min-width: 768px) {
          .chamber-panel { min-height: 800px !important; }
        }
        @media (min-width: 1024px) {
          .chamber-panel { min-height: 900px !important; }
        }
      `}} />

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
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)
          `,
          backgroundSize: '28px 28px',
          opacity: 0.38
        }}
      ></div>

      {/* Corner marks (removed) */}

      {/* Labels */}
      <div className="absolute top-[28px] left-[32px] font-mono text-[10px] tracking-[0.16em] text-[rgba(244,240,232,0.58)] uppercase">LAB</div>
      <div className="absolute top-[28px] right-[32px] font-mono text-[10px] tracking-[0.16em] text-[rgba(244,240,232,0.58)] uppercase after:content-['STATE:_FORMING'] after:animate-[state-label_32s_cubic-bezier(0.16,1,0.3,1)_infinite] motion-reduce:after:content-['STATE:_STABLE'] motion-reduce:after:animate-none"></div>
      <div className="absolute bottom-[28px] right-[32px] font-mono text-[10px] tracking-[0.16em] text-[rgba(244,240,232,0.58)] uppercase text-right">TILE FIELD [18x18]<br/><span className="text-[8px] opacity-70">CONTROLLED CELLULAR FIELD</span></div>

      {/* COGNITIVE OVERLAY LAYERS */}
      <OverlayLayers />

      {/* Forge Grid Container */}
      <div className="relative rounded-[20px] scale-[0.74] min-[390px]:scale-[0.88] min-[520px]:scale-100"
        style={{
          order: 2,
          width: '324px',
          height: '324px',
          background: 'linear-gradient(180deg, rgba(7,9,12,0.94), rgba(2,3,4,0.96))',
          border: '1px solid rgba(244,240,232,0.075)',
          boxShadow: '0 28px 80px rgba(0,0,0,0.48), inset 0 1px 0 rgba(255,255,255,0.04)',
          backgroundImage: `
            linear-gradient(rgba(244,240,232,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(244,240,232,0.028) 1px, transparent 1px)
          `,
          backgroundSize: '18px 18px'
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 18 }).map((_, i) => (
            <React.Fragment key={`tick-${i}`}>
              <div className="absolute top-[-3px]" style={{ left: `${i * 18 + 8.5}px`, width: '1px', height: '3px', background: i % 6 === 0 ? 'rgba(223,165,91,0.18)' : 'rgba(244,240,232,0.12)' }}></div>
              <div className="absolute left-[-3px]" style={{ top: `${i * 18 + 8.5}px`, width: '3px', height: '1px', background: i % 6 === 0 ? 'rgba(223,165,91,0.18)' : 'rgba(244,240,232,0.12)' }}></div>
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
                animation: `move-${tile.id} 32s cubic-bezier(0.16, 1, 0.3, 1) infinite`,
              }}
            >
              <div 
                className="absolute left-[2px] top-[2px] w-[14px] h-[14px] rounded-[2px] overflow-hidden"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.000) 38%), linear-gradient(135deg, #161B22 0%, #0B0E13 52%, #050607 100%)',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.34), inset 0 1px 0 rgba(255,255,255,0.055), inset 0 -1px 0 rgba(0,0,0,0.38)',
                  border: '1px solid transparent',
                  animation: `tile-base-${tile.id} 32s cubic-bezier(0.16, 1, 0.3, 1) infinite`
                }}
              >
                <div 
                  className="absolute inset-[0px] rounded-[1px] pointer-events-none"
                  style={{
                    animation: `glow-${tile.id} 32s cubic-bezier(0.16, 1, 0.3, 1) infinite`,
                  }}
                ></div>

                <div 
                  className="absolute right-[3px] bottom-[3px] w-[2px] h-[2px] rounded-[1px] pointer-events-none"
                  style={{
                    animation: `terminal-glow-${tile.id} 32s cubic-bezier(0.16, 1, 0.3, 1) infinite`
                  }}
                ></div>
                <div 
                  className="absolute left-[3px] top-[4px] w-[7px] h-[1px] pointer-events-none"
                  style={{
                    animation: `trace-glow-${tile.id} 32s cubic-bezier(0.16, 1, 0.3, 1) infinite`
                  }}
                ></div>
                <div 
                  className="absolute left-[3px] top-[4px] w-[1px] h-[6px] pointer-events-none"
                  style={{
                    animation: `trace-glow-${tile.id} 32s cubic-bezier(0.16, 1, 0.3, 1) infinite`
                  }}
                ></div>
                
                <div className="absolute inset-[0px] rounded-[1px] opacity-0 motion-reduce:opacity-100 pointer-events-none" style={{
                  background: 'radial-gradient(circle at 50% 42%, rgba(110,231,168,0.07), transparent 68%)',
                  boxShadow: 'inset 0 0 0 1px rgba(110,231,168,0.18), 0 0 10px rgba(110,231,168,0.10)'
                }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

