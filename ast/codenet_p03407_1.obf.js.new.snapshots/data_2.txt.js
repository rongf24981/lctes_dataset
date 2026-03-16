function __STRING_ARRAY__() {
  var _0x528570 = ['trim', 'map', '580UqefaE', '6380620VBRLlm', '712RdJPbs', '1422336VVSnzP', 'log', '285798QjSicy', '3eAaGRx', '11JdMpDy', '3696385TJtcNY', 'utf8', '19205JveFEz', 'readFileSync', '543814CLvtkV', '3366sfWdZh'];
  __STRING_ARRAY__ = function () {
    return _0x528570;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(uWTJag, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xee;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uWTJag, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xef)) / 0x1 + parseInt(__DECODE_0__(0xf6)) / 0x2 * (parseInt(__DECODE_0__(0xf0)) / 0x3) + parseInt(__DECODE_0__(0xfa)) / 0x4 * (-parseInt(__DECODE_0__(0xf4)) / 0x5) + -parseInt(__DECODE_0__(0xfd)) / 0x6 + parseInt(__DECODE_0__(0xf2)) / 0x7 + -parseInt(__DECODE_0__(0xfc)) / 0x8 * (parseInt(__DECODE_0__(0xf7)) / 0x9) + -parseInt(__DECODE_0__(0xfb)) / 0xa * (-parseInt(__DECODE_0__(0xf1)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4f54b);
function Main(s) {
  s = s['split']('\x20')[__DECODE_0__(0xf9)](a => parseInt(a));
  console[__DECODE_0__(0xee)](s[0x0] + s[0x1] >= s[0x2] ? 'Yes' : 'No');
}
Main(require('fs')[__DECODE_0__(0xf5)]('/dev/stdin', __DECODE_0__(0xf3))[__DECODE_0__(0xf8)]());
