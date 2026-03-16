'use strict';

function __STRING_ARRAY__() {
  const _0x5adada = ['2BryjwS', 'keys', '51828UIAcPs', '1370076EwLmst', '700288zSiVWK', 'map', '1293935fdQtvm', 'utf8', 'fill', '1009869DJdeoR', '5571632LLNpQg', 'trim', '82989ZlUAMQ', 'forEach', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x5adada;
  };
  return __STRING_ARRAY__();
}
const a0_0xf3d4ce = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x2727ec = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x2727ec(0xd1)) / 0x1 + parseInt(_0x2727ec(0xcf)) / 0x2 * (parseInt(_0x2727ec(0xcc)) / 0x3) + -parseInt(_0x2727ec(0xd3)) / 0x4 + -parseInt(_0x2727ec(0xc6)) / 0x5 + -parseInt(_0x2727ec(0xd2)) / 0x6 + parseInt(_0x2727ec(0xc9)) / 0x7 + parseInt(_0x2727ec(0xca)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x25aef);
function __DECODE_0__(fvicSF, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xc5;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fvicSF, key);
}
const main = arg => {
  const _0x55ba5e = __DECODE_0__;
  arg = arg[_0x55ba5e(0xcb)]()['split']('\x0a');
  const N = arg[0x0] * 0x1;
  const nums = arg[0x1]['split']('\x20')[_0x55ba5e(0xc5)](x => x * 0x1);
  const totalSum = new Array(N)[_0x55ba5e(0xc8)](0x0);
  for (let i = 0x0; i < N; i++) {
    totalSum[i] += (totalSum[i - 0x1] || 0x0) + nums[i];
  }
  let accumObj = {};
  accumObj[0x0] = 0x1;
  for (let i = 0x0; i < N; i++) {
    accumObj[totalSum[i]] = (accumObj[totalSum[i]] || 0x0) + 0x1;
  }
  let ans = 0x0;
  Object[_0x55ba5e(0xd0)](accumObj)[_0x55ba5e(0xcd)](x => {
    ans += accumObj[x] * (accumObj[x] - 0x1) / 0x2;
  });
  console['log'](ans);
};
main(require('fs')[a0_0xf3d4ce(0xce)]('/dev/stdin', a0_0xf3d4ce(0xc7)));
