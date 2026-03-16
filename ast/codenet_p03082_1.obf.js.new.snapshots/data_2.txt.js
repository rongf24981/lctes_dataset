'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x14d)) / 0x1 + parseInt(__DECODE_0__(0x148)) / 0x2 + -parseInt(__DECODE_0__(0x150)) / 0x3 + -parseInt(__DECODE_0__(0x159)) / 0x4 + -parseInt(__DECODE_0__(0x152)) / 0x5 * (parseInt(__DECODE_0__(0x151)) / 0x6) + -parseInt(__DECODE_0__(0x14e)) / 0x7 + parseInt(__DECODE_0__(0x155)) / 0x8 * (parseInt(__DECODE_0__(0x14b)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1fc3e);
function __DECODE_0__(UabhYK, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x148;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UabhYK, key);
}
function __STRING_ARRAY__() {
  const _0x215822 = ['split', '279AuIXwY', 'fill', '19270uqKNLt', '1174789FWDSoQ', 'utf8', '124569rgMvdo', '42nmhcRg', '163245LMPClI', 'map', 'shift', '152552MoyzaN', 'sort', 'readFileSync', '/dev/stdin', '934932HgGjwS', '382654UcziVF', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x215822;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  let lines = input[__DECODE_0__(0x14a)]('\x0a');
  let NX = lines[__DECODE_0__(0x154)]()['trim']()[__DECODE_0__(0x14a)](/\s/)[__DECODE_0__(0x153)](v => v - 0x0);
  let n = NX[0x0];
  let x = NX[0x1];
  let S = lines['shift']()['trim']()['split'](/\s/)[__DECODE_0__(0x153)](v => v - 0x0);
  const MOD = 0x3b9aca00 + 0x7;
  const MAX_N = 0xd2;
  const MAX_VAL = 0x186a0 + 0xa;
  const add = (a, b) => (a + b) % MOD;
  const mul = (a, b) => a * b % MOD;
  let dp = new Array(MAX_N)[__DECODE_0__(0x14c)](0x0)['map'](() => new Array(MAX_VAL)[__DECODE_0__(0x14c)](-0x1));
  const rec = (pos, rem) => {
    if (pos == n) {
      return rem;
    }
    let ret = dp[pos][rem];
    if (ret != -0x1) {
      return ret;
    }
    ret = 0x0;
    dp[pos][rem] = add(ret, rec(pos + 0x1, rem % S[pos]));
    dp[pos][rem] = add(dp[pos][rem], mul(n - pos - 0x1, rec(pos + 0x1, rem)));
    return dp[pos][rem];
  };
  S[__DECODE_0__(0x156)]((a, b) => b - a);
  console[__DECODE_0__(0x149)](rec(0x0, x));
}
Main(require('fs')[__DECODE_0__(0x157)](__DECODE_0__(0x158), __DECODE_0__(0x14f)));
