'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1bf)) / 0x1 * (-parseInt(__DECODE_0__(0x1c6)) / 0x2) + -parseInt(__DECODE_0__(0x1ca)) / 0x3 * (parseInt(__DECODE_0__(0x1c1)) / 0x4) + -parseInt(__DECODE_0__(0x1be)) / 0x5 + parseInt(__DECODE_0__(0x1c4)) / 0x6 * (parseInt(__DECODE_0__(0x1bb)) / 0x7) + -parseInt(__DECODE_0__(0x1c5)) / 0x8 * (parseInt(__DECODE_0__(0x1c3)) / 0x9) + -parseInt(__DECODE_0__(0x1bc)) / 0xa + parseInt(__DECODE_0__(0x1c8)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7dbeb);
function __STRING_ARRAY__() {
  const _0x4aa706 = ['4923VtzISL', '16950dIxdAq', '5672VASNOh', '158KXWmNe', 'readFileSync', '31674269nkRMBn', 'split', '3SRQBBb', '1141lgjERy', '2518060qLJDvZ', '/dev/stdin', '3966015JgtCIA', '7507DmYlJr', 'trim', '3196072cENiLY', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x4aa706;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(dlGXKj, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1bb;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dlGXKj, key);
}
const main = arg => {
  arg = arg[__DECODE_0__(0x1c0)]()[__DECODE_0__(0x1c9)]('\x0a');
  const N = ~~arg[0x0];
  const S = arg['slice'](0x1, N + 0x1)['map'](n => ~~n);
  let now = 0x1;
  let cnt = 0x0;
  while (now !== 0x2) {
    now = S[now - 0x1];
    cnt++;
    if (cnt > N) {
      console['log'](-0x1);
      return;
    }
  }
  console[__DECODE_0__(0x1c2)](cnt);
};
main(require('fs')[__DECODE_0__(0x1c7)](__DECODE_0__(0x1bd), 'utf8'));
