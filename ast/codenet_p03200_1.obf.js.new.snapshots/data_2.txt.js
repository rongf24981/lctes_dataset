'use strict';

function __DECODE_0__(NblPLp, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x9f;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NblPLp, key);
}
function __STRING_ARRAY__() {
  const _0x2e197b = ['5945272ewCdUh', '2005633NYYZjS', '2HWyQDR', '18yIKnOF', '4JKLGaC', '/dev/stdin', '3945635Wborjl', '32629392icahtc', '11gkPFtz', 'utf8', '9GKtJBZ', 'split', 'readFileSync', 'map', 'log', '1561863zpqJXQ', '232068Zrmuzs', 'filter', 'reduce', '5912710VbJQLK'];
  __STRING_ARRAY__ = function () {
    return _0x2e197b;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xb0)) / 0x1 + -parseInt(__DECODE_0__(0xa2)) / 0x2 * (parseInt(__DECODE_0__(0xaf)) / 0x3) + -parseInt(__DECODE_0__(0xa4)) / 0x4 * (parseInt(__DECODE_0__(0xa6)) / 0x5) + -parseInt(__DECODE_0__(0xa3)) / 0x6 * (-parseInt(__DECODE_0__(0xa1)) / 0x7) + -parseInt(__DECODE_0__(0xa0)) / 0x8 * (parseInt(__DECODE_0__(0xaa)) / 0x9) + parseInt(__DECODE_0__(0x9f)) / 0xa * (-parseInt(__DECODE_0__(0xa8)) / 0xb) + parseInt(__DECODE_0__(0xa7)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xab7db);
function main(input) {
  const inputs = input[__DECODE_0__(0xab)]('\x0a')[__DECODE_0__(0xb1)](x => x !== '');
  const s = inputs[0x0];
  const result = s[__DECODE_0__(0xab)]('')[__DECODE_0__(0xad)]((input, index) => input === 'W' ? index : -0x1)[__DECODE_0__(0xb1)](x => x !== -0x1)[__DECODE_0__(0xb2)]((acc, cur, index) => acc + cur - index, 0x0);
  console[__DECODE_0__(0xae)](result);
}
main(require('fs')[__DECODE_0__(0xac)](__DECODE_0__(0xa5), __DECODE_0__(0xa9)));
