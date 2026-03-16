function __STRING_ARRAY__() {
  const _0x1541de = ['log', '17562AGlssE', '3235830PJeqYp', '52457CScbCu', '37612QkRjtp', '4OXOMKz', '87JsZtAu', '130FctPCx', '119820SEkEOA', '352yLyBht', 'readFileSync', 'split', '/dev/stdin', '2733516ShiBVN', '16KFzSAh', 'Yes', '409213edkEea', '10hPkMun', 'length'];
  __STRING_ARRAY__ = function () {
    return _0x1541de;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(cqMdqz, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd8;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(cqMdqz, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xe1)) / 0x1 * (parseInt(__DECODE_0__(0xe3)) / 0x2) + -parseInt(__DECODE_0__(0xe4)) / 0x3 * (parseInt(__DECODE_0__(0xe2)) / 0x4) + -parseInt(__DECODE_0__(0xe5)) / 0x5 * (-parseInt(__DECODE_0__(0xdf)) / 0x6) + -parseInt(__DECODE_0__(0xdb)) / 0x7 * (parseInt(__DECODE_0__(0xd9)) / 0x8) + -parseInt(__DECODE_0__(0xd8)) / 0x9 * (-parseInt(__DECODE_0__(0xdc)) / 0xa) + -parseInt(__DECODE_0__(0xe7)) / 0xb * (-parseInt(__DECODE_0__(0xe6)) / 0xc) + -parseInt(__DECODE_0__(0xe0)) / 0xd;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x28771);
function Main(input) {
  let Red = 0x0;
  let Blue = 0x0;
  const input_line = input[__DECODE_0__(0xe9)]('\x0a');
  inputS = input_line[0x1][__DECODE_0__(0xe9)]('');
  for (i = 0x0; i < inputS[__DECODE_0__(0xdd)]; i++) {
    if (inputS[i] === 'R') {
      Red++;
    } else {
      Blue++;
    }
  }
  console[__DECODE_0__(0xde)](Red > Blue ? __DECODE_0__(0xda) : 'No');
}
Main(require('fs')[__DECODE_0__(0xe8)](__DECODE_0__(0xea), 'utf8'));
