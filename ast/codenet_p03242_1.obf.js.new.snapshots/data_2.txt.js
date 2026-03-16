'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1ae)) / 0x1 + parseInt(__DECODE_0__(0x1b5)) / 0x2 * (-parseInt(__DECODE_0__(0x1b1)) / 0x3) + parseInt(__DECODE_0__(0x1b7)) / 0x4 + -parseInt(__DECODE_0__(0x1b8)) / 0x5 + parseInt(__DECODE_0__(0x1ba)) / 0x6 + -parseInt(__DECODE_0__(0x1b9)) / 0x7 + parseInt(__DECODE_0__(0x1ad)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x24b89);
function __DECODE_0__(kiMOoG, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ad;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(kiMOoG, key);
}
function __STRING_ARRAY__() {
  const _0x570d0e = ['304320aMPOyh', '692090hUlaSY', '217896DzgWON', '1574184SGRjuh', '166383aLhAdc', 'utf8', 'split', '3CBfcDn', 'log', '/dev/stdin', 'reduce', '30106HGJvuG', 'map', '1033960aPFVMf'];
  __STRING_ARRAY__ = function () {
    return _0x570d0e;
  };
  return __STRING_ARRAY__();
}
const main = input => {
  let n = input[0x0][__DECODE_0__(0x1b0)]('');
  console[__DECODE_0__(0x1b2)](n[__DECODE_0__(0x1b6)](val => val == '9' ? 0x1 + '' : 0x9 + '')[__DECODE_0__(0x1b4)]((acc, cur) => acc + cur));
};
main(require('fs')['readFileSync'](__DECODE_0__(0x1b3), __DECODE_0__(0x1af))[__DECODE_0__(0x1b0)]('\x0a'));
