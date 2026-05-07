const fs = require('fs');

const CELL = 28;

const ROUTES = {
  T01: {
    startToA: [{c:4,r:1}, {c:5,r:1}, {c:5,r:2}],
    aToB: [{c:5,r:2}, {c:6,r:2}],
    bToFinal: [{c:6,r:2}, {c:5,r:2}],
    finalToStart: [{c:5,r:2}, {c:4,r:2}, {c:4,r:1}]
  },
  T02: {
    startToA: [{c:2,r:2}, {c:3,r:2}, {c:3,r:3}],
    aToB: [{c:3,r:3}, {c:4,r:3}],
    bToFinal: [{c:4,r:3}],
    finalToStart: [{c:4,r:3}, {c:3,r:3}, {c:2,r:3}, {c:2,r:2}]
  },
  T03: {
    startToA: [{c:5,r:1}, {c:5,r:2}, {c:5,r:3}],
    aToB: [{c:5,r:3}],
    bToFinal: [{c:5,r:3}],
    finalToStart: [{c:5,r:3}, {c:5,r:2}, {c:5,r:1}]
  },
  T04: {
    startToA: [{c:8,r:2}, {c:7,r:2}, {c:7,r:3}],
    aToB: [{c:7,r:3}, {c:6,r:3}],
    bToFinal: [{c:6,r:3}],
    finalToStart: [{c:6,r:3}, {c:7,r:3}, {c:8,r:3}, {c:8,r:2}]
  },
  T05: {
    startToA: [{c:1,r:4}, {c:2,r:4}, {c:3,r:4}],
    aToB: [{c:3,r:4}],
    bToFinal: [{c:3,r:4}],
    finalToStart: [{c:3,r:4}, {c:2,r:4}, {c:1,r:4}]
  },
  T06: {
    startToA: [{c:3,r:3}, {c:4,r:3}, {c:4,r:4}],
    aToB: [{c:4,r:4}, {c:5,r:4}],
    bToFinal: [{c:5,r:4}, {c:4,r:4}],
    finalToStart: [{c:4,r:4}, {c:3,r:4}, {c:3,r:3}]
  },
  T07: {
    startToA: [{c:6,r:2}, {c:6,r:3}, {c:6,r:4}],
    aToB: [{c:6,r:4}],
    bToFinal: [{c:6,r:4}, {c:5,r:4}],
    finalToStart: [{c:5,r:4}, {c:6,r:4}, {c:6,r:3}, {c:6,r:2}]
  },
  T08: {
    startToA: [{c:8,r:4}, {c:7,r:4}],
    aToB: [{c:7,r:4}],
    bToFinal: [{c:7,r:4}, {c:6,r:4}],
    finalToStart: [{c:6,r:4}, {c:7,r:4}, {c:8,r:4}]
  },
  T09: {
    startToA: [{c:9,r:5}, {c:8,r:5}, {c:8,r:4}],
    aToB: [{c:8,r:4}],
    bToFinal: [{c:8,r:4}, {c:7,r:4}],
    finalToStart: [{c:7,r:4}, {c:8,r:4}, {c:9,r:4}, {c:9,r:5}]
  },
  T10: {
    startToA: [{c:1,r:6}, {c:2,r:6}, {c:2,r:5}],
    aToB: [{c:2,r:5}, {c:3,r:5}],
    bToFinal: [{c:3,r:5}],
    finalToStart: [{c:3,r:5}, {c:2,r:5}, {c:1,r:5}, {c:1,r:6}]
  },
  T11: {
    startToA: [{c:3,r:7}, {c:4,r:7}, {c:4,r:6}, {c:4,r:5}],
    aToB: [{c:4,r:5}],
    bToFinal: [{c:4,r:5}],
    finalToStart: [{c:4,r:5}, {c:3,r:5}, {c:3,r:6}, {c:3,r:7}]
  },
  T12: {
    startToA: [{c:5,r:8}, {c:5,r:7}, {c:5,r:6}, {c:5,r:5}],
    aToB: [{c:5,r:5}, {c:6,r:5}],
    bToFinal: [{c:6,r:5}, {c:5,r:5}],
    finalToStart: [{c:5,r:5}, {c:5,r:6}, {c:5,r:7}, {c:5,r:8}]
  },
  T13: {
    startToA: [{c:7,r:7}, {c:6,r:7}, {c:6,r:6}, {c:6,r:5}],
    aToB: [{c:6,r:5}, {c:7,r:5}],
    bToFinal: [{c:7,r:5}, {c:6,r:5}],
    finalToStart: [{c:6,r:5}, {c:7,r:5}, {c:7,r:6}, {c:7,r:7}]
  },
  T14: {
    startToA: [{c:9,r:6}, {c:8,r:6}, {c:8,r:5}],
    aToB: [{c:8,r:5}],
    bToFinal: [{c:8,r:5}, {c:7,r:5}],
    finalToStart: [{c:7,r:5}, {c:8,r:5}, {c:9,r:5}, {c:9,r:6}]
  },
  T15: {
    startToA: [{c:2,r:7}, {c:3,r:7}, {c:4,r:7}, {c:4,r:6}],
    aToB: [{c:4,r:6}],
    bToFinal: [{c:4,r:6}],
    finalToStart: [{c:4,r:6}, {c:3,r:6}, {c:2,r:6}, {c:2,r:7}]
  },
  T16: {
    startToA: [{c:4,r:8}, {c:5,r:8}, {c:5,r:7}],
    aToB: [{c:5,r:7}, {c:5,r:6}],
    bToFinal: [{c:5,r:6}],
    finalToStart: [{c:5,r:6}, {c:4,r:6}, {c:4,r:7}, {c:4,r:8}]
  },
  T17: {
    startToA: [{c:8,r:7}, {c:7,r:7}, {c:6,r:7}, {c:6,r:6}],
    aToB: [{c:6,r:6}, {c:7,r:6}],
    bToFinal: [{c:7,r:6}, {c:6,r:6}],
    finalToStart: [{c:6,r:6}, {c:7,r:6}, {c:8,r:6}, {c:8,r:7}]
  },
  T18: {
    startToA: [{c:6,r:9}, {c:5,r:9}, {c:5,r:8}],
    aToB: [{c:5,r:8}, {c:6,r:8}, {c:6,r:7}],
    bToFinal: [{c:6,r:7}, {c:5,r:7}],
    finalToStart: [{c:5,r:7}, {c:6,r:7}, {c:6,r:8}, {c:6,r:9}]
  }
};

