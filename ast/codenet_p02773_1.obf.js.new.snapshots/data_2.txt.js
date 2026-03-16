'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1ca)) / 0x1 * (-parseInt(__DECODE_0__(0x1bf)) / 0x2) + -parseInt(__DECODE_0__(0x1c9)) / 0x3 * (-parseInt(__DECODE_0__(0x1c1)) / 0x4) + -parseInt(__DECODE_0__(0x1c5)) / 0x5 * (parseInt(__DECODE_0__(0x1c3)) / 0x6) + parseInt(__DECODE_0__(0x1c2)) / 0x7 + parseInt(__DECODE_0__(0x1d3)) / 0x8 + -parseInt(__DECODE_0__(0x1c6)) / 0x9 * (-parseInt(__DECODE_0__(0x1cd)) / 0xa) + -parseInt(__DECODE_0__(0x1c8)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x71c4e);
function __STRING_ARRAY__() {
  const _0x2d9185 = ['15mgAedR', '108OrwRSZ', 'trim', '11419518KMwOQu', '1099176rhbUVC', '1COyQfq', 'push', 'sort', '663610yNwylQ', 'shift', 'forEach', '/dev/stdin', 'split', 'keys', '1782800LCChAL', '402334qvExNd', 'log', '8quXKhi', '3299422rnVEJX', '1840686aAgScu', 'length'];
  __STRING_ARRAY__ = function () {
    return _0x2d9185;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(AxJIkE, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1bf;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(AxJIkE, key);
}
const main = arg => {
  const rows = arg[__DECODE_0__(0x1c7)]()[__DECODE_0__(0x1d1)]('\x0a');
  const N = rows[__DECODE_0__(0x1ce)]();
  let wordsObj = {};
  rows[__DECODE_0__(0x1cf)](row => {
    if (wordsObj[row]) {
      wordsObj[row]++;
    } else {
      wordsObj[row] = 0x1;
    }
  });
  let ansArr = [];
  let max = 0x0;
  let output = w => {
    console[__DECODE_0__(0x1c0)](w);
  };
  for (let i = 0x0; i < Object['keys'](wordsObj)[__DECODE_0__(0x1c4)]; i++) {
    if (wordsObj[Object[__DECODE_0__(0x1d2)](wordsObj)[i]] < max) {
      continue;
    } else {
      if (wordsObj[Object[__DECODE_0__(0x1d2)](wordsObj)[i]] > max) {
        ansArr = [];
        ansArr['push'](Object[__DECODE_0__(0x1d2)](wordsObj)[i]);
        max = wordsObj[Object[__DECODE_0__(0x1d2)](wordsObj)[i]];
      } else {
        if (wordsObj[Object[__DECODE_0__(0x1d2)](wordsObj)[i]] * 0x1 == max) {
          ansArr[__DECODE_0__(0x1cb)](Object[__DECODE_0__(0x1d2)](wordsObj)[i]);
        }
      }
    }
  }
  ansArr[__DECODE_0__(0x1cc)]();
  ansArr[__DECODE_0__(0x1cf)](output);
};
main(require('fs')['readFileSync'](__DECODE_0__(0x1d0), 'utf8'));
