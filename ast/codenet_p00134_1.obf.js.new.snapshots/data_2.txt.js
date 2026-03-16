(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x86)) / 0x1 + parseInt(__DECODE_0__(0x85)) / 0x2 + -parseInt(__DECODE_0__(0x84)) / 0x3 + -parseInt(__DECODE_0__(0x83)) / 0x4 + -parseInt(__DECODE_0__(0x87)) / 0x5 * (parseInt(__DECODE_0__(0x7f)) / 0x6) + parseInt(__DECODE_0__(0x81)) / 0x7 + parseInt(__DECODE_0__(0x8b)) / 0x8 * (-parseInt(__DECODE_0__(0x82)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x517b4);
var input = require('fs')['readFileSync'](__DECODE_0__(0x7d), __DECODE_0__(0x80));
var Arr = input[__DECODE_0__(0x7e)]()[__DECODE_0__(0x8a)]('\x0a')[__DECODE_0__(0x89)](Number);
var n = Arr[__DECODE_0__(0x8c)]();
var sum = 0x0;
for (var i = 0x0; i < n; i++) {
  sum += Arr[i];
}
console[__DECODE_0__(0x88)](Math['floor'](sum / n));
function __DECODE_0__(SeUFwP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x7d;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SeUFwP, key);
}
function __STRING_ARRAY__() {
  var _0x146e8b = ['2978353ldcYhl', '196641ikQbPr', '47920jHsAKO', '10227AEWbKT', '949736xJQcvt', '528024XQGnzF', '1340JaeVNP', 'log', 'map', 'split', '304cIROTr', 'shift', '/dev/stdin', 'trim', '5574AdrJZD', 'utf8'];
  __STRING_ARRAY__ = function () {
    return _0x146e8b;
  };
  return __STRING_ARRAY__();
}
