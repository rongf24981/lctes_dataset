function __DECODE_0__(xCvanU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xc5;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xCvanU, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xcd)) / 0x1 + -parseInt(__DECODE_0__(0xc9)) / 0x2 + -parseInt(__DECODE_0__(0xd0)) / 0x3 * (-parseInt(__DECODE_0__(0xd4)) / 0x4) + parseInt(__DECODE_0__(0xca)) / 0x5 * (parseInt(__DECODE_0__(0xce)) / 0x6) + parseInt(__DECODE_0__(0xcc)) / 0x7 * (-parseInt(__DECODE_0__(0xc6)) / 0x8) + parseInt(__DECODE_0__(0xd2)) / 0x9 * (-parseInt(__DECODE_0__(0xc5)) / 0xa) + parseInt(__DECODE_0__(0xd1)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x92846);
function Main(input) {
  input = input[__DECODE_0__(0xd3)]('\x0a');
  var H = input[0x0][__DECODE_0__(0xd3)]('\x20')[__DECODE_0__(0xc8)](a => parseInt(a));
  var W = H[0x1];
  var D = H[0x2];
  H = H[0x0];
  var A;
  var x = new Array(H * W + 0x1)[__DECODE_0__(0xcf)](0x0)[__DECODE_0__(0xc8)](a => new Array(0x2));
  for (var i = 0x0; i < H; i++) {
    A = input[i + 0x1][__DECODE_0__(0xd3)]('\x20')['map'](a => parseInt(a));
    for (var j = 0x0; j < W; j++) {
      x[A[j]][0x0] = i;
      x[A[j]][0x1] = j;
    }
  }
  var y = new Array(H * W + 0x1)['fill'](0x0);
  for (i = D + 0x1; i <= H * W; i++) {
    y[i] = y[i - D] + Math[__DECODE_0__(0xc7)](x[i - D][0x0] - x[i][0x0]) + Math[__DECODE_0__(0xc7)](x[i - D][0x1] - x[i][0x1]);
  }
  var Q = parseInt(input[H + 0x1]);
  var ans = new Array(Q)[__DECODE_0__(0xcf)](0x0);
  for (i = 0x0; i < Q; i++) {
    var L = input[H + 0x2 + i][__DECODE_0__(0xd3)]('\x20')[__DECODE_0__(0xc8)](a => parseInt(a));
    var R = L[0x1];
    L = L[0x0];
    ans[i] = y[R] - y[L];
  }
  console[__DECODE_0__(0xd5)](ans[__DECODE_0__(0xcb)]('\x0a'));
}
Main(require('fs')['readFileSync'](__DECODE_0__(0xd6), 'utf8'));
function __STRING_ARRAY__() {
  var _0x45349c = ['368385xqTioL', 'join', '1502914WRMTRw', '685163qLYlAS', '66cGHPOX', 'fill', '12VnGpHR', '9618378JGXiPz', '126261oYDfNt', 'split', '447988YTIbqo', 'log', '/dev/stdin', '400baLCJw', '8DTnHVb', 'abs', 'map', '143348hQdNdj'];
  __STRING_ARRAY__ = function () {
    return _0x45349c;
  };
  return __STRING_ARRAY__();
}
