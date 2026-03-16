(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xed)) / 0x1 * (parseInt(__DECODE_0__(0xf0)) / 0x2) + -parseInt(__DECODE_0__(0xe7)) / 0x3 * (parseInt(__DECODE_0__(0xea)) / 0x4) + parseInt(__DECODE_0__(0xf2)) / 0x5 + -parseInt(__DECODE_0__(0xf4)) / 0x6 + parseInt(__DECODE_0__(0xee)) / 0x7 + parseInt(__DECODE_0__(0xeb)) / 0x8 * (-parseInt(__DECODE_0__(0xf1)) / 0x9) + parseInt(__DECODE_0__(0xec)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6df46);
function __DECODE_0__(HgPggW, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe7;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HgPggW, key);
}
function Main(input) {
  input = input[__DECODE_0__(0xe9)]('\x0a');
  var X = input[0x0] - 0x0;
  console[__DECODE_0__(0xef)](Math[__DECODE_0__(0xe8)]((0x2 * Math['abs'](X) + 0x1 / 0x4) ** (0x1 / 0x2) - 0x1 / 0x2));
}
Main(require('fs')[__DECODE_0__(0xf3)](__DECODE_0__(0xf5), 'utf8'));
function __STRING_ARRAY__() {
  var _0x5a7cc1 = ['ceil', 'split', '1205380tjzESX', '69880JuVcJF', '8267910PTczah', '41tJyuTp', '5251078cQYWeE', 'log', '14134aiLypI', '144yICXnF', '750170DTrHXJ', 'readFileSync', '3274518enXMJI', '/dev/stdin', '3VsKdZV'];
  __STRING_ARRAY__ = function () {
    return _0x5a7cc1;
  };
  return __STRING_ARRAY__();
}
