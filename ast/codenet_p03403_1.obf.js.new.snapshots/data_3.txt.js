function __STRING_ARRAY__() {
  const _0x595325 = ["log", "split", "7212TDBYvZ", "push", "7551236NHFgLS", "15Gwzzzl", "map", "readFileSync", "228zosxWZ", "join", "2634205XGlyzw", "4306761HbuPVh", "utf8", "1581654dnHelg", "763651yIaVme", "/dev/stdin", "2ScCSTp", "abs", "35636424iNDbzR", "10AojDGx", "8VqomhK"];
  __STRING_ARRAY__ = function () {
    return _0x595325;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("763651yIaVme") / 1 * (-parseInt("2ScCSTp") / 2) + -parseInt("7212TDBYvZ") / 3 * (parseInt("228zosxWZ") / 4) + parseInt("15Gwzzzl") / 5 * (-parseInt("1581654dnHelg") / 6) + parseInt("2634205XGlyzw") / 7 + -parseInt("8VqomhK") / 8 * (parseInt("4306761HbuPVh") / 9) + parseInt("10AojDGx") / 10 * (-parseInt("7551236NHFgLS") / 11) + parseInt("35636424iNDbzR") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 489506);
function __DECODE_0__(PdiqWK, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 329;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PdiqWK, key);
}
console["log"]((args => {
  const [[N], A] = args.trim()["split"]("\n")["map"](r => r["split"](" ")["map"](v => v | 0));
  let C = Math["abs"](A[0]) + Math.abs(A[N - 1]);
  for (let i = 1; i < N; i++) {
    C += Math.abs(A[i] - A[i - 1]);
  }
  const c = [C - Math.abs(A[0]) - Math.abs(A[1] - A[0]) + Math["abs"](A[1])];
  for (let i = 1; i < N - 1; i++) {
    c["push"](C - Math["abs"](A[i + 1] - A[i]) - Math["abs"](A[i] - A[i - 1]) + Math.abs(A[i + 1] - A[i - 1]));
  }
  c["push"](C - Math["abs"](A[N - 1]) - Math.abs(A[N - 2] - A[N - 1]) + Math["abs"](A[N - 2]));
  return c["join"]`\n`;
})(require("fs")["readFileSync"]("/dev/stdin", "utf8")));
