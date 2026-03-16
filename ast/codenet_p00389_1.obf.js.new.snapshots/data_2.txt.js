(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1eb)) / 0x1 * (parseInt(__DECODE_0__(0x1f9)) / 0x2) + parseInt(__DECODE_0__(0x1f8)) / 0x3 * (parseInt(__DECODE_0__(0x1ed)) / 0x4) + -parseInt(__DECODE_0__(0x1f3)) / 0x5 * (-parseInt(__DECODE_0__(0x1f0)) / 0x6) + -parseInt(__DECODE_0__(0x1fa)) / 0x7 + parseInt(__DECODE_0__(0x1f7)) / 0x8 + parseInt(__DECODE_0__(0x1f2)) / 0x9 * (parseInt(__DECODE_0__(0x1ec)) / 0xa) + parseInt(__DECODE_0__(0x1f5)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x195b4);
var input = require('fs')[__DECODE_0__(0x1f4)](__DECODE_0__(0x1ef), __DECODE_0__(0x1f1));
function __STRING_ARRAY__() {
  var _0x42c495 = ['7225JLrudt', 'readFileSync', '1494361zdwmDz', 'split', '771456RVgBaP', '324681QWwWOO', '7064tHrZFF', '1328565zvCfZs', '58CxcuqD', '80wpfwUH', '4PJffwx', 'map', '/dev/stdin', '270jxswQn', 'utf8', '104598YdSZGa'];
  __STRING_ARRAY__ = function () {
    return _0x42c495;
  };
  return __STRING_ARRAY__();
}
var [n, k] = input['trim']()[__DECODE_0__(0x1f6)]('\x20')[__DECODE_0__(0x1ee)](Number);
function __DECODE_0__(UmSqmK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1eb;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UmSqmK, key);
}
var takasa = 0x0;
var w = 0x0;
var cnt = 0x0;
while (!![]) {
  if (n == 0x0) {
    break;
  }
  n--;
  cnt++;
  if (w <= k * cnt) {
    takasa++;
    w += cnt;
    cnt = 0x0;
  }
}
console['log'](takasa);
