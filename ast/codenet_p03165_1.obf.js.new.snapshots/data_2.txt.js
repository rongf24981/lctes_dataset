(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1cb)) / 0x1 + parseInt(__DECODE_0__(0x1c4)) / 0x2 * (-parseInt(__DECODE_0__(0x1c1)) / 0x3) + parseInt(__DECODE_0__(0x1bf)) / 0x4 + parseInt(__DECODE_0__(0x1c2)) / 0x5 * (parseInt(__DECODE_0__(0x1c7)) / 0x6) + -parseInt(__DECODE_0__(0x1c8)) / 0x7 + parseInt(__DECODE_0__(0x1ca)) / 0x8 * (-parseInt(__DECODE_0__(0x1cd)) / 0x9) + -parseInt(__DECODE_0__(0x1cc)) / 0xa * (-parseInt(__DECODE_0__(0x1c0)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbf939);
function __DECODE_0__(YuElUC, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1bd;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YuElUC, key);
}
function main(input) {
  const lines = input[__DECODE_0__(0x1be)]('\x0a');
  const S = lines[__DECODE_0__(0x1cf)]()[__DECODE_0__(0x1be)]('');
  const T = lines[__DECODE_0__(0x1cf)]()[__DECODE_0__(0x1be)]('');
  dp = [];
  for (var i = 0x0; i <= S[__DECODE_0__(0x1c9)]; i++) {
    dp['push'](Array(T[__DECODE_0__(0x1c9)] + 0x1)[__DECODE_0__(0x1c5)](0x0));
  }
  for (var i = 0x1; i <= S[__DECODE_0__(0x1c9)]; i++) {
    for (var j = 0x1; j <= T[__DECODE_0__(0x1c9)]; j++) {
      if (S[i - 0x1] == T[j - 0x1]) {
        dp[i][j] = Math[__DECODE_0__(0x1d0)](dp[i][j], dp[i - 0x1][j - 0x1] + 0x1);
      } else {
        dp[i][j] = Math['max'](dp[i - 0x1][j], dp[i][j - 0x1]);
      }
    }
  }
  var i = S[__DECODE_0__(0x1c9)];
  var j = T[__DECODE_0__(0x1c9)];
  var result = [];
  while (i != 0x0 && j != 0x0) {
    if (S[i - 0x1] == T[j - 0x1]) {
      result[__DECODE_0__(0x1c6)](S[i - 0x1]);
      i--;
      j--;
    } else {
      if (dp[i - 0x1][j] < dp[i][j - 0x1]) {
        j--;
      } else {
        i--;
      }
    }
  }
  console[__DECODE_0__(0x1d1)](result['join'](''));
}
main(require('fs')[__DECODE_0__(0x1ce)](__DECODE_0__(0x1bd), __DECODE_0__(0x1c3)));
function __STRING_ARRAY__() {
  var _0x4a4e14 = ['151608DofzdO', '10670982PXtbJv', 'length', '3630808BlvHpH', '1106539CZhtso', '419350LfiyWe', '18lGDiNQ', 'readFileSync', 'shift', 'max', 'log', '/dev/stdin', 'split', '183052vxeWhy', '583QFsmPE', '1239sSSdwt', '175pfuwTj', 'utf8', '5048MmbWrn', 'fill', 'unshift'];
  __STRING_ARRAY__ = function () {
    return _0x4a4e14;
  };
  return __STRING_ARRAY__();
}
