'use strict';

function __STRING_ARRAY__() {
  const _0x22985f = ['195820VAmbAy', '32270FXGTVI', 'push', '2990064KkZEvi', '490QgDYDJ', 'map', 'fill', '906hiRFAv', 'shift', 'forEach', 'log', '3083941AmRicm', '289150nEpAfD', '1347123ftirgY', 'length', 'split', 'readFileSync', 'utf8', '333ejIwHG', '18ZWqlQa'];
  __STRING_ARRAY__ = function () {
    return _0x22985f;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x189)) / 0x1 * (parseInt(__DECODE_0__(0x18c)) / 0x2) + parseInt(__DECODE_0__(0x192)) / 0x3 + -parseInt(__DECODE_0__(0x185)) / 0x4 + parseInt(__DECODE_0__(0x191)) / 0x5 * (-parseInt(__DECODE_0__(0x184)) / 0x6) + -parseInt(__DECODE_0__(0x190)) / 0x7 + parseInt(__DECODE_0__(0x188)) / 0x8 + parseInt(__DECODE_0__(0x183)) / 0x9 * (-parseInt(__DECODE_0__(0x186)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x400da);
function __DECODE_0__(xXmNrs, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x180;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xXmNrs, key);
}
function main(inp) {
  inp = inp['trim']()[__DECODE_0__(0x180)]('\x0a');
  const N = Number(inp[__DECODE_0__(0x18d)]());
  let G = [...new Array(N)][__DECODE_0__(0x18a)](a => []);
  let vp = new Array();
  inp[__DECODE_0__(0x18e)](r => {
    r = r[__DECODE_0__(0x180)]('\x20')[__DECODE_0__(0x18a)](n => n - 0x1);
    G[r[0x0]][__DECODE_0__(0x187)](r[0x1]);
    G[r[0x1]]['push'](r[0x0]);
    vp[__DECODE_0__(0x187)](r[0x0] + '-' + r[0x1]);
  });
  let K = 0x0;
  let I = new Map();
  let cs = new Array(N)[__DECODE_0__(0x18b)](0x0);
  let used = new Array(N)[__DECODE_0__(0x18b)](0x0);
  let que = new Array();
  used[0x0] = 0x1;
  que['push'](0x0);
  while (que[__DECODE_0__(0x193)]) {
    let v = que[__DECODE_0__(0x18d)]();
    if (K < G[v]['length']) {
      K = G[v][__DECODE_0__(0x193)];
    }
    let cur = 0x1;
    for (const u of G[v]) {
      if (used[u]) {
        continue;
      }
      if (cur === cs[v]) {
        cur++;
      }
      cs[u] = I[u + '-' + v] = I[v + '-' + u] = cur++;
      used[u] = 0x1;
      que[__DECODE_0__(0x187)](u);
    }
  }
  console[__DECODE_0__(0x18f)](K);
  vp[__DECODE_0__(0x18e)](v => {
    console[__DECODE_0__(0x18f)](I[v]);
  });
}
main(require('fs')[__DECODE_0__(0x181)]('/dev/stdin', __DECODE_0__(0x182)));
