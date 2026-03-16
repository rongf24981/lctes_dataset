'use strict';

function __DECODE_0__(nXCJgV, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xa5;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nXCJgV, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xab)) / 0x1 + parseInt(__DECODE_0__(0xa5)) / 0x2 + -parseInt(__DECODE_0__(0xb1)) / 0x3 + -parseInt(__DECODE_0__(0xb3)) / 0x4 * (-parseInt(__DECODE_0__(0xae)) / 0x5) + -parseInt(__DECODE_0__(0xb2)) / 0x6 + parseInt(__DECODE_0__(0xad)) / 0x7 * (-parseInt(__DECODE_0__(0xa9)) / 0x8) + parseInt(__DECODE_0__(0xaf)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7fe34);
const main = input => {
  input = input[__DECODE_0__(0xac)]('\x20')[__DECODE_0__(0xa8)](v => parseInt(v));
  const W = input[0x0];
  const a = input[0x1];
  const b = input[0x2];
  const aw = a + W;
  const bw = b + W;
  let arr = [];
  if (a <= b) {
    arr = [a, aw, b, bw];
  } else {
    arr = [b, bw, a, aw];
  }
  if (arr[0x1] < arr[0x2]) {
    console['log'](arr[0x2] - arr[0x1]);
  } else {
    console[__DECODE_0__(0xa6)](0x0);
  }
};
main(require('fs')[__DECODE_0__(0xa7)](__DECODE_0__(0xb0), __DECODE_0__(0xaa)));
function __STRING_ARRAY__() {
  const _0x370aeb = ['563395RQZNMk', '9364383WWljsy', '/dev/stdin', '501288SOTorD', '3474732STMMuC', '16FAgFxT', '1801250JcxMNr', 'log', 'readFileSync', 'map', '2084872EjtrNa', 'utf-8', '861173pKkcqS', 'split', '7IZQJML'];
  __STRING_ARRAY__ = function () {
    return _0x370aeb;
  };
  return __STRING_ARRAY__();
}
