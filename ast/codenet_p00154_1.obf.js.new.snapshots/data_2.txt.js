(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x107)) / 0x1 * (-parseInt(__DECODE_0__(0x103)) / 0x2) + -parseInt(__DECODE_0__(0x100)) / 0x3 * (-parseInt(__DECODE_0__(0xfe)) / 0x4) + -parseInt(__DECODE_0__(0x101)) / 0x5 + -parseInt(__DECODE_0__(0xff)) / 0x6 + parseInt(__DECODE_0__(0x106)) / 0x7 * (-parseInt(__DECODE_0__(0x102)) / 0x8) + parseInt(__DECODE_0__(0xf6)) / 0x9 + parseInt(__DECODE_0__(0x104)) / 0xa * (parseInt(__DECODE_0__(0xfd)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x242ba);
function __DECODE_0__(awfiOF, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xf6;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(awfiOF, key);
}
function bomb(start, sum) {
  dp[start][sum]++;
  if (start == card[__DECODE_0__(0xf9)]) {
    return;
  }
  var v = card[start][0x0];
  var k = card[start][0x1];
  for (var i = 0x0; i <= k; i++) {
    bomb(start + 0x1, sum + v * i);
  }
}
var input = require('fs')[__DECODE_0__(0xfc)](__DECODE_0__(0xfb), 'utf8');
var arr = input[__DECODE_0__(0xf7)]()[__DECODE_0__(0xfa)]('\x0a');
function __STRING_ARRAY__() {
  var _0x8b59ff = ['length', 'split', '/dev/stdin', 'readFileSync', '11kNwluI', '952936wZnVRS', '1130448WCCWXN', '3KVrePa', '1275870riCyxX', '122552eIIJwt', '564494rKsCoU', '5393990nouSlZ', 'log', '49zDqTbn', '1YXVtLU', '1832247ArAMti', 'trim', 'shift'];
  __STRING_ARRAY__ = function () {
    return _0x8b59ff;
  };
  return __STRING_ARRAY__();
}
while (!![]) {
  var m = arr[__DECODE_0__(0xf8)]() - 0x0;
  if (m == 0x0) {
    break;
  }
  var card = [];
  while (m--) {
    card['push'](arr['shift']()[__DECODE_0__(0xfa)]('\x20')['map'](Number));
  }
  var g = arr['shift']() - 0x0;
  var dp = [];
  for (var i = 0x0; i <= card[__DECODE_0__(0xf9)]; i++) {
    dp[i] = [];
    for (var j = 0x0; j <= 0x3e8; j++) {
      dp[i][j] = 0x0;
    }
  }
  bomb(0x0, 0x0);
  while (g--) {
    console[__DECODE_0__(0x105)](dp[card[__DECODE_0__(0xf9)]][arr[__DECODE_0__(0xf8)]() - 0x0]);
  }
}
