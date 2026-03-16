'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1e2)) / 0x1 * (-parseInt(__DECODE_0__(0x1e6)) / 0x2) + parseInt(__DECODE_0__(0x1e8)) / 0x3 + -parseInt(__DECODE_0__(0x1da)) / 0x4 * (-parseInt(__DECODE_0__(0x1e3)) / 0x5) + -parseInt(__DECODE_0__(0x1dd)) / 0x6 + parseInt(__DECODE_0__(0x1e4)) / 0x7 * (parseInt(__DECODE_0__(0x1e0)) / 0x8) + -parseInt(__DECODE_0__(0x1e5)) / 0x9 + parseInt(__DECODE_0__(0x1dc)) / 0xa * (-parseInt(__DECODE_0__(0x1e1)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa61e7);
function __STRING_ARRAY__() {
  const _0x17dfb7 = ['1183NAPqWV', '5627592MNBBTd', '2ekdKaV', 'map', '262344fGZztL', 'log', '120HAGrGo', 'utf8', '10YpZmfB', '4241544HKuIax', 'split', 'trim', '17960JSVFFU', '1739617fPBYww', '1159339KqzkxY', '90765SJinDn'];
  __STRING_ARRAY__ = function () {
    return _0x17dfb7;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(WBaqMN, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1da;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WBaqMN, key);
}
const Main = arg => {
  let input = arg[__DECODE_0__(0x1df)]()[__DECODE_0__(0x1de)]('\x0a');
  let n = parseInt(input[0x0]);
  let pArr = input[0x1][__DECODE_0__(0x1de)]('\x20')[__DECODE_0__(0x1e7)](Number);
  let count = 0x0;
  for (let i = 0x1; i - 0x1 < n; i++) {
    if (pArr[i - 0x1] < pArr[i] && pArr[i] < pArr[i + 0x1] || pArr[i + 0x1] < pArr[i] && pArr[i] < pArr[i - 0x1]) {
      count += 0x1;
    }
  }
  console[__DECODE_0__(0x1e9)](count);
};
Main(require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0x1db)));
