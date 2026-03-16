'use strict';

function __STRING_ARRAY__() {
  const _0x57b980 = ['log', '7356330ZJqIlG', '291TuRRln', '69712ZxInFH', '3461919HhVdVB', '1141CHUVQV', 'floor', 'utf8', '/dev/stdin', '1322BqGWMM', '5142198qBXCnO', '20kXpQhm', '902612fDYwjy', '18190278Bghaiy', 'split', 'trim'];
  __STRING_ARRAY__ = function () {
    return _0x57b980;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x133)) / 0x1 * (parseInt(__DECODE_0__(0x12a)) / 0x2) + -parseInt(__DECODE_0__(0x135)) / 0x3 + -parseInt(__DECODE_0__(0x12d)) / 0x4 + -parseInt(__DECODE_0__(0x132)) / 0x5 + parseInt(__DECODE_0__(0x12b)) / 0x6 + -parseInt(__DECODE_0__(0x126)) / 0x7 * (parseInt(__DECODE_0__(0x134)) / 0x8) + -parseInt(__DECODE_0__(0x12e)) / 0x9 * (-parseInt(__DECODE_0__(0x12c)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc84aa);
const main = arg => {
  const input = arg[__DECODE_0__(0x130)]()[__DECODE_0__(0x12f)]('\x0a');
  let x = Number(input[0x0][__DECODE_0__(0x12f)]('\x20')[0x0]);
  if (x % 0xb > 0x6) {
    console[__DECODE_0__(0x131)](Math[__DECODE_0__(0x127)](x / 0xb) * 0x2 + 0x2);
  } else {
    if (x % 0xb > 0x0) {
      console[__DECODE_0__(0x131)](Math[__DECODE_0__(0x127)](x / 0xb) * 0x2 + 0x1);
    } else {
      console['log'](Math[__DECODE_0__(0x127)](x / 0xb) * 0x2);
    }
  }
};
function __DECODE_0__(xWgBtE, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x126;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xWgBtE, key);
}
main(require('fs')['readFileSync'](__DECODE_0__(0x129), __DECODE_0__(0x128)));
