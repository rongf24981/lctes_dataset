function __DECODE_0__(AkobHu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x68;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(AkobHu, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x6b)) / 0x1 * (parseInt(__DECODE_0__(0x71)) / 0x2) + -parseInt(__DECODE_0__(0x72)) / 0x3 * (parseInt(__DECODE_0__(0x79)) / 0x4) + -parseInt(__DECODE_0__(0x69)) / 0x5 + parseInt(__DECODE_0__(0x74)) / 0x6 + -parseInt(__DECODE_0__(0x73)) / 0x7 * (-parseInt(__DECODE_0__(0x75)) / 0x8) + parseInt(__DECODE_0__(0x70)) / 0x9 * (-parseInt(__DECODE_0__(0x77)) / 0xa) + parseInt(__DECODE_0__(0x76)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xcdf64);
var input = require('fs')[__DECODE_0__(0x6a)](__DECODE_0__(0x6f), __DECODE_0__(0x6e));
var [h, a, b] = input[__DECODE_0__(0x6c)]()[__DECODE_0__(0x6d)]('\x20')[__DECODE_0__(0x78)](Number);
function __STRING_ARRAY__() {
  var _0x1738b0 = ['129MvSBUT', '7AyeKIJ', '1223034TPHmmR', '12339256nFGpZt', '45169916QZfUek', '8606970mRYJxG', 'map', '130148zreYSh', 'log', '7876365nQPgfF', 'readFileSync', '1173921ZOweGu', 'trim', 'split', 'utf8', '/dev/stdin', '9VgaCkg', '2ZHiSzc'];
  __STRING_ARRAY__ = function () {
    return _0x1738b0;
  };
  return __STRING_ARRAY__();
}
var cnt = 0x0;
for (var i = a; i <= b; i++) {
  if (h % i == 0x0) {
    cnt++;
  }
}
console[__DECODE_0__(0x68)](cnt);
