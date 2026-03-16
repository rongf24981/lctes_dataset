function __DECODE_0__(JnvqXb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x76;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(JnvqXb, key);
}
function __STRING_ARRAY__() {
  var _0x932d7a = ['6zSnnrc', 'trim', 'split', 'readFileSync', 'length', '22035672CaeYsT', '2747040UEPqgt', '12267304Apuycs', '1349505bIhdRO', 'replace', '69155QheOcI', '72ytbIJZ', '413450yrXCyT', 'reverse', 'utf8', 'log', 'MULTIPLE', '/dev/stdin', '6925373onYmhX', 'map'];
  __STRING_ARRAY__ = function () {
    return _0x932d7a;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x80)) / 0x1 + parseInt(__DECODE_0__(0x7a)) / 0x2 + -parseInt(__DECODE_0__(0x7c)) / 0x3 + -parseInt(__DECODE_0__(0x7f)) / 0x4 * (-parseInt(__DECODE_0__(0x7e)) / 0x5) + parseInt(__DECODE_0__(0x88)) / 0x6 * (parseInt(__DECODE_0__(0x86)) / 0x7) + parseInt(__DECODE_0__(0x7b)) / 0x8 + -parseInt(__DECODE_0__(0x79)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xcb801);
var input = require('fs')[__DECODE_0__(0x77)](__DECODE_0__(0x85), __DECODE_0__(0x82));
var str = input[__DECODE_0__(0x89)]();
var ans = '';
for (var j = 0x0; j <= 0x9; j++) {
  var arr = str[__DECODE_0__(0x7d)](/\?/, j)[__DECODE_0__(0x76)]('')[__DECODE_0__(0x87)](Number)[__DECODE_0__(0x81)]();
  var sum = 0x0;
  for (var i = 0x1; i <= 0x6; i++) {
    sum += arr[i] * (i + 0x1);
  }
  for (var i = 0x7; i <= 0xb; i++) {
    sum += arr[i] * (i - 0x5);
  }
  var p = 0xb - sum % 0xb;
  if (sum % 0xb <= 0x1) {
    p = 0x0;
  }
  ans += p == arr[0x0] ? j : '';
}
if (ans[__DECODE_0__(0x78)] == 0x1) {
  console[__DECODE_0__(0x83)](ans[0x0]);
} else {
  console[__DECODE_0__(0x83)](__DECODE_0__(0x84));
}
