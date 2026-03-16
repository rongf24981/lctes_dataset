'use strict';

function __DECODE_0__(LpEazQ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x19c;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LpEazQ, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1b3)) / 0x1 * (parseInt(__DECODE_0__(0x19e)) / 0x2) + -parseInt(__DECODE_0__(0x1b0)) / 0x3 + parseInt(__DECODE_0__(0x19d)) / 0x4 * (-parseInt(__DECODE_0__(0x1ac)) / 0x5) + -parseInt(__DECODE_0__(0x1a0)) / 0x6 * (-parseInt(__DECODE_0__(0x1a8)) / 0x7) + parseInt(__DECODE_0__(0x1ad)) / 0x8 * (-parseInt(__DECODE_0__(0x1a4)) / 0x9) + parseInt(__DECODE_0__(0x1b1)) / 0xa * (parseInt(__DECODE_0__(0x1a9)) / 0xb) + -parseInt(__DECODE_0__(0x1af)) / 0xc * (-parseInt(__DECODE_0__(0x1a1)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x25140);
function __STRING_ARRAY__() {
  const _0x8e447b = ['5VdGjwU', '456SuxUhn', 'toString', '5064nBVBcu', '782220LBlpbI', '17990sLyaxz', 'log', '5377AuCBIC', 'sort', 'reduce', '189844cfpxKA', '90lJxtDa', 'utf8', '1552314rnTgQa', '14521zGGwiT', 'length', '/dev/stdin', '22041YYKLQu', 'splice', 'filter', 'map', '7pNUHbv', '682YYqKSv', 'split', 'findIndex'];
  __STRING_ARRAY__ = function () {
    return _0x8e447b;
  };
  return __STRING_ARRAY__();
}
function getPair(num) {
  return parseInt(num[__DECODE_0__(0x1ae)](0x2)[__DECODE_0__(0x1aa)]('')[__DECODE_0__(0x1a7)](x => x === '1' ? '0' : '1')[__DECODE_0__(0x19c)]((acc, cur) => acc + cur, ''), 0x2) + 0x1;
}
function main(input) {
  const inputs = input['split']('\x0a')[__DECODE_0__(0x1a6)](x => x !== '');
  const A = inputs[0x1][__DECODE_0__(0x1aa)]('\x20')[__DECODE_0__(0x1a7)](Number);
  let sortedA = A[__DECODE_0__(0x1b4)]((a, b) => b - a);
  let count = 0x0;
  while (sortedA[__DECODE_0__(0x1a2)] > 0x0) {
    let i = sortedA[0x0];
    sortedA[__DECODE_0__(0x1a5)](0x0, 0x1);
    let j = getPair(i);
    let indexJ = sortedA[__DECODE_0__(0x1ab)](x => x === j);
    if (indexJ >= 0x0) {
      sortedA[__DECODE_0__(0x1a5)](indexJ, 0x1);
      count++;
    }
  }
  console[__DECODE_0__(0x1b2)](count);
}
main(require('fs')['readFileSync'](__DECODE_0__(0x1a3), __DECODE_0__(0x19f)));
