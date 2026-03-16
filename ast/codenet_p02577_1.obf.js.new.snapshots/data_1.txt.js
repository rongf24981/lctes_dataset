const a0_0x3fc8ce = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x5ce7ab = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x5ce7ab(0x16d)) / 0x1 + parseInt(_0x5ce7ab(0x174)) / 0x2 + parseInt(_0x5ce7ab(0x166)) / 0x3 + -parseInt(_0x5ce7ab(0x167)) / 0x4 * (-parseInt(_0x5ce7ab(0x16a)) / 0x5) + parseInt(_0x5ce7ab(0x170)) / 0x6 + -parseInt(_0x5ce7ab(0x16f)) / 0x7 * (parseInt(_0x5ce7ab(0x168)) / 0x8) + -parseInt(_0x5ce7ab(0x16e)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4d5f1);
function __DECODE_0__(VYLCRN, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x165;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VYLCRN, key);
}
function Main(input) {
  const _0x6535b2 = __DECODE_0__;
  let num = parseInt(input, 0xa);
  let sum = 0x0;
  let tmp = 0x0;
  for (let i = input[_0x6535b2(0x16c)] - 0x1; 0x0 <= i; i--) {
    tmp = Math[_0x6535b2(0x16b)](num / Math[_0x6535b2(0x172)](0xa, i));
    sum += tmp;
    num -= tmp * Math[_0x6535b2(0x172)](0xa, i);
  }
  const ans = sum % 0x9 === 0x0 ? _0x6535b2(0x169) : 'No';
  console[_0x6535b2(0x171)](ans);
}
function __STRING_ARRAY__() {
  const _0x36686e = ['floor', 'length', '331077SZnwcd', '9261126MUJynQ', '545783QJRLmu', '2812452tBiEkj', 'log', 'pow', 'utf8', '1167656UgXXtW', '/dev/stdin', '407316kZKNfO', '30752eFhIfR', '32lxtFyd', 'Yes', '90AQbRls'];
  __STRING_ARRAY__ = function () {
    return _0x36686e;
  };
  return __STRING_ARRAY__();
}
;
Main(require('fs')['readFileSync'](a0_0x3fc8ce(0x165), a0_0x3fc8ce(0x173)));
