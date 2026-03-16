function __DECODE_0__(fXgvcB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x130;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fXgvcB, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x140)) / 0x1 * (parseInt(__DECODE_0__(0x142)) / 0x2) + -parseInt(__DECODE_0__(0x146)) / 0x3 + -parseInt(__DECODE_0__(0x138)) / 0x4 + parseInt(__DECODE_0__(0x135)) / 0x5 + parseInt(__DECODE_0__(0x145)) / 0x6 * (-parseInt(__DECODE_0__(0x139)) / 0x7) + parseInt(__DECODE_0__(0x137)) / 0x8 * (parseInt(__DECODE_0__(0x132)) / 0x9) + parseInt(__DECODE_0__(0x13a)) / 0xa * (parseInt(__DECODE_0__(0x13e)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd6845);
function str1(x) {
  x = x + '';
  while (x[__DECODE_0__(0x133)] != b) {
    x = '0' + x;
  }
  return x;
}
function __STRING_ARRAY__() {
  var _0xbe720a = ['utf8', '6YqStlN', '3897747Guvzmb', 'join', 'push', '1197weXafv', 'length', 'split', '2059760gkWbZf', 'log', '8824AwMsUT', '6459632sfiACv', '6494061mKLtJz', '2213930NYUrwj', 'sort', 'indexOf', 'reverse', '132nCfsif', 'map', '11WVaGmW', 'trim', '273668GVoLSR', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0xbe720a;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')['readFileSync'](__DECODE_0__(0x143), __DECODE_0__(0x144));
var Arr = input[__DECODE_0__(0x141)]()[__DECODE_0__(0x134)]('\x0a');
while (!![]) {
  var ab = Arr['shift']()[__DECODE_0__(0x134)]('\x20')[__DECODE_0__(0x13f)](Number);
  if (ab[0x0] == 0x0 && ab[0x1] == 0x0) {
    break;
  }
  var str = ab[0x0] + '';
  var b = ab[0x1];
  var arr = [];
  str = str1(str);
  arr['push'](str);
  var i = 0x0;
  while (!![]) {
    i++;
    var s = str[__DECODE_0__(0x134)]('');
    s[__DECODE_0__(0x13b)](function (a, b) {
      return b - a;
    });
    var A = parseInt(s['join'](''), 0xa);
    var B = parseInt(s[__DECODE_0__(0x13d)]()[__DECODE_0__(0x130)](''), 0xa);
    var C = A - B;
    var Cstr = str1(C);
    if (arr[__DECODE_0__(0x13c)](Cstr) != -0x1) {
      break;
    }
    arr[__DECODE_0__(0x131)](Cstr);
    str = Cstr;
  }
  console[__DECODE_0__(0x136)](arr[__DECODE_0__(0x13c)](Cstr) + '\x20' + parseInt(Cstr, 0xa) + '\x20' + (i - arr[__DECODE_0__(0x13c)](Cstr)));
}
