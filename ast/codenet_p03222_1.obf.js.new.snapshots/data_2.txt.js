function __DECODE_0__(ilIqnX, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x125;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ilIqnX, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x125)) / 0x1 + parseInt(__DECODE_0__(0x127)) / 0x2 + -parseInt(__DECODE_0__(0x12d)) / 0x3 + -parseInt(__DECODE_0__(0x130)) / 0x4 + parseInt(__DECODE_0__(0x12f)) / 0x5 + -parseInt(__DECODE_0__(0x135)) / 0x6 * (parseInt(__DECODE_0__(0x12a)) / 0x7) + parseInt(__DECODE_0__(0x131)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x950d4);
function Main(input) {
  input = input['split']('\x20')[__DECODE_0__(0x12b)](a => ~~a);
  var H = input[0x0];
  var W = input[0x1];
  var K = input[0x2];
  var mod = 0xa ** 0x9 + 0x7;
  if (W == 0x1) {
    return 0x1;
  }
  var validAmidaList = Array(0x2 ** (W - 0x1))['fill'](0x0)['map']((a, b) => b)['map'](a => a['toString'](0x2))['filter'](a => !/11/[__DECODE_0__(0x129)](a))[__DECODE_0__(0x12b)](a => __DECODE_0__(0x12e) + a)[__DECODE_0__(0x12b)](a => a['slice'](0x1 - W))[__DECODE_0__(0x12b)](a => '0' + a + '0');
  var dp = Array(H + 0x1);
  for (var i = 0x0; i <= H; i++) {
    dp[i] = Array(W)[__DECODE_0__(0x126)](0x0);
  }
  dp[0x0][0x0] = 0x1;
  for (var i = 0x1; i <= H; i++) {
    validAmidaList[__DECODE_0__(0x133)](function (elem) {
      for (var j = 0x0; j < W; j++) {
        ({
          '10': a => dp[i][j] += dp[i - 0x1][j - 0x1],
          '01': a => dp[i][j] += dp[i - 0x1][j + 0x1],
          '00': a => dp[i][j] += dp[i - 0x1][j]
        })[elem[j] + elem[j + 0x1]]();
        dp[i][j] %= mod;
      }
    });
  }
  return dp[H][K - 0x1];
}
if (typeof require !== 'undefined') {
  console[__DECODE_0__(0x128)](Main(require('fs')[__DECODE_0__(0x132)](__DECODE_0__(0x134), __DECODE_0__(0x12c))));
}
function __STRING_ARRAY__() {
  var _0x5648a5 = ['fill', '1658960KJJbXm', 'log', 'test', '85827jiQfqf', 'map', 'utf8', '1288449DlVrKb', '000000', '2766725TYDsCX', '4348460rWTGvo', '6723832thHDIS', 'readFileSync', 'forEach', '/dev/stdin', '30AAFqWC', '34885zckhbX'];
  __STRING_ARRAY__ = function () {
    return _0x5648a5;
  };
  return __STRING_ARRAY__();
}
