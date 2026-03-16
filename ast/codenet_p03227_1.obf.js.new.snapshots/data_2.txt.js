'use strict';

function __DECODE_0__(SAHsrV, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x189;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SAHsrV, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x18b)) / 0x1 + parseInt(__DECODE_0__(0x18d)) / 0x2 * (parseInt(__DECODE_0__(0x191)) / 0x3) + -parseInt(__DECODE_0__(0x19a)) / 0x4 * (parseInt(__DECODE_0__(0x193)) / 0x5) + parseInt(__DECODE_0__(0x199)) / 0x6 * (parseInt(__DECODE_0__(0x192)) / 0x7) + -parseInt(__DECODE_0__(0x18a)) / 0x8 + -parseInt(__DECODE_0__(0x195)) / 0x9 * (parseInt(__DECODE_0__(0x18f)) / 0xa) + parseInt(__DECODE_0__(0x18e)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xf39c4);
function Main(input) {
  const S = input['split']('\x0a')[0x0];
  if (S[__DECODE_0__(0x190)] <= 0x2) {
    console['log'](S);
  } else {
    console[__DECODE_0__(0x197)](S[__DECODE_0__(0x18c)]('')['reverse']()[__DECODE_0__(0x194)](''));
  }
}
Main(require('fs')[__DECODE_0__(0x189)](__DECODE_0__(0x196), __DECODE_0__(0x198)));
function __STRING_ARRAY__() {
  const _0x588845 = ['utf8', '30wQedkZ', '1975980JMeGdw', 'readFileSync', '1843184BODwNa', '454164OqIaAl', 'split', '26DFIfhI', '14272412lNNIAH', '30gXNOwb', 'length', '237045lSGFqU', '1308510siJtjG', '20pBFwXC', 'join', '1527885bPRUut', '/dev/stdin', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x588845;
  };
  return __STRING_ARRAY__();
}
