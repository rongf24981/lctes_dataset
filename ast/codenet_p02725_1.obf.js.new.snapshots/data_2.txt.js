'use strict';

function __DECODE_0__(RRnKiJ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1aa;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RRnKiJ, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1ac)) / 0x1 + -parseInt(__DECODE_0__(0x1b7)) / 0x2 + -parseInt(__DECODE_0__(0x1ab)) / 0x3 + -parseInt(__DECODE_0__(0x1b3)) / 0x4 * (parseInt(__DECODE_0__(0x1aa)) / 0x5) + -parseInt(__DECODE_0__(0x1b5)) / 0x6 + -parseInt(__DECODE_0__(0x1b6)) / 0x7 * (-parseInt(__DECODE_0__(0x1b4)) / 0x8) + parseInt(__DECODE_0__(0x1b2)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6f74c);
function main(input) {
  const args = input[__DECODE_0__(0x1b0)]('\x0a')[0x0];
  const a = input['split']('\x0a')[0x1];
  let as = a[__DECODE_0__(0x1b0)]('\x20');
  const K = Number(args[__DECODE_0__(0x1b0)]('\x20')[0x0]);
  const N = Number(args[__DECODE_0__(0x1b0)]('\x20')[0x1]);
  let ans = 0x0;
  const kh = Math[__DECODE_0__(0x1ad)](K / 0x2);
  for (let i = 0x0; i < N; i++) {
    ans += Math[__DECODE_0__(0x1af)](0x0 - as[i]) > Math['abs'](kh - as[i]) ? Math[__DECODE_0__(0x1af)](kh - as[i]) : Math['abs'](0x0 - as[i]);
  }
  console['log'](ans);
}
main(require('fs')['readFileSync'](__DECODE_0__(0x1b1), __DECODE_0__(0x1ae)));
function __STRING_ARRAY__() {
  const _0x247cf8 = ['25032897bqLWVD', '4iESDOJ', '330512yeEIGz', '2934108xbcGDX', '28ugwZEN', '1346062NOBlad', '2305815RSBflk', '2289072zvHwTF', '103929NQmvVa', 'floor', 'utf8', 'abs', 'split', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x247cf8;
  };
  return __STRING_ARRAY__();
}
