'use strict';

function __STRING_ARRAY__() {
  const _0x53887f = ['/dev/stdin', 'log', '762qnJWDk', 'utf8', '18edFQzY', 'readFileSync', '569779YBHzSE', '469616gpyxAI', 'split', '2576484WzmiXn', '30NadrJi', '1043928MCdGcT', '14366935gHajVW', '570BdiTll', '2227088pBsazM', 'safe', '45jotGLk', 'abs'];
  __STRING_ARRAY__ = function () {
    return _0x53887f;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(GZjWZY, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd8;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GZjWZY, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xd9)) / 0x1 + -parseInt(__DECODE_0__(0xe9)) / 0x2 + -parseInt(__DECODE_0__(0xe4)) / 0x3 * (-parseInt(__DECODE_0__(0xe7)) / 0x4) + -parseInt(__DECODE_0__(0xdb)) / 0x5 * (parseInt(__DECODE_0__(0xe2)) / 0x6) + -parseInt(__DECODE_0__(0xe6)) / 0x7 + parseInt(__DECODE_0__(0xdc)) / 0x8 * (-parseInt(__DECODE_0__(0xde)) / 0x9) + -parseInt(__DECODE_0__(0xd8)) / 0xa * (-parseInt(__DECODE_0__(0xda)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc3f90);
const main = INPUT => {
  const input = INPUT['split']('\x0a')[0x0];
  const [X, A, B] = input[__DECODE_0__(0xe8)]('\x20')['map'](n => Number(n));
  if (A - B >= 0x0) {
    console[__DECODE_0__(0xe1)]('delicious');
  } else {
    if (A - B < 0x0 && Math[__DECODE_0__(0xdf)](A - B) <= X) {
      console[__DECODE_0__(0xe1)](__DECODE_0__(0xdd));
    } else {
      console[__DECODE_0__(0xe1)]('dangerous');
    }
  }
};
main(require('fs')[__DECODE_0__(0xe5)](__DECODE_0__(0xe0), __DECODE_0__(0xe3)));
