function __STRING_ARRAY__() {
  var _0x2fcff2 = ['47765lfdsHD', 'log', '18998508BqNHSF', '373121XjBNVX', '424EfqMpy', 'trim', 'substr', '164259qIGNRd', '138gGLiZA', '111793INzJbq', '109607LyqyoP', 'indexOf', '148AERlmj', 'readFileSync', '290Uliwgz', '26gMoEim', '553161VfDgpg'];
  __STRING_ARRAY__ = function () {
    return _0x2fcff2;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x101)) / 0x1 * (-parseInt(__DECODE_0__(0xf5)) / 0x2) + parseInt(__DECODE_0__(0xf6)) / 0x3 + parseInt(__DECODE_0__(0xf2)) / 0x4 * (parseInt(__DECODE_0__(0xf7)) / 0x5) + parseInt(__DECODE_0__(0xff)) / 0x6 * (-parseInt(__DECODE_0__(0xfa)) / 0x7) + parseInt(__DECODE_0__(0xfb)) / 0x8 * (parseInt(__DECODE_0__(0xfe)) / 0x9) + parseInt(__DECODE_0__(0xf4)) / 0xa * (parseInt(__DECODE_0__(0x100)) / 0xb) + parseInt(__DECODE_0__(0xf9)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb2c43);
function Main(input) {
  input = input[__DECODE_0__(0xfc)]()['split']('\x0a');
  var N = parseInt(input[0x0]);
  var SasStr = input[0x1];
  var ans = 0x0;
  var x1;
  var x2;
  var x3;
  var xTmp;
  var x1i;
  var x2i;
  var x3i;
  var sTmp;
  for (var i = 0x3e8; i < 0x7d0; i++) {
    xTmp = String(i);
    x1 = xTmp[__DECODE_0__(0xfd)](0x1, 0x1);
    x2 = xTmp['substr'](0x2, 0x1);
    x3 = xTmp[__DECODE_0__(0xfd)](0x3, 0x1);
    x1i = SasStr[__DECODE_0__(0x102)](x1);
    if (x1i !== -0x1) {
      sTmp = SasStr[__DECODE_0__(0xfd)](x1i + 0x1);
      x2i = sTmp[__DECODE_0__(0x102)](x2);
      if (x2i !== -0x1) {
        sTmp = sTmp[__DECODE_0__(0xfd)](x2i + 0x1);
        x3i = sTmp[__DECODE_0__(0x102)](x3);
        if (x3i !== -0x1) {
          ans++;
        }
      }
    }
  }
  console[__DECODE_0__(0xf8)](ans);
}
function __DECODE_0__(VpBwNz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xf2;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VpBwNz, key);
}
Main(require('fs')[__DECODE_0__(0xf3)]('/dev/stdin', 'utf8'));
