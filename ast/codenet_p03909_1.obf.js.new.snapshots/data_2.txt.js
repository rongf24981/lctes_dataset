'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x16b)) / 0x1 + parseInt(__DECODE_0__(0x171)) / 0x2 * (-parseInt(__DECODE_0__(0x16c)) / 0x3) + -parseInt(__DECODE_0__(0x169)) / 0x4 * (-parseInt(__DECODE_0__(0x16a)) / 0x5) + parseInt(__DECODE_0__(0x176)) / 0x6 + parseInt(__DECODE_0__(0x170)) / 0x7 * (-parseInt(__DECODE_0__(0x177)) / 0x8) + parseInt(__DECODE_0__(0x172)) / 0x9 + -parseInt(__DECODE_0__(0x16e)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc0574);
function __STRING_ARRAY__() {
  const _0x457123 = ['utf8', 'map', '2818180gpCJnT', '10RklqzA', '1535235dytePw', '3uBmCPs', 'ABCDEFGHIJ', '12605900rbIDuM', 'split', '11249gXTOEc', '2265238dIQaek', '1630692TkLzoY', 'log', 'trim', 'readFileSync', '4729896xSUiPk', '3648kJwNnU'];
  __STRING_ARRAY__ = function () {
    return _0x457123;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(LqxXnm, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x167;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LqxXnm, key);
}
const main = arg => {
  arg = arg[__DECODE_0__(0x174)]()[__DECODE_0__(0x16f)]('\x0a');
  const H = parseInt(arg[0x0]['split']('\x20')[0x0]);
  const W = parseInt(arg[0x0]['split']('\x20')[0x1]);
  const words = arg['slice'](0x1, H + 0x1)[__DECODE_0__(0x168)](s => s[__DECODE_0__(0x16f)]('\x20'));
  const alpha = __DECODE_0__(0x16d)[__DECODE_0__(0x16f)]('');
  for (let i = 0x0; i < H; i++) {
    for (let j = 0x0; j < W; j++) {
      if (words[i][j] === 'snuke') {
        console[__DECODE_0__(0x173)](alpha[j] + (i + 0x1));
        return;
      }
    }
  }
};
main(require('fs')[__DECODE_0__(0x175)]('/dev/stdin', __DECODE_0__(0x167)));
