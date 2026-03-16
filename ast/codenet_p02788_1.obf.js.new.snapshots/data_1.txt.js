function __DECODE_0__(yNKTSG, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe6;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yNKTSG, key);
}
var a0_0x58709a = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x4f5f17 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x4f5f17(0xe6)) / 0x1 * (parseInt(_0x4f5f17(0xf2)) / 0x2) + -parseInt(_0x4f5f17(0xe9)) / 0x3 * (parseInt(_0x4f5f17(0xf3)) / 0x4) + -parseInt(_0x4f5f17(0xf5)) / 0x5 * (-parseInt(_0x4f5f17(0xea)) / 0x6) + -parseInt(_0x4f5f17(0xef)) / 0x7 * (parseInt(_0x4f5f17(0xf9)) / 0x8) + parseInt(_0x4f5f17(0xee)) / 0x9 + -parseInt(_0x4f5f17(0xf4)) / 0xa + parseInt(_0x4f5f17(0xf6)) / 0xb * (parseInt(_0x4f5f17(0xf0)) / 0xc);
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
  var _0x30fe51 = __DECODE_0__;
  var N = input[0x0]['split']('\x20')[0x0] - 0x0;
  var D = input[0x0][_0x30fe51(0xe8)]('\x20')[0x1] - 0x0;
  var A = input[0x0][_0x30fe51(0xe8)]('\x20')[0x2] - 0x0;
  var list = [];
  for (var i = 0x1; i <= N; i++) {
    list[_0x30fe51(0xf1)](input[i][_0x30fe51(0xe8)]('\x20')['map'](v => v - 0x0));
  }
  list = list[_0x30fe51(0xf7)]((a, b) => a[0x0] - b[0x0]);
  var ans = 0x0;
  for (var i = 0x0; i < N; i++) {
    var x = list[i];
    if (x[0x1] > 0x0) {
      var time = Math[_0x30fe51(0xe7)](x[0x1] / A);
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
  console[_0x30fe51(0xed)](ans);
}
main(require('fs')[a0_0x58709a(0xf8)](a0_0x58709a(0xec), a0_0x58709a(0xeb))[a0_0x58709a(0xe8)]('\x0a'));
