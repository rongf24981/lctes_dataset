(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xd7)) / 0x1 * (parseInt(__DECODE_0__(0xe0)) / 0x2) + -parseInt(__DECODE_0__(0xd5)) / 0x3 * (parseInt(__DECODE_0__(0xe3)) / 0x4) + parseInt(__DECODE_0__(0xda)) / 0x5 * (-parseInt(__DECODE_0__(0xd6)) / 0x6) + -parseInt(__DECODE_0__(0xe2)) / 0x7 + -parseInt(__DECODE_0__(0xdb)) / 0x8 * (-parseInt(__DECODE_0__(0xd8)) / 0x9) + parseInt(__DECODE_0__(0xe7)) / 0xa + parseInt(__DECODE_0__(0xde)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd63ff);
var input = require('fs')[__DECODE_0__(0xe8)](__DECODE_0__(0xe1), __DECODE_0__(0xd3));
var arr = input[__DECODE_0__(0xd4)]()[__DECODE_0__(0xdf)]('\x0a');
var n = arr[__DECODE_0__(0xe6)]()['split']('\x20')[0x0] - 0x0;
var x = [];
for (var i = 0x1; i <= n; i++) {
  x[__DECODE_0__(0xd9)]([i, -0x1 * i]);
}
arr[__DECODE_0__(0xdd)](function (v, i) {
  x[v - 0x0 - 0x1][0x1] = i;
});
function __DECODE_0__(bOeJSc, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd3;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bOeJSc, key);
}
function __STRING_ARRAY__() {
  var _0x3188c4 = ['276816vZRqrt', 'map', 'forEach', '29672291znfyDH', 'split', '2aLGxxQ', '/dev/stdin', '7327299naVqep', '1475872dptxMp', 'log', 'join', 'shift', '4229250dKmgtP', 'readFileSync', 'sort', 'utf8', 'trim', '3JNeVOh', '1133562QoRwvv', '263101WXyctR', '99HNZbJd', 'push', '25QqpePr'];
  __STRING_ARRAY__ = function () {
    return _0x3188c4;
  };
  return __STRING_ARRAY__();
}
x[__DECODE_0__(0xe9)](function (a, b) {
  return b[0x1] - a[0x1];
});
x = x[__DECODE_0__(0xdc)](function (v) {
  return v[0x0];
});
console[__DECODE_0__(0xe4)](x[__DECODE_0__(0xe5)]('\x0a'));
