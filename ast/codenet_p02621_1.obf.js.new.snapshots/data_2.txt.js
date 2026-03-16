function __DECODE_0__(PzjGXS, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xae;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PzjGXS, key);
}
function __STRING_ARRAY__() {
  const _0x49b412 = ['455VBPsKA', '2050nIcQWc', '659271CRMlyC', '16uCXudn', 'utf8', '8328015ajUbAv', '11RufUVO', 'log', '1808554TwWVYd', 'readFileSync', '48632CoNpjZ', '1220607fIZLVf', '462246FiAmyy', '5VONCXL', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x49b412;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xb9)) / 0x1 + -parseInt(__DECODE_0__(0xb6)) / 0x2 + parseInt(__DECODE_0__(0xb0)) / 0x3 * (parseInt(__DECODE_0__(0xb1)) / 0x4) + parseInt(__DECODE_0__(0xbb)) / 0x5 * (parseInt(__DECODE_0__(0xba)) / 0x6) + parseInt(__DECODE_0__(0xae)) / 0x7 * (parseInt(__DECODE_0__(0xb8)) / 0x8) + -parseInt(__DECODE_0__(0xb3)) / 0x9 + parseInt(__DECODE_0__(0xaf)) / 0xa * (-parseInt(__DECODE_0__(0xb4)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb526a);
const input = require('fs')[__DECODE_0__(0xb7)](__DECODE_0__(0xbc), __DECODE_0__(0xb2));
(input => {
  const a = input - 0x0;
  console[__DECODE_0__(0xb5)](a + a * a + a * a * a);
})(input);
