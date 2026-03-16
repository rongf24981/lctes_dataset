'use strict';

function __DECODE_0__(GvuqDm, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x16b;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GvuqDm, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x173)) / 0x1 + -parseInt(__DECODE_0__(0x172)) / 0x2 + parseInt(__DECODE_0__(0x178)) / 0x3 + parseInt(__DECODE_0__(0x16d)) / 0x4 + parseInt(__DECODE_0__(0x16c)) / 0x5 * (parseInt(__DECODE_0__(0x16b)) / 0x6) + parseInt(__DECODE_0__(0x175)) / 0x7 * (parseInt(__DECODE_0__(0x179)) / 0x8) + -parseInt(__DECODE_0__(0x16f)) / 0x9 * (parseInt(__DECODE_0__(0x177)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbbc17);
const main = arg => {
  const [a, b, c] = arg['split']('\x0a')[0x0][__DECODE_0__(0x174)]('\x20');
  console[__DECODE_0__(0x170)](b - a == c - b ? __DECODE_0__(0x171) : 'NO');
};
main(require('fs')[__DECODE_0__(0x176)](__DECODE_0__(0x16e), 'utf8'));
function __STRING_ARRAY__() {
  const _0x10c0e3 = ['14637PoiXnO', 'readFileSync', '3018110hSOrNM', '1659300MlGtXw', '5336WUxRHA', '12tURqOb', '420365nxVtVP', '4417260wumMZj', '/dev/stdin', '27vJiuVx', 'log', 'YES', '2639174nbMTln', '226191dmrCoc', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x10c0e3;
  };
  return __STRING_ARRAY__();
}
