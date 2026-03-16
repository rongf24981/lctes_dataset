function __DECODE_0__(JPdDql, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x165;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(JPdDql, key);
}
function __STRING_ARRAY__() {
  var _0x26e2ac = ['readFileSync', '116474YgMzaP', '2hhMiwq', '8348IZZjdc', '24552SYcYwe', '3252kYOPzN', '9462LruQym', 'fill', 'split', '166240TqPfuQ', 'map', '81IFRBXu', '18469HbtfMw', '680160EMIwHJ', '721MqeLhY', '/dev/stdin', '220eZmVWr', 'utf8', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x26e2ac;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x176)) / 0x1 * (-parseInt(__DECODE_0__(0x175)) / 0x2) + parseInt(__DECODE_0__(0x16c)) / 0x3 * (-parseInt(__DECODE_0__(0x177)) / 0x4) + parseInt(__DECODE_0__(0x16a)) / 0x5 + parseInt(__DECODE_0__(0x167)) / 0x6 * (-parseInt(__DECODE_0__(0x16f)) / 0x7) + -parseInt(__DECODE_0__(0x16e)) / 0x8 + -parseInt(__DECODE_0__(0x165)) / 0x9 * (-parseInt(__DECODE_0__(0x171)) / 0xa) + parseInt(__DECODE_0__(0x16d)) / 0xb * (parseInt(__DECODE_0__(0x166)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1f3ff);
function Main(input) {
  input = input[__DECODE_0__(0x169)]('\x0a');
  var N = input[0x0][__DECODE_0__(0x169)]('\x20')[__DECODE_0__(0x16b)](a => parseInt(a));
  var K = N[0x1];
  N = N[0x0];
  var x = [];
  var y = [];
  var c = [];
  for (var i = 0x0; i < N; i++) {
    x[i] = input[i + 0x1][__DECODE_0__(0x169)]('\x20');
    y[i] = parseInt(x[i][0x1]) % (K * 0x2);
    c[i] = x[i][0x2] === 'W' ? 0x0 : 0x1;
    x[i] = parseInt(x[i][0x0]) % (K * 0x2);
  }
  var ans = 0x0;
  for (i = 0x0; i < K; i++) {
    var now = 0x0;
    var Y1 = new Array(K * 0x2)[__DECODE_0__(0x168)](0x0);
    var Y2 = new Array(K * 0x2)['fill'](0x0);
    for (var k = 0x0; k < N; k++) {
      if ((((x[k] + i) / K ^ y[k] / K) & 0x1) === c[k]) {
        now++;
        Y1[y[k]]++;
      } else {
        Y2[y[k]]++;
      }
    }
    if (ans < now) {
      ans = now;
    }
    if (ans < N - now) {
      ans = N - now;
    }
    for (var j = 0x0; j < K - 0x1; j++) {
      now += Y2[j] - Y1[j] + Y2[j + K] - Y1[j + K];
      if (ans < now) {
        ans = now;
      }
      if (ans < N - now) {
        ans = N - now;
      }
    }
  }
  console[__DECODE_0__(0x173)](ans);
}
Main(require('fs')[__DECODE_0__(0x174)](__DECODE_0__(0x170), __DECODE_0__(0x172)));
