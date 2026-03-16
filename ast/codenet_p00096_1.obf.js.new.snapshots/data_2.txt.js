function __STRING_ARRAY__() {
  var _0x1ec3bf = ['24fMSsXc', '9FIsVPJ', '120195zkulBK', '201010RYkZpx', 'trim', '80030eHvClm', 'utf8', 'push', 'length', 'sort', '40DKeZoD', '3111626PgsEdz', '693HhhiCf', '/dev/stdin', '439308cWPPaX', '4735096CMJkBg', 'split', '6TJPxiS', 'log', 'shift', 'readFileSync', '8159544yWYHAq'];
  __STRING_ARRAY__ = function () {
    return _0x1ec3bf;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(EZppCn, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x14c;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EZppCn, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x15a)) / 0x1 * (-parseInt(__DECODE_0__(0x152)) / 0x2) + parseInt(__DECODE_0__(0x159)) / 0x3 * (parseInt(__DECODE_0__(0x157)) / 0x4) + parseInt(__DECODE_0__(0x161)) / 0x5 * (-parseInt(__DECODE_0__(0x14f)) / 0x6) + -parseInt(__DECODE_0__(0x14c)) / 0x7 + -parseInt(__DECODE_0__(0x150)) / 0x8 * (-parseInt(__DECODE_0__(0x158)) / 0x9) + parseInt(__DECODE_0__(0x15c)) / 0xa * (parseInt(__DECODE_0__(0x14d)) / 0xb) + parseInt(__DECODE_0__(0x156)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5d8a0);
var ab = [];
for (var i = 0x0; i <= 0x3e8; i++) {
  for (var j = 0x0; j <= 0x3e8; j++) {
    ab[__DECODE_0__(0x15e)](i + j);
  }
}
ab[__DECODE_0__(0x160)](function (a, b) {
  return a - b;
});
var input = require('fs')[__DECODE_0__(0x155)](__DECODE_0__(0x14e), __DECODE_0__(0x15d));
var Arr = input[__DECODE_0__(0x15b)]()[__DECODE_0__(0x151)]('\x0a');
while (!![]) {
  if (Arr['length'] == 0x0) {
    break;
  }
  var n = Arr[__DECODE_0__(0x154)]() - 0x0;
  var cnt = 0x0;
  var k = ab['length'] - 0x1;
  for (var i = 0x0; i < ab[__DECODE_0__(0x15f)]; i++) {
    while (ab[i] + ab[k] > n) {
      k--;
    }
    var memo = k;
    while (ab[i] + ab[memo] == n) {
      cnt++;
      memo--;
    }
  }
  console[__DECODE_0__(0x153)](cnt);
}
