'use strict';

function __STRING_ARRAY__() {
  const _0x437d91 = ['4411725rATvCT', 'Yes', '4rjvBHy', '1476296AmBWOD', '3537550nQRITF', '6467810aPfgpr', '11EtkzKY', '15981678UdcgOh', 'length', '2AlswrK', 'utf8', '8603mIWaVm', 'readFileSync', '4506ZLjzMc', 'split', 'trim', '13334896TdLiGA'];
  __STRING_ARRAY__ = function () {
    return _0x437d91;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xb6)) / 0x1 + -parseInt(__DECODE_0__(0xbc)) / 0x2 * (parseInt(__DECODE_0__(0xb3)) / 0x3) + parseInt(__DECODE_0__(0xb5)) / 0x4 * (parseInt(__DECODE_0__(0xb7)) / 0x5) + -parseInt(__DECODE_0__(0xaf)) / 0x6 * (parseInt(__DECODE_0__(0xad)) / 0x7) + parseInt(__DECODE_0__(0xb2)) / 0x8 + parseInt(__DECODE_0__(0xba)) / 0x9 + -parseInt(__DECODE_0__(0xb8)) / 0xa * (-parseInt(__DECODE_0__(0xb9)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe2545);
const Main = input => {
  let xs = input[__DECODE_0__(0xb1)]()[__DECODE_0__(0xb0)]('');
  let len = xs[__DECODE_0__(0xbb)];
  let ans = 0x0;
  for (let i = 0x0; i <= len; i++) {
    if (i % 0x2 == 0x0 && xs[i] == 'h' && [i + 0x1] != 'h') {
      ans += 0x1;
    } else {
      if (i % 0x2 == 0x1 && xs[i] == 'i' && xs[i + 0x1] != 'i') {
        ans += 0x1;
      } else {
        ans += 0x0;
      }
    }
  }
  if (ans >= 0x2) {
    console['log'](__DECODE_0__(0xb4));
  } else {
    console['log']('No');
  }
};
function __DECODE_0__(qLlqKT, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xad;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qLlqKT, key);
}
Main(require('fs')[__DECODE_0__(0xae)]('/dev/stdin', __DECODE_0__(0xbd)));
