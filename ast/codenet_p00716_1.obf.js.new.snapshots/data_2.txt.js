function __STRING_ARRAY__() {
  var _0x265385 = ['shift', '162zNwPNi', '2308LlUDvn', '39170lSOXUH', '48zRwrKL', 'floor', 'utf8', '9cEsKhV', '649euRNGu', '567161WPpxLB', '13phtOXR', 'map', 'readFileSync', 'push', '2261292jHlxBa', 'trim', '3579636bDrlMY', '5085JqfGFw', 'log', '4537376juVsEm', '/dev/stdin', '11443PKhrMT', 'apply'];
  __STRING_ARRAY__ = function () {
    return _0x265385;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x81)) / 0x1 * (parseInt(__DECODE_0__(0x84)) / 0x2) + parseInt(__DECODE_0__(0x7a)) / 0x3 + parseInt(__DECODE_0__(0x85)) / 0x4 * (parseInt(__DECODE_0__(0x7d)) / 0x5) + -parseInt(__DECODE_0__(0x87)) / 0x6 * (parseInt(__DECODE_0__(0x8c)) / 0x7) + -parseInt(__DECODE_0__(0x7f)) / 0x8 * (-parseInt(__DECODE_0__(0x8a)) / 0x9) + -parseInt(__DECODE_0__(0x86)) / 0xa * (-parseInt(__DECODE_0__(0x8b)) / 0xb) + parseInt(__DECODE_0__(0x7c)) / 0xc * (parseInt(__DECODE_0__(0x8d)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd2784);
function F1(m, b, c) {
  var sum = 0x0;
  for (var i = 0x0; i < Y; i++) {
    sum += Math[__DECODE_0__(0x88)](m * b);
    m -= c;
  }
  return m + sum;
}
function F2(m, b, c) {
  for (var i = 0x0; i < Y; i++) {
    m += Math['floor'](m * b) - c;
  }
  return m;
}
var input = require('fs')[__DECODE_0__(0x8f)](__DECODE_0__(0x80), __DECODE_0__(0x89));
var Arr = input[__DECODE_0__(0x7b)]()['split']('\x0a');
function __DECODE_0__(vvuhia, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x7a;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vvuhia, key);
}
var M = Arr['shift']() - 0x0;
for (var i = 0x0; i < M; i++) {
  var money = Arr[__DECODE_0__(0x83)]() - 0x0;
  var Y = Arr[__DECODE_0__(0x83)]() - 0x0;
  var N = Arr[__DECODE_0__(0x83)]() - 0x0;
  var arr = [];
  for (var j = 0x0; j < N; j++) {
    var D = Arr['shift']()['split']('\x20')[__DECODE_0__(0x8e)](Number);
    if (D[0x0] == 0x0) {
      arr[__DECODE_0__(0x90)](F1(money, D[0x1], D[0x2]));
    }
    if (D[0x0] == 0x1) {
      arr['push'](F2(money, D[0x1], D[0x2]));
    }
  }
  console[__DECODE_0__(0x7e)](Math['max'][__DECODE_0__(0x82)](null, arr));
}
