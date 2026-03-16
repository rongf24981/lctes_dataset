'use strict';

const a0_0x40a837 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x538a65 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x538a65(0x8f)) / 0x1 * (parseInt(_0x538a65(0x9b)) / 0x2) + parseInt(_0x538a65(0x9a)) / 0x3 + -parseInt(_0x538a65(0x91)) / 0x4 * (parseInt(_0x538a65(0x97)) / 0x5) + -parseInt(_0x538a65(0x94)) / 0x6 + parseInt(_0x538a65(0x9c)) / 0x7 * (-parseInt(_0x538a65(0x96)) / 0x8) + -parseInt(_0x538a65(0x9d)) / 0x9 + parseInt(_0x538a65(0x90)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x26b35);
function __DECODE_0__(svxCzu, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x8f;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(svxCzu, key);
}
function __STRING_ARRAY__() {
  const _0x44a6a8 = ['5ZDTeGK', 'trim', 'slice', '934077MhYkxl', '4122saHkhL', '1141eXgeUI', '1773441WzlXYJ', 'fill', 'split', '40UCvFfA', '6112390VPAbZt', '1056500GEinDN', 'log', 'utf8', '626988jIQNaO', 'readFileSync', '13784FPgxag'];
  __STRING_ARRAY__ = function () {
    return _0x44a6a8;
  };
  return __STRING_ARRAY__();
}
const main = arg => {
  const _0x38fd87 = __DECODE_0__;
  arg = arg[_0x38fd87(0x98)]()['split']('\x0a');
  const N = parseInt(arg[0x0][_0x38fd87(0x9f)]('\x20')[0x0]);
  const M = parseInt(arg[0x0][_0x38fd87(0x9f)]('\x20')[0x1]);
  const dangers = arg[_0x38fd87(0x99)](0x1, M + 0x1);
  let answer = [...Array(N + 0x1)][_0x38fd87(0x9e)](0x1);
  let broken = -0x1;
  let NG = ![];
  for (let i in dangers) {
    if (broken + 0x1 === dangers[i]) {
      NG = !![];
    }
    answer[dangers[i]] = 0x0;
    broken = dangers[i];
  }
  for (let i = 0x2; i <= N; i++) {
    answer[i] = answer[i] * (answer[i - 0x2] + answer[i - 0x1]) % 0x3b9aca07;
  }
  console[_0x38fd87(0x92)](answer[N]);
};
main(require('fs')[a0_0x40a837(0x95)]('/dev/stdin', a0_0x40a837(0x93)));
