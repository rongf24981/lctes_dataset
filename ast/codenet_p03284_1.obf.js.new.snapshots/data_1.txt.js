var a0_0x44db77 = __DECODE_0__;
function __STRING_ARRAY__() {
  var _0xdb6f86 = ['/dev/stdin', '22pnlpjN', '26230SiPplK', '1662248dlAYEW', '535560liYaSk', '35PpbSDe', 'utf8', '2934ElNufK', 'split', '651opqrTT', '63xQPUBS', '232112owfmyl', '192cKWIEk', 'log', '971064nyiHAo', '11419752YNPFGP'];
  __STRING_ARRAY__ = function () {
    return _0xdb6f86;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var _0x3b0b5a = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x3b0b5a(0x180)) / 0x1 + parseInt(_0x3b0b5a(0x175)) / 0x2 + parseInt(_0x3b0b5a(0x17b)) / 0x3 * (-parseInt(_0x3b0b5a(0x17e)) / 0x4) + -parseInt(_0x3b0b5a(0x177)) / 0x5 * (parseInt(_0x3b0b5a(0x176)) / 0x6) + -parseInt(_0x3b0b5a(0x17c)) / 0x7 * (-parseInt(_0x3b0b5a(0x17d)) / 0x8) + parseInt(_0x3b0b5a(0x179)) / 0x9 * (-parseInt(_0x3b0b5a(0x184)) / 0xa) + -parseInt(_0x3b0b5a(0x183)) / 0xb * (-parseInt(_0x3b0b5a(0x181)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x82680);
function Main(input) {
  var _0x54a832 = __DECODE_0__;
  var N = input['split']('\x20')[0x0];
  var K = input[_0x54a832(0x17a)]('\x20')[0x1];
  N = parseInt(N, 0xa);
  K = parseInt(K, 0xa);
  var jud = N % K === 0x0;
  if (jud) {
    console[_0x54a832(0x17f)](0x0);
  } else {
    console[_0x54a832(0x17f)](0x1);
  }
}
function __DECODE_0__(wfRBeW, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x175;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wfRBeW, key);
}
Main(require('fs')['readFileSync'](a0_0x44db77(0x182), a0_0x44db77(0x178)));
