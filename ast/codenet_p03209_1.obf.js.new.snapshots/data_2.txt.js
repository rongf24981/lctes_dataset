function __STRING_ARRAY__() {
  var _0x1a430d = ['log', '6oLqILH', '16505xrWUmY', '5TvmQQk', '5477124DQcFzH', '/dev/stdin', '1952570mlozbC', '6634705WGQQuJ', '153dvaklj', 'utf8', '14HKwEyU', 'getElementById', 'readFileSync', '17144YMPHhW', 'split', '26625698FtaGmS', 'value', '1711304MJxUSj'];
  __STRING_ARRAY__ = function () {
    return _0x1a430d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xef)) / 0x1 * (parseInt(__DECODE_0__(0xe5)) / 0x2) + -parseInt(__DECODE_0__(0xee)) / 0x3 * (-parseInt(__DECODE_0__(0xec)) / 0x4) + -parseInt(__DECODE_0__(0xf0)) / 0x5 * (-parseInt(__DECODE_0__(0xf1)) / 0x6) + parseInt(__DECODE_0__(0xe2)) / 0x7 + -parseInt(__DECODE_0__(0xe8)) / 0x8 * (-parseInt(__DECODE_0__(0xe3)) / 0x9) + parseInt(__DECODE_0__(0xe1)) / 0xa + -parseInt(__DECODE_0__(0xea)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9cfd2);
function __DECODE_0__(tHLwIv, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe0;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tHLwIv, key);
}
function Main(input) {
  input = input[__DECODE_0__(0xe9)]('\x0a');
  var N = parseInt(input[0x0][__DECODE_0__(0xe9)]('\x20')[0x0]);
  var X = parseInt(input[0x0][__DECODE_0__(0xe9)]('\x20')[0x1]);
  bans = new Array(0x32);
  all = new Array(0x32);
  bans[0x0] = 0x1;
  all[0x0] = 0x1;
  var ans = 0x0;
  for (i = 0x1; i <= 0x32; i++) {
    bans[i] = bans[i - 0x1] * 0x2 + 0x1;
    all[i] = all[i - 0x1] * 0x2 + 0x3;
  }
  var full = all[N];
  var bs = bans[N];
  var flag = 0x0;
  if (X % 0x2 == 0x0) {
    X = all[N] - X;
    flag = 0x1;
  }
  while (X > 0x0) {
    if (X > (full - 0x1) / 0x2) {
      X = X - (full - 0x1) / 0x2 - 0x1;
      ans = ans + (bs - 0x1) / 0x2 + 0x1;
      full = (full - 0x1) / 0x2 - 0x1;
      bs = (bs - 0x1) / 0x2;
    } else {
      X = X - 0x1;
      full = (full - 0x1) / 0x2 - 0x1;
      bs = (bs - 0x1) / 0x2;
    }
  }
  if (flag == 0x1) {
    ans = bans[N] - ans;
  }
  console[__DECODE_0__(0xed)]('%s', ans);
}
function debug() {
  var input = document[__DECODE_0__(0xe6)]('input')[__DECODE_0__(0xeb)];
  Main(input);
}
Main(require('fs')[__DECODE_0__(0xe7)](__DECODE_0__(0xe0), __DECODE_0__(0xe4)));
