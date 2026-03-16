function __STRING_ARRAY__() {
  var _0x16b31f = ['214jaaYTJ', '1291199xwHWzq', '477536mJycEY', '274990VDFsmF', '190MXcNSq', '80739TpXgIM', 'readFileSync', '2922ToNaVP', '24ZijujQ', '8ySBAYJ', '3281894pnDuop', '90947YobVge', 'pow'];
  __STRING_ARRAY__ = function () {
    return _0x16b31f;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xf0)) / 0x1 + -parseInt(__DECODE_0__(0xf2)) / 0x2 * (-parseInt(__DECODE_0__(0xf9)) / 0x3) + parseInt(__DECODE_0__(0xf4)) / 0x4 + parseInt(__DECODE_0__(0xf5)) / 0x5 * (-parseInt(__DECODE_0__(0xfa)) / 0x6) + parseInt(__DECODE_0__(0xf3)) / 0x7 * (parseInt(__DECODE_0__(0xfb)) / 0x8) + -parseInt(__DECODE_0__(0xf7)) / 0x9 * (-parseInt(__DECODE_0__(0xf6)) / 0xa) + -parseInt(__DECODE_0__(0xef)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x24e45);
var fs = require('fs');
var inn = parseInt(fs[__DECODE_0__(0xf8)](0x0)['toString']());
function isPrime(n) {
  if (n <= 0x3) {
    return n > 0x1;
  } else {
    if (n % 0x2 === 0x0 || n % 0x3 === 0x0) {
      return ![];
    }
  }
  var i = 0x5;
  while (Math[__DECODE_0__(0xf1)](i, 0x2) <= n) {
    if (n % i === 0x0 || n % (i + 0x2) === 0x0) {
      return ![];
    }
    i += 0x6;
  }
  return !![];
}
function __DECODE_0__(mUFZKR, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xef;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mUFZKR, key);
}
while (!isPrime(inn)) {
  inn++;
}
console['log'](inn);
