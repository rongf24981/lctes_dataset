(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1e9)) / 0x1 + -parseInt(__DECODE_0__(0x1eb)) / 0x2 * (-parseInt(__DECODE_0__(0x1ec)) / 0x3) + -parseInt(__DECODE_0__(0x1f1)) / 0x4 * (parseInt(__DECODE_0__(0x1e2)) / 0x5) + parseInt(__DECODE_0__(0x1f0)) / 0x6 * (-parseInt(__DECODE_0__(0x1e8)) / 0x7) + parseInt(__DECODE_0__(0x1e4)) / 0x8 + -parseInt(__DECODE_0__(0x1e7)) / 0x9 * (-parseInt(__DECODE_0__(0x1f5)) / 0xa) + parseInt(__DECODE_0__(0x1e5)) / 0xb * (parseInt(__DECODE_0__(0x1f2)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc7511);
var input = require('fs')[__DECODE_0__(0x1ea)](__DECODE_0__(0x1f4), __DECODE_0__(0x1e1));
var arr = input[__DECODE_0__(0x1e0)]()[__DECODE_0__(0x1f3)]('\x0a');
var q = arr[__DECODE_0__(0x1e3)]() - 0x0;
var str = '';
function __STRING_ARRAY__() {
  var _0x5995dc = ['/dev/stdin', '10Rdrpup', 'trim', 'utf8', '1510XucrMb', 'shift', '6477824JTeyKp', '42823gYGLAa', 'has', '4146111bkLmTp', '7FhKIhs', '730554MKkbCH', 'readFileSync', '4110HRTtLu', '390pSQHWa', 'size', 'log', 'add', '7530126OWMzSU', '9292TcYbzV', '6060TUWBQb', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x5995dc;
  };
  return __STRING_ARRAY__();
}
var set = new Set();
function __DECODE_0__(sRXwGu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1e0;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(sRXwGu, key);
}
for (var i = 0x0; i < q; i++) {
  var [a, b] = arr[i][__DECODE_0__(0x1f3)]('\x20');
  if (a == '0') {
    set[__DECODE_0__(0x1ef)](b);
    str += set[__DECODE_0__(0x1ed)] + '\x0a';
  } else {
    str += (set[__DECODE_0__(0x1e6)](b) ? 0x1 : 0x0) + '\x0a';
  }
}
console[__DECODE_0__(0x1ee)](str[__DECODE_0__(0x1e0)]());
