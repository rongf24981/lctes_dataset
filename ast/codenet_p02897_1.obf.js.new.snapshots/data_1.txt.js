var a0_0xc1e92d = __DECODE_0__;
function __STRING_ARRAY__() {
  var _0xc4a4d5 = ['2nMfHRc', '827106qNLVQv', '/dev/stdin', '1187790VIruoT', '4LZNJQK', '90NOErFq', '250424qWiJKP', '245xbzZrX', '4831629AlQpAA', '115870QpRRvT', '2358ZGKfNP', '2807470lTUbft', 'toFixed'];
  __STRING_ARRAY__ = function () {
    return _0xc4a4d5;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var _0x301e59 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x301e59(0x117)) / 0x1 * (-parseInt(_0x301e59(0x11b)) / 0x2) + parseInt(_0x301e59(0x11c)) / 0x3 * (-parseInt(_0x301e59(0x11f)) / 0x4) + parseInt(_0x301e59(0x11e)) / 0x5 + -parseInt(_0x301e59(0x118)) / 0x6 * (-parseInt(_0x301e59(0x122)) / 0x7) + parseInt(_0x301e59(0x121)) / 0x8 * (parseInt(_0x301e59(0x120)) / 0x9) + parseInt(_0x301e59(0x119)) / 0xa + -parseInt(_0x301e59(0x116)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3c103);
function main(input) {
  var _0x29f540 = __DECODE_0__;
  var Gusu = 0x0;
  var Kisu = 0x0;
  var Out = 0x0;
  if (input > 0x0) {
    if (input % 0x2 == 0x0) {
      Gusu = input / 0x2;
      Kisu = Gusu;
      Out = Kisu / input;
    } else {
      if (input % 0x2 == 0x1) {
        Gusu = parseInt(input / 0x2);
        Kisu = Gusu + 0x1;
        Out = Kisu / input;
      }
    }
  }
  console['log'](Out[_0x29f540(0x11a)](0xa));
}
function __DECODE_0__(FNLrmo, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x116;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FNLrmo, key);
}
main(require('fs')['readFileSync'](a0_0xc1e92d(0x11d), 'utf8'));
