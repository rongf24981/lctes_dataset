function __STRING_ARRAY__() {
  var _0x1ffc65 = ['799605oNvUOr', 'length', '333998pwvBsb', 'trim', '1664300BsyImc', 'utf8', '18cQoFXK', '/dev/stdin', '11007prSZCo', '976JBOJzu', '7178408lqXXeE', '7173fShJpn', 'readFileSync', '1354520AghLRW', 'map', '2070oIVGga', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x1ffc65;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1fc)) / 0x1 + parseInt(__DECODE_0__(0x1f4)) / 0x2 * (-parseInt(__DECODE_0__(0x1f6)) / 0x3) + parseInt(__DECODE_0__(0x1f8)) / 0x4 + -parseInt(__DECODE_0__(0x1ef)) / 0x5 + parseInt(__DECODE_0__(0x1f1)) / 0x6 * (-parseInt(__DECODE_0__(0x1fe)) / 0x7) + parseInt(__DECODE_0__(0x1f5)) / 0x8 + -parseInt(__DECODE_0__(0x1f3)) / 0x9 * (-parseInt(__DECODE_0__(0x1fa)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9daff);
function __DECODE_0__(BuvSot, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ef;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BuvSot, key);
}
function Main(input) {
  var max = 0x0;
  var ans = 0x0;
  input = input['split']('\x0a');
  for (var i = 0x1; i < input[__DECODE_0__(0x1fd)]; i++) {
    var mem = input[i][__DECODE_0__(0x1fb)]('\x20')[__DECODE_0__(0x1f9)](Number);
    if (max < mem[0x0]) {
      max = mem[0x0];
      ans = mem[0x0] + mem[0x1];
    }
  }
  console['log'](ans);
}
Main(require('fs')[__DECODE_0__(0x1f7)](__DECODE_0__(0x1f2), __DECODE_0__(0x1f0))[__DECODE_0__(0x1ff)]());
