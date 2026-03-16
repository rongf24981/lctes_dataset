'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1d4)) / 0x1 + -parseInt(__DECODE_0__(0x1da)) / 0x2 + parseInt(__DECODE_0__(0x1d5)) / 0x3 * (parseInt(__DECODE_0__(0x1d3)) / 0x4) + parseInt(__DECODE_0__(0x1d7)) / 0x5 * (parseInt(__DECODE_0__(0x1d0)) / 0x6) + -parseInt(__DECODE_0__(0x1cf)) / 0x7 * (-parseInt(__DECODE_0__(0x1d9)) / 0x8) + parseInt(__DECODE_0__(0x1db)) / 0x9 + -parseInt(__DECODE_0__(0x1cb)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbbf7e);
const main = input => {
  const args = input[__DECODE_0__(0x1d6)]('\x0a')[__DECODE_0__(0x1d1)](arg => arg[__DECODE_0__(0x1d6)]('\x20'));
  const x = parseInt(args[0x0][0x0], 0xa);
  const y = parseInt(args[0x0][0x1], 0xa);
  const group1 = [0x1, 0x3, 0x5, 0x7, 0x8, 0xa, 0xc];
  const group2 = [0x4, 0x6, 0x9, 0xb];
  if (group1[__DECODE_0__(0x1d8)](x) && group1[__DECODE_0__(0x1d8)](y)) {
    console[__DECODE_0__(0x1d2)]('Yes');
  } else {
    if (group2['includes'](x) && group2[__DECODE_0__(0x1d8)](y)) {
      console[__DECODE_0__(0x1d2)]('Yes');
    } else {
      console[__DECODE_0__(0x1d2)]('No');
    }
  }
};
function __STRING_ARRAY__() {
  const _0x538637 = ['34244250RNJCSc', 'utf8', 'readFileSync', '/dev/stdin', '553uXgDfp', '6HcIfmv', 'map', 'log', '6087476XtazUi', '1433954hhPuXh', '3cZhDow', 'split', '5370965cHVdgl', 'includes', '18456ycQlgS', '1295242fZroYB', '5667255QLbsiL'];
  __STRING_ARRAY__ = function () {
    return _0x538637;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(VwkuRm, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1cb;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VwkuRm, key);
}
main(require('fs')[__DECODE_0__(0x1cd)](__DECODE_0__(0x1ce), __DECODE_0__(0x1cc)));
