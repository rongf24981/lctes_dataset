const a0_0x4c433b = __DECODE_0__;
function __DECODE_0__(CFDNyx, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1be;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CFDNyx, key);
}
(function (stringArrayFunction, comparisonValue) {
  const _0x5393c0 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x5393c0(0x1cb)) / 0x1 + parseInt(_0x5393c0(0x1bf)) / 0x2 + -parseInt(_0x5393c0(0x1be)) / 0x3 * (-parseInt(_0x5393c0(0x1c3)) / 0x4) + -parseInt(_0x5393c0(0x1c4)) / 0x5 * (parseInt(_0x5393c0(0x1c0)) / 0x6) + -parseInt(_0x5393c0(0x1c7)) / 0x7 + -parseInt(_0x5393c0(0x1c5)) / 0x8 + parseInt(_0x5393c0(0x1c1)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe9297);
function Main(input) {
  const _0x2b220a = __DECODE_0__;
  const setting = input[_0x2b220a(0x1c2)]()[_0x2b220a(0x1ca)]('\x0a');
  const process_sum = setting[0x0] - 0x0;
  const up = setting[0x1]['split']('\x20');
  const down = setting[0x2][_0x2b220a(0x1ca)]('\x20');
  let answer = 0x0;
  for (let process_up = 0x0; process_up < process_sum; process_up++) {
    let process_down = process_sum - process_up - 0x1;
    let candies = 0x0;
    for (let i = 0x0; i <= process_up; i++) {
      candies += parseInt(up[i]);
    }
    for (let i = 0x0; i <= process_down; i++) {
      candies += parseInt(down[process_up + i]);
    }
    if (answer < candies) {
      answer = candies;
    }
  }
  console['log'](answer);
}
function __STRING_ARRAY__() {
  const _0x497ca5 = ['856584wfVJIY', 'trim', '2938888kziXPs', '281600TnvdAl', '6450296qcVQji', '/dev/stdin', '4732077TPfRrD', 'utf8', 'readFileSync', 'split', '376505LVSQEo', '6pHPtSf', '3399548hYoVrw', '48kANodA'];
  __STRING_ARRAY__ = function () {
    return _0x497ca5;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[a0_0x4c433b(0x1c9)](a0_0x4c433b(0x1c6), a0_0x4c433b(0x1c8)));
