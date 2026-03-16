'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x18f)) / 0x1 + -parseInt(__DECODE_0__(0x191)) / 0x2 * (-parseInt(__DECODE_0__(0x196)) / 0x3) + -parseInt(__DECODE_0__(0x197)) / 0x4 * (-parseInt(__DECODE_0__(0x192)) / 0x5) + -parseInt(__DECODE_0__(0x198)) / 0x6 + parseInt(__DECODE_0__(0x199)) / 0x7 + -parseInt(__DECODE_0__(0x195)) / 0x8 + -parseInt(__DECODE_0__(0x19b)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6de4e);
function __DECODE_0__(YkRQWx, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x18e;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YkRQWx, key);
}
function Main(input) {
  const tape = input['split']('\x0a')[0x0][__DECODE_0__(0x18e)]('');
  const result = [];
  for (const v of tape) {
    if (v === 'B') {
      result[__DECODE_0__(0x193)]();
    } else {
      result[__DECODE_0__(0x19c)](v);
    }
  }
  console[__DECODE_0__(0x19a)](result['join'](''));
}
Main(require('fs')[__DECODE_0__(0x190)]('/dev/stdin', __DECODE_0__(0x194)));
function __STRING_ARRAY__() {
  const _0x1befca = ['4dRWGJa', '5CwWVAh', 'pop', 'utf8', '4833768fRCGib', '834744mGmhZL', '3098968GsZskh', '2978412WAZKoN', '4085739dpFaZW', 'log', '8886447LlyDSx', 'push', 'split', '623217iYIrrP', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x1befca;
  };
  return __STRING_ARRAY__();
}
