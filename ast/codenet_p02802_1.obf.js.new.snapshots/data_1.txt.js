'use strict';

const a0_0xfc21b6 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x4f4019 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x4f4019(0x11d)) / 0x1 + parseInt(_0x4f4019(0x122)) / 0x2 * (parseInt(_0x4f4019(0x118)) / 0x3) + -parseInt(_0x4f4019(0x115)) / 0x4 * (-parseInt(_0x4f4019(0x114)) / 0x5) + -parseInt(_0x4f4019(0x112)) / 0x6 * (-parseInt(_0x4f4019(0x11b)) / 0x7) + parseInt(_0x4f4019(0x124)) / 0x8 + parseInt(_0x4f4019(0x117)) / 0x9 + parseInt(_0x4f4019(0x116)) / 0xa * (-parseInt(_0x4f4019(0x11e)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe9d6d);
function Main(input) {
  const _0x3cc4ca = __DECODE_0__;
  let lines = input[_0x3cc4ca(0x11f)]('\x0a');
  let numInfo = lines[_0x3cc4ca(0x120)]()['split']('\x20')[0x1];
  let ansObj = {};
  for (let i = 0x0; i < numInfo; i++) {
    let quesNum = lines[i][_0x3cc4ca(0x11f)]('\x20')[0x0];
    let ansKind = lines[i][_0x3cc4ca(0x11f)]('\x20')[0x1];
    if (ansObj[quesNum] === undefined) {
      ansObj[quesNum] = '' + ansKind;
    } else {
      ansObj[quesNum] += ',' + ansKind;
    }
  }
  let WANum = 0x0;
  let ACNum = 0x0;
  let ansObjKeys = Object[_0x3cc4ca(0x123)](ansObj);
  for (let i = 0x0; i < ansObjKeys[_0x3cc4ca(0x119)]; i++) {
    let targetKey = ansObjKeys[i];
    let target = ansObj[targetKey][_0x3cc4ca(0x11f)](',');
    for (let j = 0x0; j < target[_0x3cc4ca(0x119)]; j++) {
      if (target[j] == 'AC') {
        ACNum++;
        break;
      } else {
        WANum++;
      }
    }
  }
  console[_0x3cc4ca(0x11a)](ACNum + '\x20' + WANum);
}
Main(require('fs')[a0_0xfc21b6(0x11c)](a0_0xfc21b6(0x121), a0_0xfc21b6(0x113)));
function __DECODE_0__(UCecHk, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x112;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UCecHk, key);
}
function __STRING_ARRAY__() {
  const _0x57ec44 = ['shift', '/dev/stdin', '6108qUTChp', 'keys', '14592496SrNSiL', '714YMELgq', 'utf8', '5XsCJIj', '6570204ekSvvd', '20955810WdhxZA', '5874453yxCDCY', '1167JQiPHn', 'length', 'log', '77497aEBAqg', 'readFileSync', '1475818MBJSQO', '22IqNqBU', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x57ec44;
  };
  return __STRING_ARRAY__();
}
