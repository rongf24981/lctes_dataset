function __DECODE_0__(VCELTL, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1a5;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VCELTL, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1b4)) / 0x1 + -parseInt(__DECODE_0__(0x1a5)) / 0x2 * (-parseInt(__DECODE_0__(0x1a8)) / 0x3) + -parseInt(__DECODE_0__(0x1a9)) / 0x4 + -parseInt(__DECODE_0__(0x1b1)) / 0x5 * (-parseInt(__DECODE_0__(0x1ab)) / 0x6) + parseInt(__DECODE_0__(0x1af)) / 0x7 + parseInt(__DECODE_0__(0x1a7)) / 0x8 + parseInt(__DECODE_0__(0x1ae)) / 0x9 * (-parseInt(__DECODE_0__(0x1a6)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbd204);
var input = require('fs')[__DECODE_0__(0x1b2)](__DECODE_0__(0x1b3), __DECODE_0__(0x1aa));
input = input[__DECODE_0__(0x1ad)](/\s/);
const A = Number(input[0x0]);
const B = Number(input[0x1]);
var result = A === 0x2 || B === 0x2 ? 'No' : __DECODE_0__(0x1b0);
function __STRING_ARRAY__() {
  const _0x24bae5 = ['4474416dGzYYQ', 'utf8', '454758NRpyDb', 'log', 'split', '342WZkpRW', '8303757XjFTHW', 'Yes', '60YkJtZv', 'readFileSync', '/dev/stdin', '1269597PgLfyd', '1227286mFrook', '440900oBgkmR', '12121824TTRuMe', '6dnsLWN'];
  __STRING_ARRAY__ = function () {
    return _0x24bae5;
  };
  return __STRING_ARRAY__();
}
console[__DECODE_0__(0x1ac)](result);
