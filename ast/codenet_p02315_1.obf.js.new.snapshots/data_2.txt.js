function __STRING_ARRAY__() {
  var _0x2f4f87 = ['42Vxdfjp', '12ZpYbsp', 'fill', '882204ijTIYh', '915670cmjKyp', 'utf8', '19RMcGVB', 'trim', '1177251wjBync', 'map', '5297225ByOdTt', 'log', '4BGquFa', 'max', '355040GUyiGo', '44996GAarql', '10664643fbSjXS', 'readFileSync', '63WHrkwL', 'length', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x2f4f87;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(rbnypK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1eb;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rbnypK, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1ee)) / 0x1 * (parseInt(__DECODE_0__(0x1f7)) / 0x2) + parseInt(__DECODE_0__(0x1f0)) / 0x3 + -parseInt(__DECODE_0__(0x1f4)) / 0x4 * (parseInt(__DECODE_0__(0x1f2)) / 0x5) + -parseInt(__DECODE_0__(0x1eb)) / 0x6 * (parseInt(__DECODE_0__(0x1fd)) / 0x7) + parseInt(__DECODE_0__(0x1f6)) / 0x8 + parseInt(__DECODE_0__(0x1fa)) / 0x9 * (parseInt(__DECODE_0__(0x1ec)) / 0xa) + -parseInt(__DECODE_0__(0x1f8)) / 0xb * (-parseInt(__DECODE_0__(0x1fe)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x82264);
function Main(input) {
  input = input['split']('\x0a');
  var p = input[0x0][__DECODE_0__(0x1fc)]('\x20')[__DECODE_0__(0x1f1)](Number);
  var max = p[0x1] - 0x0;
  var dp = new Array(p[0x0] + 0x1);
  for (var n = 0x0; n < p[0x0] + 0x1; n++) {
    dp[n] = new Array(max + 0x1)[__DECODE_0__(0x1ff)](0x0);
  }
  for (var i = 0x1; i < input[__DECODE_0__(0x1fb)]; i++) {
    var mem = input[i][__DECODE_0__(0x1fc)]('\x20')[__DECODE_0__(0x1f1)](Number);
    for (var j = 0x0; j <= max; j++) {
      if (j >= mem[0x1]) {
        dp[i][j] = Math[__DECODE_0__(0x1f5)](dp[i - 0x1][j - mem[0x1]] + mem[0x0], dp[i - 0x1][j]);
      } else {
        dp[i][j] = dp[i - 0x1][j];
      }
    }
  }
  console[__DECODE_0__(0x1f3)](dp[p[0x0]][max]);
}
Main(require('fs')[__DECODE_0__(0x1f9)]('/dev/stdin', __DECODE_0__(0x1ed))[__DECODE_0__(0x1ef)]());
