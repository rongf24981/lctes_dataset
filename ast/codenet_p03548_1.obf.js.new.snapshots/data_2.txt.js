function __STRING_ARRAY__() {
  var _0x54cf46 = ['4OesHwn', '5197870dqAeOc', '682668YjOQAq', '1833170UvdOrB', '3687528oRJQNl', '36DZxgaJ', '1041928mQzBxA', 'readFileSync', 'split', '7720952tSuYya', 'log', '26684OLNOPt', '7HRuVnp'];
  __STRING_ARRAY__ = function () {
    return _0x54cf46;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xba)) / 0x1 + -parseInt(__DECODE_0__(0xb2)) / 0x2 + -parseInt(__DECODE_0__(0xb6)) / 0x3 + parseInt(__DECODE_0__(0xb4)) / 0x4 * (parseInt(__DECODE_0__(0xb5)) / 0x5) + -parseInt(__DECODE_0__(0xb8)) / 0x6 * (-parseInt(__DECODE_0__(0xb3)) / 0x7) + -parseInt(__DECODE_0__(0xbd)) / 0x8 + parseInt(__DECODE_0__(0xb9)) / 0x9 * (-parseInt(__DECODE_0__(0xb7)) / 0xa);
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
  var X = parseInt(input[__DECODE_0__(0xbc)]('\x20')[0x0]);
  var Y = parseInt(input[__DECODE_0__(0xbc)]('\x20')[0x1]);
  var Z = parseInt(input[__DECODE_0__(0xbc)]('\x20')[0x2]);
  var N = 0x1;
  var x = 0x0;
  while (!![]) {
    x = N * Y + (N + 0x1) * Z;
    if (x > X) {
      break;
    }
    N++;
  }
  console[__DECODE_0__(0xbe)](--N);
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
Main(require('fs')[__DECODE_0__(0xbb)]('/dev/stdin', 'utf8'));
