'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x178)) / 0x1 * (parseInt(__DECODE_0__(0x16b)) / 0x2) + -parseInt(__DECODE_0__(0x168)) / 0x3 + -parseInt(__DECODE_0__(0x170)) / 0x4 * (-parseInt(__DECODE_0__(0x16c)) / 0x5) + -parseInt(__DECODE_0__(0x172)) / 0x6 + parseInt(__DECODE_0__(0x174)) / 0x7 * (parseInt(__DECODE_0__(0x16d)) / 0x8) + parseInt(__DECODE_0__(0x169)) / 0x9 * (parseInt(__DECODE_0__(0x16e)) / 0xa) + parseInt(__DECODE_0__(0x177)) / 0xb * (parseInt(__DECODE_0__(0x171)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa3ac8);
function __STRING_ARRAY__() {
  const _0x577d58 = ['2fQZGkf', '5xEjamX', '8RXqZsj', '231930XvBmwE', 'log', '42556NRVFEK', '18606348DtmiDC', '5386710aedeto', '/dev/stdin', '3641351hAANDZ', 'utf8', 'trim', '11QpPtiO', '1203746loVdNP', '1894269XDOMUL', '513MkAByL', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x577d58;
  };
  return __STRING_ARRAY__();
}
const lines = require('fs')[__DECODE_0__(0x16a)](__DECODE_0__(0x173), __DECODE_0__(0x175))[__DECODE_0__(0x176)]()['split']('');
function __DECODE_0__(GkpyWW, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x168;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GkpyWW, key);
}
if (lines[0x0] === lines[0x1] && lines[0x1] === lines[0x2]) {
  console[__DECODE_0__(0x16f)](0x1);
}
if (lines[0x0] === lines[0x1] && lines[0x1] !== lines[0x2]) {
  console[__DECODE_0__(0x16f)](0x2);
}
if (lines[0x0] === lines[0x2] && lines[0x0] !== lines[0x1]) {
  console['log'](0x2);
}
if (lines[0x1] === lines[0x2] && lines[0x0] !== lines[0x1]) {
  console[__DECODE_0__(0x16f)](0x2);
}
if (lines[0x0] !== lines[0x1] && lines[0x1] !== lines[0x2] && lines[0x2] !== lines[0x0]) {
  console[__DECODE_0__(0x16f)](0x3);
}
