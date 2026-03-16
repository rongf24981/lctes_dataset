(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x15f)) / 0x1 + parseInt(__DECODE_0__(0x15d)) / 0x2 + -parseInt(__DECODE_0__(0x158)) / 0x3 + parseInt(__DECODE_0__(0x156)) / 0x4 * (-parseInt(__DECODE_0__(0x150)) / 0x5) + parseInt(__DECODE_0__(0x154)) / 0x6 * (-parseInt(__DECODE_0__(0x153)) / 0x7) + parseInt(__DECODE_0__(0x157)) / 0x8 + parseInt(__DECODE_0__(0x15a)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4d202);
function heron(a, b, c) {
  var s = (a + b + c) / 0x2;
  var S = Math[__DECODE_0__(0x15e)](s * (s - a) * (s - b) * (s - c));
  return S;
}
function __STRING_ARRAY__() {
  var _0x4b08cf = ['trim', '4496634mnMueL', 'readFileSync', 'utf8', '405166pzJFLh', 'sqrt', '630973uHcrNO', '5MCbHWJ', 'split', 'toFixed', '14qigYfr', '1187976HMVWSl', 'map', '1291868pyZMGc', '2375920WTbElq', '1785921NexKpE'];
  __STRING_ARRAY__ = function () {
    return _0x4b08cf;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')[__DECODE_0__(0x15b)]('/dev/stdin', __DECODE_0__(0x15c));
function __DECODE_0__(NjUvOl, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x150;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NjUvOl, key);
}
var Arr = input[__DECODE_0__(0x159)]()[__DECODE_0__(0x151)]('\x0a');
for (var i = 0x0; i < Arr['length']; i++) {
  var ALX = Arr[i][__DECODE_0__(0x151)]('\x20')[__DECODE_0__(0x155)](Number);
  var A = ALX[0x0];
  var L = ALX[0x1];
  var X = ALX[0x2];
  var sum = 0x0;
  sum += heron(A, L, L);
  sum += heron(L, (L + X) / 0x2, (L + X) / 0x2) * 0x2;
  console['log'](sum[__DECODE_0__(0x152)](0xa));
}
