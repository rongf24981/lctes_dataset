'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("7507DmYlJr") / 1 * (-parseInt("158KXWmNe") / 2) + -parseInt("3SRQBBb") / 3 * (parseInt("3196072cENiLY") / 4) + -parseInt("3966015JgtCIA") / 5 + parseInt("16950dIxdAq") / 6 * (parseInt("1141lgjERy") / 7) + -parseInt("5672VASNOh") / 8 * (parseInt("4923VtzISL") / 9) + -parseInt("2518060qLJDvZ") / 10 + parseInt("31674269nkRMBn") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 515051);
function __STRING_ARRAY__() {
  const _0x4aa706 = ["4923VtzISL", "16950dIxdAq", "5672VASNOh", "158KXWmNe", "readFileSync", "31674269nkRMBn", "split", "3SRQBBb", "1141lgjERy", "2518060qLJDvZ", "/dev/stdin", "3966015JgtCIA", "7507DmYlJr", "trim", "3196072cENiLY", "log"];
  __STRING_ARRAY__ = function () {
    return _0x4aa706;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(dlGXKj, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 443;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dlGXKj, key);
}
const main = arg => {
  arg = arg["trim"]()["split"]("\n");
  const N = ~~arg[0];
  const S = arg.slice(1, N + 1).map(n => ~~n);
  let now = 1;
  let cnt = 0;
  while (now !== 2) {
    now = S[now - 1];
    cnt++;
    if (cnt > N) {
      console.log(-1);
      return;
    }
  }
  console["log"](cnt);
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
