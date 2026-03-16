'use strict';

function __DECODE_0__(ViAvEu, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1e6;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ViAvEu, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1f4)) / 0x1 * (parseInt(__DECODE_0__(0x1f3)) / 0x2) + -parseInt(__DECODE_0__(0x1ec)) / 0x3 + parseInt(__DECODE_0__(0x1eb)) / 0x4 + -parseInt(__DECODE_0__(0x1e7)) / 0x5 * (parseInt(__DECODE_0__(0x1ee)) / 0x6) + parseInt(__DECODE_0__(0x1f2)) / 0x7 * (parseInt(__DECODE_0__(0x1e9)) / 0x8) + -parseInt(__DECODE_0__(0x1ed)) / 0x9 + -parseInt(__DECODE_0__(0x1f0)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x218ce);
const main = input => {
  input = input[__DECODE_0__(0x1f6)]('\x0a');
  const N = parseInt(input[0x0][__DECODE_0__(0x1f6)]('\x20')[0x0]);
  const X = parseInt(input[0x0][__DECODE_0__(0x1f6)]('\x20')[0x1]);
  const arr = input[0x1][__DECODE_0__(0x1f6)]('\x20')[__DECODE_0__(0x1e8)](v => parseInt(v))[__DECODE_0__(0x1ea)]((a, b) => a - b);
  let mostNear = 0x174876e800;
  arr[__DECODE_0__(0x1ef)](v => {
    let dist = Math['abs'](X - v);
    if (dist < mostNear) {
      mostNear = dist;
    }
  });
  for (let i = mostNear; i >= 0x0; i--) {
    for (let v of arr) {
      let diff = Math[__DECODE_0__(0x1e6)](v - X);
      if (diff % mostNear !== 0x0) {
        break;
      }
      console[__DECODE_0__(0x1f5)](i);
      return;
    }
  }
};
function __STRING_ARRAY__() {
  const _0x1763ef = ['315tYUjEs', '6hMtDUr', '24177zOerqJ', 'log', 'split', '/dev/stdin', 'abs', '3635HGSvCj', 'map', '21200TMzHQk', 'sort', '374184XYktXS', '42648bXLeZO', '104733IgSBgw', '414CkrZfc', 'forEach', '718890HErcsG', 'utf-8'];
  __STRING_ARRAY__ = function () {
    return _0x1763ef;
  };
  return __STRING_ARRAY__();
}
main(require('fs')['readFileSync'](__DECODE_0__(0x1f7), __DECODE_0__(0x1f1)));
