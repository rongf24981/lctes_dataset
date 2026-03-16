'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x173)) / 0x1 * (-parseInt(__DECODE_0__(0x177)) / 0x2) + -parseInt(__DECODE_0__(0x17a)) / 0x3 + parseInt(__DECODE_0__(0x183)) / 0x4 + parseInt(__DECODE_0__(0x172)) / 0x5 * (parseInt(__DECODE_0__(0x178)) / 0x6) + parseInt(__DECODE_0__(0x17c)) / 0x7 + -parseInt(__DECODE_0__(0x17b)) / 0x8 + parseInt(__DECODE_0__(0x180)) / 0x9 * (-parseInt(__DECODE_0__(0x17f)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2700a);
const input = require('fs')['readFileSync'](__DECODE_0__(0x181), __DECODE_0__(0x179))[__DECODE_0__(0x174)]('\x0a');
let ws = new Set();
function __DECODE_0__(qYflAC, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x172;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qYflAC, key);
}
let prev = null;
function __STRING_ARRAY__() {
  const _0x109c75 = ['1876714BZTBxJ', 'slice', 'add', '520860PVqMDs', '36Oboegv', '/dev/stdin', 'has', '445544RmNBfy', 'substr', '110MjirOY', '5ZeOpZF', 'split', 'log', 'Yes', '75222SMbnHI', '38604HgOXLE', 'utf8', '549411CZnxef', '1262848SjRcsi'];
  __STRING_ARRAY__ = function () {
    return _0x109c75;
  };
  return __STRING_ARRAY__();
}
console[__DECODE_0__(0x175)]((() => {
  for (const w of input[__DECODE_0__(0x17d)](0x1, parseInt(input[0x0]) + 0x1)) {
    if (prev && prev != w[0x0]) {
      return 'No';
    }
    if (ws[__DECODE_0__(0x182)](w)) {
      return 'No';
    }
    ws[__DECODE_0__(0x17e)](w);
    prev = w[__DECODE_0__(0x184)](-0x1);
  }
  return __DECODE_0__(0x176);
})());
