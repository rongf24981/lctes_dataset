'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1b9)) / 0x1 * (-parseInt(__DECODE_0__(0x1af)) / 0x2) + parseInt(__DECODE_0__(0x1b3)) / 0x3 + parseInt(__DECODE_0__(0x1b5)) / 0x4 * (-parseInt(__DECODE_0__(0x1ba)) / 0x5) + -parseInt(__DECODE_0__(0x1a9)) / 0x6 * (parseInt(__DECODE_0__(0x1b0)) / 0x7) + -parseInt(__DECODE_0__(0x1ad)) / 0x8 * (parseInt(__DECODE_0__(0x1ac)) / 0x9) + -parseInt(__DECODE_0__(0x1b8)) / 0xa + parseInt(__DECODE_0__(0x1ae)) / 0xb * (parseInt(__DECODE_0__(0x1ab)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x49df2);
function __STRING_ARRAY__() {
  const _0x5a5ed2 = ['/dev/stdin', 'readFileSync', '1259380kupotI', '539797kbqQLc', '115NdcYBK', 'log', '18QSiTol', 'utf8', '22848jPlvFc', '1706769OpINyl', '8oYBPtx', '5962uVdjTK', '2TzTHUM', '1302546cOxIPO', 'sort', 'split', '368241rDPxAE', 'push', '90108gEdHSG'];
  __STRING_ARRAY__ = function () {
    return _0x5a5ed2;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(NxajBc, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1a9;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NxajBc, key);
}
const Main = input => {
  let xs = input['trim']()['split']('\x0a');
  let N = Number(xs[0x0][__DECODE_0__(0x1b2)]('\x20')[0x0]);
  let K = Number(xs[0x0][__DECODE_0__(0x1b2)]('\x20')[0x1]);
  let l = [];
  for (let i = 0x0; i < N; i++) {
    l[__DECODE_0__(0x1b4)](xs[0x1][__DECODE_0__(0x1b2)]('\x20')[i]);
  }
  const compare = (b, a) => {
    return a - b;
  };
  l[__DECODE_0__(0x1b1)](compare);
  let ans = 0x0;
  for (let i = 0x0; i < K; i++) {
    ans += Number(l[i]);
  }
  console[__DECODE_0__(0x1bb)](ans);
};
Main(require('fs')[__DECODE_0__(0x1b7)](__DECODE_0__(0x1b6), __DECODE_0__(0x1aa)));
