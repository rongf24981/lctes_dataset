(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1be)) / 0x1 * (parseInt(__DECODE_0__(0x1b8)) / 0x2) + parseInt(__DECODE_0__(0x1c3)) / 0x3 * (parseInt(__DECODE_0__(0x1cb)) / 0x4) + -parseInt(__DECODE_0__(0x1b9)) / 0x5 + -parseInt(__DECODE_0__(0x1bf)) / 0x6 * (parseInt(__DECODE_0__(0x1ba)) / 0x7) + parseInt(__DECODE_0__(0x1c6)) / 0x8 + parseInt(__DECODE_0__(0x1c4)) / 0x9 * (-parseInt(__DECODE_0__(0x1bc)) / 0xa) + parseInt(__DECODE_0__(0x1c1)) / 0xb * (parseInt(__DECODE_0__(0x1cc)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x56829);
function prime(max) {
  var arr = [];
  for (var i = 0x0; i <= max; i++) {
    arr[i] = i;
  }
  arr[0x0] = ![];
  arr[0x1] = ![];
  var sqrt = Math[__DECODE_0__(0x1c0)](Math[__DECODE_0__(0x1ca)](max));
  for (var i = 0x2; i <= sqrt; i++) {
    if (arr[i] == ![]) {
      continue;
    }
    for (var j = i + i; j <= max; j += i) {
      arr[j] = ![];
    }
  }
  var result = [];
  for (var i = 0x0; i <= max; i++) {
    if (arr[i] !== ![]) {
      result[__DECODE_0__(0x1c7)](arr[i]);
    }
  }
  return result;
}
var p = prime(0x13d4fd);
var input = require('fs')[__DECODE_0__(0x1c9)](__DECODE_0__(0x1c2), __DECODE_0__(0x1bb));
function __DECODE_0__(IdXOiw, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1b8;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IdXOiw, key);
}
function __STRING_ARRAY__() {
  var _0x3c7162 = ['floor', '11GnoKiv', '/dev/stdin', '15zWqQNW', '52335GaApoE', 'log', '353488eTxpMD', 'push', 'length', 'readFileSync', 'sqrt', '407824oJdmJs', '14052876ZFyPOD', '277464efwIJx', '64125EvNFpi', '2841055pQswFO', 'utf8', '1160ZWnuSY', 'map', '2ZFHcmk', '6SIcOFS'];
  __STRING_ARRAY__ = function () {
    return _0x3c7162;
  };
  return __STRING_ARRAY__();
}
var Arr = input['trim']()['split']('\x0a')[__DECODE_0__(0x1bd)](Number);
for (var i = 0x0; i < Arr[__DECODE_0__(0x1c8)]; i++) {
  var a = Arr[i];
  if (a == 0x0) {
    break;
  }
  for (var j = 0x0; j < p[__DECODE_0__(0x1c8)]; j++) {
    if (p[j] == a) {
      console[__DECODE_0__(0x1c5)](0x0);
      break;
    }
    if (p[j] > a) {
      console[__DECODE_0__(0x1c5)](p[j] - p[j - 0x1]);
      break;
    }
  }
}
