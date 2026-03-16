'use strict';

function __STRING_ARRAY__() {
  const _0x1a5609 = ['141260OWNQQy', '12CvGMwT', '12seWTso', '48tpcuta', '8ClNrwJ', 'readFileSync', '89307nzanud', '10714938DhbDPY', '2tcCcLo', 'pow', '150868VniFWf', '226277nGoRVC', 'log', 'utf8', '438229pRbaai', 'map', '270HcdrEM', '4395811qTmMst', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x1a5609;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(VUDuHj, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x69;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VUDuHj, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x7a)) / 0x1 * (-parseInt(__DECODE_0__(0x77)) / 0x2) + -parseInt(__DECODE_0__(0x72)) / 0x3 * (-parseInt(__DECODE_0__(0x79)) / 0x4) + parseInt(__DECODE_0__(0x6f)) / 0x5 * (-parseInt(__DECODE_0__(0x70)) / 0x6) + -parseInt(__DECODE_0__(0x6d)) / 0x7 * (-parseInt(__DECODE_0__(0x73)) / 0x8) + -parseInt(__DECODE_0__(0x75)) / 0x9 * (-parseInt(__DECODE_0__(0x6c)) / 0xa) + -parseInt(__DECODE_0__(0x6a)) / 0xb * (parseInt(__DECODE_0__(0x71)) / 0xc) + -parseInt(__DECODE_0__(0x76)) / 0xd;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x56108);
function main(input) {
  const lines = input[__DECODE_0__(0x6e)]('\x0a');
  const N = lines[0x0][__DECODE_0__(0x6e)]('\x20')[__DECODE_0__(0x6b)](x => parseInt(x))[0x0];
  const M = lines[0x0][__DECODE_0__(0x6e)]('\x20')[__DECODE_0__(0x6b)](x => parseInt(x))[0x1];
  let result = ((N - M) * 0x64 + M * 0x76c) * Math[__DECODE_0__(0x78)](0x2, M);
  console[__DECODE_0__(0x7b)](result);
}
main(require('fs')[__DECODE_0__(0x74)]('/dev/stdin', __DECODE_0__(0x69)));
