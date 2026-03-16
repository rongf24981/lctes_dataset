(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x10c)) / 0x1 + parseInt(__DECODE_0__(0x106)) / 0x2 * (-parseInt(__DECODE_0__(0x10a)) / 0x3) + parseInt(__DECODE_0__(0x112)) / 0x4 + parseInt(__DECODE_0__(0x10b)) / 0x5 * (parseInt(__DECODE_0__(0x10e)) / 0x6) + parseInt(__DECODE_0__(0x113)) / 0x7 * (parseInt(__DECODE_0__(0x107)) / 0x8) + parseInt(__DECODE_0__(0x108)) / 0x9 + -parseInt(__DECODE_0__(0x10d)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x538f5);
function __DECODE_0__(TcnrFy, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x106;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TcnrFy, key);
}
function __STRING_ARRAY__() {
  var _0x5ee354 = ['log', '181238JJjKyi', '437320FvHImy', '4898502OJagpg', 'split', '21SoEipf', '341145UsJoCO', '543605Uyekyi', '1306030EbfFwc', '30kXGVAd', 'utf8', 'readFileSync', '/dev/stdin', '1093576AXpFNX', '63yBLGhj'];
  __STRING_ARRAY__ = function () {
    return _0x5ee354;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input[__DECODE_0__(0x109)]('\x0a');
  var line = input[0x0][__DECODE_0__(0x109)]('\x20');
  var m = parseInt(line[0x0]);
  var n = parseInt(line[0x1]);
  var ans = (m - 0x1) * (n - 0x1);
  console[__DECODE_0__(0x114)](ans);
}
Main(require('fs')[__DECODE_0__(0x110)](__DECODE_0__(0x111), __DECODE_0__(0x10f)));
