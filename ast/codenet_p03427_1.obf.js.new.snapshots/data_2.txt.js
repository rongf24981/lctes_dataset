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
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x112)) / 0x1 * (-parseInt(__DECODE_0__(0x115)) / 0x2) + -parseInt(__DECODE_0__(0x108)) / 0x3 + parseInt(__DECODE_0__(0x10f)) / 0x4 + -parseInt(__DECODE_0__(0x114)) / 0x5 * (-parseInt(__DECODE_0__(0x10c)) / 0x6) + parseInt(__DECODE_0__(0x113)) / 0x7 * (parseInt(__DECODE_0__(0x10b)) / 0x8) + parseInt(__DECODE_0__(0x10e)) / 0x9 + -parseInt(__DECODE_0__(0x110)) / 0xa;
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
  const lines = input[__DECODE_0__(0x109)]('\x0a');
  if (lines[0x0]['length'] === 0x1) {
    console['log'](lines[0x0]);
    return;
  }
  const len9 = lines[0x0][__DECODE_0__(0x10a)] - 0x1;
  const head = parseInt(lines[0x0][0x0]) - 0x1;
  console[__DECODE_0__(0x111)](head + len9 * 0x9);
};
main(require('fs')[__DECODE_0__(0x116)]('/dev/stdin', __DECODE_0__(0x10d)));
