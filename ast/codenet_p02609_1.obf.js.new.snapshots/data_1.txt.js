const a0_0x4967bb = __DECODE_0__;
function __STRING_ARRAY__() {
  const _0x16ed8d = ['log', '539REVQtL', '820365dCDRyT', '30DMPiqI', 'pow', '93692QzNONT', '720152TsNKwC', '12uAFUHZ', '233185ufTAIv', 'utf8', '762snZyiX', '861864zBOCQB', 'split', '702477qAovOR', '/dev/stdin', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x16ed8d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const _0x1c8354 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x1c8354(0x109)) / 0x1 * (-parseInt(_0x1c8354(0x112)) / 0x2) + -parseInt(_0x1c8354(0x10f)) / 0x3 * (-parseInt(_0x1c8354(0x10d)) / 0x4) + parseInt(_0x1c8354(0x110)) / 0x5 + -parseInt(_0x1c8354(0x113)) / 0x6 + parseInt(_0x1c8354(0x10a)) / 0x7 + parseInt(_0x1c8354(0x10e)) / 0x8 + -parseInt(_0x1c8354(0x115)) / 0x9 * (parseInt(_0x1c8354(0x10b)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2abfb);
const input = require('fs')[a0_0x4967bb(0x107)](a0_0x4967bb(0x106), a0_0x4967bb(0x111));
function __DECODE_0__(NyNMQz, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x106;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NyNMQz, key);
}
(input => {
  const _0x1d88e9 = a0_0x4967bb;
  const lines = input[_0x1d88e9(0x114)]('\x0a');
  const N = lines[0x0] - 0x0;
  const X = lines[0x1];
  const popcount = n => {
    let count = 0x0;
    do {
      n & 0x1 ? count++ : count;
    } while (n = n >>> 0x1);
    return count;
  };
  const f = n => {
    if (n === 0x0) {
      return 0x0;
    }
    let count = 0x1;
    while (n %= popcount(n)) {
      count++;
    }
    return count;
  };
  const x = parseInt(X, 0x2);
  const pr = popcount(x) - 0x1;
  const nx = popcount(x) + 0x1;
  for (let i = 0x0; i < N; i++) {
    let n = x ^ Math[_0x1d88e9(0x10c)](0x2, N - i - 0x1);
    if (n === 0x0) {
      console['log'](0x0);
    } else {
      console[_0x1d88e9(0x108)](f(n % (X[i] === '1' ? pr : nx)) + 0x1);
    }
  }
})(input);
