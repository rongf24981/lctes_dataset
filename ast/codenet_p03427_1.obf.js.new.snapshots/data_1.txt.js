'use strict';

function __DECODE_0__(VOApbZ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x108;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VOApbZ, key);
}
const a0_0x432b3d = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x54317b = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x54317b(0x112)) / 0x1 * (-parseInt(_0x54317b(0x115)) / 0x2) + -parseInt(_0x54317b(0x108)) / 0x3 + parseInt(_0x54317b(0x10f)) / 0x4 + -parseInt(_0x54317b(0x114)) / 0x5 * (-parseInt(_0x54317b(0x10c)) / 0x6) + parseInt(_0x54317b(0x113)) / 0x7 * (parseInt(_0x54317b(0x10b)) / 0x8) + parseInt(_0x54317b(0x10e)) / 0x9 + -parseInt(_0x54317b(0x110)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa8023);
function __STRING_ARRAY__() {
  const _0x2f110e = ['13966530LibIsw', 'log', '67NHRXFW', '112HHUgYU', '5SmVHhF', '8994BKnnHt', 'readFileSync', '3433332ujqzYx', 'split', 'length', '434792BMrMDq', '5184150TTxeWC', 'utf8', '3366891OyTGzk', '3281012JvoBtk'];
  __STRING_ARRAY__ = function () {
    return _0x2f110e;
  };
  return __STRING_ARRAY__();
}
const main = input => {
  const _0x3efa7d = __DECODE_0__;
  const lines = input[_0x3efa7d(0x109)]('\x0a');
  if (lines[0x0]['length'] === 0x1) {
    console['log'](lines[0x0]);
    return;
  }
  const len9 = lines[0x0][_0x3efa7d(0x10a)] - 0x1;
  const head = parseInt(lines[0x0][0x0]) - 0x1;
  console[_0x3efa7d(0x111)](head + len9 * 0x9);
};
main(require('fs')[a0_0x432b3d(0x116)]('/dev/stdin', a0_0x432b3d(0x10d)));
