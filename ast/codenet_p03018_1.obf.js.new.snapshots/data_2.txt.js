'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x19a)) / 0x1 + parseInt(__DECODE_0__(0x19f)) / 0x2 * (parseInt(__DECODE_0__(0x19d)) / 0x3) + parseInt(__DECODE_0__(0x194)) / 0x4 * (-parseInt(__DECODE_0__(0x191)) / 0x5) + -parseInt(__DECODE_0__(0x197)) / 0x6 + -parseInt(__DECODE_0__(0x199)) / 0x7 * (parseInt(__DECODE_0__(0x195)) / 0x8) + parseInt(__DECODE_0__(0x196)) / 0x9 * (-parseInt(__DECODE_0__(0x19b)) / 0xa) + -parseInt(__DECODE_0__(0x192)) / 0xb * (-parseInt(__DECODE_0__(0x1a1)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc52f9);
function __STRING_ARRAY__() {
  const _0x417cc2 = ['203979TYBcKb', 'utf8', '34RYfDLi', 'length', '259212cQBMLQ', '3667210rDZBLV', '1606wMoQIF', 'ABC', '8KPvdpx', '7800592arEfuu', '45LDULUc', '2461806oKXWzV', 'join', '7sCjRYr', '505790HCSGiI', '2310970ItEhrr', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x417cc2;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  let s = input;
  let tmp = s['split'](__DECODE_0__(0x193));
  let result = tmp['length'] - 0x1;
  while (tmp[__DECODE_0__(0x1a0)] !== 0x1) {
    s = tmp[__DECODE_0__(0x198)]('BCA');
    tmp = s['split'](__DECODE_0__(0x193));
    result += tmp[__DECODE_0__(0x1a0)] - 0x1;
  }
  console['log'](result);
}
function __DECODE_0__(FaoJPh, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x191;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FaoJPh, key);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x19c), __DECODE_0__(0x19e)));
