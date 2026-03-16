function __DECODE_0__(apgZTZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x113;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(apgZTZ, key);
}
function __STRING_ARRAY__() {
  var _0x112d52 = ['1312011vRHLQg', 'sqrt', '5548472CNgous', '214482rTdqBy', '/dev/stdin', '22vbjEvx', 'map', 'readFileSync', '9onKNzW', '1039390xTcuSB', 'trim', '31025gwKCdz', '4OQDBvm', 'length', 'utf8', '4869004mlJYsb', '2885380tHLkos', 'push', 'floor', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x112d52;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x120)) / 0x1 * (-parseInt(__DECODE_0__(0x11a)) / 0x2) + -parseInt(__DECODE_0__(0x115)) / 0x3 + -parseInt(__DECODE_0__(0x121)) / 0x4 * (-parseInt(__DECODE_0__(0x125)) / 0x5) + -parseInt(__DECODE_0__(0x118)) / 0x6 + -parseInt(__DECODE_0__(0x124)) / 0x7 + parseInt(__DECODE_0__(0x117)) / 0x8 + parseInt(__DECODE_0__(0x11d)) / 0x9 * (parseInt(__DECODE_0__(0x11e)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x85979);
function prime(max) {
  var arr = [];
  for (var i = 0x0; i <= max; i++) {
    arr[i] = i;
  }
  arr[0x0] = ![];
  arr[0x1] = ![];
  var sqrt = Math[__DECODE_0__(0x113)](Math[__DECODE_0__(0x116)](max));
  for (var i = 0x2; i <= sqrt; i++) {
    if (arr[i] == ![]) {
      continue;
    }
    for (var j = i + i; j <= max; j += i) {
      arr[j] = ![];
    }
  }
  var result = {};
  for (var i = 0x0; i <= max; i++) {
    if (arr[i] !== ![]) {
      result[arr[i]] = !![];
    }
  }
  return result;
}
var p = prime(0x2710);
var input = require('fs')[__DECODE_0__(0x11c)](__DECODE_0__(0x119), __DECODE_0__(0x123));
var Arr = input[__DECODE_0__(0x11f)]()[__DECODE_0__(0x114)]('\x0a')[__DECODE_0__(0x11b)](Number);
for (var i = 0x0; i < Arr[__DECODE_0__(0x122)]; i++) {
  var a = Arr[i];
  var A = [];
  var B = [];
  for (var j = 0x1; j <= a; j++) {
    A['push'](j);
  }
  for (var j = a; j >= 0x1; j--) {
    B[__DECODE_0__(0x126)](j);
  }
  var pair = 0x0;
  for (var j = 0x0; j < a; j++) {
    if (p['hasOwnProperty'](A[j]) && p['hasOwnProperty'](B[j])) {
      pair++;
    }
  }
  console['log'](pair);
}
