'use strict';

function __STRING_ARRAY__() {
  const _0x10ee83 = ['18966gHRjAy', '2845650VgIPLQ', '14TyljDU', '233478aBdgzb', '147648oSRXRm', '4XhFlka', 'utf8', '10zyhzfF', '44fFdUIb', '/dev/stdin', 'split', '165sWeuWJ', '1141256OueGej', '48018brozNz', '25791gOsKWu'];
  __STRING_ARRAY__ = function () {
    return _0x10ee83;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(eURqEZ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe7;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(eURqEZ, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xe9)) / 0x1 * (-parseInt(__DECODE_0__(0xef)) / 0x2) + parseInt(__DECODE_0__(0xf0)) / 0x3 * (-parseInt(__DECODE_0__(0xe7)) / 0x4) + -parseInt(__DECODE_0__(0xed)) / 0x5 * (-parseInt(__DECODE_0__(0xf1)) / 0x6) + parseInt(__DECODE_0__(0xf3)) / 0x7 * (-parseInt(__DECODE_0__(0xee)) / 0x8) + -parseInt(__DECODE_0__(0xf4)) / 0x9 + parseInt(__DECODE_0__(0xf2)) / 0xa + -parseInt(__DECODE_0__(0xea)) / 0xb * (parseInt(__DECODE_0__(0xf5)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3f73b);
const main = arg => {
  const input = arg['trim']()[__DECODE_0__(0xec)]('\x0a');
  let N = Number(input[0x0][__DECODE_0__(0xec)]('\x20')[0x0]);
  let x = Number(input[0x0][__DECODE_0__(0xec)]('\x20')[0x1]);
  let As = input[0x1][__DECODE_0__(0xec)]('\x20')['map'](n => Number(n));
  let manip = 0x0;
  for (let i = 0x0; i < N; i++) {
    let exceed = As[i] - x;
    if (exceed > 0x0) {
      As[i] = x;
      manip += exceed;
    }
  }
  for (let i = 0x1; i < N - 0x1; i++) {
    let left = As[i - 0x1];
    let current = As[i];
    let right = As[i + 0x1];
    if (left + current > x && current + right > x) {
      As[i] = x - left;
      manip += current - (x - left);
    }
  }
  for (let i = 0x0; i < N - 0x1; i++) {
    let current = As[i];
    let right = As[i + 0x1];
    if (current + right > x) {
      As[i] = x - right;
      manip += current - (x - right);
    }
  }
  console['log'](manip);
};
main(require('fs')['readFileSync'](__DECODE_0__(0xeb), __DECODE_0__(0xe8)));
