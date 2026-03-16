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
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xf4)) / 0x1 + -parseInt(__DECODE_0__(0xf6)) / 0x2 + parseInt(__DECODE_0__(0xe9)) / 0x3 * (parseInt(__DECODE_0__(0xef)) / 0x4) + -parseInt(__DECODE_0__(0xeb)) / 0x5 + parseInt(__DECODE_0__(0xea)) / 0x6 * (-parseInt(__DECODE_0__(0xf7)) / 0x7) + parseInt(__DECODE_0__(0xed)) / 0x8 * (parseInt(__DECODE_0__(0xee)) / 0x9) + parseInt(__DECODE_0__(0xf8)) / 0xa;
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
var input = require('fs')[__DECODE_0__(0xf5)](__DECODE_0__(0xf1), 'utf8');
function __STRING_ARRAY__() {
  var _0x12a32b = ['1047tfAdAU', '681822wNUfHi', '2240385VCRssg', 'replace', '2004920TzLyTr', '45wNCoiu', '7188fIEYIX', 'shift', '/dev/stdin', 'split', 'forEach', '281105aOWBZc', 'readFileSync', '1082422nYzRhK', '35UfvEvh', '7749560vNIScZ'];
  __STRING_ARRAY__ = function () {
    return _0x12a32b;
  };
  return __STRING_ARRAY__();
}
var Arr = input[__DECODE_0__(0xec)](/\n$/, '')['split']('\x0a');
while (!![]) {
  var str = Arr[__DECODE_0__(0xf0)]();
  if (str == '0') {
    break;
  }
  var arr = str[__DECODE_0__(0xf2)]('');
  var a = 0x0;
  var b = 0x0;
  arr['shift']();
  arr[__DECODE_0__(0xf3)](function (v) {
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
