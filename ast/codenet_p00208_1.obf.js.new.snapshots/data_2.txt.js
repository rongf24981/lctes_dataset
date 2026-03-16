(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xaf)) / 0x1 * (parseInt(__DECODE_0__(0xac)) / 0x2) + parseInt(__DECODE_0__(0xa9)) / 0x3 * (-parseInt(__DECODE_0__(0xa6)) / 0x4) + parseInt(__DECODE_0__(0xa2)) / 0x5 + -parseInt(__DECODE_0__(0x9f)) / 0x6 * (-parseInt(__DECODE_0__(0xa7)) / 0x7) + -parseInt(__DECODE_0__(0xad)) / 0x8 + -parseInt(__DECODE_0__(0xb0)) / 0x9 * (parseInt(__DECODE_0__(0xa0)) / 0xa) + parseInt(__DECODE_0__(0xa1)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe183e);
var input = require('fs')[__DECODE_0__(0xab)](__DECODE_0__(0xa4), __DECODE_0__(0xae));
var Arr = input['trim']()[__DECODE_0__(0xa3)]('\x0a');
function __DECODE_0__(KcUyvj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x9f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KcUyvj, key);
}
while (!![]) {
  var n = Arr['shift']() - 0x0;
  if (n == 0x0) {
    break;
  }
  var str = n[__DECODE_0__(0xaa)](0x8) + '';
  str = str[__DECODE_0__(0xa5)](/7/g, '9');
  str = str[__DECODE_0__(0xa5)](/6/g, '8');
  str = str[__DECODE_0__(0xa5)](/5/g, '7');
  str = str[__DECODE_0__(0xa5)](/4/g, '5');
  console[__DECODE_0__(0xa8)](str);
}
function __STRING_ARRAY__() {
  var _0x1afacb = ['222760BlKNGY', 'utf8', '16mciSVo', '31329Frowsa', '5298LlwsTS', '390OmXSCU', '8098596QQXHzl', '331545CjDyxB', 'split', '/dev/stdin', 'replace', '104bIbCzJ', '6377YrppxO', 'log', '51666QwTixl', 'toString', 'readFileSync', '8984nzjQtW'];
  __STRING_ARRAY__ = function () {
    return _0x1afacb;
  };
  return __STRING_ARRAY__();
}
