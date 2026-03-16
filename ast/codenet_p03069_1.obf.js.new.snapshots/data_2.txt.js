(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x9b)) / 0x1 + -parseInt(__DECODE_0__(0x9f)) / 0x2 * (-parseInt(__DECODE_0__(0x9a)) / 0x3) + parseInt(__DECODE_0__(0xa0)) / 0x4 + parseInt(__DECODE_0__(0x9c)) / 0x5 * (-parseInt(__DECODE_0__(0xa1)) / 0x6) + parseInt(__DECODE_0__(0x9e)) / 0x7 + parseInt(__DECODE_0__(0xa2)) / 0x8 * (parseInt(__DECODE_0__(0x96)) / 0x9) + -parseInt(__DECODE_0__(0x99)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8ee72);
function __DECODE_0__(GGhDQS, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x95;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GGhDQS, key);
}
function __STRING_ARRAY__() {
  const _0x4f842e = ['utf-8', 'log', '3411pwovke', '/dev/stdin', 'split', '15672790FxDvQk', '21unRImb', '940048fCrmZX', '513065QwFCbF', 'readFileSync', '2942282LmxGfg', '105052YHIsxB', '1976772HVrXRw', '6DNjBLQ', '696NGjlvl'];
  __STRING_ARRAY__ = function () {
    return _0x4f842e;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  'use strict';

  const elements = input[__DECODE_0__(0x98)]('\x0a');
  let blackFlag = ![];
  let numBlack = 0x0;
  let numWhiteAfterBlack = 0x0;
  for (let i = 0x0; i < elements[0x0]; i++) {
    if (blackFlag === ![] && elements[0x1][i] === '#') {
      blackFlag = !![];
    }
    if (blackFlag === !![] && elements[0x1][i] === '.') {
      numWhiteAfterBlack++;
    }
    if (elements[0x1][i] === '#') {
      numBlack++;
    }
  }
  if (numWhiteAfterBlack === 0x0 && blackFlag === ![]) {
    console[__DECODE_0__(0x95)]('0');
  } else {
    if (numWhiteAfterBlack === 0x0 && blackFlag === !![]) {
      console['log'](numBlack);
    } else {
      if (numBlack <= numWhiteAfterBlack) {
        console[__DECODE_0__(0x95)](numBlack);
      } else {
        console[__DECODE_0__(0x95)](numWhiteAfterBlack);
      }
    }
  }
}
Main(require('fs')[__DECODE_0__(0x9d)](__DECODE_0__(0x97), __DECODE_0__(0xa3)));
