var a0_0x1dc623 = __DECODE_0__;
function __DECODE_0__(QeuiYN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe9;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QeuiYN, key);
}
(function (stringArrayFunction, comparisonValue) {
  var _0x4eaaed = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x4eaaed(0xf4)) / 0x1 + -parseInt(_0x4eaaed(0xf6)) / 0x2 + parseInt(_0x4eaaed(0xe9)) / 0x3 * (parseInt(_0x4eaaed(0xef)) / 0x4) + -parseInt(_0x4eaaed(0xeb)) / 0x5 + parseInt(_0x4eaaed(0xea)) / 0x6 * (-parseInt(_0x4eaaed(0xf7)) / 0x7) + parseInt(_0x4eaaed(0xed)) / 0x8 * (parseInt(_0x4eaaed(0xee)) / 0x9) + parseInt(_0x4eaaed(0xf8)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc75de);
var input = require('fs')[a0_0x1dc623(0xf5)](a0_0x1dc623(0xf1), 'utf8');
function __STRING_ARRAY__() {
  var _0x12a32b = ['1047tfAdAU', '681822wNUfHi', '2240385VCRssg', 'replace', '2004920TzLyTr', '45wNCoiu', '7188fIEYIX', 'shift', '/dev/stdin', 'split', 'forEach', '281105aOWBZc', 'readFileSync', '1082422nYzRhK', '35UfvEvh', '7749560vNIScZ'];
  __STRING_ARRAY__ = function () {
    return _0x12a32b;
  };
  return __STRING_ARRAY__();
}
var Arr = input[a0_0x1dc623(0xec)](/\n$/, '')['split']('\x0a');
while (!![]) {
  var str = Arr[a0_0x1dc623(0xf0)]();
  if (str == '0') {
    break;
  }
  var arr = str[a0_0x1dc623(0xf2)]('');
  var a = 0x0;
  var b = 0x0;
  arr['shift']();
  arr[a0_0x1dc623(0xf3)](function (v) {
    if (v == 'A') {
      a++;
    }
    if (v == 'B') {
      b++;
    }
  });
  a > b ? a++ : b++;
  console['log'](a + '\x20' + b);
}
