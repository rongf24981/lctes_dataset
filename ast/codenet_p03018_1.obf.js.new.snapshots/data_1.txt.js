'use strict';

const a0_0x4bee6b = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x3fd214 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x3fd214(0x19a)) / 0x1 + parseInt(_0x3fd214(0x19f)) / 0x2 * (parseInt(_0x3fd214(0x19d)) / 0x3) + parseInt(_0x3fd214(0x194)) / 0x4 * (-parseInt(_0x3fd214(0x191)) / 0x5) + -parseInt(_0x3fd214(0x197)) / 0x6 + -parseInt(_0x3fd214(0x199)) / 0x7 * (parseInt(_0x3fd214(0x195)) / 0x8) + parseInt(_0x3fd214(0x196)) / 0x9 * (-parseInt(_0x3fd214(0x19b)) / 0xa) + -parseInt(_0x3fd214(0x192)) / 0xb * (-parseInt(_0x3fd214(0x1a1)) / 0xc);
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
  const _0x2572ec = __DECODE_0__;
  let s = input;
  let tmp = s['split'](_0x2572ec(0x193));
  let result = tmp['length'] - 0x1;
  while (tmp[_0x2572ec(0x1a0)] !== 0x1) {
    s = tmp[_0x2572ec(0x198)]('BCA');
    tmp = s['split'](_0x2572ec(0x193));
    result += tmp[_0x2572ec(0x1a0)] - 0x1;
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
Main(require('fs')['readFileSync'](a0_0x4bee6b(0x19c), a0_0x4bee6b(0x19e)));
