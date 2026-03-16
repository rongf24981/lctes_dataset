(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x109)) / 0x1 * (-parseInt(__DECODE_0__(0x102)) / 0x2) + -parseInt(__DECODE_0__(0x100)) / 0x3 + -parseInt(__DECODE_0__(0x108)) / 0x4 * (-parseInt(__DECODE_0__(0x113)) / 0x5) + -parseInt(__DECODE_0__(0x101)) / 0x6 * (-parseInt(__DECODE_0__(0x110)) / 0x7) + -parseInt(__DECODE_0__(0x111)) / 0x8 * (-parseInt(__DECODE_0__(0x112)) / 0x9) + parseInt(__DECODE_0__(0x10f)) / 0xa * (-parseInt(__DECODE_0__(0x107)) / 0xb) + -parseInt(__DECODE_0__(0x103)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbd6f6);
var input = require('fs')[__DECODE_0__(0x106)]('/dev/stdin', __DECODE_0__(0x10b));
var arr = input[__DECODE_0__(0x10d)]()[__DECODE_0__(0x10c)]('\x0a');
var [h, w] = arr[__DECODE_0__(0x105)]()[__DECODE_0__(0x10c)]('\x20')[__DECODE_0__(0x10e)](Number);
var b = [];
function __DECODE_0__(qlugsU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x100;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qlugsU, key);
}
for (var i = 0x0; i < h; i++) {
  arr[__DECODE_0__(0x105)]()[__DECODE_0__(0x10c)]('')['forEach']((v, j) => {
    if (v == 'B') {
      b[__DECODE_0__(0x104)]([i, j]);
    }
  });
}
function __STRING_ARRAY__() {
  var _0xe18db1 = ['shift', 'readFileSync', '2211715UdGCnU', '4svinHq', '1504321rniild', 'log', 'utf8', 'split', 'trim', 'map', '10aliBDH', '23464RmuZLo', '428208cwyvzB', '117BjIBkx', '1185745OOIFCy', 'length', 'abs', '1813308jGwZMO', '924vyHcDg', '2xCSXgB', '16465068RFGzGE', 'push'];
  __STRING_ARRAY__ = function () {
    return _0xe18db1;
  };
  return __STRING_ARRAY__();
}
var max = 0x0;
for (var i = 0x0; i < b[__DECODE_0__(0x114)]; i++) {
  for (var j = i + 0x1; j < b[__DECODE_0__(0x114)]; j++) {
    var d = Math[__DECODE_0__(0x115)](b[i][0x0] - b[j][0x0]) + Math[__DECODE_0__(0x115)](b[i][0x1] - b[j][0x1]);
    max = Math['max'](max, d);
  }
}
console[__DECODE_0__(0x10a)](max);
