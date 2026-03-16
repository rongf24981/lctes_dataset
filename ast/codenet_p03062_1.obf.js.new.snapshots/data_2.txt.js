(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x104)) / 0x1 + -parseInt(__DECODE_0__(0x102)) / 0x2 + parseInt(__DECODE_0__(0xfe)) / 0x3 + parseInt(__DECODE_0__(0x103)) / 0x4 * (-parseInt(__DECODE_0__(0xfb)) / 0x5) + -parseInt(__DECODE_0__(0x101)) / 0x6 + parseInt(__DECODE_0__(0x106)) / 0x7 + parseInt(__DECODE_0__(0x100)) / 0x8 * (parseInt(__DECODE_0__(0xfd)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2bf60);
function main(input) {
  const formatted_input = input[__DECODE_0__(0x105)]('\x0a');
  const N = parseInt(formatted_input[0x0], 0xa);
  const As = formatted_input[0x1][__DECODE_0__(0x105)]('\x20')['map'](x => parseInt(x));
  dp = [];
  for (var i = 0x0; i < N; i++) {
    var results = [];
    if (i == 0x0) {
      results = [As[i], As[i] * -0x1];
    } else {
      var not_flipped = Math['max'](dp[i - 0x1][0x0] + As[i], dp[i - 0x1][0x1] - As[i]);
      var flipped = Math['max'](dp[i - 0x1][0x0] - As[i], dp[i - 0x1][0x1] + As[i]);
      results = [not_flipped, flipped];
    }
    dp[__DECODE_0__(0xff)](results);
  }
  console['log'](dp[N - 0x1][0x0]);
}
main(require('fs')['readFileSync'](__DECODE_0__(0xfc), 'utf8'));
function __DECODE_0__(iuYlaX, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xfb;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iuYlaX, key);
}
function __STRING_ARRAY__() {
  var _0x5a66cb = ['14325hNchii', '/dev/stdin', '138807FzHTqE', '868101UXpjjj', 'push', '248zOClOK', '1828770CsUnlW', '452496yOaVxJ', '500YaMcfl', '198749lenCRC', 'split', '721021onArqm'];
  __STRING_ARRAY__ = function () {
    return _0x5a66cb;
  };
  return __STRING_ARRAY__();
}
