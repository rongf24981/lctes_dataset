'use strict';

function __STRING_ARRAY__() {
  const _0x4c1bf0 = ['2112150ZkogOa', '/dev/stdin', 'split', '72399iXguaA', '1262176bnFSGj', '90qINvkt', 'indexOf', '11144480mzXqwS', '102JftJMr', 'length', 'utf8', 'readFileSync', '212455tfpvMK', 'shift', 'trim', '409320mCAeFh', '968380AbYjtj', 'map', 'min', 'apply', '104zfzaKr'];
  __STRING_ARRAY__ = function () {
    return _0x4c1bf0;
  };
  return __STRING_ARRAY__();
}
const a0_0x4118ba = __DECODE_0__;
function __DECODE_0__(pFdqyT, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1b8;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(pFdqyT, key);
}
(function (stringArrayFunction, comparisonValue) {
  const _0x1cbf14 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x1cbf14(0x1c3)) / 0x1 + -parseInt(_0x1cbf14(0x1bc)) / 0x2 * (parseInt(_0x1cbf14(0x1cc)) / 0x3) + -parseInt(_0x1cbf14(0x1c8)) / 0x4 * (-parseInt(_0x1cbf14(0x1c0)) / 0x5) + parseInt(_0x1cbf14(0x1c9)) / 0x6 + -parseInt(_0x1cbf14(0x1c4)) / 0x7 + parseInt(_0x1cbf14(0x1b8)) / 0x8 * (parseInt(_0x1cbf14(0x1b9)) / 0x9) + -parseInt(_0x1cbf14(0x1bb)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xea704);
(function (input) {
  const _0x26b9b3 = __DECODE_0__;
  input = input[_0x26b9b3(0x1c2)]()[_0x26b9b3(0x1cb)](/\s+/)[_0x26b9b3(0x1c5)](x => x - 0x0);
  const N = input[_0x26b9b3(0x1c1)]();
  const a = input;
  var ans = 0x0;
  while (a[_0x26b9b3(0x1bd)] > 0x1) {
    let x = a['splice'](a[_0x26b9b3(0x1ba)](Math[_0x26b9b3(0x1c6)]['apply'](null, a)), 0x1)[0x0];
    let y = a['splice'](a[_0x26b9b3(0x1ba)](Math[_0x26b9b3(0x1c6)][_0x26b9b3(0x1c7)](null, a)), 0x1)[0x0];
    a['push'](x + y);
    ans += x + y;
  }
  console['log'](ans);
})(require('fs')[a0_0x4118ba(0x1bf)](a0_0x4118ba(0x1ca), a0_0x4118ba(0x1be)));
