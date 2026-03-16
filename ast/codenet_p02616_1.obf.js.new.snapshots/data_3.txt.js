function __STRING_ARRAY__() {
  const _0x13ca58 = ["utf8", "27795UvNyEH", "357612FoGONC", "length", "pop", "map", "154107XOILMP", "sort", "6563670VRokSP", "split", "trim", "18085600MhoGqG", "slice", "3376884lbqWNF", "19256MMXpep", "96eWHTGE", "log", "1089JBcOdi", "30tzHFNY", "/dev/stdin", "reduce", "push"];
  __STRING_ARRAY__ = function () {
    return _0x13ca58;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(XPekHO, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 361;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XPekHO, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("154107XOILMP") / 1 + -parseInt("96eWHTGE") / 2 * (-parseInt("27795UvNyEH") / 3) + -parseInt("357612FoGONC") / 4 * (parseInt("30tzHFNY") / 5) + -parseInt("6563670VRokSP") / 6 + -parseInt("3376884lbqWNF") / 7 + -parseInt("19256MMXpep") / 8 * (-parseInt("1089JBcOdi") / 9) + parseInt("18085600MhoGqG") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 585859);
console["log"]((args => {
  const [[N, K], A] = args["trim"]()["split"]("\n")["map"](r => r.split(" ")["map"](v => v | 0));
  let Am = [];
  let Ap = [];
  for (let i = 0; i < N; i++) {
    if (A[i] > 0) {
      Ap["push"](A[i]);
    }
    if (A[i] < 0) {
      Am["push"](A[i]);
    }
  }
  const MOD = BigInt(1000000007);
  const mul = (a, b) => (BigInt(a) * BigInt(b) % MOD + MOD) % MOD;
  Am["sort"]((a, b) => a - b);
  Ap["sort"]((a, b) => b - a);
  if (Ap["length"] === 0 && K & 1) {
    return "" + Am["slice"](-K)["reduce"](mul, 1);
  }
  let om = 0;
  let op = 0;
  let ap = [];
  let am = [];
  for (let i = 0; i < K; i++) {
    if ((Ap[op] | 0) > -(Am[om] | 0)) {
      ap["push"](Ap[op]);
      op++;
    } else {
      am.push(Am[om]);
      om++;
    }
  }
  if (am["length"] & 1) {
    if ((Ap[op] | 0) > -(Am[om] | 0)) {
      ap["push"](Ap[op]);
      am["pop"]();
    } else {
      am["push"](Am[om]);
      ap["pop"]();
    }
  }
  return "" + mul(ap.reduce(mul, 1), am["reduce"](mul, 1));
})(require("fs").readFileSync("/dev/stdin", "utf8")));
