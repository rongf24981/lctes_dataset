'use strict';

const a0_0x7e253a = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x11ae09 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x11ae09(0xfb)) / 0x1 + parseInt(_0x11ae09(0x101)) / 0x2 * (parseInt(_0x11ae09(0xfa)) / 0x3) + parseInt(_0x11ae09(0xfe)) / 0x4 + -parseInt(_0x11ae09(0xf4)) / 0x5 * (parseInt(_0x11ae09(0xf6)) / 0x6) + parseInt(_0x11ae09(0xfd)) / 0x7 + -parseInt(_0x11ae09(0xf3)) / 0x8 * (parseInt(_0x11ae09(0xf5)) / 0x9) + -parseInt(_0x11ae09(0x100)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4f240);
function __STRING_ARRAY__() {
  const _0x44d24e = ['5266600BlRSGu', '2lOsPdW', 'log', '216zPxrGQ', '49845GdVyYI', '75735QECXgN', '300gMgVsh', 'map', 'split', 'sort', '1200999rCkTRj', '304867QHGbbJ', 'trim', '1718563SKnRDm', '2503064YChZrC', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x44d24e;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(gXJfAz, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xf2;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(gXJfAz, key);
}
function Main(input) {
  const _0x446ac4 = __DECODE_0__;
  const params = input['trim']()[_0x446ac4(0xf8)]('\x0a');
  const N = Number(params[0x0]['trim']());
  const sortedA = params[0x1][_0x446ac4(0xfc)]()[_0x446ac4(0xf8)]('\x20')[_0x446ac4(0xf7)](Number)[_0x446ac4(0xf9)]((a, b) => b - a);
  let total = 0x0;
  for (let i = 0x0; i < N; i++) {
    total += sortedA[i * 0x2 + 0x1];
  }
  console[_0x446ac4(0xf2)](total);
}
Main(require('fs')['readFileSync'](a0_0x7e253a(0xff), 'utf8'));
