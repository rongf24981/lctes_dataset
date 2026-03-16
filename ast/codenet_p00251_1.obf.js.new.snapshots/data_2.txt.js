function __DECODE_0__(DXFuLM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x17e;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DXFuLM, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x189)) / 0x1 * (-parseInt(__DECODE_0__(0x184)) / 0x2) + -parseInt(__DECODE_0__(0x182)) / 0x3 + parseInt(__DECODE_0__(0x18b)) / 0x4 + -parseInt(__DECODE_0__(0x180)) / 0x5 + -parseInt(__DECODE_0__(0x188)) / 0x6 + parseInt(__DECODE_0__(0x18a)) / 0x7 + -parseInt(__DECODE_0__(0x183)) / 0x8 * (-parseInt(__DECODE_0__(0x17f)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8bf87);
function __STRING_ARRAY__() {
  var _0xe880ae = ['5410365SglJUf', 'split', '207399dXYEfL', '5212192YVSnRJ', '4afrmvQ', 'reduce', 'log', 'readFileSync', '3095214ZUXXMF', '352497yoaSQK', '556577ODucdv', '3217460MQhDiq', '/dev/stdin', 'map', '9xQyYiK'];
  __STRING_ARRAY__ = function () {
    return _0xe880ae;
  };
  return __STRING_ARRAY__();
}
function plus(a, b) {
  return a + b;
}
var input = require('fs')[__DECODE_0__(0x187)](__DECODE_0__(0x18c), 'utf8');
var Arr = input['trim']()[__DECODE_0__(0x181)]('\x0a')[__DECODE_0__(0x17e)](Number);
var sum = 0x0;
console[__DECODE_0__(0x186)](Arr[__DECODE_0__(0x185)](plus));
