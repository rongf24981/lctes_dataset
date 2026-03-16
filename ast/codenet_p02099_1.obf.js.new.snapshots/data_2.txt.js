(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x14f)) / 0x1 + -parseInt(__DECODE_0__(0x14a)) / 0x2 + -parseInt(__DECODE_0__(0x148)) / 0x3 + -parseInt(__DECODE_0__(0x141)) / 0x4 + parseInt(__DECODE_0__(0x142)) / 0x5 + parseInt(__DECODE_0__(0x140)) / 0x6 * (parseInt(__DECODE_0__(0x14b)) / 0x7) + parseInt(__DECODE_0__(0x143)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x52918);
var input = require('fs')['readFileSync'](__DECODE_0__(0x145), __DECODE_0__(0x150));
var arr = input[__DECODE_0__(0x14c)]()[__DECODE_0__(0x144)]('\x0a');
var n = arr[__DECODE_0__(0x146)]() - 0x0;
arr = arr[__DECODE_0__(0x149)](v => v[__DECODE_0__(0x147)]('.', ''))['map'](Number);
var a = [];
function __DECODE_0__(PtDWdM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x140;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PtDWdM, key);
}
for (var i = 0x0; i <= 0xfa0; i++) {
  a[i] = 0x0;
}
arr['forEach'](v => a[v]++);
var ans = [];
var s = [];
s[0x0] = a[0x0];
for (var i = 0x1; i <= 0xfa0; i++) {
  s[i] = s[i - 0x1] + a[i];
}
arr['forEach'](v => {
  var point = 0x0;
  point += a[v] - 0x1;
  if (v != 0x0) {
    point += s[v - 0x1] * 0x3;
  }
  ans[__DECODE_0__(0x14e)](point);
});
function __STRING_ARRAY__() {
  var _0x5ab916 = ['4295856oANoBN', 'split', '/dev/stdin', 'shift', 'replace', '478413jFHYeN', 'map', '744068oNbkjt', '7jPPuJh', 'trim', 'join', 'push', '173448xDZHsO', 'utf8', '2673294zQNhvS', '2279936gCKeSP', '3153030wzXFid'];
  __STRING_ARRAY__ = function () {
    return _0x5ab916;
  };
  return __STRING_ARRAY__();
}
console['log'](ans[__DECODE_0__(0x14d)]('\x0a'));
