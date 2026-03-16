function __DECODE_0__(KZCwNg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x141;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KZCwNg, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x14f)) / 0x1 + -parseInt(__DECODE_0__(0x145)) / 0x2 * (-parseInt(__DECODE_0__(0x148)) / 0x3) + parseInt(__DECODE_0__(0x150)) / 0x4 * (-parseInt(__DECODE_0__(0x14b)) / 0x5) + parseInt(__DECODE_0__(0x149)) / 0x6 + -parseInt(__DECODE_0__(0x14d)) / 0x7 * (-parseInt(__DECODE_0__(0x14c)) / 0x8) + parseInt(__DECODE_0__(0x152)) / 0x9 * (parseInt(__DECODE_0__(0x147)) / 0xa) + -parseInt(__DECODE_0__(0x153)) / 0xb * (parseInt(__DECODE_0__(0x14e)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x79f07);
var input = require('fs')['readFileSync'](__DECODE_0__(0x142), 'utf8');
var Arr = input['trim']()[__DECODE_0__(0x146)]('\x0a');
Arr[__DECODE_0__(0x143)]();
var obj = {};
function __STRING_ARRAY__() {
  var _0x453a30 = ['694648xjTnNz', 'split', '26210nPjrfZ', '3kRxTxS', '2927832RZIFdx', 'insert', '178080PLXulq', '572624JFBxyR', '35hGAKgP', '108BcTrho', '928556YhIBcE', '68YDGOok', 'forEach', '3096Gvpoij', '2344749rcptax', 'log', 'hasOwnProperty', '/dev/stdin', 'shift', 'yes'];
  __STRING_ARRAY__ = function () {
    return _0x453a30;
  };
  return __STRING_ARRAY__();
}
Arr[__DECODE_0__(0x151)](function (v) {
  var arr = v['split']('\x20');
  if (arr[0x0] == __DECODE_0__(0x14a)) {
    obj[arr[0x1]] = !![];
  }
  if (arr[0x0] == 'find') {
    console[__DECODE_0__(0x154)](obj[__DECODE_0__(0x141)](arr[0x1]) ? __DECODE_0__(0x144) : 'no');
  }
});
