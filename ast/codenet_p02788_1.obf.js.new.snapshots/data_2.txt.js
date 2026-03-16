function __DECODE_0__(yNKTSG, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe6;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yNKTSG, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xe6)) / 0x1 * (parseInt(__DECODE_0__(0xf2)) / 0x2) + -parseInt(__DECODE_0__(0xe9)) / 0x3 * (parseInt(__DECODE_0__(0xf3)) / 0x4) + -parseInt(__DECODE_0__(0xf5)) / 0x5 * (-parseInt(__DECODE_0__(0xea)) / 0x6) + -parseInt(__DECODE_0__(0xef)) / 0x7 * (parseInt(__DECODE_0__(0xf9)) / 0x8) + parseInt(__DECODE_0__(0xee)) / 0x9 + -parseInt(__DECODE_0__(0xf4)) / 0xa + parseInt(__DECODE_0__(0xf6)) / 0xb * (parseInt(__DECODE_0__(0xf0)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9cf0d);
function __STRING_ARRAY__() {
  var _0x2c755a = ['10327050fqEMxp', '7JEZOHJ', '1248mDpXzt', 'push', '13954YlzpfB', '768atNADt', '4075660SKcOla', '21900CpcbKb', '131967kNvpHs', 'sort', 'readFileSync', '2667728rSLdzE', '89HWkhxu', 'ceil', 'split', '7536cEqGKI', '126WJTzAb', 'utf8', '/dev/stdin', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x2c755a;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  var N = input[0x0]['split']('\x20')[0x0] - 0x0;
  var D = input[0x0][__DECODE_0__(0xe8)]('\x20')[0x1] - 0x0;
  var A = input[0x0][__DECODE_0__(0xe8)]('\x20')[0x2] - 0x0;
  var list = [];
  for (var i = 0x1; i <= N; i++) {
    list[__DECODE_0__(0xf1)](input[i][__DECODE_0__(0xe8)]('\x20')['map'](v => v - 0x0));
  }
  list = list[__DECODE_0__(0xf7)]((a, b) => a[0x0] - b[0x0]);
  var ans = 0x0;
  for (var i = 0x0; i < N; i++) {
    var x = list[i];
    if (x[0x1] > 0x0) {
      var time = Math[__DECODE_0__(0xe7)](x[0x1] / A);
      ans += time;
      for (var j = i; j < N; j++) {
        var y = list[j];
        if (y[0x0] <= x[0x0] + D * 0x2 + 0x1) {
          y[0x1] -= A * time;
        } else {
          break;
        }
      }
    }
  }
  console[__DECODE_0__(0xed)](ans);
}
main(require('fs')[__DECODE_0__(0xf8)](__DECODE_0__(0xec), __DECODE_0__(0xeb))[__DECODE_0__(0xe8)]('\x0a'));
