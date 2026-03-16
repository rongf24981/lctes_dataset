(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x138)) / 0x1 + -parseInt(__DECODE_0__(0x13f)) / 0x2 + parseInt(__DECODE_0__(0x139)) / 0x3 + parseInt(__DECODE_0__(0x137)) / 0x4 * (parseInt(__DECODE_0__(0x13a)) / 0x5) + -parseInt(__DECODE_0__(0x134)) / 0x6 + parseInt(__DECODE_0__(0x130)) / 0x7 * (-parseInt(__DECODE_0__(0x135)) / 0x8) + parseInt(__DECODE_0__(0x13e)) / 0x9 * (parseInt(__DECODE_0__(0x13b)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x82de0);
var input = require('fs')[__DECODE_0__(0x12e)](__DECODE_0__(0x13d), __DECODE_0__(0x131));
function __STRING_ARRAY__() {
  var _0x301157 = ['6354996jjpfwK', '599528GbWPsb', 'log', '188WPlRIx', '604212XQGMJG', '1905966PMEMtb', '96820qCoOyw', '10IZefRm', 'trim', '/dev/stdin', '10051461mcUbcf', '775816qHzBjq', 'readFileSync', 'split', '7pMWuFd', 'utf8', 'join', 'length'];
  __STRING_ARRAY__ = function () {
    return _0x301157;
  };
  return __STRING_ARRAY__();
}
var arr = input[__DECODE_0__(0x13c)]()[__DECODE_0__(0x12f)]('\x0a');
var s = arr[0x0]['split']('');
function __DECODE_0__(wiIAXI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x12e;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wiIAXI, key);
}
for (var i = 0x0; i < s[__DECODE_0__(0x133)]; i++) {
  for (var j = i + 0x1; j < s[__DECODE_0__(0x133)]; j++) {
    if (s[i] == s[j]) {
      s[i] = '';
      s[j] = '';
      break;
    }
  }
}
var n = s[__DECODE_0__(0x132)]('')[__DECODE_0__(0x133)];
if (n == 0x0 || n == 0x1) {
  console[__DECODE_0__(0x136)](0x0);
} else {
  if (n % 0x2 == 0x0) {
    console['log'](n / 0x2);
  } else {
    console['log']((n - 0x1) / 0x2);
  }
}
