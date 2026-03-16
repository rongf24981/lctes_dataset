(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x11c)) / 0x1 * (-parseInt(__DECODE_0__(0x116)) / 0x2) + parseInt(__DECODE_0__(0x121)) / 0x3 + parseInt(__DECODE_0__(0x124)) / 0x4 * (-parseInt(__DECODE_0__(0x120)) / 0x5) + parseInt(__DECODE_0__(0x11d)) / 0x6 * (-parseInt(__DECODE_0__(0x119)) / 0x7) + parseInt(__DECODE_0__(0x118)) / 0x8 + parseInt(__DECODE_0__(0x11e)) / 0x9 + -parseInt(__DECODE_0__(0x123)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x72029);
function Main(input) {
  function counter(str, seq) {
    return str[__DECODE_0__(0x11b)](seq)[__DECODE_0__(0x115)] - 0x1;
  }
  lines = input['split']('\x0a');
  var s = lines[0x0];
  var bw = counter(s, 'BW');
  var wb = counter(s, 'WB');
  console[__DECODE_0__(0x11a)](bw + wb);
}
function __DECODE_0__(cmDqUc, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x115;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(cmDqUc, key);
}
Main(require('fs')[__DECODE_0__(0x122)](__DECODE_0__(0x117), __DECODE_0__(0x11f)));
function __STRING_ARRAY__() {
  var _0x49933d = ['readFileSync', '4206340vocHoQ', '88cGqwFD', 'length', '2sDwvVP', '/dev/stdin', '6416240mOEECS', '7AdplFG', 'log', 'split', '522643udaWtX', '4447902CoUWFj', '5139378dBYGlu', 'utf8', '163855xvllim', '1362549PiwnbD'];
  __STRING_ARRAY__ = function () {
    return _0x49933d;
  };
  return __STRING_ARRAY__();
}
