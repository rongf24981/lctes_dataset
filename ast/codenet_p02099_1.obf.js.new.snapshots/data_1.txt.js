var a0_0x491fde = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x44f847 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x44f847(0x14f)) / 0x1 + -parseInt(_0x44f847(0x14a)) / 0x2 + -parseInt(_0x44f847(0x148)) / 0x3 + -parseInt(_0x44f847(0x141)) / 0x4 + parseInt(_0x44f847(0x142)) / 0x5 + parseInt(_0x44f847(0x140)) / 0x6 * (parseInt(_0x44f847(0x14b)) / 0x7) + parseInt(_0x44f847(0x143)) / 0x8;
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
var input = require('fs')['readFileSync'](a0_0x491fde(0x145), a0_0x491fde(0x150));
var arr = input[a0_0x491fde(0x14c)]()[a0_0x491fde(0x144)]('\x0a');
var n = arr[a0_0x491fde(0x146)]() - 0x0;
arr = arr[a0_0x491fde(0x149)](v => v[a0_0x491fde(0x147)]('.', ''))['map'](Number);
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
  var _0x3dad7c = a0_0x491fde;
  var point = 0x0;
  point += a[v] - 0x1;
  if (v != 0x0) {
    point += s[v - 0x1] * 0x3;
  }
  ans[_0x3dad7c(0x14e)](point);
});
function __STRING_ARRAY__() {
  var _0x5ab916 = ['4295856oANoBN', 'split', '/dev/stdin', 'shift', 'replace', '478413jFHYeN', 'map', '744068oNbkjt', '7jPPuJh', 'trim', 'join', 'push', '173448xDZHsO', 'utf8', '2673294zQNhvS', '2279936gCKeSP', '3153030wzXFid'];
  __STRING_ARRAY__ = function () {
    return _0x5ab916;
  };
  return __STRING_ARRAY__();
}
console['log'](ans[a0_0x491fde(0x14d)]('\x0a'));
