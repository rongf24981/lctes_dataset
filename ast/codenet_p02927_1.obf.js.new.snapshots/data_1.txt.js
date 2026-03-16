'use strict';

const a0_0x58f4c9 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x55bf4a = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x55bf4a(0x198)) / 0x1 + parseInt(_0x55bf4a(0x196)) / 0x2 * (-parseInt(_0x55bf4a(0x19a)) / 0x3) + parseInt(_0x55bf4a(0x19d)) / 0x4 * (parseInt(_0x55bf4a(0x192)) / 0x5) + parseInt(_0x55bf4a(0x19b)) / 0x6 + parseInt(_0x55bf4a(0x190)) / 0x7 * (parseInt(_0x55bf4a(0x199)) / 0x8) + -parseInt(_0x55bf4a(0x191)) / 0x9 + -parseInt(_0x55bf4a(0x194)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x85a6b);
function __DECODE_0__(HPIDBK, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x190;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HPIDBK, key);
}
const main = input => {
  const _0x43a1d1 = __DECODE_0__;
  const args = input[_0x43a1d1(0x197)]('\x0a')[_0x43a1d1(0x19c)](arg => arg[_0x43a1d1(0x197)]('\x20'));
  const M = parseInt(args[0x0][0x0], 0xa);
  const D = parseInt(args[0x0][0x1], 0xa);
  let cnt = 0x0;
  for (let m = 0x1; m <= M; m++) {
    for (let j = 0x1; j <= D; j++) {
      const d1 = j % 0xa;
      const d10 = Math['floor'](j / 0xa);
      if (d1 >= 0x2 && d10 >= 0x2 && d1 * d10 === m) {
        cnt++;
      }
    }
  }
  console[_0x43a1d1(0x193)](cnt);
};
function __STRING_ARRAY__() {
  const _0x2ef3ea = ['3302289EHMdPA', '110gwwrDA', 'log', '5242180hGypxI', 'utf8', '4VIXMlr', 'split', '323430XfwCqm', '16MHREZJ', '1598187smDJKM', '4236768YOWjWp', 'map', '129064njnOok', '2676177bEkQDM'];
  __STRING_ARRAY__ = function () {
    return _0x2ef3ea;
  };
  return __STRING_ARRAY__();
}
main(require('fs')['readFileSync']('/dev/stdin', a0_0x58f4c9(0x195)));
