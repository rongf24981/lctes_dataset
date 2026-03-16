'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xd2)) / 0x1 + parseInt(__DECODE_0__(0xdc)) / 0x2 * (-parseInt(__DECODE_0__(0xd5)) / 0x3) + parseInt(__DECODE_0__(0xd6)) / 0x4 + parseInt(__DECODE_0__(0xd1)) / 0x5 + parseInt(__DECODE_0__(0xd0)) / 0x6 * (parseInt(__DECODE_0__(0xdf)) / 0x7) + parseInt(__DECODE_0__(0xd8)) / 0x8 * (-parseInt(__DECODE_0__(0xd9)) / 0x9) + -parseInt(__DECODE_0__(0xd4)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8b794);
function __STRING_ARRAY__() {
  const _0xcf33ae = ['600138dOzuco', 'ABD', '5358520AKUhyp', '201hyMQyW', '4236824JvIUmy', '/dev/stdin', '32RdlvtK', '968706gTOfeO', 'utf8', 'log', '24678BQvKdl', 'ABC', 'trim', '25655iMnmaa', 'readFileSync', '1026xDQKrs', '391630MNzhMp'];
  __STRING_ARRAY__ = function () {
    return _0xcf33ae;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  const N = Number(input);
  if (N <= 0x3e7) {
    console['log'](__DECODE_0__(0xdd));
  } else {
    console[__DECODE_0__(0xdb)](__DECODE_0__(0xd3));
  }
}
function __DECODE_0__(mVdTEq, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xcf;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mVdTEq, key);
}
Main(require('fs')[__DECODE_0__(0xcf)](__DECODE_0__(0xd7), __DECODE_0__(0xda))[__DECODE_0__(0xde)]());
