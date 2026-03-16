(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1cd)) / 0x1 * (parseInt(__DECODE_0__(0x1ca)) / 0x2) + -parseInt(__DECODE_0__(0x1c9)) / 0x3 + parseInt(__DECODE_0__(0x1d1)) / 0x4 * (parseInt(__DECODE_0__(0x1da)) / 0x5) + -parseInt(__DECODE_0__(0x1cc)) / 0x6 + parseInt(__DECODE_0__(0x1d3)) / 0x7 * (-parseInt(__DECODE_0__(0x1d4)) / 0x8) + -parseInt(__DECODE_0__(0x1cb)) / 0x9 + -parseInt(__DECODE_0__(0x1d5)) / 0xa * (-parseInt(__DECODE_0__(0x1d2)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6cc51);
function __DECODE_0__(HzkcAf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1c8;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HzkcAf, key);
}
var input = require('fs')[__DECODE_0__(0x1d8)]('/dev/stdin', 'utf8');
function __STRING_ARRAY__() {
  var _0xf9b317 = ['sort', 'push', '316dqKRNE', '4082683UrHkjb', '147vuXTTJ', '35488xjGIIT', '30bxSkQx', 'length', 'trim', 'readFileSync', 'shift', '40660gwofxF', 'log', '637236TrDgDe', '14JeQQkD', '3259755YWqAYq', '1669224fcMZQi', '52057MdhgAW', 'split'];
  __STRING_ARRAY__ = function () {
    return _0xf9b317;
  };
  return __STRING_ARRAY__();
}
var Arr = input[__DECODE_0__(0x1d7)]()['split']('\x0a');
var D = Arr[__DECODE_0__(0x1d9)]() - 0x0;
var x = Arr[__DECODE_0__(0x1d9)]() - 0x0;
var X = [];
for (var i = 0x0; i < x; i++) {
  var v = Arr[__DECODE_0__(0x1d9)]()[__DECODE_0__(0x1ce)]('\x20');
  if (v[0x0] == 'D') {
    X['push'](v[0x1] - 0x0);
  }
}
X[__DECODE_0__(0x1cf)](function (a, b) {
  return b - a;
});
var y = Arr[__DECODE_0__(0x1d9)]() - 0x0;
var Y = [];
for (var i = 0x0; i < y; i++) {
  var v = Arr['shift']()[__DECODE_0__(0x1ce)]('\x20');
  if (v[0x0] == 'DD') {
    Y[__DECODE_0__(0x1d0)](v[0x1] - 0x0);
  }
}
Y[__DECODE_0__(0x1cf)](function (a, b) {
  return b - a;
});
var max = 0x0;
for (var x = 0x0; x <= X[__DECODE_0__(0x1d6)]; x++) {
  for (var y = 0x0; y <= Y[__DECODE_0__(0x1d6)]; y++) {
    if (D < x + y * 0x2) {
      break;
    }
    var sum = 0x0;
    for (var i = 0x0; i < x; i++) {
      sum += X[i];
    }
    for (var i = 0x0; i < y; i++) {
      sum += Y[i];
    }
    max = Math['max'](max, sum);
  }
}
console[__DECODE_0__(0x1c8)](max);
