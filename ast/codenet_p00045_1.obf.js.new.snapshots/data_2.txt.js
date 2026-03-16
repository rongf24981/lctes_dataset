(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x16c)) / 0x1 + parseInt(__DECODE_0__(0x16b)) / 0x2 + parseInt(__DECODE_0__(0x15b)) / 0x3 * (parseInt(__DECODE_0__(0x15f)) / 0x4) + -parseInt(__DECODE_0__(0x15e)) / 0x5 * (-parseInt(__DECODE_0__(0x168)) / 0x6) + parseInt(__DECODE_0__(0x165)) / 0x7 * (parseInt(__DECODE_0__(0x15a)) / 0x8) + -parseInt(__DECODE_0__(0x161)) / 0x9 * (-parseInt(__DECODE_0__(0x164)) / 0xa) + -parseInt(__DECODE_0__(0x15d)) / 0xb * (parseInt(__DECODE_0__(0x163)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xca49d);
var input = require('fs')[__DECODE_0__(0x166)](__DECODE_0__(0x160), __DECODE_0__(0x159));
function __DECODE_0__(bjcVIj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x158;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bjcVIj, key);
}
var Arr = input[__DECODE_0__(0x167)]()[__DECODE_0__(0x15c)]('\x0a');
function __STRING_ARRAY__() {
  var _0x1e5d4d = ['8469vCLQXX', 'forEach', '72iawHgS', '5150lNifnZ', '2699690CfFCFH', 'readFileSync', 'trim', '4487070OCzUHb', 'round', 'length', '2230174DjeFoj', '763904jVFdkU', 'log', 'map', 'utf8', '32ZHatOf', '143103fxSRlv', 'split', '7538234XiMKiz', '5tQXlUM', '24pEbvJf', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x1e5d4d;
  };
  return __STRING_ARRAY__();
}
var sum = 0x0;
var cnt = 0x0;
Arr[__DECODE_0__(0x162)](function (v) {
  var arr = v['split'](',')[__DECODE_0__(0x158)](Number);
  sum += arr[0x0] * arr[0x1];
  cnt += arr[0x1];
});
console[__DECODE_0__(0x16d)](sum);
console['log'](Math[__DECODE_0__(0x169)](cnt / Arr[__DECODE_0__(0x16a)]));
