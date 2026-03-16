'use strict';

function __STRING_ARRAY__() {
  const _0x1dc694 = ['165XJqvlo', '62812usOWWp', '394940JgpIwS', '2357295POmisM', '128910JNqABO', '159sJFIqB', '1SKrQYs', '7677ANrKaN', '760810jBXBdU', 'log', '1949258whnDBW', 'utf8', '904RuEpyv', 'readFileSync', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x1dc694;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(QYgKAk, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xcc;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QYgKAk, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xd3)) / 0x1 * (-parseInt(__DECODE_0__(0xd7)) / 0x2) + parseInt(__DECODE_0__(0xd2)) / 0x3 * (-parseInt(__DECODE_0__(0xce)) / 0x4) + -parseInt(__DECODE_0__(0xd0)) / 0x5 + -parseInt(__DECODE_0__(0xd1)) / 0x6 + -parseInt(__DECODE_0__(0xcf)) / 0x7 + -parseInt(__DECODE_0__(0xd9)) / 0x8 * (parseInt(__DECODE_0__(0xd4)) / 0x9) + -parseInt(__DECODE_0__(0xd5)) / 0xa * (-parseInt(__DECODE_0__(0xcd)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9bb88);
function Main(input) {
  const ab = input['split']('\x20');
  console[__DECODE_0__(0xd6)]((parseFloat(ab[0x0]) + parseFloat(ab[0x1])) / 0x2);
}
Main(require('fs')[__DECODE_0__(0xda)](__DECODE_0__(0xcc), __DECODE_0__(0xd8)));
