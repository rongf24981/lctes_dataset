'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x8f)) / 0x1 * (parseInt(__DECODE_0__(0x9b)) / 0x2) + parseInt(__DECODE_0__(0x9a)) / 0x3 + -parseInt(__DECODE_0__(0x91)) / 0x4 * (parseInt(__DECODE_0__(0x97)) / 0x5) + -parseInt(__DECODE_0__(0x94)) / 0x6 + parseInt(__DECODE_0__(0x9c)) / 0x7 * (-parseInt(__DECODE_0__(0x96)) / 0x8) + -parseInt(__DECODE_0__(0x9d)) / 0x9 + parseInt(__DECODE_0__(0x90)) / 0xa;
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
  arg = arg[__DECODE_0__(0x98)]()['split']('\x0a');
  const N = parseInt(arg[0x0][__DECODE_0__(0x9f)]('\x20')[0x0]);
  const M = parseInt(arg[0x0][__DECODE_0__(0x9f)]('\x20')[0x1]);
  const dangers = arg[__DECODE_0__(0x99)](0x1, M + 0x1);
  let answer = [...Array(N + 0x1)][__DECODE_0__(0x9e)](0x1);
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
  console[__DECODE_0__(0x92)](answer[N]);
};
main(require('fs')[__DECODE_0__(0x95)]('/dev/stdin', __DECODE_0__(0x93)));
