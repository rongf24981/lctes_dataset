'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("47221JVnFGJ") / 1 + parseInt("385510BrIOxQ") / 2 + -parseInt("5433zegYjv") / 3 * (parseInt("92zkByBq") / 4) + parseInt("1370815frGeMa") / 5 + parseInt("367584nNbjwZ") / 6 + parseInt("1195516kLOcgf") / 7 + -parseInt("13408nYeoyN") / 8 * (parseInt("2979XHwiKw") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 149782);
function __DECODE_0__(YCGefG, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 136;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YCGefG, key);
}
const main = arg => {
  const input = arg["trim"]()["split"]("\n");
  const n = parseInt(input[0]);
  const arr = input[1]["split"](" ")["map"](n => parseInt(n));
  function cal(i, dst) {
    if (i === -1) {
      return 0;
    }
    const results = [];
    for (const j of dst) {
      const next_dst = dst["filter"](v => v !== j);
      const abs = i > j ? i - j : j - i;
      const val = arr[i] * abs + cal(i - 1, next_dst);
      results["push"](val);
    }
    return Math["max"](...results);
  }
  console.log(cal(n - 1, [...Array(n)["keys"]()]));
};
function __STRING_ARRAY__() {
  const _0x23e38a = ["keys", "push", "47221JVnFGJ", "readFileSync", "/dev/stdin", "utf8", "5433zegYjv", "385510BrIOxQ", "trim", "1195516kLOcgf", "map", "1370815frGeMa", "max", "92zkByBq", "13408nYeoyN", "filter", "split", "367584nNbjwZ", "2979XHwiKw"];
  __STRING_ARRAY__ = function () {
    return _0x23e38a;
  };
  return __STRING_ARRAY__();
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
