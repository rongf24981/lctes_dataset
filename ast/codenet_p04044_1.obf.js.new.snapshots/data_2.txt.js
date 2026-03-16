(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x89)) / 0x1 + parseInt(__DECODE_0__(0x7f)) / 0x2 * (-parseInt(__DECODE_0__(0x7d)) / 0x3) + -parseInt(__DECODE_0__(0x81)) / 0x4 + parseInt(__DECODE_0__(0x7e)) / 0x5 * (parseInt(__DECODE_0__(0x7b)) / 0x6) + parseInt(__DECODE_0__(0x83)) / 0x7 + parseInt(__DECODE_0__(0x80)) / 0x8 + -parseInt(__DECODE_0__(0x82)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa5c81);
function Main(input) {
  var lines = input[__DECODE_0__(0x84)]('\x0a');
  var s = lines[__DECODE_0__(0x86)](0x1, lines['length']);
  var s_sorted = s[__DECODE_0__(0x87)]((a, b) => a > b ? 0x1 : -0x1);
  console[__DECODE_0__(0x85)](s_sorted[__DECODE_0__(0x7c)](''));
}
function __DECODE_0__(nITnPe, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x7a;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nITnPe, key);
}
function __STRING_ARRAY__() {
  var _0x305bcb = ['520bBLKxQ', '2462uICwNZ', '10748064VBkFZW', '1391604YXGuPt', '2444625qTZmiG', '5425322jJiHLu', 'split', 'log', 'splice', 'sort', 'readFileSync', '1047423DbKhrR', 'utf8', '37836RtMeTd', 'join', '1044VmImIe'];
  __STRING_ARRAY__ = function () {
    return _0x305bcb;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0x88)]('/dev/stdin', __DECODE_0__(0x7a)));
