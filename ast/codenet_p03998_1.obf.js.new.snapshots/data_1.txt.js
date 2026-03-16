'use strict';

const a0_0x2e55cc = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x157cc1 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x157cc1(0x7e)) / 0x1 + -parseInt(_0x157cc1(0x82)) / 0x2 + parseInt(_0x157cc1(0x81)) / 0x3 + parseInt(_0x157cc1(0x7c)) / 0x4 + parseInt(_0x157cc1(0x78)) / 0x5 * (-parseInt(_0x157cc1(0x7a)) / 0x6) + parseInt(_0x157cc1(0x74)) / 0x7 * (-parseInt(_0x157cc1(0x76)) / 0x8) + -parseInt(_0x157cc1(0x79)) / 0x9 * (-parseInt(_0x157cc1(0x7d)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc868f);
function __STRING_ARRAY__() {
  const _0x2c8a77 = ['1367070KOuplB', '18wZvgTD', '24yRFxLG', 'utf8', '665104oIpvix', '4675210agTaiV', '20269xdSVwd', 'shift', 'readFileSync', '4196445UkwlEk', '741290UylYjs', '/dev/stdin', '7553AotTkd', 'split', '1744qVafgr', 'toUpperCase'];
  __STRING_ARRAY__ = function () {
    return _0x2c8a77;
  };
  return __STRING_ARRAY__();
}
const main = arg => {
  const _0x8f4c2 = __DECODE_0__;
  const input = arg['trim']()[_0x8f4c2(0x75)]('\x0a');
  let a = input[0x0][_0x8f4c2(0x75)]('');
  let b = input[0x1]['split']('');
  let c = input[0x2][_0x8f4c2(0x75)]('');
  function shiftCard(man) {
    const _0x1d0036 = _0x8f4c2;
    let out = eval(man)[_0x1d0036(0x7f)]();
    if (out === undefined) {
      console['log'](man[_0x1d0036(0x77)]());
      return;
    }
    shiftCard(out);
  }
  shiftCard('a');
};
function __DECODE_0__(LYUKPU, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x74;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LYUKPU, key);
}
main(require('fs')[a0_0x2e55cc(0x80)](a0_0x2e55cc(0x83), a0_0x2e55cc(0x7b)));
