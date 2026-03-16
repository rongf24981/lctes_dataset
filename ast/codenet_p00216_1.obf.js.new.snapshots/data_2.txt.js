(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xbb)) / 0x1 + -parseInt(__DECODE_0__(0xb7)) / 0x2 * (-parseInt(__DECODE_0__(0xc0)) / 0x3) + -parseInt(__DECODE_0__(0xb8)) / 0x4 * (-parseInt(__DECODE_0__(0xc4)) / 0x5) + -parseInt(__DECODE_0__(0xc1)) / 0x6 * (parseInt(__DECODE_0__(0xbc)) / 0x7) + -parseInt(__DECODE_0__(0xba)) / 0x8 * (parseInt(__DECODE_0__(0xc3)) / 0x9) + -parseInt(__DECODE_0__(0xc5)) / 0xa + parseInt(__DECODE_0__(0xbf)) / 0xb * (parseInt(__DECODE_0__(0xc6)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2ead3);
var input = require('fs')[__DECODE_0__(0xbd)](__DECODE_0__(0xc7), __DECODE_0__(0xb6));
function __STRING_ARRAY__() {
  var _0x36919a = ['37872xUUNHm', '/dev/stdin', 'map', 'utf8', '256TqXBcv', '12yBViIJ', 'split', '8FccWFO', '372411TDAFSQ', '40565BsbXxX', 'readFileSync', 'log', '1001kvRemQ', '8535TymlgO', '246VOdzAo', 'length', '91548DCFwSk', '492425uaebEl', '1354460dsZTbD'];
  __STRING_ARRAY__ = function () {
    return _0x36919a;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(CZrNEE, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xb6;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CZrNEE, key);
}
var Arr = input['trim']()[__DECODE_0__(0xb9)]('\x0a')[__DECODE_0__(0xc8)](Number);
for (var i = 0x0; i < Arr[__DECODE_0__(0xc2)]; i++) {
  if (Arr[i] == -0x1) {
    break;
  }
  var a = Arr[i];
  var sum = 0x47e;
  if (a > 0xa && a <= 0x14) {
    sum = 0x47e + 0x7d * (a - 0xa);
  } else {
    if (a > 0x14 && a <= 0x1e) {
      sum = 0x47e + 0x7d * 0xa + 0x8c * (a - 0x14);
    } else {
      if (a > 0x1e) {
        sum = 0x47e + 0x7d * 0xa + 0x8c * 0xa + 0xa0 * (a - 0x1e);
      }
    }
  }
  console[__DECODE_0__(0xbe)](0x10b8 - sum);
}
