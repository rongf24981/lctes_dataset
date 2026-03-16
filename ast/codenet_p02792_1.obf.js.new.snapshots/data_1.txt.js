'use strict';

const a0_0x4faef1 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x276feb = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x276feb(0x78)) / 0x1 * (parseInt(_0x276feb(0x7a)) / 0x2) + parseInt(_0x276feb(0x7b)) / 0x3 * (-parseInt(_0x276feb(0x77)) / 0x4) + parseInt(_0x276feb(0x72)) / 0x5 * (parseInt(_0x276feb(0x80)) / 0x6) + parseInt(_0x276feb(0x7d)) / 0x7 * (parseInt(_0x276feb(0x76)) / 0x8) + -parseInt(_0x276feb(0x70)) / 0x9 * (parseInt(_0x276feb(0x6f)) / 0xa) + -parseInt(_0x276feb(0x7e)) / 0xb * (-parseInt(_0x276feb(0x7f)) / 0xc) + -parseInt(_0x276feb(0x74)) / 0xd;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6ce44);
function __STRING_ARRAY__() {
  const _0x19ece0 = ['920bzPwwK', '4oEDrig', '208486LQAYYF', 'utf8', '2BzpfmX', '721947WkFduI', 'split', '41377ePvqII', '11rYdlvs', '7354008kUuSnl', '6siqLXj', 'trim', '10jBEnSj', '2124189PRRGuW', 'length', '1871120RYzQDx', 'log', '12384047FViPDG', 'fill'];
  __STRING_ARRAY__ = function () {
    return _0x19ece0;
  };
  return __STRING_ARRAY__();
}
const main = arg => {
  const _0x556576 = __DECODE_0__;
  arg = arg[_0x556576(0x81)]()[_0x556576(0x7c)]('\x0a');
  const N = parseInt(arg[0x0]);
  const cnt = [];
  for (let i = 0x0; i < 0xa; i++) {
    cnt['push'](new Array(0xa)[_0x556576(0x75)](0x0));
  }
  for (let i = 0x1; i <= N; i++) {
    const S = String(i);
    const head = parseInt(S[0x0]);
    const tail = parseInt(S[S[_0x556576(0x71)] - 0x1]);
    cnt[head][tail]++;
  }
  let answer = 0x0;
  for (let i = 0x0; i < 0xa; i++) {
    for (let j = 0x0; j < 0xa; j++) {
      answer += cnt[i][j] * cnt[j][i];
    }
  }
  console[_0x556576(0x73)](answer);
};
function __DECODE_0__(entGUS, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x6f;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(entGUS, key);
}
main(require('fs')['readFileSync']('/dev/stdin', a0_0x4faef1(0x79)));
