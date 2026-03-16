'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1c0)) / 0x1 + parseInt(__DECODE_0__(0x1c7)) / 0x2 + -parseInt(__DECODE_0__(0x1be)) / 0x3 + parseInt(__DECODE_0__(0x1ca)) / 0x4 + parseInt(__DECODE_0__(0x1c1)) / 0x5 + parseInt(__DECODE_0__(0x1c6)) / 0x6 * (-parseInt(__DECODE_0__(0x1c5)) / 0x7) + -parseInt(__DECODE_0__(0x1c9)) / 0x8 * (parseInt(__DECODE_0__(0x1c4)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1a696);
function __DECODE_0__(CsCulc, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1be;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CsCulc, key);
}
function __STRING_ARRAY__() {
  const _0x13e14d = ['37936KXUWvd', '556616gZbOUg', 'map', 'reduce', '173595lVkTbP', 'trim', '135399zmwdZJ', '1005705kpdchL', 'split', '/dev/stdin', '522NSsCOC', '7rRLwln', '1106994gzqmzg', '299776tFTiCU', 'utf8'];
  __STRING_ARRAY__ = function () {
    return _0x13e14d;
  };
  return __STRING_ARRAY__();
}
const main = input => {
  input = input[__DECODE_0__(0x1bf)]()[__DECODE_0__(0x1c2)]('\x0a');
  const K = parseInt(input[0x0][__DECODE_0__(0x1c2)]('\x20')[0x0]);
  const T = parseInt(input[0x0]['split']('\x20')[0x1]);
  let a = input[0x1]['split']('\x20')[__DECODE_0__(0x1cb)](el => {
    return parseInt(el);
  });
  let max = a[__DECODE_0__(0x1cc)](function (previous, current) {
    return previous > current ? previous : current;
  });
  if (max - 0x1 - (K - max) > 0x0) {
    console['log'](max - 0x1 - (K - max));
  } else {
    console['log'](0x0);
  }
};
main(require('fs')['readFileSync'](__DECODE_0__(0x1c3), __DECODE_0__(0x1c8)));
