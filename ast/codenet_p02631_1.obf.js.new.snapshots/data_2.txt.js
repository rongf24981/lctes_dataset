function __DECODE_0__(KaJdXb, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1b0;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KaJdXb, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1ba)) / 0x1 + -parseInt(__DECODE_0__(0x1b6)) / 0x2 + parseInt(__DECODE_0__(0x1b8)) / 0x3 + parseInt(__DECODE_0__(0x1b2)) / 0x4 * (-parseInt(__DECODE_0__(0x1bb)) / 0x5) + -parseInt(__DECODE_0__(0x1b5)) / 0x6 + -parseInt(__DECODE_0__(0x1b7)) / 0x7 * (parseInt(__DECODE_0__(0x1b0)) / 0x8) + parseInt(__DECODE_0__(0x1b4)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x47f0d);
const [n, aStr] = require('fs')['readFileSync']('/dev/stdin', 'utf8')[__DECODE_0__(0x1b1)](/\n/);
let as = aStr[__DECODE_0__(0x1b1)](/\s/)[__DECODE_0__(0x1b3)](Number);
let total = as['reduce']((a, b) => a ^ b);
console[__DECODE_0__(0x1b9)](as[__DECODE_0__(0x1b3)](n => n ^ total)['join']('\x20'));
function __STRING_ARRAY__() {
  const _0x35a1a5 = ['map', '9622710PgADfO', '1869018Nupbqj', '949490cbPxAB', '21rRbaDT', '200949VEPAOd', 'log', '69335HlshWI', '160WjcBVA', '193832yWdXPB', 'split', '6488YOOjtq'];
  __STRING_ARRAY__ = function () {
    return _0x35a1a5;
  };
  return __STRING_ARRAY__();
}
