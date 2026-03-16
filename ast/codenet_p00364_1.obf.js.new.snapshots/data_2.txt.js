(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1c9)) / 0x1 * (parseInt(__DECODE_0__(0x1d5)) / 0x2) + -parseInt(__DECODE_0__(0x1d1)) / 0x3 + parseInt(__DECODE_0__(0x1d4)) / 0x4 * (-parseInt(__DECODE_0__(0x1d8)) / 0x5) + -parseInt(__DECODE_0__(0x1ca)) / 0x6 * (-parseInt(__DECODE_0__(0x1c8)) / 0x7) + -parseInt(__DECODE_0__(0x1cf)) / 0x8 * (parseInt(__DECODE_0__(0x1d7)) / 0x9) + parseInt(__DECODE_0__(0x1c4)) / 0xa + parseInt(__DECODE_0__(0x1c5)) / 0xb * (-parseInt(__DECODE_0__(0x1d6)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x44eaf);
var input = require('fs')['readFileSync'](__DECODE_0__(0x1c6), __DECODE_0__(0x1c7));
var arr = input[__DECODE_0__(0x1cc)]()['split']('\x0a');
function __STRING_ARRAY__() {
  var _0x262498 = ['utf8', '29043KFTmHM', '405mslBvm', '492EunutU', 'map', 'trim', 'split', 'forEach', '2680hFSkRG', 'shift', '505233kuHVkS', 'max', 'log', '200xkXkwn', '1690GtGzhu', '708CgOPIA', '1224WeeTfy', '28055ybwZmH', '1864640NnmJtD', '17171wVNuAa', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x262498;
  };
  return __STRING_ARRAY__();
}
arr = arr[__DECODE_0__(0x1cb)](v => v[__DECODE_0__(0x1cd)]('\x20')[__DECODE_0__(0x1cb)](Number));
var [n, t] = arr[__DECODE_0__(0x1d0)]();
var max = 0x0;
function __DECODE_0__(MGgVfV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1c4;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MGgVfV, key);
}
arr[__DECODE_0__(0x1ce)](v => {
  max = Math[__DECODE_0__(0x1d2)](max, v[0x1] / v[0x0]);
});
console[__DECODE_0__(0x1d3)]((max * t)['toFixed'](0x6));
