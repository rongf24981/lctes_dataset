'use strict';

function __DECODE_0__(yckLkA, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d1;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yckLkA, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1d3)) / 0x1 * (-parseInt(__DECODE_0__(0x1d4)) / 0x2) + parseInt(__DECODE_0__(0x1d5)) / 0x3 + -parseInt(__DECODE_0__(0x1de)) / 0x4 + parseInt(__DECODE_0__(0x1da)) / 0x5 * (parseInt(__DECODE_0__(0x1dc)) / 0x6) + -parseInt(__DECODE_0__(0x1df)) / 0x7 + parseInt(__DECODE_0__(0x1d9)) / 0x8 * (-parseInt(__DECODE_0__(0x1dd)) / 0x9) + -parseInt(__DECODE_0__(0x1d6)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x58ea9);
function Main(input) {
  const date = input[__DECODE_0__(0x1d8)]('\x0a')[0x0][__DECODE_0__(0x1d2)](/^.{4}/, 0x7e2);
  console[__DECODE_0__(0x1d7)](date);
}
function __STRING_ARRAY__() {
  const _0x4c008b = ['360978vjnubJ', '4pvGUsk', '1386396lWHclE', '4256660CUHwYA', 'log', 'split', '93144JNxwvj', '3011585WooWTk', 'readFileSync', '6gZrABY', '243nAFbha', '2292620sjMLLw', '763154FfZTgz', 'utf8', 'replace'];
  __STRING_ARRAY__ = function () {
    return _0x4c008b;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0x1db)]('/dev/stdin', __DECODE_0__(0x1d1)));
