'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xfb)) / 0x1 + parseInt(__DECODE_0__(0x101)) / 0x2 * (parseInt(__DECODE_0__(0xfa)) / 0x3) + parseInt(__DECODE_0__(0xfe)) / 0x4 + -parseInt(__DECODE_0__(0xf4)) / 0x5 * (parseInt(__DECODE_0__(0xf6)) / 0x6) + parseInt(__DECODE_0__(0xfd)) / 0x7 + -parseInt(__DECODE_0__(0xf3)) / 0x8 * (parseInt(__DECODE_0__(0xf5)) / 0x9) + -parseInt(__DECODE_0__(0x100)) / 0xa;
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
  const params = input['trim']()[__DECODE_0__(0xf8)]('\x0a');
  const N = Number(params[0x0]['trim']());
  const sortedA = params[0x1][__DECODE_0__(0xfc)]()[__DECODE_0__(0xf8)]('\x20')[__DECODE_0__(0xf7)](Number)[__DECODE_0__(0xf9)]((a, b) => b - a);
  let total = 0x0;
  for (let i = 0x0; i < N; i++) {
    total += sortedA[i * 0x2 + 0x1];
  }
  console[__DECODE_0__(0xf2)](total);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0xff), 'utf8'));
