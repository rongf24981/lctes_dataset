'use strict';

const a0_0x67bc5c = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x550364 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x550364(0x1ee)) / 0x1 * (parseInt(_0x550364(0x1e1)) / 0x2) + parseInt(_0x550364(0x1ef)) / 0x3 * (-parseInt(_0x550364(0x1e9)) / 0x4) + -parseInt(_0x550364(0x1ea)) / 0x5 * (parseInt(_0x550364(0x1e3)) / 0x6) + parseInt(_0x550364(0x1e5)) / 0x7 * (parseInt(_0x550364(0x1ed)) / 0x8) + -parseInt(_0x550364(0x1ec)) / 0x9 * (-parseInt(_0x550364(0x1f1)) / 0xa) + -parseInt(_0x550364(0x1f3)) / 0xb * (-parseInt(_0x550364(0x1df)) / 0xc) + -parseInt(_0x550364(0x1e4)) / 0xd;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x87661);
const main = arg => {
  const _0x10813 = __DECODE_0__;
  arg = arg[_0x10813(0x1e7)]()[_0x10813(0x1e2)]('\x0a');
  const N = parseInt(arg[0x0]);
  const A = arg[0x1][_0x10813(0x1e2)]('\x20')[_0x10813(0x1e8)](n => parseInt(n))[_0x10813(0x1f2)]((a, b) => a - b);
  let pairNums = [];
  for (let i in A) {
    if (A[i] === A[parseInt(i) + 0x1]) {
      pairNums[_0x10813(0x1eb)](A[i]);
    }
  }
  pairNums[_0x10813(0x1f2)]((a, b) => b - a);
  const set = new Set(pairNums);
  console[_0x10813(0x1f0)](pairNums['length'] ? [...set][0x0] * [...set][0x1] : 0x0);
};
main(require('fs')[a0_0x67bc5c(0x1e0)](a0_0x67bc5c(0x1e6), 'utf8'));
function __DECODE_0__(NJsyzP, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1df;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NJsyzP, key);
}
function __STRING_ARRAY__() {
  const _0x5a60cf = ['214254GATCRS', '39nhUIoh', 'log', '15920zBVHKj', 'sort', '11jPkKNL', '389616iKMbVa', 'readFileSync', '2LhEKgk', 'split', '6dnbyGQ', '2006537pMTWjM', '313579pYgErW', '/dev/stdin', 'trim', 'map', '210836MNChDN', '3625310ojuctS', 'push', '4761vWvuet', '184qpNZGY'];
  __STRING_ARRAY__ = function () {
    return _0x5a60cf;
  };
  return __STRING_ARRAY__();
}
