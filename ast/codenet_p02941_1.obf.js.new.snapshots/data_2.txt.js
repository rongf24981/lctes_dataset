'use strict';

function __STRING_ARRAY__() {
  const _0x2a4c8d = ['max', 'log', '35988sXMjIh', '/dev/stdin', 'indexOf', 'split', '2240298VLjJDK', '47176wgqidq', '147InumRb', 'stringify', 'readFileSync', 'find', 'map', '6270HjVIlJ', '1049QEOCHC', '786WJvOXJ', '854eDeDPK', '4781136GDedUu', '5300nbwwUj', '2509010ggMOzC'];
  __STRING_ARRAY__ = function () {
    return _0x2a4c8d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xcd)) / 0x1 * (parseInt(__DECODE_0__(0xce)) / 0x2) + parseInt(__DECODE_0__(0xc7)) / 0x3 * (parseInt(__DECODE_0__(0xd5)) / 0x4) + -parseInt(__DECODE_0__(0xd2)) / 0x5 + parseInt(__DECODE_0__(0xd0)) / 0x6 + -parseInt(__DECODE_0__(0xcf)) / 0x7 * (parseInt(__DECODE_0__(0xda)) / 0x8) + -parseInt(__DECODE_0__(0xd9)) / 0x9 + -parseInt(__DECODE_0__(0xd1)) / 0xa * (-parseInt(__DECODE_0__(0xcc)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x75a74);
const arg_str = require('fs')[__DECODE_0__(0xc9)](__DECODE_0__(0xd6), 'UTF-8');
const args_lines = arg_str[__DECODE_0__(0xd8)]('\x0a');
const n = args_lines[0x0];
const a = args_lines[0x1][__DECODE_0__(0xd8)]('\x20')[__DECODE_0__(0xcb)](x => parseInt(x));
const b = args_lines[0x2][__DECODE_0__(0xd8)]('\x20')['map'](x => parseInt(x));
function __DECODE_0__(SeLPCQ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xc7;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SeLPCQ, key);
}
let cnt = 0x0;
let current_b = b;
while (!![]) {
  const max_index = current_b[__DECODE_0__(0xd7)](Math[__DECODE_0__(0xd3)](...current_b));
  if (max_index == 0x0) {
    current_b[max_index] = current_b[max_index] - current_b[0x1] - current_b[n - 0x1];
  } else {
    if (max_index == n - 0x1) {
      current_b[max_index] = current_b[max_index] - current_b[n - 0x2] - current_b[0x0];
    } else {
      current_b[max_index] = current_b[max_index] - current_b[max_index - 0x1] - current_b[max_index + 0x1];
    }
  }
  cnt++;
  if (JSON['stringify'](current_b) == JSON[__DECODE_0__(0xc8)](a)) {
    console[__DECODE_0__(0xd4)](cnt);
    break;
  }
  if (current_b[__DECODE_0__(0xca)](x => x < 0x1)) {
    console[__DECODE_0__(0xd4)](-0x1);
    break;
  }
}
