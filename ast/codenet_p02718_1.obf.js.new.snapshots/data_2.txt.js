'use strict';

function __STRING_ARRAY__() {
  const _0x19495c = ['20FMvvnv', '222165BhlCUE', '12784bpgACr', '1679325BhKKyF', 'split', '33lsPzMd', 'utf8', '/dev/stdin', 'log', '1280052HVeKPd', '751770CTXSrh', '52145QdzaRk', '1092wWleSM', 'Yes', '3453560PnEMxN', '6tcyxZk'];
  __STRING_ARRAY__ = function () {
    return _0x19495c;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x102)) / 0x1 * (parseInt(__DECODE_0__(0x106)) / 0x2) + -parseInt(__DECODE_0__(0x108)) / 0x3 * (parseInt(__DECODE_0__(0x107)) / 0x4) + -parseInt(__DECODE_0__(0x10a)) / 0x5 + -parseInt(__DECODE_0__(0x101)) / 0x6 + parseInt(__DECODE_0__(0x103)) / 0x7 * (-parseInt(__DECODE_0__(0x109)) / 0x8) + parseInt(__DECODE_0__(0x100)) / 0x9 + parseInt(__DECODE_0__(0x105)) / 0xa * (parseInt(__DECODE_0__(0x10c)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3e038);
function __DECODE_0__(CuVVYa, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x100;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CuVVYa, key);
}
function main(input) {
  const n = Number(input[__DECODE_0__(0x10b)]('\x0a')[0x0]['split']('\x20')[0x0]);
  const m = Number(input[__DECODE_0__(0x10b)]('\x0a')[0x0][__DECODE_0__(0x10b)]('\x20')[0x1]);
  let a = [];
  let sum = 0x0;
  for (let index = 0x0; index < n; index++) {
    a[index] = input[__DECODE_0__(0x10b)]('\x0a')[0x1][__DECODE_0__(0x10b)]('\x20')[index];
    sum += Number(a[index]);
  }
  let count = 0x0;
  for (let index = 0x0; index < n; index++) {
    if (a[index] * (0x4 * m) - sum > 0x0) {
      count++;
    }
  }
  if (count >= m) {
    console[__DECODE_0__(0x10f)](__DECODE_0__(0x104));
  } else {
    console[__DECODE_0__(0x10f)]('No');
  }
}
main(require('fs')['readFileSync'](__DECODE_0__(0x10e), __DECODE_0__(0x10d)));
