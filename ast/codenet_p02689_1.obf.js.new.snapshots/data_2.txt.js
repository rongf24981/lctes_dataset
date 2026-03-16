'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xfe)) / 0x1 + parseInt(__DECODE_0__(0x106)) / 0x2 + -parseInt(__DECODE_0__(0x107)) / 0x3 * (-parseInt(__DECODE_0__(0xf9)) / 0x4) + parseInt(__DECODE_0__(0xff)) / 0x5 * (parseInt(__DECODE_0__(0x104)) / 0x6) + parseInt(__DECODE_0__(0x103)) / 0x7 * (parseInt(__DECODE_0__(0x105)) / 0x8) + parseInt(__DECODE_0__(0x102)) / 0x9 * (parseInt(__DECODE_0__(0x10c)) / 0xa) + parseInt(__DECODE_0__(0x101)) / 0xb * (-parseInt(__DECODE_0__(0x10a)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x248e3);
function __STRING_ARRAY__() {
  const _0x4a17a5 = ['204PixaFA', 'push', 'length', '/dev/stdin', 'map', '121715yBALTb', '15SCJeBi', 'forEach', '6578429dtibRG', '171KcvGja', '1654121fFWSPx', '348276rLytmX', '8lVNYwZ', '6960zQTAeE', '2955QZhQRL', 'shift', 'split', '12alrmwh', 'utf8', '85210ZTjvnz', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x4a17a5;
  };
  return __STRING_ARRAY__();
}
const inputs = require('fs')['readFileSync'](__DECODE_0__(0xfc), __DECODE_0__(0x10b))[__DECODE_0__(0x109)]('\x0a');
inputs[__DECODE_0__(0x108)]();
const heights = inputs[__DECODE_0__(0x108)]()[__DECODE_0__(0x109)]('\x20')[__DECODE_0__(0xfd)](v => parseInt(v, 0xa));
const towers = new Array(heights[__DECODE_0__(0xfb)])['fill']()[__DECODE_0__(0xfd)](_ => new Array());
inputs[__DECODE_0__(0x100)](v => {
  const splited = v[__DECODE_0__(0x109)]('\x20')['map'](w => parseInt(w, 0xa) - 0x1);
  towers[splited[0x0]][__DECODE_0__(0xfa)](splited[0x1]);
  towers[splited[0x1]][__DECODE_0__(0xfa)](splited[0x0]);
});
let result = 0x0;
function __DECODE_0__(lAXnqe, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xf9;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(lAXnqe, key);
}
towers[__DECODE_0__(0x100)]((t, i) => {
  let good = !![];
  if (t[__DECODE_0__(0xfb)]) {
    t['forEach'](t2 => {
      if (heights[i] <= heights[t2]) {
        good = ![];
      }
    });
  }
  if (good) {
    ++result;
  }
});
console[__DECODE_0__(0x10d)](result);
