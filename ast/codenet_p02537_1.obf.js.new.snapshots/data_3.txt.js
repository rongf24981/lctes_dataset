function __STRING_ARRAY__() {
  const _0xce1934 = ["push", "1265600mgLmdJ", "4253979gVMbbW", "length", "slice", "map", "8rlDENl", "8266460CnHyMo", "1418210TpHBby", "5PLeoMj", "839506uWVXKR", "11478195ZwOBLA", "4dEHbZu", "utf8", "split", "8625588bgxbqx", "abs", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0xce1934;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("839506uWVXKR") / 1 + parseInt("1418210TpHBby") / 2 + parseInt("4253979gVMbbW") / 3 * (-parseInt("4dEHbZu") / 4) + parseInt("5PLeoMj") / 5 * (-parseInt("8625588bgxbqx") / 6) + parseInt("1265600mgLmdJ") / 7 + parseInt("8rlDENl") / 8 * (parseInt("11478195ZwOBLA") / 9) + parseInt("8266460CnHyMo") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 975821);
function __DECODE_0__(iPTUXs, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 141;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iPTUXs, key);
}
const main = arg => {
  const [N, K] = arg["split"]("\n")[0]["split"](" ")["map"](Number);
  arg = arg["split"]("\n")["slice"](1);
  const a = arg.map(Number);
  let b = [];
  b["push"](a[0]);
  for (let i = 1; i < N; i++) {
    if (Math["abs"](a[i] - b[b["length"] - 1]) <= K) {
      b["push"](a[i]);
    }
  }
  console.log(b["length"]);
};
main(require("fs").readFileSync("/dev/stdin", "utf8"));
