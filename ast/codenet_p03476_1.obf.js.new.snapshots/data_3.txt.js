function __DECODE_0__(OzKxpk, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 281;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OzKxpk, key);
}
function __STRING_ARRAY__() {
  const _0x1eff40 = ["split", "push", "32337tvoGXC", "21327174ijijEG", "/dev/stdin", "log", "trim", "fill", "join", "5lFaaQP", "11161696xQtJtw", "20vXVcNC", "9880884clajMF", "3252672Rlfffz", "1599711ZRPqxy", "readFileSync", "523914mbNfyu", "map"];
  __STRING_ARRAY__ = function () {
    return _0x1eff40;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1599711ZRPqxy") / 1 + -parseInt("523914mbNfyu") / 2 + -parseInt("32337tvoGXC") / 3 * (-parseInt("20vXVcNC") / 4) + -parseInt("5lFaaQP") / 5 * (parseInt("9880884clajMF") / 6) + parseInt("11161696xQtJtw") / 7 + parseInt("3252672Rlfffz") / 8 + parseInt("21327174ijijEG") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 916211);
console["log"](function (args) {
  const [[Q], ...tmp] = args["trim"]().split("\n")["map"](r => r["split"](" ").map(v => v | 0));
  const MAX = 100000;
  const a = Array(MAX)["fill"](true);
  const s = Array(MAX + 2)["fill"](0);
  a[0] = false;
  s[2] = 1;
  for (let i = 1; i < MAX; i++) {
    if (a[i]) {
      const n = i * 2 + 1;
      if (~i & 1 && a[i / 2]) {
        s[i + 1] += 1;
      }
      for (let j = i + n; j < MAX; j = j + n) {
        a[j] = false;
      }
    }
    s[i + 2] += s[i + 1];
  }
  const x = [];
  for (let i = 0; i < Q; i++) {
    const l = (tmp[i][0] - 1) / 2;
    const r = (tmp[i][1] - 1) / 2 + 1;
    x["push"](s[r] - s[l]);
  }
  return x["join"]("\n");
}(require("fs")["readFileSync"]("/dev/stdin", "utf8")));
