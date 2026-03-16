'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1d8)) / 0x1 * (-parseInt(__DECODE_0__(0x1e7)) / 0x2) + parseInt(__DECODE_0__(0x1e4)) / 0x3 + -parseInt(__DECODE_0__(0x1dd)) / 0x4 * (parseInt(__DECODE_0__(0x1e5)) / 0x5) + -parseInt(__DECODE_0__(0x1e1)) / 0x6 * (-parseInt(__DECODE_0__(0x1da)) / 0x7) + parseInt(__DECODE_0__(0x1d3)) / 0x8 * (-parseInt(__DECODE_0__(0x1d9)) / 0x9) + parseInt(__DECODE_0__(0x1e6)) / 0xa + parseInt(__DECODE_0__(0x1d6)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd83fc);
function __STRING_ARRAY__() {
  const _0x1157ac = ['split', 'length', '3851316zZhjzz', '1467510IuzOWt', '15748760KEEVko', '2jZHVoD', '8kcSCyI', 'utf8', 'map', '19820130eIrHoB', 'slice', '1658813qHYgTH', '10868589phSozJ', '14waJHbo', 'concat', 'trim', '20uwDAes', 'log', 'join', 'pop', '1677666fWkabo'];
  __STRING_ARRAY__ = function () {
    return _0x1157ac;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  const tmp = input[__DECODE_0__(0x1dc)]()[__DECODE_0__(0x1e2)]('\x0a')[__DECODE_0__(0x1d5)](v => v[__DECODE_0__(0x1e2)]('\x20')['map'](v => parseFloat(v)));
  const n = tmp[0x0][0x0];
  const q = tmp[0x0][0x1];
  const edges = tmp[__DECODE_0__(0x1d7)](0x1, n);
  const actions = tmp[__DECODE_0__(0x1d7)](n, n + q);
  const nodes = [...new Array(n + 0x1)]['map'](v => []);
  for (let i = 0x0; i < n - 0x1; i++) {
    const p = edges[i][0x0];
    nodes[p]['push'](edges[i][0x1]);
  }
  const ans = [...new Array(n + 0x1)][__DECODE_0__(0x1d5)](v => 0x0);
  for (let i = 0x0; i < q; i++) {
    const act = actions[i];
    const cnt = act[0x1];
    ans[act[0x0]] += cnt;
    let stack = [...nodes[act[0x0]]];
    while (stack[__DECODE_0__(0x1e3)] > 0x0) {
      const t = stack[__DECODE_0__(0x1e0)]();
      ans[t] += cnt;
      stack = stack[__DECODE_0__(0x1db)](nodes[t]);
    }
  }
  console[__DECODE_0__(0x1de)](ans[__DECODE_0__(0x1d7)](0x1)[__DECODE_0__(0x1df)]('\x20'));
}
function __DECODE_0__(ssnGaD, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d3;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ssnGaD, key);
}
main(require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0x1d4)));
