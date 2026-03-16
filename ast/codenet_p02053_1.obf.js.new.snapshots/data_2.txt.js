(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xe9)) / 0x1 + parseInt(__DECODE_0__(0xec)) / 0x2 + -parseInt(__DECODE_0__(0xe8)) / 0x3 * (-parseInt(__DECODE_0__(0xea)) / 0x4) + parseInt(__DECODE_0__(0xe0)) / 0x5 + -parseInt(__DECODE_0__(0xdf)) / 0x6 + -parseInt(__DECODE_0__(0xeb)) / 0x7 * (-parseInt(__DECODE_0__(0xdd)) / 0x8) + parseInt(__DECODE_0__(0xe4)) / 0x9 * (-parseInt(__DECODE_0__(0xef)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x539ee);
var input = require('fs')[__DECODE_0__(0xed)](__DECODE_0__(0xe6), __DECODE_0__(0xee));
function __STRING_ARRAY__() {
  var _0x5932c8 = ['length', '8889fNoWod', '237341SDvBSM', '56potaQu', '7NVywcD', '597444pqKRuZ', 'readFileSync', 'utf8', '30KeyqId', 'split', '4649416OXkERt', 'trim', '4006008OnhOiF', '1140200nsGydS', 'shift', 'push', 'log', '1129752AoFSEn', 'forEach', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x5932c8;
  };
  return __STRING_ARRAY__();
}
var arr = input[__DECODE_0__(0xde)]()[__DECODE_0__(0xf0)]('\x0a');
var [h, w] = arr[__DECODE_0__(0xe1)]()[__DECODE_0__(0xf0)]('\x20')['map'](Number);
var b = [];
for (var i = 0x0; i < h; i++) {
  var two = [];
  arr[i][__DECODE_0__(0xf0)]('')[__DECODE_0__(0xe5)]((v, j) => {
    if (v == 'B') {
      two[__DECODE_0__(0xe2)]([i, j]);
    }
  });
  if (two[__DECODE_0__(0xe7)] == 0x1) {
    b[__DECODE_0__(0xe2)](two[0x0]);
  } else {
    if (two[__DECODE_0__(0xe7)] >= 0x2) {
      b[__DECODE_0__(0xe2)](two[0x0], two[two[__DECODE_0__(0xe7)] - 0x1]);
    }
  }
}
var max = 0x0;
function __DECODE_0__(NibHIg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xdd;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NibHIg, key);
}
for (var i = 0x0; i < b[__DECODE_0__(0xe7)]; i++) {
  for (var j = i + 0x1; j < b['length']; j++) {
    var d = Math['abs'](b[i][0x0] - b[j][0x0]) + Math['abs'](b[i][0x1] - b[j][0x1]);
    max = Math['max'](max, d);
  }
}
console[__DECODE_0__(0xe3)](max);
