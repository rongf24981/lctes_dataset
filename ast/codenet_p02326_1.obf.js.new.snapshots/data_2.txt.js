(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x125)) / 0x1 + -parseInt(__DECODE_0__(0x124)) / 0x2 + parseInt(__DECODE_0__(0x11f)) / 0x3 * (-parseInt(__DECODE_0__(0x128)) / 0x4) + parseInt(__DECODE_0__(0x120)) / 0x5 * (parseInt(__DECODE_0__(0x12a)) / 0x6) + -parseInt(__DECODE_0__(0x121)) / 0x7 * (parseInt(__DECODE_0__(0x126)) / 0x8) + -parseInt(__DECODE_0__(0x11c)) / 0x9 + -parseInt(__DECODE_0__(0x127)) / 0xa * (-parseInt(__DECODE_0__(0x11d)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc8d64);
function __STRING_ARRAY__() {
  var _0x41f46e = ['1316596wcuQVM', '1928pPRrhA', '33699910ClNzxT', '2644sPdCbw', 'min', '24DPsYTO', 'readFileSync', 'split', 'map', '3133557wvPcFM', '11XUpjRB', 'shift', '246gpyhrF', '77710bpZmCN', '2569DZFxDC', '/dev/stdin', 'utf8', '1604226BWrbpF'];
  __STRING_ARRAY__ = function () {
    return _0x41f46e;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')[__DECODE_0__(0x119)](__DECODE_0__(0x122), __DECODE_0__(0x123));
var arr = input['trim']()[__DECODE_0__(0x11a)]('\x0a');
var [h, w] = arr[__DECODE_0__(0x11e)]()['split']('\x20')[__DECODE_0__(0x11b)](Number);
function __DECODE_0__(djWbxG, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x119;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(djWbxG, key);
}
var yx = [];
for (var i = 0x0; i < h; i++) {
  yx[i] = arr[__DECODE_0__(0x11e)]()['split']('\x20')[__DECODE_0__(0x11b)](v => 0x1 - (v - 0x0));
}
for (var y = 0x1; y < h; y++) {
  for (var x = 0x1; x < w; x++) {
    if (yx[y][x] == 0x1) {
      yx[y][x] = Math[__DECODE_0__(0x129)](yx[y - 0x1][x], yx[y][x - 0x1], yx[y - 0x1][x - 0x1]) + 0x1;
    }
  }
}
var max = 0x0;
for (var y = 0x0; y < h; y++) {
  for (var x = 0x0; x < w; x++) {
    max = Math['max'](max, yx[y][x]);
  }
}
console['log'](max * max);
