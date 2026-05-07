import fs from 'fs';

const start = [
  {id:'T01', c:4, r:1}, {id:'T02', c:2, r:2}, {id:'T03', c:5, r:1}, {id:'T04', c:8, r:2},
  {id:'T05', c:1, r:4}, {id:'T06', c:3, r:3}, {id:'T07', c:6, r:2}, {id:'T08', c:8, r:4},
  {id:'T09', c:9, r:5}, {id:'T10', c:1, r:6}, {id:'T11', c:3, r:7}, {id:'T12', c:5, r:8},
  {id:'T13', c:7, r:7}, {id:'T14', c:9, r:6}, {id:'T15', c:2, r:7}, {id:'T16', c:4, r:8},
  {id:'T17', c:8, r:7}, {id:'T18', c:6, r:9}
];

const shapeA = [
  {c:2, r:2}, {c:3, r:2}, {c:4, r:2}, {c:5, r:2}, {c:6, r:2},
  {c:2, r:3}, {c:6, r:3},
  {c:2, r:4}, {c:6, r:4},
  {c:2, r:5}, {c:6, r:5},
  {c:2, r:6}, {c:3, r:6}, {c:4, r:6}, {c:5, r:6}, {c:6, r:6},
  {c:1, r:3}, {c:1, r:5}
];

const shapeB = [
  {c:3, r:3}, {c:4, r:3}, {c:5, r:3},
  {c:4, r:4}, {c:5, r:4}, {c:6, r:4},
  {c:5, r:5}, {c:6, r:5}, {c:7, r:5},
  {c:6, r:6}, {c:7, r:6}, {c:8, r:6},
  {c:7, r:7}, {c:8, r:7}, {c:9, r:7},
  {c:2, r:2}, {c:3, r:2}, {c:4, r:2}
];

const finalShape = [
  {c:5, r:2},
  {c:4, r:3}, {c:5, r:3}, {c:6, r:3},
  {c:3, r:4}, {c:4, r:4}, {c:5, r:4}, {c:6, r:4}, {c:7, r:4},
  {c:3, r:5}, {c:4, r:5}, {c:5, r:5}, {c:6, r:5}, {c:7, r:5},
  {c:4, r:6}, {c:5, r:6}, {c:6, r:6},
  {c:5, r:7}
];

function dist(p1, p2) { return Math.abs(p1.c - p2.c) + Math.abs(p1.r - p2.r); }

function greedymatch(src, dst) {
  let matched = [];
  let avail = [...dst];
  for (let s of src) {
    let best = -1, bestD = 999;
    for (let i=0; i<avail.length; i++) {
      let d = dist(s, avail[i]);
      if (d < bestD) { bestD = d; best = i; }
    }
    matched.push(avail[best]);
    avail.splice(best, 1);
  }
  return matched;
}

const matchA = greedymatch(start, shapeA);
const matchB = greedymatch(matchA, shapeB);
const matchF = greedymatch(matchB, finalShape);

function genOrthogonal(startPt, endPt, pStart, pEnd) {
    if (startPt.c === endPt.c && startPt.r === endPt.r) {
        return [];
    }
    const nodes = [];
    const pMid = +(pStart + (pEnd - pStart) / 2).toFixed(3);
    if (startPt.c !== endPt.c && startPt.r !== endPt.r) {
        nodes.push({ p: pMid, c: endPt.c, r: startPt.r });
        nodes.push({ p: pEnd, c: endPt.c, r: endPt.r });
    } else {
        nodes.push({ p: pEnd, c: endPt.c, r: endPt.r });
    }
    return nodes;
}

function calcRot(lastPos, nextPos, currentRot) {
  if (!lastPos) return currentRot;
  if (nextPos.c > lastPos.c) return 90;
  if (nextPos.c < lastPos.c) return -90;
  if (nextPos.r > lastPos.r) return 180;
  if (nextPos.r < lastPos.r) return 0;
  return currentRot;
}

const res = start.map((s, i) => {
    let path = [];
    let rot = 0;
    
    path.push({ p: 0, c: s.c, r: s.r, rot: 0 });
    path.push({ p: 8.333, c: s.c, r: s.r, rot: 0 });
    
    let lastPos = { c: s.c, r: s.r };
    let stepsA = genOrthogonal(s, matchA[i], 8.333, 26.667);
    for (let step of stepsA) {
        rot = calcRot(lastPos, step, rot);
        path.push({ p: step.p, c: step.c, r: step.r, rot });
        lastPos = step;
    }
    if (stepsA.length === 0) path.push({ p: 26.667, c: matchA[i].c, r: matchA[i].r, rot });
    path.push({ p: 33.333, c: matchA[i].c, r: matchA[i].r, rot });

    let stepsB = genOrthogonal(matchA[i], matchB[i], 33.333, 48.333);
    for (let step of stepsB) {
        rot = calcRot(lastPos, step, rot);
        path.push({ p: step.p, c: step.c, r: step.r, rot });
        lastPos = step;
    }
    if (stepsB.length === 0) path.push({ p: 48.333, c: matchB[i].c, r: matchB[i].r, rot });
    path.push({ p: 55.000, c: matchB[i].c, r: matchB[i].r, rot });

    let stepsF = genOrthogonal(matchB[i], matchF[i], 55.000, 72.500);
    for (let step of stepsF) {
        rot = calcRot(lastPos, step, rot);
        path.push({ p: step.p, c: step.c, r: step.r, rot });
        lastPos = step;
    }
    if (stepsF.length === 0) path.push({ p: 72.500, c: matchF[i].c, r: matchF[i].r, rot });
    path.push({ p: 85.000, c: matchF[i].c, r: matchF[i].r, rot });

    let stepsStart = genOrthogonal(matchF[i], s, 85.000, 100.000);
    for (let step of stepsStart) {
        rot = calcRot(lastPos, step, rot);
        path.push({ p: step.p, c: step.c, r: step.r, rot });
        lastPos = step;
    }
    if (stepsStart.length === 0) path.push({ p: 100.000, c: s.c, r: s.r, rot });
    
    // Quick cleanup for adjacent identical paths if needed, but not strictly necessary.

    const greenGlows = [78, 81, 84];
    return {
        id: s.id,
        path: path,
        glowDelay: +(Math.random()).toFixed(2),
        greenGlow: greenGlows[Math.floor(Math.random() * greenGlows.length)]
    };
});

fs.writeFileSync('./src/components/generated_tiles.json', JSON.stringify(res, null, 2));
