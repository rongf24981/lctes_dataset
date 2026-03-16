(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xc1)) / 0x1 + -parseInt(__DECODE_0__(0xbf)) / 0x2 * (-parseInt(__DECODE_0__(0xc2)) / 0x3) + parseInt(__DECODE_0__(0xc3)) / 0x4 + parseInt(__DECODE_0__(0xb9)) / 0x5 * (parseInt(__DECODE_0__(0xbc)) / 0x6) + parseInt(__DECODE_0__(0xbb)) / 0x7 + -parseInt(__DECODE_0__(0xc4)) / 0x8 * (-parseInt(__DECODE_0__(0xc0)) / 0x9) + -parseInt(__DECODE_0__(0xba)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x54dec);
function main(arg) {
  let n = Number(arg[__DECODE_0__(0xb8)]('\x0a')[0x0]);
  let a = arg[__DECODE_0__(0xb8)]('\x0a')[0x1]['split']('\x20')['map'](Number);
  let dp = [];
  for (let i = 0x0; i < n + 0x1; i++) {
    dp[i] = 0x0;
  }
  dp[0x0] = 0x3e8;
  let stock = 0x0;
  for (let i = 0x1; i < n + 0x1; i++) {
    if (i == n) {
      dp[i] = dp[i - 0x1] + stock * a[i - 0x1];
    } else {
      if (a[i] > a[i - 0x1]) {
        let addStock = parseInt(dp[i - 0x1] / a[i - 0x1]);
        dp[i] = dp[i - 0x1] - addStock * a[i - 0x1];
        stock += addStock;
      } else {
        let rmStock = stock;
        dp[i] = dp[i - 0x1] + rmStock * a[i - 0x1];
        stock -= rmStock;
      }
    }
  }
  console['log'](dp[n]);
}
main(require('fs')[__DECODE_0__(0xbe)]('/dev/stdin', __DECODE_0__(0xbd)));
function __DECODE_0__(QQWGxF, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xb8;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QQWGxF, key);
}
function __STRING_ARRAY__() {
  const _0xcc47e9 = ['582rqzOEW', '531RhtMNc', '130568xWxxRV', '1479bZIOFD', '2773760MruYyY', '40568xTAuOJ', 'split', '123335DAogmi', '10636180hnLoEe', '839433yxVnDL', '6jPTQvM', 'utf8', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0xcc47e9;
  };
  return __STRING_ARRAY__();
}
