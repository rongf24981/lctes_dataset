'use strict';

function __DECODE_0__(lnPQSp, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ef;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(lnPQSp, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1f7)) / 0x1 + parseInt(__DECODE_0__(0x1f1)) / 0x2 + -parseInt(__DECODE_0__(0x1f0)) / 0x3 * (-parseInt(__DECODE_0__(0x1f4)) / 0x4) + -parseInt(__DECODE_0__(0x1fa)) / 0x5 + parseInt(__DECODE_0__(0x1f6)) / 0x6 * (-parseInt(__DECODE_0__(0x1ef)) / 0x7) + -parseInt(__DECODE_0__(0x1f9)) / 0x8 * (parseInt(__DECODE_0__(0x1fc)) / 0x9) + parseInt(__DECODE_0__(0x1f3)) / 0xa * (parseInt(__DECODE_0__(0x1f5)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb3055);
const main = arg => {
  arg = arg['trim']()[__DECODE_0__(0x1f2)]('\x0a');
  const N = parseInt(arg[0x0]);
  const A = arg[0x1][__DECODE_0__(0x1f2)]('\x20')[__DECODE_0__(0x1f8)](n => parseInt(n));
  const totalSum = A[__DECODE_0__(0x1fe)]((m, n) => m + n);
  let left = A[0x0];
  let right = totalSum - A[0x0];
  let answer = Infinity;
  for (let i = 0x0; i < N - 0x1; i++) {
    let diff = Math['abs'](right - left);
    answer = Math[__DECODE_0__(0x1fb)](answer, diff);
    right -= A[parseInt(i) + 0x1];
    left += A[parseInt(i) + 0x1];
  }
  console['log'](answer);
};
function __STRING_ARRAY__() {
  const _0x33009e = ['readFileSync', 'reduce', '1029lJJyXt', '6636meOtdE', '219600zfKMFI', 'split', '10mOtdtd', '2572sVcxwY', '30560893NBisYb', '53574nqKaca', '237357NovKXt', 'map', '1433680VaYFfb', '7133220XRMvJI', 'min', '54uEBVVe'];
  __STRING_ARRAY__ = function () {
    return _0x33009e;
  };
  return __STRING_ARRAY__();
}
main(require('fs')[__DECODE_0__(0x1fd)]('/dev/stdin', 'utf8'));
