function __DECODE_0__(EDJbvO, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x76;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EDJbvO, key);
}
function __STRING_ARRAY__() {
  const _0x356c22 = ['/dev/stdin', '2340443kCCwHk', '8pUJGQR', '208770SAQRjr', 'log', 'split', '307269pOxLyn', '6KMfVjC', '1257716LHaXwN', '2707hBeFhN', '535758yikvgX', '2787920psTLNd', '80ksKiGy', 'utf8'];
  __STRING_ARRAY__ = function () {
    return _0x356c22;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x7b)) / 0x1 * (parseInt(__DECODE_0__(0x82)) / 0x2) + parseInt(__DECODE_0__(0x7c)) / 0x3 + parseInt(__DECODE_0__(0x7a)) / 0x4 + parseInt(__DECODE_0__(0x83)) / 0x5 + -parseInt(__DECODE_0__(0x79)) / 0x6 * (-parseInt(__DECODE_0__(0x81)) / 0x7) + parseInt(__DECODE_0__(0x7e)) / 0x8 * (-parseInt(__DECODE_0__(0x78)) / 0x9) + -parseInt(__DECODE_0__(0x7d)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3f6a0);
function Main(input) {
  input = input[__DECODE_0__(0x77)]('\x20');
  const num = parseInt(input[0x0], 0xa);
  if (num > 0x51) {
    console[__DECODE_0__(0x76)]('No');
    return;
  }
  if (num % 0x2 == 0x0 && num / 0x2 < 0xa || num % 0x3 == 0x0 && num / 0x3 < 0xa || num % 0x4 == 0x0 && num / 0x4 < 0xa || num % 0x5 == 0x0 && num / 0x5 < 0xa || num % 0x6 == 0x0 && num / 0x6 < 0xa || num % 0x7 == 0x0 && num / 0x7 < 0xa || num % 0x8 == 0x0 && num / 0x8 < 0xa || num % 0x9 == 0x0 && num / 0x9 < 0xa) {
    console['log']('Yes');
  } else {
    console['log']('No');
  }
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x80), __DECODE_0__(0x7f)));
