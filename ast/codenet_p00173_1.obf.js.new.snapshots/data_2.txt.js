function __STRING_ARRAY__() {
  var _0x40eb51 = ['679600TYBKSH', '1709806Utdqzj', '676Wcabmx', '45474IOUGgf', '176083CJfpDv', 'readFileSync', '2535JXLJVu', 'trim', '9Opqzlc', '5yphYku', 'utf8', '296600vvcIWJ', '41308uUmvQc'];
  __STRING_ARRAY__ = function () {
    return _0x40eb51;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(OfGjLS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x13b;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OfGjLS, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x13f)) / 0x1 + parseInt(__DECODE_0__(0x147)) / 0x2 + parseInt(__DECODE_0__(0x141)) / 0x3 * (parseInt(__DECODE_0__(0x13d)) / 0x4) + -parseInt(__DECODE_0__(0x144)) / 0x5 * (-parseInt(__DECODE_0__(0x13e)) / 0x6) + parseInt(__DECODE_0__(0x13c)) / 0x7 + -parseInt(__DECODE_0__(0x146)) / 0x8 * (parseInt(__DECODE_0__(0x143)) / 0x9) + -parseInt(__DECODE_0__(0x13b)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x20c22);
var input = require('fs')[__DECODE_0__(0x140)]('/dev/stdin', __DECODE_0__(0x145));
var Arr = input[__DECODE_0__(0x142)]()['split']('\x0a');
for (var i = 0x0; i < Arr['length']; i++) {
  var arr = Arr[i]['split']('\x20');
  var a = arr[0x1] - 0x0 + (arr[0x2] - 0x0);
  var b = (arr[0x1] - 0x0) * 0xc8 + (arr[0x2] - 0x0) * 0x12c;
  console['log'](arr[0x0] + '\x20' + a + '\x20' + b);
}
