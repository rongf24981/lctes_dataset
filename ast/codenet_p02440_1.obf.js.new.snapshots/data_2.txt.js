(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1a2)) / 0x1 + -parseInt(__DECODE_0__(0x1a3)) / 0x2 * (-parseInt(__DECODE_0__(0x1a5)) / 0x3) + parseInt(__DECODE_0__(0x1aa)) / 0x4 * (parseInt(__DECODE_0__(0x19b)) / 0x5) + parseInt(__DECODE_0__(0x1a7)) / 0x6 + parseInt(__DECODE_0__(0x1a9)) / 0x7 + parseInt(__DECODE_0__(0x1a4)) / 0x8 + -parseInt(__DECODE_0__(0x1a8)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x33950);
var input = require('fs')[__DECODE_0__(0x19f)](__DECODE_0__(0x19a), __DECODE_0__(0x1ab));
var arr = input[__DECODE_0__(0x1a0)]()[__DECODE_0__(0x19e)]('\x0a');
var n = arr[__DECODE_0__(0x19d)]() - 0x0;
function __STRING_ARRAY__() {
  var _0x3ef403 = ['max', '324605ykpDuf', '353594grmOXd', '265808tdfsek', '6uxreLP', 'map', '2180070ZvZyrK', '5724711ydvwuH', '2158184MqrdrB', '41268EhovGr', 'utf8', 'min', '/dev/stdin', '55GcqOsy', 'log', 'shift', 'split', 'readFileSync', 'trim'];
  __STRING_ARRAY__ = function () {
    return _0x3ef403;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(MlWLQB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x19a;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MlWLQB, key);
}
var a = arr[__DECODE_0__(0x19d)]()[__DECODE_0__(0x19e)]('\x20')[__DECODE_0__(0x1a6)](Number);
var q = arr[__DECODE_0__(0x19d)]() - 0x0;
var s = '';
for (var i = 0x0; i < q; i++) {
  var [c, b, e] = arr[i][__DECODE_0__(0x19e)]('\x20')['map'](Number);
  var m = a[b];
  if (c == 0x0) {
    for (var j = b; j < e; j++) {
      m = Math[__DECODE_0__(0x1ac)](m, a[j]);
    }
  } else {
    for (var j = b; j < e; j++) {
      m = Math[__DECODE_0__(0x1a1)](m, a[j]);
    }
  }
  s += m + '\x0a';
}
console[__DECODE_0__(0x19c)](s[__DECODE_0__(0x1a0)]());
