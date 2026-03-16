'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x11d)) / 0x1 + parseInt(__DECODE_0__(0x122)) / 0x2 * (parseInt(__DECODE_0__(0x118)) / 0x3) + -parseInt(__DECODE_0__(0x115)) / 0x4 * (-parseInt(__DECODE_0__(0x114)) / 0x5) + -parseInt(__DECODE_0__(0x112)) / 0x6 * (-parseInt(__DECODE_0__(0x11b)) / 0x7) + parseInt(__DECODE_0__(0x124)) / 0x8 + parseInt(__DECODE_0__(0x117)) / 0x9 + parseInt(__DECODE_0__(0x116)) / 0xa * (-parseInt(__DECODE_0__(0x11e)) / 0xb);
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
  let lines = input[__DECODE_0__(0x11f)]('\x0a');
  let numInfo = lines[__DECODE_0__(0x120)]()['split']('\x20')[0x1];
  let ansObj = {};
  for (let i = 0x0; i < numInfo; i++) {
    let quesNum = lines[i][__DECODE_0__(0x11f)]('\x20')[0x0];
    let ansKind = lines[i][__DECODE_0__(0x11f)]('\x20')[0x1];
    if (ansObj[quesNum] === undefined) {
      ansObj[quesNum] = '' + ansKind;
    } else {
      ansObj[quesNum] += ',' + ansKind;
    }
  }
  let WANum = 0x0;
  let ACNum = 0x0;
  let ansObjKeys = Object[__DECODE_0__(0x123)](ansObj);
  for (let i = 0x0; i < ansObjKeys[__DECODE_0__(0x119)]; i++) {
    let targetKey = ansObjKeys[i];
    let target = ansObj[targetKey][__DECODE_0__(0x11f)](',');
    for (let j = 0x0; j < target[__DECODE_0__(0x119)]; j++) {
      if (target[j] == 'AC') {
        ACNum++;
        break;
      } else {
        WANum++;
      }
    }
  }
  console[__DECODE_0__(0x11a)](ACNum + '\x20' + WANum);
}
Main(require('fs')[__DECODE_0__(0x11c)](__DECODE_0__(0x121), __DECODE_0__(0x113)));
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
