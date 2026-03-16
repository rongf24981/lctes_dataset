var a0_0x4b6611 = __DECODE_0__;
function __STRING_ARRAY__() {
  var _0x510cf2 = ['82odrnCy', 'utf8', '177yKxUor', 'split', '925072EYWafx', 'match', '42954967JEXODT', '4165903iVAJZm', '1599714pLmEAl', '10HTBEce', 'indexOf', 'readFileSync', '15EAubAk', 'log', 'trim', '69836OKtObq', '/dev/stdin', 'replace', '26548YUieca', '1600242HhMPvs'];
  __STRING_ARRAY__ = function () {
    return _0x510cf2;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var _0xcd4392 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0xcd4392(0x12a)) / 0x1 * (-parseInt(_0xcd4392(0x128)) / 0x2) + parseInt(_0xcd4392(0x12c)) / 0x3 * (-parseInt(_0xcd4392(0x125)) / 0x4) + parseInt(_0xcd4392(0x122)) / 0x5 * (-parseInt(_0xcd4392(0x129)) / 0x6) + -parseInt(_0xcd4392(0x131)) / 0x7 + parseInt(_0xcd4392(0x12e)) / 0x8 + parseInt(_0xcd4392(0x132)) / 0x9 + parseInt(_0xcd4392(0x11f)) / 0xa * (parseInt(_0xcd4392(0x130)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa7222);
var input = require('fs')[a0_0x4b6611(0x121)](a0_0x4b6611(0x126), a0_0x4b6611(0x12b));
var strA = input[a0_0x4b6611(0x124)]();
function __DECODE_0__(EcuKBy, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x11f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EcuKBy, key);
}
var abc = 'abcdefghijklmnopqrstuvwxyz'[a0_0x4b6611(0x12d)]('');
for (var i = 0x0; i < 0x1a; i++) {
  var strB = strA[a0_0x4b6611(0x127)](/[a-z]/g, function (s) {
    var _0x40115e = a0_0x4b6611;
    return abc[(abc[_0x40115e(0x120)](s) + i) % 0x1a];
  });
  if (strB[a0_0x4b6611(0x12f)](/the|this|that/)) {
    break;
  }
}
console[a0_0x4b6611(0x123)](strB);
