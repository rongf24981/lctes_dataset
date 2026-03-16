(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x123)) / 0x1 + -parseInt(__DECODE_0__(0x11a)) / 0x2 + parseInt(__DECODE_0__(0x119)) / 0x3 + parseInt(__DECODE_0__(0x116)) / 0x4 + -parseInt(__DECODE_0__(0x121)) / 0x5 * (parseInt(__DECODE_0__(0x11d)) / 0x6) + -parseInt(__DECODE_0__(0x11c)) / 0x7 * (parseInt(__DECODE_0__(0x11b)) / 0x8) + -parseInt(__DECODE_0__(0x114)) / 0x9 * (-parseInt(__DECODE_0__(0x11f)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7927d);
var input = require('fs')[__DECODE_0__(0x113)](__DECODE_0__(0x122), __DECODE_0__(0x124));
var arr = input[__DECODE_0__(0x115)]()[__DECODE_0__(0x117)]('\x20')[__DECODE_0__(0x11e)](Number);
var a = arr[0x0];
function __STRING_ARRAY__() {
  var _0x503db1 = ['map', '764690bOkdEN', 'yes', '85310WcfvXX', '/dev/stdin', '642695nOVqUG', 'utf8', 'readFileSync', '90LWnIrX', 'trim', '2056860TrIfJP', 'split', 'log', '1875864FSeRqz', '1243488MxpogW', '1160lURzwx', '37681QSsUBC', '228VBZMue'];
  __STRING_ARRAY__ = function () {
    return _0x503db1;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(SWznhL, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x113;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SWznhL, key);
}
var b = arr[0x1];
var c = arr[0x2];
var d = arr[0x3];
if (a == b && c == d) {
  console[__DECODE_0__(0x118)](__DECODE_0__(0x120));
} else {
  if (a == c && b == d) {
    console[__DECODE_0__(0x118)]('yes');
  } else {
    if (a == d && b == c) {
      console['log']('yes');
    } else {
      console[__DECODE_0__(0x118)]('no');
    }
  }
}
