(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xa7)) / 0x1 * (-parseInt(__DECODE_0__(0x9f)) / 0x2) + -parseInt(__DECODE_0__(0xab)) / 0x3 * (-parseInt(__DECODE_0__(0x9d)) / 0x4) + parseInt(__DECODE_0__(0xa1)) / 0x5 + parseInt(__DECODE_0__(0xa4)) / 0x6 * (parseInt(__DECODE_0__(0xad)) / 0x7) + parseInt(__DECODE_0__(0xac)) / 0x8 + parseInt(__DECODE_0__(0xa0)) / 0x9 * (-parseInt(__DECODE_0__(0xa2)) / 0xa) + -parseInt(__DECODE_0__(0xa3)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8bd0c);
var input = require('fs')[__DECODE_0__(0xae)](__DECODE_0__(0xa9), 'utf8');
var s = input[__DECODE_0__(0xa6)]();
for (var i = 0x0; i < s[__DECODE_0__(0xa8)] - 0x7; i++) {
  var arr = [s[i], s[i + 0x1], s[i + 0x2], s[i + 0x3], s[i + 0x4], s[i + 0x5], s[i + 0x6], s[i + 0x7]];
  if (arr[__DECODE_0__(0x9e)]('') == __DECODE_0__(0xa5)) {
    i += 0x7;
    continue;
  }
  var str = arr['sort']()['join']('');
  if (str == 'AADINNUY') {
    s = s[__DECODE_0__(0xaa)](0x0, i) + 'AIZUNYAN' + s[__DECODE_0__(0xaa)](i + 0x8, s[__DECODE_0__(0xa8)]);
    i += 0x7;
  }
}
function __DECODE_0__(Zvrvdi, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x9d;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Zvrvdi, key);
}
console['log'](s);
function __STRING_ARRAY__() {
  var _0x459af4 = ['join', '144734Yulhss', '1377YCAdCO', '1751105KgWOxn', '69770UeQSEr', '15825700wPYepX', '3257292GqHlfC', 'AIZUNYAN', 'trim', '4hOYFyN', 'length', '/dev/stdin', 'slice', '6WJGOyX', '7865632KauscD', '7GyEdgs', 'readFileSync', '1826180jyduqs'];
  __STRING_ARRAY__ = function () {
    return _0x459af4;
  };
  return __STRING_ARRAY__();
}
