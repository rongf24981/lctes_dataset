(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xd8)) / 0x1 + -parseInt(__DECODE_0__(0xdd)) / 0x2 * (-parseInt(__DECODE_0__(0xcc)) / 0x3) + parseInt(__DECODE_0__(0xcd)) / 0x4 * (-parseInt(__DECODE_0__(0xda)) / 0x5) + parseInt(__DECODE_0__(0xcf)) / 0x6 * (parseInt(__DECODE_0__(0xd2)) / 0x7) + parseInt(__DECODE_0__(0xd4)) / 0x8 + -parseInt(__DECODE_0__(0xd3)) / 0x9 * (-parseInt(__DECODE_0__(0xce)) / 0xa) + -parseInt(__DECODE_0__(0xd9)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2d532);
function main(input) {
  var n = input[0x0][__DECODE_0__(0xcb)]('\x20')[0x0] - 0x0;
  var m = input[0x0][__DECODE_0__(0xcb)]('\x20')[0x1] - 0x0;
  var nummap = [0x0, 0x2, 0x5, 0x5, 0x4, 0x5, 0x6, 0x3, 0x7, 0x6];
  var mattis = input[0x1][__DECODE_0__(0xcb)]('\x20')['map'](v => {
    return {
      'val': v,
      'num': nummap[v - 0x0]
    };
  });
  var ans = '';
  var dp = [];
  dp[0x0] = '';
  for (var i = 0x1; i <= n; i++) {
    for (var j = 0x0; j < m; j++) {
      var matti = mattis[j];
      if (dp[i - matti['num']] !== undefined) {
        var tv = (dp[i - matti[__DECODE_0__(0xd1)]] ? dp[i - matti[__DECODE_0__(0xd1)]] : '') + matti[__DECODE_0__(0xd0)];
        if (dp[i] === undefined || diff(tv, dp[i]) > 0x0) {
          dp[i] = tv;
        }
      }
    }
  }
  console[__DECODE_0__(0xd5)](dp[n]);
}
function __STRING_ARRAY__() {
  var _0x5bd979 = ['readFileSync', 'trim', '240153sMAlSk', '8747079lcfHXO', '365BNULBY', 'utf8', 'length', '2awgTcw', 'split', '914019YoEOZl', '5008zcrqRK', '3160wbnjQY', '1490106GtqVDY', 'val', 'num', '7BUQlRH', '5355WxtFXx', '728304DVMnuI', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x5bd979;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(wOZJIx, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xcb;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wOZJIx, key);
}
function diff(a, b) {
  if (a['length'] != b[__DECODE_0__(0xdc)]) {
    return a[__DECODE_0__(0xdc)] - b[__DECODE_0__(0xdc)];
  }
  for (var i = 0x0; i < a[__DECODE_0__(0xdc)]; i++) {
    if (a[i] != b[i]) {
      return a[i] - b[i];
    }
  }
  return 0x0;
}
main(require('fs')[__DECODE_0__(0xd6)]('/dev/stdin', __DECODE_0__(0xdb))[__DECODE_0__(0xd7)]()[__DECODE_0__(0xcb)]('\x0a'));
