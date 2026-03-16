(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xda)) / 0x1 + parseInt(__DECODE_0__(0xdd)) / 0x2 * (-parseInt(__DECODE_0__(0xe6)) / 0x3) + -parseInt(__DECODE_0__(0xd8)) / 0x4 * (parseInt(__DECODE_0__(0xdb)) / 0x5) + parseInt(__DECODE_0__(0xe9)) / 0x6 * (parseInt(__DECODE_0__(0xdc)) / 0x7) + parseInt(__DECODE_0__(0xe7)) / 0x8 + parseInt(__DECODE_0__(0xe3)) / 0x9 + -parseInt(__DECODE_0__(0xe8)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc66bc);
function __DECODE_0__(bBytNK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd7;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bBytNK, key);
}
function main(input) {
  const lines = input[__DECODE_0__(0xd9)]('\x0a');
  const NW = lines[__DECODE_0__(0xe1)]()[__DECODE_0__(0xd9)]('\x20')['map'](x => parseInt(x));
  const N = NW[0x0];
  const W = NW[0x1];
  const items = lines[__DECODE_0__(0xe2)](line => line[__DECODE_0__(0xd9)]('\x20')[__DECODE_0__(0xe2)](x => parseInt(x)));
  dp = [];
  for (var i = 0x0; i < W + 0x1; i++) {
    dp[__DECODE_0__(0xe5)](Array(N + 0x1)[__DECODE_0__(0xdf)](0x0));
  }
  var result = 0x0;
  for (var i = 0x0; i < N; i++) {
    for (var w = 0x0; w <= W; w++) {
      var weight = items[i][0x0];
      var value = items[i][0x1];
      if (weight <= w) {
        dp[w][i + 0x1] = Math[__DECODE_0__(0xe0)](dp[w][i], dp[w - weight][i] + value);
      } else {
        dp[w][i + 0x1] = dp[w][i];
      }
      if (dp[w][i + 0x1] > result) {
        result = dp[w][i + 0x1];
      }
    }
  }
  console[__DECODE_0__(0xde)](result);
}
function __STRING_ARRAY__() {
  var _0x137d12 = ['1132194eKywPB', '5rKxJtM', '7hDxNnt', '1133998kJZdTM', 'log', 'fill', 'max', 'shift', 'map', '3438126UgilHw', '/dev/stdin', 'push', '6TVGCfD', '12382536SXcFpi', '14127500oiKJjX', '6004716nBTzsh', 'utf8', '2813324BQgoZV', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x137d12;
  };
  return __STRING_ARRAY__();
}
main(require('fs')['readFileSync'](__DECODE_0__(0xe4), __DECODE_0__(0xd7)));
