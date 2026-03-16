'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("729600HmWVvK") / 1 + -parseInt("195326JVjSlW") / 2 * (parseInt("24AGfwZg") / 3) + -parseInt("3777140mJEaAo") / 4 + -parseInt("2881530UBrbiU") / 5 + parseInt("8437494ZXisTM") / 6 + -parseInt("63aZOLXK") / 7 * (parseInt("1254256YUAKTL") / 8) + -parseInt("9nhkzKV") / 9 * (-parseInt("38034040wnGgzx") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 767120);
function __STRING_ARRAY__() {
  const _0x867c61 = ["63aZOLXK", "split", "abs", "1254256YUAKTL", "log", "readFileSync", "195326JVjSlW", "trim", "8437494ZXisTM", "shift", "sort", "9nhkzKV", "38034040wnGgzx", "map", "729600HmWVvK", "utf8", "min", "2881530UBrbiU", "24AGfwZg", "/dev/stdin", "3777140mJEaAo", "pow"];
  __STRING_ARRAY__ = function () {
    return _0x867c61;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(RPWssH, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 326;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RPWssH, key);
}
function main(input) {
  input = input["trim"]()["split"]("\n");
  let ABC = input["shift"]()["split"](" ")["map"](v => Number(v));
  const N = ABC["shift"]();
  input = input["map"](v => Number(v))["sort"]((a, b) => b - a);
  const INF = Math["pow"](10, 9);
  const dfs = (cur, a, b, c) => {
    if (cur === N) {
      if (Math["min"](a, b, c) > 0) {
        return Math.abs(a - ABC[0]) + Math["abs"](b - ABC[1]) + Math["abs"](c - ABC[2]) - 30;
      }
      return INF;
    }
    return Math["min"](dfs(cur + 1, a, b, c), dfs(cur + 1, a + input[cur], b, c) + 10, dfs(cur + 1, a, b + input[cur], c) + 10, dfs(cur + 1, a, b, c + input[cur]) + 10);
  };
  console["log"](dfs(0, 0, 0, 0));
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
