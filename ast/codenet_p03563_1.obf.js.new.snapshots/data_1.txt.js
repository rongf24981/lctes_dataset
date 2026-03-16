'use strict';

const a0_0x40623c = __DECODE_0__;
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
  const _0x25d714 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x25d714(0xea)) / 0x1 * (parseInt(_0x25d714(0xeb)) / 0x2) + parseInt(_0x25d714(0xe5)) / 0x3 + parseInt(_0x25d714(0xe6)) / 0x4 + -parseInt(_0x25d714(0xee)) / 0x5 * (parseInt(_0x25d714(0xe3)) / 0x6) + parseInt(_0x25d714(0xe1)) / 0x7 * (parseInt(_0x25d714(0xe9)) / 0x8) + parseInt(_0x25d714(0xe7)) / 0x9 + -parseInt(_0x25d714(0xec)) / 0xa * (parseInt(_0x25d714(0xe0)) / 0xb);
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
  const _0x87b546 = __DECODE_0__;
  s = s[_0x87b546(0xe4)]('\x0a');
  const r = Number(s[0x0]);
  const g = Number(s[0x1]);
  let ans = g + (g - r);
  console['log'](ans);
}
main(require('fs')[a0_0x40623c(0xe8)](a0_0x40623c(0xed), a0_0x40623c(0xe2)));
