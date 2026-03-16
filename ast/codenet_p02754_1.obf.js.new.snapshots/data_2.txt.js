'use strict';

function __DECODE_0__(Xtzeih, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xa2;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Xtzeih, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xa8)) / 0x1 * (-parseInt(__DECODE_0__(0xa7)) / 0x2) + -parseInt(__DECODE_0__(0xa9)) / 0x3 + parseInt(__DECODE_0__(0xa5)) / 0x4 + -parseInt(__DECODE_0__(0xb0)) / 0x5 * (parseInt(__DECODE_0__(0xae)) / 0x6) + parseInt(__DECODE_0__(0xb1)) / 0x7 * (-parseInt(__DECODE_0__(0xaa)) / 0x8) + -parseInt(__DECODE_0__(0xa6)) / 0x9 + parseInt(__DECODE_0__(0xad)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x50ebd);
function __STRING_ARRAY__() {
  const _0x5006fc = ['406515RpvVYW', '45624SPbgbQ', 'split', 'floor', '14223370gCcChX', '2119932zAXAuI', '/dev/stdin', '5KOURqY', '511NydYXY', 'utf8', 'log', 'readFileSync', '275868ULpIMz', '1440594IeqCxT', '11134MxZFSM', '17zJARSu'];
  __STRING_ARRAY__ = function () {
    return _0x5006fc;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  let kari = input[0x0]['trim']()[__DECODE_0__(0xab)]('\x20');
  let n = parseInt(kari[0x0]);
  let a = parseInt(kari[0x1]);
  let b = parseInt(kari[0x2]);
  let c = a + b;
  let ans = 0x0;
  if (a === 0x0) {
    console['log'](0x0);
  } else {
    if (b === 0x0) {
      console[__DECODE_0__(0xa3)](n);
    } else {
      if (n % c < a) {
        ans = Math[__DECODE_0__(0xac)](n / c) * a + n % c;
      } else {
        ans = Math[__DECODE_0__(0xac)](n / c) * a + a;
      }
      console[__DECODE_0__(0xa3)](ans);
    }
  }
}
main(require('fs')[__DECODE_0__(0xa4)](__DECODE_0__(0xaf), __DECODE_0__(0xa2))['trim']()[__DECODE_0__(0xab)]('\x0a'));
