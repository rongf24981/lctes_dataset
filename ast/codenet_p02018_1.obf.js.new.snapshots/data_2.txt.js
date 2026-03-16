function __DECODE_0__(OBStmd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x141;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OBStmd, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x147)) / 0x1 + parseInt(__DECODE_0__(0x148)) / 0x2 + parseInt(__DECODE_0__(0x146)) / 0x3 * (parseInt(__DECODE_0__(0x149)) / 0x4) + parseInt(__DECODE_0__(0x14f)) / 0x5 + parseInt(__DECODE_0__(0x14e)) / 0x6 + parseInt(__DECODE_0__(0x14d)) / 0x7 + -parseInt(__DECODE_0__(0x150)) / 0x8 * (parseInt(__DECODE_0__(0x144)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xf06e5);
var input = require('fs')[__DECODE_0__(0x14a)]('/dev/stdin', __DECODE_0__(0x14c));
input = input[__DECODE_0__(0x141)]()['split']('\x0a');
arr = input[0x1][__DECODE_0__(0x145)]('\x20')[__DECODE_0__(0x151)](Number);
arr = arr[__DECODE_0__(0x14b)](v => v % 0x2 == 0x0);
console[__DECODE_0__(0x142)](arr[__DECODE_0__(0x143)]);
function __STRING_ARRAY__() {
  var _0x46eb42 = ['split', '9rcJYil', '1292928BiPrpk', '329132ffinST', '2596760LGEMCe', 'readFileSync', 'filter', 'utf8', '5617717nkQTMx', '540282CtnAiL', '5567380blJgqd', '8tMZbDd', 'map', 'trim', 'log', 'length', '16564113vfpWDL'];
  __STRING_ARRAY__ = function () {
    return _0x46eb42;
  };
  return __STRING_ARRAY__();
}
