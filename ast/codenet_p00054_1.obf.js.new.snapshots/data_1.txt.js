var a0_0x4ca598 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x2f242e = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x2f242e(0x1d5)) / 0x1 + parseInt(_0x2f242e(0x1de)) / 0x2 + -parseInt(_0x2f242e(0x1dd)) / 0x3 * (-parseInt(_0x2f242e(0x1d4)) / 0x4) + parseInt(_0x2f242e(0x1df)) / 0x5 + -parseInt(_0x2f242e(0x1da)) / 0x6 * (parseInt(_0x2f242e(0x1d2)) / 0x7) + -parseInt(_0x2f242e(0x1d3)) / 0x8 + -parseInt(_0x2f242e(0x1d6)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd1bc0);
var input = require('fs')[a0_0x4ca598(0x1db)]('/dev/stdin', a0_0x4ca598(0x1d8));
var Arr = input[a0_0x4ca598(0x1d7)]()[a0_0x4ca598(0x1d1)]('\x0a');
for (var i = 0x0; i < Arr[a0_0x4ca598(0x1e0)]; i++) {
  var arr = Arr[i][a0_0x4ca598(0x1d1)]('\x20')[a0_0x4ca598(0x1d9)](Number);
  var n = arr[0x2];
  var sum = 0x0;
  while (n--) {
    var str = (arr[0x0] / arr[0x1])['toFixed'](n + 0x2)['slice'](-0x2);
    sum += str[0x0] - 0x0;
  }
  console[a0_0x4ca598(0x1dc)](sum);
}
function __DECODE_0__(KIRLgQ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d1;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KIRLgQ, key);
}
function __STRING_ARRAY__() {
  var _0x6e698b = ['4useuDB', '198328GvQLRL', '736812FuKGzV', 'trim', 'utf8', 'map', '830964qTkIoL', 'readFileSync', 'log', '4627437GZaqTt', '127758JEoEqY', '624850xesKNA', 'length', 'split', '7uXIpmd', '3628528FlZbST'];
  __STRING_ARRAY__ = function () {
    return _0x6e698b;
  };
  return __STRING_ARRAY__();
}
