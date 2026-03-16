'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1658813qHYgTH") / 1 * (-parseInt("2jZHVoD") / 2) + parseInt("3851316zZhjzz") / 3 + -parseInt("20uwDAes") / 4 * (parseInt("1467510IuzOWt") / 5) + -parseInt("1677666fWkabo") / 6 * (-parseInt("14waJHbo") / 7) + parseInt("8kcSCyI") / 8 * (-parseInt("10868589phSozJ") / 9) + parseInt("15748760KEEVko") / 10 + parseInt("19820130eIrHoB") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 885756);
function __STRING_ARRAY__() {
  const _0x1157ac = ["split", "length", "3851316zZhjzz", "1467510IuzOWt", "15748760KEEVko", "2jZHVoD", "8kcSCyI", "utf8", "map", "19820130eIrHoB", "slice", "1658813qHYgTH", "10868589phSozJ", "14waJHbo", "concat", "trim", "20uwDAes", "log", "join", "pop", "1677666fWkabo"];
  __STRING_ARRAY__ = function () {
    return _0x1157ac;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  const tmp = input["trim"]()["split"]("\n")["map"](v => v["split"](" ").map(v => parseFloat(v)));
  const n = tmp[0][0];
  const q = tmp[0][1];
  const edges = tmp["slice"](1, n);
  const actions = tmp["slice"](n, n + q);
  const nodes = [...new Array(n + 1)].map(v => []);
  for (let i = 0; i < n - 1; i++) {
    const p = edges[i][0];
    nodes[p].push(edges[i][1]);
  }
  const ans = [...new Array(n + 1)]["map"](v => 0);
  for (let i = 0; i < q; i++) {
    const act = actions[i];
    const cnt = act[1];
    ans[act[0]] += cnt;
    let stack = [...nodes[act[0]]];
    while (stack["length"] > 0) {
      const t = stack["pop"]();
      ans[t] += cnt;
      stack = stack["concat"](nodes[t]);
    }
  }
  console["log"](ans["slice"](1)["join"](" "));
}
function __DECODE_0__(ssnGaD, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 467;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ssnGaD, key);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
