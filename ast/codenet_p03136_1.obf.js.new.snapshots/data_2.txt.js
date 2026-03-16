'use strict';

function __DECODE_0__(ENFFox, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x7b;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ENFFox, key);
}
function __STRING_ARRAY__() {
  const _0x3b0f82 = ['415WAzCqU', '6821880zTzCvC', '1302147TToumt', 'map', '507791UasigK', 'Yes', '1366804URTGgY', 'trim', 'readFileSync', 'split', '34674DzeAXE', '1754746yprrhU', 'log', 'utf8', '9478368oAFaVX', '16hCzoLN'];
  __STRING_ARRAY__ = function () {
    return _0x3b0f82;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x7c)) / 0x1 + parseInt(__DECODE_0__(0x7e)) / 0x2 + -parseInt(__DECODE_0__(0x8a)) / 0x3 + -parseInt(__DECODE_0__(0x89)) / 0x4 + -parseInt(__DECODE_0__(0x88)) / 0x5 * (parseInt(__DECODE_0__(0x82)) / 0x6) + parseInt(__DECODE_0__(0x83)) / 0x7 + parseInt(__DECODE_0__(0x87)) / 0x8 * (parseInt(__DECODE_0__(0x86)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe2ce7);
const main = arg => {
  arg = arg[__DECODE_0__(0x7f)]()[__DECODE_0__(0x81)]('\x0a');
  const N = parseInt(arg[0x0][__DECODE_0__(0x81)]('\x20')[0x0]);
  let L = arg[0x1]['split']('\x20')[__DECODE_0__(0x7b)](n => parseInt(n))['sort']((a, b) => b - a);
  const longest = L['shift']();
  const sum = L['reduce']((m, n) => m + n);
  console[__DECODE_0__(0x84)](longest < sum ? __DECODE_0__(0x7d) : 'No');
};
main(require('fs')[__DECODE_0__(0x80)]('/dev/stdin', __DECODE_0__(0x85)));
