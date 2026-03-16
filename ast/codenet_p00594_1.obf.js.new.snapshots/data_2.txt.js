(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xa9)) / 0x1 * (-parseInt(__DECODE_0__(0xad)) / 0x2) + -parseInt(__DECODE_0__(0xb0)) / 0x3 * (parseInt(__DECODE_0__(0xac)) / 0x4) + -parseInt(__DECODE_0__(0xa8)) / 0x5 + parseInt(__DECODE_0__(0xb5)) / 0x6 * (parseInt(__DECODE_0__(0xb2)) / 0x7) + parseInt(__DECODE_0__(0xa7)) / 0x8 * (parseInt(__DECODE_0__(0xb3)) / 0x9) + parseInt(__DECODE_0__(0xb7)) / 0xa + parseInt(__DECODE_0__(0xb1)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe1a64);
var input = require('fs')[__DECODE_0__(0xab)](__DECODE_0__(0xb4), __DECODE_0__(0xb6));
var arr = input[__DECODE_0__(0xae)]()['split']('\x0a');
function __STRING_ARRAY__() {
  var _0x52f57b = ['/dev/stdin', '5292BGGWbV', 'utf8', '16681540CONZGU', 'split', 'NO\x20COLOR', '8XAYrvx', '1287275TzAyzZ', '1iDxDfT', 'forEach', 'readFileSync', '816suUmeK', '3135926SIsfvr', 'trim', 'shift', '15852yFszoF', '4000150JIEfaM', '42FEHCsM', '16114662WuXKKv'];
  __STRING_ARRAY__ = function () {
    return _0x52f57b;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(jMynOe, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xa5;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jMynOe, key);
}
while (!![]) {
  var n = arr[__DECODE_0__(0xaf)]() - 0x0;
  if (n === 0x0) {
    break;
  }
  var ary = arr[__DECODE_0__(0xaf)]()[__DECODE_0__(0xa5)]('\x20');
  var obj = {};
  ary['forEach'](function (v) {
    obj[v] = 0x0;
  });
  ary[__DECODE_0__(0xaa)](function (v) {
    obj[v]++;
  });
  var ans = __DECODE_0__(0xa6);
  var half = n / 0x2;
  for (var k in obj) {
    if (obj[k] > half) {
      ans = k;
      break;
    }
  }
  console['log'](ans);
}
