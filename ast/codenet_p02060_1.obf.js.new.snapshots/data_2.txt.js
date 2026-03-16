(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xe1)) / 0x1 * (-parseInt(__DECODE_0__(0xe3)) / 0x2) + -parseInt(__DECODE_0__(0xe7)) / 0x3 + -parseInt(__DECODE_0__(0xee)) / 0x4 + -parseInt(__DECODE_0__(0xdf)) / 0x5 * (parseInt(__DECODE_0__(0xe4)) / 0x6) + -parseInt(__DECODE_0__(0xe9)) / 0x7 + -parseInt(__DECODE_0__(0xe2)) / 0x8 * (-parseInt(__DECODE_0__(0xec)) / 0x9) + parseInt(__DECODE_0__(0xed)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x994f6);
var input = require('fs')[__DECODE_0__(0xeb)]('/dev/stdin', 'utf8');
var arr = input[__DECODE_0__(0xe6)]()[__DECODE_0__(0xe8)]('\x0a');
var n = arr[__DECODE_0__(0xe5)]() - 0x0;
var p = arr[__DECODE_0__(0xe5)]()[__DECODE_0__(0xe8)]('\x20')[__DECODE_0__(0xea)](Number);
var t = arr[__DECODE_0__(0xe5)]()['split']('\x20')['map'](Number);
var s = [];
for (var i = 0x0; i <= 0xc8; i++) {
  s[i] = Infinity;
}
s[0x0] = 0x0;
for (var i = 0x0; i <= 0x64; i++) {
  if (s[i] == Infinity) {
    continue;
  }
  s[i + t[0x0]] = Math[__DECODE_0__(0xe0)](s[i] + p[0x0], s[i + t[0x0]]);
  s[i + t[0x1]] = Math['min'](s[i] + p[0x1], s[i + t[0x1]]);
  s[i + t[0x2]] = Math[__DECODE_0__(0xe0)](s[i] + p[0x2], s[i + t[0x2]]);
  s[i + t[0x3]] = Math[__DECODE_0__(0xe0)](s[i] + p[0x3], s[i + t[0x3]]);
}
var min = Infinity;
for (var i = n; i <= 0xc8; i++) {
  min = Math['min'](min, s[i]);
}
console[__DECODE_0__(0xef)](min);
function __DECODE_0__(usuSlV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xdf;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(usuSlV, key);
}
function __STRING_ARRAY__() {
  var _0x556c76 = ['log', '15GUoKXP', 'min', '2rugsqS', '5760sgFSLI', '1168862RtiShD', '402726xaFoky', 'shift', 'trim', '2267997mqTivF', 'split', '8037064gPRdIj', 'map', 'readFileSync', '1359RyQwgS', '25193830ljjgOz', '4253972cgdFfR'];
  __STRING_ARRAY__ = function () {
    return _0x556c76;
  };
  return __STRING_ARRAY__();
}
