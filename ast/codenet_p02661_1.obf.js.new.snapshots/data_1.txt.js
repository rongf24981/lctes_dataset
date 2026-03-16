'use strict';

function __DECODE_0__(Gimxfk, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x16a;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Gimxfk, key);
}
const a0_0x378e92 = __DECODE_0__;
function __STRING_ARRAY__() {
  const _0x160c4f = ['204450Caxekx', 'split', 'utf8', 'log', 'sort', '3BCrynI', '3127240gjDSMP', 'toString', '2436168TFmbAN', '9340533LktNrt', '4447737vmwVUY', '8gjqxbu', '485714yxZwNO', 'shift', '2640388hQWIrV'];
  __STRING_ARRAY__ = function () {
    return _0x160c4f;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const _0x573d85 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x573d85(0x176)) / 0x1 + -parseInt(_0x573d85(0x16a)) / 0x2 + -parseInt(_0x573d85(0x16f)) / 0x3 * (parseInt(_0x573d85(0x178)) / 0x4) + parseInt(_0x573d85(0x170)) / 0x5 + parseInt(_0x573d85(0x172)) / 0x6 + parseInt(_0x573d85(0x174)) / 0x7 + parseInt(_0x573d85(0x175)) / 0x8 * (-parseInt(_0x573d85(0x173)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x560a6);
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x378e92(0x16c));
var cin = input['trim']()[a0_0x378e92(0x16b)](/ |\n/);
var cid = 0x0;
console[a0_0x378e92(0x16d)](main()[a0_0x378e92(0x171)]());
function main() {
  const _0x8c36c9 = a0_0x378e92;
  let n = +cin[_0x8c36c9(0x177)]();
  let a = Array(n);
  let b = Array(n);
  for (let i = 0x0; i < n; i++) {
    a[i] = +cin[_0x8c36c9(0x177)]();
    b[i] = +cin[_0x8c36c9(0x177)]();
  }
  a = a[_0x8c36c9(0x16e)]((x, y) => x - y);
  b = b[_0x8c36c9(0x16e)]((x, y) => x - y);
  let min;
  let max;
  if (n % 0x2 == 0x0) {
    if (a[n / 0x2 - 0x1] != a[n / 0x2]) {
      min = a[n / 0x2] - 0x1 / 0x2;
    } else {
      min = a[0x2 / n];
    }
    if (b[n / 0x2 - 0x1] != b[n / 0x2]) {
      max = b[n / 0x2 - 0x1] + 0x1 / 0x2;
    } else {
      max = b[n / 0x2 - 0x1];
    }
    return (max - min) * 0x2 + 0x1;
  } else {
    min = a[(n - 0x1) / 0x2];
    max = b[(n - 0x1) / 0x2];
    return max - min + 0x1;
  }
}
