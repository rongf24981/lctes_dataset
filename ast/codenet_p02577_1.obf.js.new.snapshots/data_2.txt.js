(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x16d)) / 0x1 + parseInt(__DECODE_0__(0x174)) / 0x2 + parseInt(__DECODE_0__(0x166)) / 0x3 + -parseInt(__DECODE_0__(0x167)) / 0x4 * (-parseInt(__DECODE_0__(0x16a)) / 0x5) + parseInt(__DECODE_0__(0x170)) / 0x6 + -parseInt(__DECODE_0__(0x16f)) / 0x7 * (parseInt(__DECODE_0__(0x168)) / 0x8) + -parseInt(__DECODE_0__(0x16e)) / 0x9;
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
  let num = parseInt(input, 0xa);
  let sum = 0x0;
  let tmp = 0x0;
  for (let i = input[__DECODE_0__(0x16c)] - 0x1; 0x0 <= i; i--) {
    tmp = Math[__DECODE_0__(0x16b)](num / Math[__DECODE_0__(0x172)](0xa, i));
    sum += tmp;
    num -= tmp * Math[__DECODE_0__(0x172)](0xa, i);
  }
  const ans = sum % 0x9 === 0x0 ? __DECODE_0__(0x169) : 'No';
  console[__DECODE_0__(0x171)](ans);
}
function __STRING_ARRAY__() {
  const _0x36686e = ['floor', 'length', '331077SZnwcd', '9261126MUJynQ', '545783QJRLmu', '2812452tBiEkj', 'log', 'pow', 'utf8', '1167656UgXXtW', '/dev/stdin', '407316kZKNfO', '30752eFhIfR', '32lxtFyd', 'Yes', '90AQbRls'];
  __STRING_ARRAY__ = function () {
    return _0x36686e;
  };
  return __STRING_ARRAY__();
}
;
Main(require('fs')['readFileSync'](__DECODE_0__(0x165), __DECODE_0__(0x173)));
