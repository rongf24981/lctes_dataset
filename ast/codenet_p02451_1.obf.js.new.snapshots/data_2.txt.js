(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x12f)) / 0x1 + parseInt(__DECODE_0__(0x121)) / 0x2 + parseInt(__DECODE_0__(0x12e)) / 0x3 + parseInt(__DECODE_0__(0x12a)) / 0x4 * (parseInt(__DECODE_0__(0x12c)) / 0x5) + parseInt(__DECODE_0__(0x124)) / 0x6 * (parseInt(__DECODE_0__(0x128)) / 0x7) + -parseInt(__DECODE_0__(0x122)) / 0x8 * (-parseInt(__DECODE_0__(0x123)) / 0x9) + parseInt(__DECODE_0__(0x12d)) / 0xa * (-parseInt(__DECODE_0__(0x12b)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4473e);
var input = require('fs')[__DECODE_0__(0x126)]('/dev/stdin', 'utf8');
var arr = input[__DECODE_0__(0x130)]()['split']('\x0a');
var n = arr[__DECODE_0__(0x131)]() - 0x0;
function __STRING_ARRAY__() {
  var _0x55c6c2 = ['set', 'readFileSync', 'has', '106239GgDnIw', 'log', '728164xQAlKP', '121MvKdxx', '5asqyDZ', '316670aKUSvF', '892608ldQaVe', '395926afMWQF', 'trim', 'shift', '46586HPyKCo', '88UjQvNZ', '339984AQiglI', '42bnXNVe'];
  __STRING_ARRAY__ = function () {
    return _0x55c6c2;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(uSTovI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x121;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uSTovI, key);
}
var a = arr[__DECODE_0__(0x131)]()['split']('\x20');
var myMap = new Map();
for (var i = 0x0; i < n; i++) {
  myMap[__DECODE_0__(0x125)](a[i], 0x0);
}
var q = arr[__DECODE_0__(0x131)]();
var s = '';
for (var i = 0x0; i < q; i++) {
  s += (myMap[__DECODE_0__(0x127)](arr[i]) ? 0x1 : 0x0) + '\x0a';
}
console[__DECODE_0__(0x129)](s[__DECODE_0__(0x130)]());
