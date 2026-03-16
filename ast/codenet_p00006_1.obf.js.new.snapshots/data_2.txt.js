(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x9c)) / 0x1 + -parseInt(__DECODE_0__(0xa5)) / 0x2 + -parseInt(__DECODE_0__(0xa9)) / 0x3 * (-parseInt(__DECODE_0__(0xa4)) / 0x4) + -parseInt(__DECODE_0__(0x9f)) / 0x5 + parseInt(__DECODE_0__(0x9b)) / 0x6 * (parseInt(__DECODE_0__(0xaa)) / 0x7) + parseInt(__DECODE_0__(0x9d)) / 0x8 * (-parseInt(__DECODE_0__(0xa8)) / 0x9) + -parseInt(__DECODE_0__(0xa1)) / 0xa * (-parseInt(__DECODE_0__(0xa3)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x859e9);
var input = require('fs')[__DECODE_0__(0xa6)]('/dev/stdin', __DECODE_0__(0xa2));
function __STRING_ARRAY__() {
  var _0x3b973b = ['1303274MBccKS', 'readFileSync', 'log', '9qLYruk', '17964DxqhTi', '7RYirBp', '792942ooSvKO', '51062ygjuHa', '325576oUqkJZ', 'split', '1473870qPzaBF', 'reverse', '13694860qREiJO', 'utf8', '11HOOnIW', '56AunQut'];
  __STRING_ARRAY__ = function () {
    return _0x3b973b;
  };
  return __STRING_ARRAY__();
}
var string = input['trim']();
function __DECODE_0__(KtYuiZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x9b;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KtYuiZ, key);
}
console[__DECODE_0__(0xa7)](reverse(string));
function reverse(s) {
  return string[__DECODE_0__(0x9e)]('')[__DECODE_0__(0xa0)]()['join']('');
}
