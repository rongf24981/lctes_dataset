'use strict;';

function __STRING_ARRAY__() {
  const _0x549b32 = ['/dev/stdin', '120zOXMUq', 'Yes', '136420aEhFnk', '6332385flINWp', 'split', '4CsErlF', 'trim', '7VWpRbV', '838650TnCWAn', '5548384PmrNBa', '1861684fBgUVo', '2427228BajUzq', 'log', '2ZIBpuT', '855FjUNhG', '2064966uKNzrI'];
  __STRING_ARRAY__ = function () {
    return _0x549b32;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x14a)) / 0x1 * (parseInt(__DECODE_0__(0x156)) / 0x2) + -parseInt(__DECODE_0__(0x14c)) / 0x3 + -parseInt(__DECODE_0__(0x153)) / 0x4 * (parseInt(__DECODE_0__(0x151)) / 0x5) + -parseInt(__DECODE_0__(0x148)) / 0x6 + parseInt(__DECODE_0__(0x155)) / 0x7 * (-parseInt(__DECODE_0__(0x157)) / 0x8) + -parseInt(__DECODE_0__(0x14b)) / 0x9 * (-parseInt(__DECODE_0__(0x150)) / 0xa) + -parseInt(__DECODE_0__(0x158)) / 0xb * (-parseInt(__DECODE_0__(0x14e)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbd033);
main(require('fs')['readFileSync'](__DECODE_0__(0x14d), 'UTF-8')[__DECODE_0__(0x154)]()['split']('\x0a'));
function __DECODE_0__(PLMTUS, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x148;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PLMTUS, key);
}
function main(input) {
  input = input[0x0][__DECODE_0__(0x152)]('');
  let num = 0x2;
  let isSame = !![];
  while (num > 0x0) {
    if (input[num] !== input[0x0]) {
      isSame = ![];
      break;
    }
    num--;
  }
  console[__DECODE_0__(0x149)](isSame ? 'No' : __DECODE_0__(0x14f));
}
