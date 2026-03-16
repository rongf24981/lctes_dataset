(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x176)) / 0x1 * (parseInt(__DECODE_0__(0x17b)) / 0x2) + -parseInt(__DECODE_0__(0x183)) / 0x3 + parseInt(__DECODE_0__(0x180)) / 0x4 * (parseInt(__DECODE_0__(0x177)) / 0x5) + -parseInt(__DECODE_0__(0x184)) / 0x6 * (-parseInt(__DECODE_0__(0x178)) / 0x7) + parseInt(__DECODE_0__(0x17c)) / 0x8 * (parseInt(__DECODE_0__(0x172)) / 0x9) + -parseInt(__DECODE_0__(0x173)) / 0xa * (parseInt(__DECODE_0__(0x174)) / 0xb) + -parseInt(__DECODE_0__(0x17d)) / 0xc * (parseInt(__DECODE_0__(0x171)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc7cd3);
function __DECODE_0__(pBNJRz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x171;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(pBNJRz, key);
}
var input = require('fs')[__DECODE_0__(0x175)]('/dev/stdin', __DECODE_0__(0x181));
function __STRING_ARRAY__() {
  var _0x143f40 = ['1488LZrRfd', 'log', 'push', '4PDSewe', 'utf8', 'split', '3628704NfqBEo', '24DlijxD', '87334ovFzDv', '5163219xFtTlx', '5620kKuktO', '22418jBwhsX', 'readFileSync', '28NKQgyU', '5926885wbhYbR', '2695973gfKuwP', 'length', 'shift', '9502mMwpEn', '16CslliL'];
  __STRING_ARRAY__ = function () {
    return _0x143f40;
  };
  return __STRING_ARRAY__();
}
var lines = input[__DECODE_0__(0x182)]('\x0a');
var line;
while (line = lines[__DECODE_0__(0x17a)]()) {
  var nums = line['split']('')['map'](function (n) {
    return +n;
  });
  var n = nums[__DECODE_0__(0x179)];
  while (n > 0x1) {
    var a = [];
    for (var i = 0x0; i < n - 0x1; i++) {
      a[__DECODE_0__(0x17f)]((nums[i] + nums[i + 0x1]) % 0xa);
    }
    n--;
    nums = a;
  }
  console[__DECODE_0__(0x17e)](nums[0x0]);
}