function buildPathSegment(pathArr, startPct, endPct, rotBase) {
  if (pathArr.length === 1) {
    // Only one position, just hold it from startPct to endPct
    return [{ p: endPct, c: pathArr[0].c, r: pathArr[0].r, rot: 0 }];
  }
  
  let segs = [];
  let numMoves = pathArr.length - 1;
  let pctStep = (endPct - startPct) / numMoves;
  
  let lastPos = pathArr[0];
  let rot = rotBase;
  
  for (let i = 1; i < pathArr.length; i++) {
    let nextPos = pathArr[i];
    if (nextPos.c > lastPos.c) rot = 4;
    else if (nextPos.c < lastPos.c) rot = -4;
    else if (nextPos.r > lastPos.r) rot = 2;
    else if (nextPos.r < lastPos.r) rot = -2;
    // else rot remains
    
    let currentPct = startPct + i * pctStep;
    // round to 3 decimal places
    currentPct = Math.round(currentPct * 1000) / 1000;
    
    segs.push({ p: currentPct, c: nextPos.c, r: nextPos.r, rot: rot });
    lastPos = nextPos;
  }
  
  return segs;
}

const tiles = Object.keys(ROUTES).map(id => {
  const route = ROUTES[id];
  let path = [];
  
  // 0% to 10%
  let startC = route.startToA[0].c;
  let startR = route.startToA[0].r;
  path.push({ p: 0, c: startC, r: startR, rot: 0 });
  path.push({ p: 10, c: startC, r: startR, rot: 0 });
  
  // StartToA (10% to 26%)
  let segA = buildPathSegment(route.startToA, 10, 26, 0);
  path.push(...segA);
  
  let endAC = route.startToA[route.startToA.length-1].c;
  let endAR = route.startToA[route.startToA.length-1].r;
  
  // Wrong Shape A quiet settle (26% to 27.5%)
  path.push({ p: 27.5, c: endAC, r: endAR, rot: 0 });
  
  // Wrong Shape A red hold (27.5% - 35%)
  // Unstable rotation: max +/- 1.4
  let unstableA1 = (Math.random() > 0.5 ? 1.4 : -1.4);
  let unstableA2 = -unstableA1;
  path.push({ p: 31, c: endAC, r: endAR, rot: unstableA1 });
  path.push({ p: 35, c: endAC, r: endAR, rot: unstableA2 });
  // snap back at 35 to move
  path.push({ p: 35.001, c: endAC, r: endAR, rot: 0 });
  
  // AToB (35% to 50%)
  let segB = buildPathSegment(route.aToB, 35, 50, 0);
  path.push(...segB);
  
  let endBC = route.aToB[route.aToB.length-1].c;
  let endBR = route.aToB[route.aToB.length-1].r;
  
  // Wrong Shape B quiet settle (50% - 51.5%)
  path.push({ p: 51.5, c: endBC, r: endBR, rot: 0 });
  
  // Wrong Shape B red hold (51.5% - 59%)
  // Unstable rotation: max +/- 0.9
  let unstableB1 = (Math.random() > 0.5 ? 0.9 : -0.9);
  let unstableB2 = -unstableB1;
  path.push({ p: 55, c: endBC, r: endBR, rot: unstableB1 });
  path.push({ p: 59, c: endBC, r: endBR, rot: unstableB2 });
  // snap back at 59 to move
  path.push({ p: 59.001, c: endBC, r: endBR, rot: 0 });
  
  // BToFinal (59% to 76%)
  let segF = buildPathSegment(route.bToFinal, 59, 76, 0);
  path.push(...segF);
  
  let endFC = route.bToFinal[route.bToFinal.length-1].c;
  let endFR = route.bToFinal[route.bToFinal.length-1].r;
  
  // Correct Final quiet settle (76% - 77.5%)
  path.push({ p: 77.5, c: endFC, r: endFR, rot: 0 });
  
  // Correct final hold (77.5% - 90%)
  path.push({ p: 90, c: endFC, r: endFR, rot: 0 });
  
  // FinalToStart (90% to 100%)
  let segS = buildPathSegment(route.finalToStart, 90, 100, 0);
  path.push(...segS);

  // Classify red/green delay timing
  // Group A (earlier) vs Group B vs Group C based on prompt
  let redAStart = 27.5;
  if (['T07','T12','T16'].includes(id)) redAStart = 27.5;
  else if (['T02','T04','T10','T14'].includes(id)) redAStart = 29.5;
  else redAStart = 32;

  let redBStart = 51.5;
  if (['T01','T12','T17','T18'].includes(id)) redBStart = 51.5;
  else if (['T06','T07','T13','T14'].includes(id)) redBStart = 53.5;
  else redBStart = 56;
  
  let greenStart = 77.5;
  if (['T12', 'T07', 'T16', 'T03'].includes(id)) greenStart = 77.5;
  else if (['T06', 'T08', 'T11', 'T13', 'T02', 'T04', 'T15', 'T17'].includes(id)) greenStart = 81.0;
  else if (['T01', 'T05', 'T09', 'T10', 'T14', 'T18'].includes(id)) greenStart = 85.0;
  else greenStart = 88.0;

  return {
    id,
    path,
    redAStart,
    redBStart,
    greenStart
  };
});

fs.writeFileSync('/app/applet/src/components/new_tiles.json', JSON.stringify(tiles, null, 2));
