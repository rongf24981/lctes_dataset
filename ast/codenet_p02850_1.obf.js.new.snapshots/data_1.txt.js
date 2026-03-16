'use strict';

const a0_0x58b19a = __DECODE_0__;
function __STRING_ARRAY__() {
  const _0x22985f = ['195820VAmbAy', '32270FXGTVI', 'push', '2990064KkZEvi', '490QgDYDJ', 'map', 'fill', '906hiRFAv', 'shift', 'forEach', 'log', '3083941AmRicm', '289150nEpAfD', '1347123ftirgY', 'length', 'split', 'readFileSync', 'utf8', '333ejIwHG', '18ZWqlQa'];
  __STRING_ARRAY__ = function () {
    return _0x22985f;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const _0x47fcd8 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x47fcd8(0x189)) / 0x1 * (parseInt(_0x47fcd8(0x18c)) / 0x2) + parseInt(_0x47fcd8(0x192)) / 0x3 + -parseInt(_0x47fcd8(0x185)) / 0x4 + parseInt(_0x47fcd8(0x191)) / 0x5 * (-parseInt(_0x47fcd8(0x184)) / 0x6) + -parseInt(_0x47fcd8(0x190)) / 0x7 + parseInt(_0x47fcd8(0x188)) / 0x8 + parseInt(_0x47fcd8(0x183)) / 0x9 * (-parseInt(_0x47fcd8(0x186)) / 0xa);
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
  const _0xeb1791 = __DECODE_0__;
  inp = inp['trim']()[_0xeb1791(0x180)]('\x0a');
  const N = Number(inp[_0xeb1791(0x18d)]());
  let G = [...new Array(N)][_0xeb1791(0x18a)](a => []);
  let vp = new Array();
  inp[_0xeb1791(0x18e)](r => {
    const _0x5b34c4 = _0xeb1791;
    r = r[_0x5b34c4(0x180)]('\x20')[_0x5b34c4(0x18a)](n => n - 0x1);
    G[r[0x0]][_0x5b34c4(0x187)](r[0x1]);
    G[r[0x1]]['push'](r[0x0]);
    vp[_0x5b34c4(0x187)](r[0x0] + '-' + r[0x1]);
  });
  let K = 0x0;
  let I = new Map();
  let cs = new Array(N)[_0xeb1791(0x18b)](0x0);
  let used = new Array(N)[_0xeb1791(0x18b)](0x0);
  let que = new Array();
  used[0x0] = 0x1;
  que['push'](0x0);
  while (que[_0xeb1791(0x193)]) {
    let v = que[_0xeb1791(0x18d)]();
    if (K < G[v]['length']) {
      K = G[v][_0xeb1791(0x193)];
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
      que[_0xeb1791(0x187)](u);
    }
  }
  console[_0xeb1791(0x18f)](K);
  vp[_0xeb1791(0x18e)](v => {
    const _0x2c795b = _0xeb1791;
    console[_0x2c795b(0x18f)](I[v]);
  });
}
main(require('fs')[a0_0x58b19a(0x181)]('/dev/stdin', a0_0x58b19a(0x182)));
