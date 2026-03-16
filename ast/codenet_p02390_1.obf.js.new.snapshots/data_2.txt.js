(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1c7)) / 0x1 * (parseInt(__DECODE_0__(0x1d2)) / 0x2) + parseInt(__DECODE_0__(0x1d4)) / 0x3 * (-parseInt(__DECODE_0__(0x1ce)) / 0x4) + -parseInt(__DECODE_0__(0x1cc)) / 0x5 + parseInt(__DECODE_0__(0x1cb)) / 0x6 * (-parseInt(__DECODE_0__(0x1d5)) / 0x7) + parseInt(__DECODE_0__(0x1d3)) / 0x8 * (-parseInt(__DECODE_0__(0x1cd)) / 0x9) + -parseInt(__DECODE_0__(0x1ca)) / 0xa * (parseInt(__DECODE_0__(0x1c8)) / 0xb) + parseInt(__DECODE_0__(0x1d6)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xdc4b2);
var x = require('fs')[__DECODE_0__(0x1d1)](__DECODE_0__(0x1c9), __DECODE_0__(0x1d7));
function __DECODE_0__(qcvRcr, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1c7;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qcvRcr, key);
}
x = parseInt(x, 0xa);
function __STRING_ARRAY__() {
  var _0x57b414 = ['log', 'readFileSync', '4IQmmwT', '424096pOcthX', '11757IbIWuO', '14595cJAUyI', '45444036QbuTzk', 'utf8', '29093wAeqWy', '27896zLiDvf', '/dev/stdin', '920nFfBfF', '684AabKdH', '4038270QOZEdH', '153onXhyi', '660DslWyi', 'floor'];
  __STRING_ARRAY__ = function () {
    return _0x57b414;
  };
  return __STRING_ARRAY__();
}
var h = Math['floor'](x / 0xe10);
var m = Math[__DECODE_0__(0x1cf)](x % 0xe10 / 0x3c);
var s = x % 0xe10 % 0x3c;
console[__DECODE_0__(0x1d0)](h + ':' + m + ':' + s);
