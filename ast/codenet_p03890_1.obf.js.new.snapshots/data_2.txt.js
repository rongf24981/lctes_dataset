function __DECODE_0__(RqClkj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xfd;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RqClkj, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x100)) / 0x1 * (parseInt(__DECODE_0__(0x108)) / 0x2) + parseInt(__DECODE_0__(0x104)) / 0x3 * (parseInt(__DECODE_0__(0x110)) / 0x4) + parseInt(__DECODE_0__(0x107)) / 0x5 * (parseInt(__DECODE_0__(0xfd)) / 0x6) + parseInt(__DECODE_0__(0xfe)) / 0x7 * (-parseInt(__DECODE_0__(0x106)) / 0x8) + -parseInt(__DECODE_0__(0x102)) / 0x9 * (parseInt(__DECODE_0__(0x101)) / 0xa) + parseInt(__DECODE_0__(0x10e)) / 0xb + parseInt(__DECODE_0__(0x103)) / 0xc * (-parseInt(__DECODE_0__(0xff)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5eed7);
function Main(input) {
  var data = input[__DECODE_0__(0x10a)]('\x0a');
  var n = data[0x0];
  var a = data[__DECODE_0__(0x10f)](0x1);
  for (var i = 0x0; i < n; ++i) {
    var b = [];
    for (var j = 0x0; j < a[__DECODE_0__(0x10b)]; j += 0x2) {
      if (a[j] > a[j + 0x1]) {
        b[__DECODE_0__(0x105)](a[j] - a[j + 0x1]);
      } else {
        if (a[j] == a[j + 0x1]) {
          b[__DECODE_0__(0x105)](a[j]);
        } else {
          b[__DECODE_0__(0x105)](a[j + 0x1] - a[j]);
        }
      }
    }
    a = b;
  }
  console[__DECODE_0__(0x10d)](a[0x0]);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x109), __DECODE_0__(0x10c)));
function __STRING_ARRAY__() {
  var _0x78d214 = ['push', '2472HhcAid', '3359435hCYkrG', '196jVJlqL', '/dev/stdin', 'split', 'length', 'utf8', 'log', '7897813CoBNLs', 'slice', '4zilPah', '6FnJKyQ', '8813aTbSqP', '6377826CaHLmQ', '4652qQwjHb', '550KFtPPx', '84465qrrzXw', '24KAWsDs', '1288401VpzZXE'];
  __STRING_ARRAY__ = function () {
    return _0x78d214;
  };
  return __STRING_ARRAY__();
}
