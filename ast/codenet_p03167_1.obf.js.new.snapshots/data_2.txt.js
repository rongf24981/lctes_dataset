function __DECODE_0__(CWpUZv, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1c0;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CWpUZv, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1c5)) / 0x1 * (parseInt(__DECODE_0__(0x1d1)) / 0x2) + parseInt(__DECODE_0__(0x1cb)) / 0x3 * (parseInt(__DECODE_0__(0x1ca)) / 0x4) + parseInt(__DECODE_0__(0x1c0)) / 0x5 + parseInt(__DECODE_0__(0x1ce)) / 0x6 + parseInt(__DECODE_0__(0x1c8)) / 0x7 * (-parseInt(__DECODE_0__(0x1c7)) / 0x8) + -parseInt(__DECODE_0__(0x1d0)) / 0x9 * (-parseInt(__DECODE_0__(0x1c2)) / 0xa) + -parseInt(__DECODE_0__(0x1c1)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb3ee7);
function Main(input) {
  input = input['trim']()[__DECODE_0__(0x1d2)]('\x0a')[__DECODE_0__(0x1cc)](function (x) {
    return x[__DECODE_0__(0x1d2)]('\x20');
  });
  let C = 0x3b9aca00 + 0x7;
  let H = parseInt(input[0x0][0x0], 0xa);
  let W = parseInt(input[0x0][0x1], 0xa);
  let DP = [];
  for (let i = 0x0; i < H; i++) {
    DP[__DECODE_0__(0x1c9)](Array['from']({
      'length': W
    }, () => 0x0));
  }
  DP[0x0][0x0] = 0x1;
  for (let i = 0x1; i < H + W - 0x1; i++) {
    for (let j = 0x0; j <= Math[__DECODE_0__(0x1c6)](i, H - 0x1); j++) {
      if (input[j + 0x1][0x0][i - j] === '#' || i - j >= W) {
        continue;
      }
      if (j > 0x0 && i - j > 0x0) {
        DP[j][i - j] = (DP[j - 0x1][i - j] + DP[j][i - j - 0x1]) % C;
      } else {
        if (j > 0x0) {
          DP[j][i - j] = DP[j - 0x1][i - j];
        } else {
          DP[j][i - j] = DP[j][i - j - 0x1];
        }
      }
    }
  }
  console[__DECODE_0__(0x1c4)](DP[__DECODE_0__(0x1cf)]()[__DECODE_0__(0x1cf)]());
}
function __STRING_ARRAY__() {
  const _0x1e95f9 = ['1jVYZSq', 'min', '296rjLZSH', '110019vyCVFr', 'push', '1252776LliZZD', '9RQQhEl', 'map', 'readFileSync', '1236060lizVXv', 'pop', '90xOQTLO', '1725586vTQWby', 'split', '3155745zrFiPo', '9283450tMzxsT', '1248530shjhTF', 'utf8', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x1e95f9;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0x1cd)]('/dev/stdin', __DECODE_0__(0x1c3)));
