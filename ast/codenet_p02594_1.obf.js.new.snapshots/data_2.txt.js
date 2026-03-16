'use strict';

function __DECODE_0__(cvLFXV, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x15f;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(cvLFXV, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x16b)) / 0x1 + -parseInt(__DECODE_0__(0x164)) / 0x2 + -parseInt(__DECODE_0__(0x160)) / 0x3 * (parseInt(__DECODE_0__(0x15f)) / 0x4) + -parseInt(__DECODE_0__(0x16d)) / 0x5 * (-parseInt(__DECODE_0__(0x167)) / 0x6) + parseInt(__DECODE_0__(0x163)) / 0x7 + -parseInt(__DECODE_0__(0x168)) / 0x8 + parseInt(__DECODE_0__(0x16c)) / 0x9 * (parseInt(__DECODE_0__(0x165)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x77e54);
function __STRING_ARRAY__() {
  const _0x29fcbd = ['Yes', 'split', '4733071Nzwnkx', '1747782BmZVBF', '265870PWPkMt', 'utf8', '1158qFaTto', '3137592kVtAUR', '/dev/stdin', 'log', '520075MguEXZ', '324EsMyYE', '10895crInHf', '10052KMxAIz', '975TJuSqB'];
  __STRING_ARRAY__ = function () {
    return _0x29fcbd;
  };
  return __STRING_ARRAY__();
}
const main = arg => {
  arg = arg['trim']()[__DECODE_0__(0x162)]('\x0a');
  const N = parseInt(arg[0x0][__DECODE_0__(0x162)]('\x20')[0x0]);
  console[__DECODE_0__(0x16a)](N >= 0x1e ? __DECODE_0__(0x161) : 'No');
};
main(require('fs')['readFileSync'](__DECODE_0__(0x169), __DECODE_0__(0x166)));
