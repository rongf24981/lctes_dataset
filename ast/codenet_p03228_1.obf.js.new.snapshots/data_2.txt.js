'use strict';

function __DECODE_0__(peUPNS, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x145;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(peUPNS, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x149)) / 0x1 * (-parseInt(__DECODE_0__(0x152)) / 0x2) + parseInt(__DECODE_0__(0x14e)) / 0x3 * (-parseInt(__DECODE_0__(0x148)) / 0x4) + parseInt(__DECODE_0__(0x14d)) / 0x5 + -parseInt(__DECODE_0__(0x147)) / 0x6 * (parseInt(__DECODE_0__(0x151)) / 0x7) + parseInt(__DECODE_0__(0x14b)) / 0x8 + -parseInt(__DECODE_0__(0x150)) / 0x9 + parseInt(__DECODE_0__(0x153)) / 0xa * (parseInt(__DECODE_0__(0x14c)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1b2e8);
function __STRING_ARRAY__() {
  const _0x3175e5 = ['4756jLfhgo', '23771ncDpQv', 'utf8', '1419560LhjrlJ', '35189aMYBZo', '311290uYPtDb', '123aKqBuM', 'split', '147240rKZjtY', '1380211LrKUpN', '4DvdTjt', '270MSjAwJ', 'readFileSync', 'log', '6FasNBI'];
  __STRING_ARRAY__ = function () {
    return _0x3175e5;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  const tmp = input[__DECODE_0__(0x14f)]('\x20');
  let A = parseInt(tmp[0x0], 0xa);
  let B = parseInt(tmp[0x1], 0xa);
  const K = tmp[0x2];
  for (let i = 0x0; i < K; i++) {
    if (i % 0x2 == 0x0) {
      if (A % 0x2 == 0x1) {
        A--;
      }
      B += A / 0x2;
      A /= 0x2;
    } else {
      if (B % 0x2 == 0x1) {
        B--;
      }
      A += B / 0x2;
      B /= 0x2;
    }
  }
  console[__DECODE_0__(0x146)](A, B);
}
Main(require('fs')[__DECODE_0__(0x145)]('/dev/stdin', __DECODE_0__(0x14a)));
