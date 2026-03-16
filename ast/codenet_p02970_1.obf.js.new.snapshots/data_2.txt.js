(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xfb)) / 0x1 + parseInt(__DECODE_0__(0xfc)) / 0x2 + -parseInt(__DECODE_0__(0xf1)) / 0x3 + parseInt(__DECODE_0__(0xf4)) / 0x4 * (parseInt(__DECODE_0__(0xf5)) / 0x5) + parseInt(__DECODE_0__(0xf8)) / 0x6 + -parseInt(__DECODE_0__(0xfa)) / 0x7 * (-parseInt(__DECODE_0__(0xfd)) / 0x8) + -parseInt(__DECODE_0__(0xf7)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7400b);
function Main(input) {
  var dataList = input[__DECODE_0__(0xf9)]('\x0a');
  var data = dataList[0x0]['split']('\x20');
  var n = data[0x0];
  var d = data[0x1];
  var checkNum = d * 0x2 + 0x1;
  var num = Math['floor'](n / checkNum);
  var rest = n % checkNum;
  if (rest > 0x0) {
    num += 0x1;
  }
  console[__DECODE_0__(0xf0)](num);
}
Main(require('fs')[__DECODE_0__(0xf3)](__DECODE_0__(0xf2), __DECODE_0__(0xf6)));
function __DECODE_0__(QCVLRn, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xf0;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QCVLRn, key);
}
function __STRING_ARRAY__() {
  var _0x1870f5 = ['715524vBulxU', 'split', '204729bfphIx', '118236MHRVqA', '821874XKupFP', '40lTeLXe', 'log', '1977381oPxXPi', '/dev/stdin', 'readFileSync', '4VeUSRS', '1764745vyOpuq', 'utf8', '120033bVNLMk'];
  __STRING_ARRAY__ = function () {
    return _0x1870f5;
  };
  return __STRING_ARRAY__();
}
