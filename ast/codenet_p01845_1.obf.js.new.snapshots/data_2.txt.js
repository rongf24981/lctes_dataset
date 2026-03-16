(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x12c)) / 0x1 + parseInt(__DECODE_0__(0x12b)) / 0x2 * (-parseInt(__DECODE_0__(0x127)) / 0x3) + -parseInt(__DECODE_0__(0x12e)) / 0x4 + parseInt(__DECODE_0__(0x124)) / 0x5 + -parseInt(__DECODE_0__(0x129)) / 0x6 + -parseInt(__DECODE_0__(0x128)) / 0x7 + parseInt(__DECODE_0__(0x125)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x78613);
function Main(input) {
  input = input['split']('\x0a');
  for (var i = 0x0; 0x1; i++) {
    input[i] = input[i][__DECODE_0__(0x123)]('\x20');
    var r0 = parseInt(input[i][0x0], 0xa);
    var w0 = parseInt(input[i][0x1], 0xa);
    var c = parseInt(input[i][0x2], 0xa);
    var r = parseInt(input[i][0x3], 0xa);
    if (r0 == 0x0 && w0 == 0x0 && c == 0x0 && r == 0x0) {
      break;
    }
    var a = c * w0;
    if (a <= r0) {
      console[__DECODE_0__(0x12a)]('0');
    } else {
      console['log'](Math['floor']((a - r0 + r - 0x1) / r));
    }
  }
}
function __STRING_ARRAY__() {
  var _0x595332 = ['log', '270OFClCO', '836850hawXKf', 'readFileSync', '1222328CAOwPE', 'utf8', 'split', '2462005AVLIeJ', '5747128LqrSaR', '/dev/stdin', '16671qspElw', '1204532HKtgDg', '1960284vZPnyS'];
  __STRING_ARRAY__ = function () {
    return _0x595332;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(PmrihL, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x123;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PmrihL, key);
}
Main(require('fs')[__DECODE_0__(0x12d)](__DECODE_0__(0x126), __DECODE_0__(0x12f)));
