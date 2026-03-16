'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x74)) / 0x1 * (-parseInt(__DECODE_0__(0x6b)) / 0x2) + parseInt(__DECODE_0__(0x73)) / 0x3 * (parseInt(__DECODE_0__(0x69)) / 0x4) + -parseInt(__DECODE_0__(0x76)) / 0x5 * (-parseInt(__DECODE_0__(0x70)) / 0x6) + parseInt(__DECODE_0__(0x6d)) / 0x7 * (parseInt(__DECODE_0__(0x71)) / 0x8) + parseInt(__DECODE_0__(0x6e)) / 0x9 * (parseInt(__DECODE_0__(0x67)) / 0xa) + -parseInt(__DECODE_0__(0x6f)) / 0xb + -parseInt(__DECODE_0__(0x72)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xedcd7);
function main(input) {
  const N = parseInt(input);
  let distance = N - 0x1;
  for (let a = 0x2; a <= Math[__DECODE_0__(0x75)](N); ++a) {
    let b = N / a;
    if (Number[__DECODE_0__(0x65)](b) && a + b - 0x2 < distance) {
      distance = a + b - 0x2;
    }
  }
  console[__DECODE_0__(0x6c)](distance);
}
function __DECODE_0__(hHcZEu, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x65;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hHcZEu, key);
}
main(require('fs')[__DECODE_0__(0x6a)](__DECODE_0__(0x68), __DECODE_0__(0x66)));
function __STRING_ARRAY__() {
  const _0x4e9b17 = ['150434luwtHG', 'sqrt', '85WPwThb', 'isInteger', 'utf8', '70rZeiKM', '/dev/stdin', '40oUMlKW', 'readFileSync', '16zhcrHk', 'log', '389333bsitps', '1963701LbpiGn', '21160194MzsZQG', '206916wJIRxF', '184gvWUJK', '20462772fRiqmo', '1989uIpJAv'];
  __STRING_ARRAY__ = function () {
    return _0x4e9b17;
  };
  return __STRING_ARRAY__();
}
