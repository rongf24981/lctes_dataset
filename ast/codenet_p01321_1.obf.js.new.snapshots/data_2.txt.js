function __STRING_ARRAY__() {
  var _0x40f35d = ['155704hqALyA', 'shift', 'sort', '3RKpbFk', 'split', '210735BeRtre', '13848260uIuYbF', '42GzIZUU', '965040fnNCtQ', 'readFileSync', '871251noDgrq', '356155uSaUjv', '714880xmanvM', 'map', '6SVniYY', 'log', 'trim', 'utf8', 'length'];
  __STRING_ARRAY__ = function () {
    return _0x40f35d;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(XswBxu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x72;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XswBxu, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x82)) / 0x1 * (parseInt(__DECODE_0__(0x7f)) / 0x2) + -parseInt(__DECODE_0__(0x76)) / 0x3 + parseInt(__DECODE_0__(0x74)) / 0x4 + parseInt(__DECODE_0__(0x77)) / 0x5 * (-parseInt(__DECODE_0__(0x7a)) / 0x6) + parseInt(__DECODE_0__(0x73)) / 0x7 * (-parseInt(__DECODE_0__(0x78)) / 0x8) + parseInt(__DECODE_0__(0x84)) / 0x9 + parseInt(__DECODE_0__(0x72)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7e7f9);
var input = require('fs')[__DECODE_0__(0x75)]('/dev/stdin', __DECODE_0__(0x7d));
var Arr = input[__DECODE_0__(0x7c)]()[__DECODE_0__(0x83)]('\x0a');
while (!![]) {
  var n = Arr[__DECODE_0__(0x80)]() - 0x0;
  if (n == 0x0) {
    break;
  }
  var S = [];
  for (var i = 0x0; i < n; i++) {
    var arr = Arr[__DECODE_0__(0x80)]()['split']('\x20')[__DECODE_0__(0x79)](Number);
    var sum = arr['reduce'](function (a, b) {
      return a + b;
    });
    S['push'](sum);
  }
  S[__DECODE_0__(0x81)](function (a, b) {
    return b - a;
  });
  console[__DECODE_0__(0x7b)](S[0x0] + '\x20' + S[S[__DECODE_0__(0x7e)] - 0x1]);
}
