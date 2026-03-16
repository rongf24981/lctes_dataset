(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x175)) / 0x1 + -parseInt(__DECODE_0__(0x16c)) / 0x2 + -parseInt(__DECODE_0__(0x172)) / 0x3 + parseInt(__DECODE_0__(0x176)) / 0x4 * (-parseInt(__DECODE_0__(0x177)) / 0x5) + -parseInt(__DECODE_0__(0x16d)) / 0x6 * (parseInt(__DECODE_0__(0x16b)) / 0x7) + -parseInt(__DECODE_0__(0x171)) / 0x8 + parseInt(__DECODE_0__(0x178)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xef927);
function __STRING_ARRAY__() {
  var _0x1b998d = ['0\x200', 'min', 'forEach', '36274nYpdiU', '2690316xeOsUX', '1038PFlYvD', 'shift', 'push', 'join', '5955184ncmPue', '1750203AFzmIA', 'pow', 'split', '924319AwKeRU', '4pmmYhq', '685205WQExES', '33871068BcoxNL'];
  __STRING_ARRAY__ = function () {
    return _0x1b998d;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()[__DECODE_0__(0x174)]('\x0a');
function __DECODE_0__(kEjtis, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x169;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(kEjtis, key);
}
while (!![]) {
  var nm = arr[__DECODE_0__(0x16e)]()['split']('\x20');
  if (nm[__DECODE_0__(0x170)]('\x20') == __DECODE_0__(0x179)) {
    break;
  }
  var n = nm[0x0];
  var m = nm[0x1];
  var M = [];
  for (var i = 0x0; i < m; i++) {
    M[__DECODE_0__(0x16f)](arr[__DECODE_0__(0x16e)]() - 0x0);
  }
  var N = [];
  for (var i = 0x0; i < n; i++) {
    N['push'](arr[__DECODE_0__(0x16e)]() - 0x0);
  }
  var dp = [];
  for (var i = 0x0; i <= n; i++) {
    dp[i] = [];
    for (var j = 0x0; j <= 0xff; j++) {
      dp[i][j] = Infinity;
    }
  }
  dp[0x0][0x80] = 0x0;
  for (var i = 0x1; i <= n; i++) {
    for (var j = 0x0; j <= 0xff; j++) {
      if (dp[i - 0x1][j] != Infinity) {
        for (var k = 0x0; k < m; k++) {
          var jm = j + M[k];
          if (jm < 0x0) {
            jm = 0x0;
          }
          if (jm > 0xff) {
            jm = 0xff;
          }
          dp[i][jm] = Math[__DECODE_0__(0x169)](dp[i][jm], dp[i - 0x1][j] + Math[__DECODE_0__(0x173)](N[i - 0x1] - jm, 0x2));
        }
      }
    }
  }
  var min = Infinity;
  dp[n][__DECODE_0__(0x16a)](function (v) {
    min = Math['min'](min, v);
  });
  console['log'](min);
}
