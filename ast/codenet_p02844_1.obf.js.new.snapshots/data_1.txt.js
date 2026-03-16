function __STRING_ARRAY__() {
  var _0x2fcff2 = ['47765lfdsHD', 'log', '18998508BqNHSF', '373121XjBNVX', '424EfqMpy', 'trim', 'substr', '164259qIGNRd', '138gGLiZA', '111793INzJbq', '109607LyqyoP', 'indexOf', '148AERlmj', 'readFileSync', '290Uliwgz', '26gMoEim', '553161VfDgpg'];
  __STRING_ARRAY__ = function () {
    return _0x2fcff2;
  };
  return __STRING_ARRAY__();
}
var a0_0x46060e = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x4a1ebd = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x4a1ebd(0x101)) / 0x1 * (-parseInt(_0x4a1ebd(0xf5)) / 0x2) + parseInt(_0x4a1ebd(0xf6)) / 0x3 + parseInt(_0x4a1ebd(0xf2)) / 0x4 * (parseInt(_0x4a1ebd(0xf7)) / 0x5) + parseInt(_0x4a1ebd(0xff)) / 0x6 * (-parseInt(_0x4a1ebd(0xfa)) / 0x7) + parseInt(_0x4a1ebd(0xfb)) / 0x8 * (parseInt(_0x4a1ebd(0xfe)) / 0x9) + parseInt(_0x4a1ebd(0xf4)) / 0xa * (parseInt(_0x4a1ebd(0x100)) / 0xb) + parseInt(_0x4a1ebd(0xf9)) / 0xc;
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
  var _0x1059e1 = __DECODE_0__;
  input = input[_0x1059e1(0xfc)]()['split']('\x0a');
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
    x1 = xTmp[_0x1059e1(0xfd)](0x1, 0x1);
    x2 = xTmp['substr'](0x2, 0x1);
    x3 = xTmp[_0x1059e1(0xfd)](0x3, 0x1);
    x1i = SasStr[_0x1059e1(0x102)](x1);
    if (x1i !== -0x1) {
      sTmp = SasStr[_0x1059e1(0xfd)](x1i + 0x1);
      x2i = sTmp[_0x1059e1(0x102)](x2);
      if (x2i !== -0x1) {
        sTmp = sTmp[_0x1059e1(0xfd)](x2i + 0x1);
        x3i = sTmp[_0x1059e1(0x102)](x3);
        if (x3i !== -0x1) {
          ans++;
        }
      }
    }
  }
  console[_0x1059e1(0xf8)](ans);
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
Main(require('fs')[a0_0x46060e(0xf3)]('/dev/stdin', 'utf8'));
