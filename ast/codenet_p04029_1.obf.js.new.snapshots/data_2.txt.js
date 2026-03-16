function __DECODE_0__(jWqscI, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xf7;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jWqscI, key);
}
function __STRING_ARRAY__() {
  const _0x29b0c4 = ['readFileSync', '2410vpuzEv', '/dev/stdin', '9425133pJkXYE', '2416gtmPID', '28KpGdWL', '462238NJPHWC', 'log', '13288740sjDDLy', '1481214CrBSjn', '363954acHGrj', '6398888aLxxLQ', '14SOOnSW'];
  __STRING_ARRAY__ = function () {
    return _0x29b0c4;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xfd)) / 0x1 + parseInt(__DECODE_0__(0x103)) / 0x2 * (parseInt(__DECODE_0__(0x101)) / 0x3) + -parseInt(__DECODE_0__(0xfb)) / 0x4 * (parseInt(__DECODE_0__(0xf8)) / 0x5) + -parseInt(__DECODE_0__(0x100)) / 0x6 * (-parseInt(__DECODE_0__(0xfc)) / 0x7) + -parseInt(__DECODE_0__(0x102)) / 0x8 + -parseInt(__DECODE_0__(0xfa)) / 0x9 + parseInt(__DECODE_0__(0xff)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x89f78);
function main(input) {
  const n = parseInt(input, 0xa);
  let sum = 0x0;
  for (let i = 0x1; i <= n; i++) {
    sum += i;
  }
  console[__DECODE_0__(0xfe)](sum);
}
main(require('fs')[__DECODE_0__(0xf7)](__DECODE_0__(0xf9), 'utf8'));
