'use strict';

const a0_0x550746 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x1c4f02 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x1c4f02(0xce)) / 0x1 * (-parseInt(_0x1c4f02(0xcf)) / 0x2) + parseInt(_0x1c4f02(0xca)) / 0x3 * (parseInt(_0x1c4f02(0xc0)) / 0x4) + -parseInt(_0x1c4f02(0xc5)) / 0x5 * (parseInt(_0x1c4f02(0xc2)) / 0x6) + parseInt(_0x1c4f02(0xcc)) / 0x7 * (-parseInt(_0x1c4f02(0xc6)) / 0x8) + parseInt(_0x1c4f02(0xbf)) / 0x9 + -parseInt(_0x1c4f02(0xc3)) / 0xa * (-parseInt(_0x1c4f02(0xd0)) / 0xb) + parseInt(_0x1c4f02(0xcd)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x19f77);
function __STRING_ARRAY__() {
  const _0x4c29bb = ['590ZBtQOK', '1264840cAYgQo', 'YES', 'log', 'split', '48018LTQtPv', '/dev/stdin', '7hiHwWs', '5805780rkFHYA', '38807ZtIdsi', '6JVZILK', '110xFsYOc', '597402eZWqhP', '4DTVhGZ', 'readFileSync', '9498sSuvue', '1480matNlo', 'map'];
  __STRING_ARRAY__ = function () {
    return _0x4c29bb;
  };
  return __STRING_ARRAY__();
}
const main = arg => {
  const _0x1ca44b = __DECODE_0__;
  let Nums = arg['split']('\x0a')[0x0][_0x1ca44b(0xc9)]('\x20')[_0x1ca44b(0xc4)](n => Number(n));
  let A = Nums[0x0];
  let B = Nums[0x1];
  let C = Nums[0x2];
  let ans = 'NO';
  for (let i = 0x1; i <= B; i++) {
    if (A * i % B == C) {
      ans = _0x1ca44b(0xc7);
    }
  }
  console[_0x1ca44b(0xc8)](ans);
};
function __DECODE_0__(JoHekw, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xbf;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(JoHekw, key);
}
main(require('fs')[a0_0x550746(0xc1)](a0_0x550746(0xcb), 'utf8'));
