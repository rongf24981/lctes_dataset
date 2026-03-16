function __DECODE_0__(etCnRs, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 118;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(etCnRs, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("484535FYCXBp") / 1 + parseInt("829564hsmnRN") / 2 + -parseInt("1335789ecZCVM") / 3 + parseInt("658284ITVAyJ") / 4 + -parseInt("5AEokbI") / 5 * (parseInt("23988dPXfgr") / 6) + parseInt("2977450MLlHpV") / 7 + parseInt("3163168BSDWJV") / 8 * (-parseInt("18WezSYO") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 249185);
function Main(input) {
  input = input["trim"]().split("\n")["map"](function (x) {
    return x.split(" ");
  });
  let N = parseInt(input[0][0], 10);
  let v_h = input[1]["map"](e => parseInt(e, 10));
  let DP = [0, Math["abs"](v_h[1] - v_h[0])];
  let x1;
  let x2;
  for (let i = 2; i < N; i++) {
    x1 = DP[i - 2] + Math["abs"](v_h[i] - v_h[i - 2]);
    x2 = DP[i - 1] + Math["abs"](v_h[i] - v_h[i - 1]);
    DP["push"](Math.min(x1, x2));
  }
  console["log"](DP[N - 1]);
}
function __STRING_ARRAY__() {
  const _0x2226d2 = ["484535FYCXBp", "2977450MLlHpV", "log", "829564hsmnRN", "map", "3163168BSDWJV", "readFileSync", "23988dPXfgr", "1335789ecZCVM", "push", "abs", "18WezSYO", "5AEokbI", "658284ITVAyJ", "utf8", "trim", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x2226d2;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
