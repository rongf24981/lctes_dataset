function __STRING_ARRAY__() {
  var _0x510cf2 = ['82odrnCy', 'utf8', '177yKxUor', 'split', '925072EYWafx', 'match', '42954967JEXODT', '4165903iVAJZm', '1599714pLmEAl', '10HTBEce', 'indexOf', 'readFileSync', '15EAubAk', 'log', 'trim', '69836OKtObq', '/dev/stdin', 'replace', '26548YUieca', '1600242HhMPvs'];
  __STRING_ARRAY__ = function () {
    return _0x510cf2;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x12a)) / 0x1 * (-parseInt(__DECODE_0__(0x128)) / 0x2) + parseInt(__DECODE_0__(0x12c)) / 0x3 * (-parseInt(__DECODE_0__(0x125)) / 0x4) + parseInt(__DECODE_0__(0x122)) / 0x5 * (-parseInt(__DECODE_0__(0x129)) / 0x6) + -parseInt(__DECODE_0__(0x131)) / 0x7 + parseInt(__DECODE_0__(0x12e)) / 0x8 + parseInt(__DECODE_0__(0x132)) / 0x9 + parseInt(__DECODE_0__(0x11f)) / 0xa * (parseInt(__DECODE_0__(0x130)) / 0xb);
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
var input = require('fs')[__DECODE_0__(0x121)](__DECODE_0__(0x126), __DECODE_0__(0x12b));
var strA = input[__DECODE_0__(0x124)]();
function __DECODE_0__(EcuKBy, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x11f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EcuKBy, key);
}
var abc = 'abcdefghijklmnopqrstuvwxyz'[__DECODE_0__(0x12d)]('');
for (var i = 0x0; i < 0x1a; i++) {
  var strB = strA[__DECODE_0__(0x127)](/[a-z]/g, function (s) {
    return abc[(abc[__DECODE_0__(0x120)](s) + i) % 0x1a];
  });
  if (strB[__DECODE_0__(0x12f)](/the|this|that/)) {
    break;
  }
}
console[__DECODE_0__(0x123)](strB);
