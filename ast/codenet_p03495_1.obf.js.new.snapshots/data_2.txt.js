'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1de)) / 0x1 * (-parseInt(__DECODE_0__(0x1e0)) / 0x2) + -parseInt(__DECODE_0__(0x1e2)) / 0x3 + parseInt(__DECODE_0__(0x1e1)) / 0x4 * (-parseInt(__DECODE_0__(0x1e4)) / 0x5) + -parseInt(__DECODE_0__(0x1e3)) / 0x6 + -parseInt(__DECODE_0__(0x1d6)) / 0x7 + -parseInt(__DECODE_0__(0x1d7)) / 0x8 * (parseInt(__DECODE_0__(0x1d2)) / 0x9) + parseInt(__DECODE_0__(0x1d5)) / 0xa * (parseInt(__DECODE_0__(0x1d9)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6682d);
function main(s) {
  s = s['split']('\x0a');
  const K = Number(s[0x0][__DECODE_0__(0x1d8)]('\x20')[0x1]);
  const balls = s[0x1][__DECODE_0__(0x1d8)]('\x20')[__DECODE_0__(0x1db)](el => Number(el));
  const countBucket = [...Array(0x30d41)][__DECODE_0__(0x1d3)](0x0);
  for (const num of balls) {
    countBucket[num] += 0x1;
  }
  countBucket[__DECODE_0__(0x1d4)]((a, b) => b - a);
  const answer = countBucket[__DECODE_0__(0x1dd)](K)[__DECODE_0__(0x1da)]((a, b) => a + b);
  console['log'](answer);
}
function __STRING_ARRAY__() {
  const _0xd0dae3 = ['utf8', '135kWORfP', 'fill', 'sort', '12371840aXwGrL', '3327835WVGijT', '425680FugBiP', 'split', '22ucILoM', 'reduce', 'map', 'readFileSync', 'slice', '2GuenZt', '/dev/stdin', '2202mvFhqR', '16nobqoz', '1037520yIrOEE', '2196828wboUoB', '88940NeiCGD'];
  __STRING_ARRAY__ = function () {
    return _0xd0dae3;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(dYkXeR, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d2;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dYkXeR, key);
}
main(require('fs')[__DECODE_0__(0x1dc)](__DECODE_0__(0x1df), __DECODE_0__(0x1e5)));
