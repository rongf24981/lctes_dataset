function __STRING_ARRAY__() {
  const _0x3617d6 = ['utf8', 'length', 'env', '480198sHzrOv', '1292039lgeXDe', 'dev/stdin', 'test', '1342780nxtByY', '6747664mpYiyN', '35529lroGNG', '641060ByXMYT', '14DWQvwP', 'trim', 'readFileSync', 'MYTEST', '531471iywYal', 'fill'];
  __STRING_ARRAY__ = function () {
    return _0x3617d6;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xfa)) / 0x1 * (-parseInt(__DECODE_0__(0xfc)) / 0x2) + parseInt(__DECODE_0__(0xef)) / 0x3 + -parseInt(__DECODE_0__(0xf8)) / 0x4 + -parseInt(__DECODE_0__(0xfb)) / 0x5 + parseInt(__DECODE_0__(0xf4)) / 0x6 + -parseInt(__DECODE_0__(0xf5)) / 0x7 + parseInt(__DECODE_0__(0xf9)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x31ac5);
function __DECODE_0__(AgvsYq, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xec;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(AgvsYq, key);
}
const main = input => {
  const mod = 0xa ** 0x9 + 0x7;
  const s = Number(input[__DECODE_0__(0xec)]());
  const dp = [0x1, ...new Array(s)[__DECODE_0__(0xf0)](0x0)];
  for (let x = 0x3; x < dp[__DECODE_0__(0xf2)]; x++) {
    let sum = 0x0;
    for (let i = x - 0x3; i >= 0x0; i--) {
      sum = (sum + dp[i]) % mod;
    }
    dp[x] = sum;
  }
  return console['log']((dp[s] % mod + mod) % mod);
};
process['env'][__DECODE_0__(0xee)] ? process[__DECODE_0__(0xf3)][__DECODE_0__(0xee)] === __DECODE_0__(0xf7) ? test() : main(require('fs')[__DECODE_0__(0xed)](__DECODE_0__(0xf6), 'utf8')) : main(require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0xf1)));
