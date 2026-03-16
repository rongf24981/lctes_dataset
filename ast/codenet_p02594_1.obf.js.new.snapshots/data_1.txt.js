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
const a0_0x4a239c = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x3dc8b1 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x3dc8b1(0x16b)) / 0x1 + -parseInt(_0x3dc8b1(0x164)) / 0x2 + -parseInt(_0x3dc8b1(0x160)) / 0x3 * (parseInt(_0x3dc8b1(0x15f)) / 0x4) + -parseInt(_0x3dc8b1(0x16d)) / 0x5 * (-parseInt(_0x3dc8b1(0x167)) / 0x6) + parseInt(_0x3dc8b1(0x163)) / 0x7 + -parseInt(_0x3dc8b1(0x168)) / 0x8 + parseInt(_0x3dc8b1(0x16c)) / 0x9 * (parseInt(_0x3dc8b1(0x165)) / 0xa);
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
  const _0xf1babe = __DECODE_0__;
  arg = arg['trim']()[_0xf1babe(0x162)]('\x0a');
  const N = parseInt(arg[0x0][_0xf1babe(0x162)]('\x20')[0x0]);
  console[_0xf1babe(0x16a)](N >= 0x1e ? _0xf1babe(0x161) : 'No');
};
main(require('fs')['readFileSync'](a0_0x4a239c(0x169), a0_0x4a239c(0x166)));
