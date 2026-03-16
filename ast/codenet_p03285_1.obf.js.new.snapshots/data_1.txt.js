'use strict';

const a0_0x509170 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x1dddc2 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x1dddc2(0x120)) / 0x1 + parseInt(_0x1dddc2(0x11a)) / 0x2 + -parseInt(_0x1dddc2(0x11e)) / 0x3 + parseInt(_0x1dddc2(0x121)) / 0x4 + parseInt(_0x1dddc2(0x11b)) / 0x5 + -parseInt(_0x1dddc2(0x125)) / 0x6 + -parseInt(_0x1dddc2(0x124)) / 0x7 * (parseInt(_0x1dddc2(0x126)) / 0x8);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe1e31);
function __DECODE_0__(QYHIVs, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x11a;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QYHIVs, key);
}
function Main(input) {
  let N = Number(input);
  const func = () => {
    const _0x528f44 = __DECODE_0__;
    if (N < 0x4) {
      console[_0x528f44(0x123)]('No');
    } else {
      if (N % 0x4 === 0x0) {
        console[_0x528f44(0x123)](_0x528f44(0x122));
      } else {
        if (N % 0x7 === 0x0) {
          console[_0x528f44(0x123)](_0x528f44(0x122));
        } else {
          N -= 0x4;
          func();
        }
      }
    }
  };
  func();
}
;
function __STRING_ARRAY__() {
  const _0x364d4f = ['2663304ojpMBV', 'Yes', 'log', '938RSnlIO', '2209650IxOPMf', '164264mtvuyP', 'trim', '1643786LAwakn', '7114370QtzbGA', 'readFileSync', '/dev/stdin', '1196808VriraH', 'utf8', '1533273OZbSik'];
  __STRING_ARRAY__ = function () {
    return _0x364d4f;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[a0_0x509170(0x11c)](a0_0x509170(0x11d), a0_0x509170(0x11f))[a0_0x509170(0x127)]());
