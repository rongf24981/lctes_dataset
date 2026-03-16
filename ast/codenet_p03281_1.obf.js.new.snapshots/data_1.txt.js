function __STRING_ARRAY__() {
  var _0x4c329f = ['650zlGAoh', '2clCKYs', 'split', 'log', '255429gJWfkq', '3745855bbiUSw', '77nKZTni', '/dev/stdin', 'readFileSync', '2503785PZxZyO', 'utf8', '556528qRxJKD', '97770kKzPQd', '234344KRKvVD', '707409XfQhqk'];
  __STRING_ARRAY__ = function () {
    return _0x4c329f;
  };
  return __STRING_ARRAY__();
}
var a0_0x2fc233 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x1f0704 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x1f0704(0xbf)) / 0x1 + -parseInt(_0x1f0704(0xc1)) / 0x2 * (-parseInt(_0x1f0704(0xc9)) / 0x3) + parseInt(_0x1f0704(0xcb)) / 0x4 + parseInt(_0x1f0704(0xc5)) / 0x5 + parseInt(_0x1f0704(0xcc)) / 0x6 * (-parseInt(_0x1f0704(0xc6)) / 0x7) + parseInt(_0x1f0704(0xbe)) / 0x8 + -parseInt(_0x1f0704(0xc4)) / 0x9 * (parseInt(_0x1f0704(0xc0)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6a586);
function __DECODE_0__(YwrGEY, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xbe;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YwrGEY, key);
}
function main(input) {
  var _0x1a5dda = __DECODE_0__;
  var N = input[0x0] - 0x0;
  var ans = 0x0;
  for (var i = 0x69; i <= N; i += 0x2) {
    var cnt = 0x0;
    for (var j = 0x1; j <= i; j++) {
      if (i % j == 0x0) {
        cnt++;
      }
      if (cnt > 0x8) {
        break;
      }
    }
    if (cnt == 0x8) {
      ans++;
    }
  }
  console[_0x1a5dda(0xc3)](ans);
}
main(require('fs')[a0_0x2fc233(0xc8)](a0_0x2fc233(0xc7), a0_0x2fc233(0xca))['trim']()[a0_0x2fc233(0xc2)]('\x0a'));
