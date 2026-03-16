'use strict';

function __STRING_ARRAY__() {
  const _0x352416 = ['220Oxltgd', '26DSqTLB', '1856239DztTsd', 'log', '6ScTdEm', '9204kwQdFB', '889470fUlvqb', '11IYJRjM', '27nwEzib', '/dev/stdin', '678234pGYERK', 'split', 'map', 'readFileSync', '6395772RDgKSz', '285752cTcPmZ', '12026BxjQFU'];
  __STRING_ARRAY__ = function () {
    return _0x352416;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(iQlVeL, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xcf;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iQlVeL, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xdf)) / 0x1 * (parseInt(__DECODE_0__(0xdd)) / 0x2) + parseInt(__DECODE_0__(0xd7)) / 0x3 + parseInt(__DECODE_0__(0xd2)) / 0x4 * (parseInt(__DECODE_0__(0xde)) / 0x5) + -parseInt(__DECODE_0__(0xd1)) / 0x6 * (parseInt(__DECODE_0__(0xcf)) / 0x7) + -parseInt(__DECODE_0__(0xdc)) / 0x8 + parseInt(__DECODE_0__(0xd5)) / 0x9 * (-parseInt(__DECODE_0__(0xd3)) / 0xa) + -parseInt(__DECODE_0__(0xd4)) / 0xb * (-parseInt(__DECODE_0__(0xdb)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x21424);
function Main(input) {
  input = input[__DECODE_0__(0xd8)]('\x0a')[0x0];
  const numbers = input[__DECODE_0__(0xd8)]('\x20')[__DECODE_0__(0xd9)](i => {
    return parseInt(i, 0xa);
  });
  const a = numbers[0x0];
  const b = numbers[0x1];
  let result = 0x0;
  if (a > b) {
    result = 0x2 * a - 0x1;
  } else {
    if (b > a) {
      result = 0x2 * b - 0x1;
    } else {
      result = 0x2 * a;
    }
  }
  console[__DECODE_0__(0xd0)](result);
}
Main(require('fs')[__DECODE_0__(0xda)](__DECODE_0__(0xd6), 'utf8'));
