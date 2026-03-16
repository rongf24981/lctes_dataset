'use strict';

function __DECODE_0__(dRnQHL, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe0;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dRnQHL, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xea)) / 0x1 * (parseInt(__DECODE_0__(0xeb)) / 0x2) + parseInt(__DECODE_0__(0xe5)) / 0x3 + parseInt(__DECODE_0__(0xe6)) / 0x4 + -parseInt(__DECODE_0__(0xee)) / 0x5 * (parseInt(__DECODE_0__(0xe3)) / 0x6) + parseInt(__DECODE_0__(0xe1)) / 0x7 * (parseInt(__DECODE_0__(0xe9)) / 0x8) + parseInt(__DECODE_0__(0xe7)) / 0x9 + -parseInt(__DECODE_0__(0xec)) / 0xa * (parseInt(__DECODE_0__(0xe0)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1a8af);
function __STRING_ARRAY__() {
  const _0x40ffd7 = ['readFileSync', '10456XmVaUx', '194585MSgWtg', '2PElJtC', '128230fCfUpS', '/dev/stdin', '339095QYkNpa', '275OarFai', '308NYwXLr', 'utf8', '12YOymSJ', 'split', '322878SyFKup', '790636YHYjep', '67986FzrNJz'];
  __STRING_ARRAY__ = function () {
    return _0x40ffd7;
  };
  return __STRING_ARRAY__();
}
function main(s) {
  s = s[__DECODE_0__(0xe4)]('\x0a');
  const r = Number(s[0x0]);
  const g = Number(s[0x1]);
  let ans = g + (g - r);
  console['log'](ans);
}
main(require('fs')[__DECODE_0__(0xe8)](__DECODE_0__(0xed), __DECODE_0__(0xe2)));
