function __STRING_ARRAY__() {
  var _0x54cf46 = ['4OesHwn', '5197870dqAeOc', '682668YjOQAq', '1833170UvdOrB', '3687528oRJQNl', '36DZxgaJ', '1041928mQzBxA', 'readFileSync', 'split', '7720952tSuYya', 'log', '26684OLNOPt', '7HRuVnp'];
  __STRING_ARRAY__ = function () {
    return _0x54cf46;
  };
  return __STRING_ARRAY__();
}
var a0_0x32c359 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x417c0c = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x417c0c(0xba)) / 0x1 + -parseInt(_0x417c0c(0xb2)) / 0x2 + -parseInt(_0x417c0c(0xb6)) / 0x3 + parseInt(_0x417c0c(0xb4)) / 0x4 * (parseInt(_0x417c0c(0xb5)) / 0x5) + -parseInt(_0x417c0c(0xb8)) / 0x6 * (-parseInt(_0x417c0c(0xb3)) / 0x7) + -parseInt(_0x417c0c(0xbd)) / 0x8 + parseInt(_0x417c0c(0xb9)) / 0x9 * (-parseInt(_0x417c0c(0xb7)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb8c45);
function Main(input) {
  var _0x15ccb0 = __DECODE_0__;
  var X = parseInt(input[_0x15ccb0(0xbc)]('\x20')[0x0]);
  var Y = parseInt(input[_0x15ccb0(0xbc)]('\x20')[0x1]);
  var Z = parseInt(input[_0x15ccb0(0xbc)]('\x20')[0x2]);
  var N = 0x1;
  var x = 0x0;
  while (!![]) {
    x = N * Y + (N + 0x1) * Z;
    if (x > X) {
      break;
    }
    N++;
  }
  console[_0x15ccb0(0xbe)](--N);
}
function __DECODE_0__(xELTDg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xb2;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xELTDg, key);
}
Main(require('fs')[a0_0x32c359(0xbb)]('/dev/stdin', 'utf8'));
