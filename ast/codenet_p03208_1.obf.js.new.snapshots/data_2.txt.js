'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x145)) / 0x1 * (parseInt(__DECODE_0__(0x153)) / 0x2) + parseInt(__DECODE_0__(0x150)) / 0x3 * (-parseInt(__DECODE_0__(0x143)) / 0x4) + parseInt(__DECODE_0__(0x149)) / 0x5 + parseInt(__DECODE_0__(0x14e)) / 0x6 + -parseInt(__DECODE_0__(0x148)) / 0x7 * (-parseInt(__DECODE_0__(0x14b)) / 0x8) + parseInt(__DECODE_0__(0x144)) / 0x9 * (-parseInt(__DECODE_0__(0x14c)) / 0xa) + -parseInt(__DECODE_0__(0x142)) / 0xb * (parseInt(__DECODE_0__(0x152)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1f226);
function __STRING_ARRAY__() {
  const _0x2ad1f8 = ['map', '844136AjpfgO', '70260nUKUcO', '/dev/stdin', '1200492EiEQbj', 'slice', '5871ZhccDz', 'push', '5604UtlmQO', '7834ohTnTq', 'log', '2981MRaRTq', '4ChEQeT', '108LNLIXF', '47yDoJbO', 'sort', 'split', '14fjePot', '566675PLKest'];
  __STRING_ARRAY__ = function () {
    return _0x2ad1f8;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(OBZbwb, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x142;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OBZbwb, key);
}
function main(arg) {
  const inputs = arg[__DECODE_0__(0x147)]('\x0a');
  const N = parseInt(inputs[0x0]['split']('\x20')[0x0]);
  const K = parseInt(inputs[0x0][__DECODE_0__(0x147)]('\x20')[0x1]);
  const list = inputs[__DECODE_0__(0x14f)](0x1, N + 0x1)[__DECODE_0__(0x14a)](x => parseInt(x))[__DECODE_0__(0x146)]((a, b) => {
    return a - b;
  });
  let i;
  let sa = [];
  for (i = 0x0; i < N - K + 0x1; ++i) {
    sa[__DECODE_0__(0x151)](list[i + K - 0x1] - list[i]);
  }
  console[__DECODE_0__(0x154)](Math['min'](...sa));
}
main(require('fs')['readFileSync'](__DECODE_0__(0x14d), 'utf8'));
