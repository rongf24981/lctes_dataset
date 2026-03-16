(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xb3)) / 0x1 + -parseInt(__DECODE_0__(0xb5)) / 0x2 * (-parseInt(__DECODE_0__(0xb0)) / 0x3) + -parseInt(__DECODE_0__(0xba)) / 0x4 + -parseInt(__DECODE_0__(0xb4)) / 0x5 + -parseInt(__DECODE_0__(0xb6)) / 0x6 * (-parseInt(__DECODE_0__(0xae)) / 0x7) + -parseInt(__DECODE_0__(0xbb)) / 0x8 + -parseInt(__DECODE_0__(0xb1)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa7442);
function __DECODE_0__(fQynLj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xae;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fQynLj, key);
}
var input = require('fs')[__DECODE_0__(0xbf)](__DECODE_0__(0xaf), __DECODE_0__(0xbe));
var arr = input[__DECODE_0__(0xc0)]()[__DECODE_0__(0xc1)]('\x0a');
function __STRING_ARRAY__() {
  var _0x4fa0fc = ['readFileSync', 'trim', 'split', '238tILqxG', '/dev/stdin', '375GuFfvG', '7919847QWMWzL', 'log', '890167xomebT', '2067375QDNzzj', '14660KEszqA', '206556edlBzB', 'shift', 'join', 'length', '94880xHAAVK', '7796808aXOYom', 'map', 'push', 'utf8'];
  __STRING_ARRAY__ = function () {
    return _0x4fa0fc;
  };
  return __STRING_ARRAY__();
}
var n = arr[__DECODE_0__(0xb7)]() - 0x0;
var a = arr[__DECODE_0__(0xb7)]()[__DECODE_0__(0xc1)]('\x20')[__DECODE_0__(0xbc)](Number);
var b = [];
var memo = '';
for (var i = 0x0; i < a[__DECODE_0__(0xb9)]; i++) {
  if (a[i] !== memo) {
    b[__DECODE_0__(0xbd)](a[i]);
  }
  memo = a[i];
}
console[__DECODE_0__(0xb2)](b[__DECODE_0__(0xb8)]('\x20'));
