'use strict';

const a0_0x549d92 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x53a712 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x53a712(0x1d8)) / 0x1 * (-parseInt(_0x53a712(0x1e7)) / 0x2) + parseInt(_0x53a712(0x1e4)) / 0x3 + -parseInt(_0x53a712(0x1dd)) / 0x4 * (parseInt(_0x53a712(0x1e5)) / 0x5) + -parseInt(_0x53a712(0x1e1)) / 0x6 * (-parseInt(_0x53a712(0x1da)) / 0x7) + parseInt(_0x53a712(0x1d3)) / 0x8 * (-parseInt(_0x53a712(0x1d9)) / 0x9) + parseInt(_0x53a712(0x1e6)) / 0xa + parseInt(_0x53a712(0x1d6)) / 0xb;
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
  const _0x113e38 = __DECODE_0__;
  const tmp = input[_0x113e38(0x1dc)]()[_0x113e38(0x1e2)]('\x0a')[_0x113e38(0x1d5)](v => v[_0x113e38(0x1e2)]('\x20')['map'](v => parseFloat(v)));
  const n = tmp[0x0][0x0];
  const q = tmp[0x0][0x1];
  const edges = tmp[_0x113e38(0x1d7)](0x1, n);
  const actions = tmp[_0x113e38(0x1d7)](n, n + q);
  const nodes = [...new Array(n + 0x1)]['map'](v => []);
  for (let i = 0x0; i < n - 0x1; i++) {
    const p = edges[i][0x0];
    nodes[p]['push'](edges[i][0x1]);
  }
  const ans = [...new Array(n + 0x1)][_0x113e38(0x1d5)](v => 0x0);
  for (let i = 0x0; i < q; i++) {
    const act = actions[i];
    const cnt = act[0x1];
    ans[act[0x0]] += cnt;
    let stack = [...nodes[act[0x0]]];
    while (stack[_0x113e38(0x1e3)] > 0x0) {
      const t = stack[_0x113e38(0x1e0)]();
      ans[t] += cnt;
      stack = stack[_0x113e38(0x1db)](nodes[t]);
    }
  }
  console[_0x113e38(0x1de)](ans[_0x113e38(0x1d7)](0x1)[_0x113e38(0x1df)]('\x20'));
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
main(require('fs')['readFileSync']('/dev/stdin', a0_0x549d92(0x1d4)));
