(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1f3)) / 0x1 * (-parseInt(__DECODE_0__(0x1fb)) / 0x2) + -parseInt(__DECODE_0__(0x1fe)) / 0x3 + parseInt(__DECODE_0__(0x1f2)) / 0x4 * (parseInt(__DECODE_0__(0x1f0)) / 0x5) + -parseInt(__DECODE_0__(0x1fa)) / 0x6 + parseInt(__DECODE_0__(0x1f9)) / 0x7 + -parseInt(__DECODE_0__(0x1f1)) / 0x8 * (parseInt(__DECODE_0__(0x1ef)) / 0x9) + parseInt(__DECODE_0__(0x1f5)) / 0xa * (parseInt(__DECODE_0__(0x1ee)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9d417);
var input = require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0x1f8));
var Arr = input['trim']()[__DECODE_0__(0x1fc)]('\x0a');
function __DECODE_0__(Krsxcf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ed;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Krsxcf, key);
}
var n = Arr[0x0] - 0x0;
var x = Arr[0x1][__DECODE_0__(0x1fc)]('\x20')[__DECODE_0__(0x1f4)](Number);
var y = Arr[0x2]['split']('\x20')[__DECODE_0__(0x1f4)](Number);
var sum1 = 0x0;
var sum2 = 0x0;
var sum3 = 0x0;
var max = 0x0;
for (var i = 0x0; i < n; i++) {
  var a = Math[__DECODE_0__(0x1fd)](x[i] - y[i]);
  sum1 += a;
  sum2 += Math[__DECODE_0__(0x1f6)](a, 0x2);
  sum3 += Math[__DECODE_0__(0x1f6)](a, 0x3);
  max = Math['max'](max, a);
}
function __STRING_ARRAY__() {
  var _0x20abef = ['pow', 'toFixed', 'utf8', '2418325nBIbAm', '4192404qdppxW', '150IBpbjc', 'split', 'abs', '245301rnXZXA', 'log', '408331wtKLpL', '5697aUjyaX', '10uWRxgV', '6160ERxJCR', '2351212aBPaPe', '16565WTopKg', 'map', '440sMJpOU'];
  __STRING_ARRAY__ = function () {
    return _0x20abef;
  };
  return __STRING_ARRAY__();
}
console['log'](sum1[__DECODE_0__(0x1f7)](0x6));
console[__DECODE_0__(0x1ed)](Math['sqrt'](sum2)['toFixed'](0x6));
console[__DECODE_0__(0x1ed)](Math[__DECODE_0__(0x1f6)](sum3, 0x1 / 0x3)['toFixed'](0x6));
console[__DECODE_0__(0x1ed)](max[__DECODE_0__(0x1f7)](0x6));
