'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1cIuHIW") / 1 * (parseInt("407788FmCNdS") / 2) + -parseInt("31821nYhWVC") / 3 * (parseInt("4BHCcTd") / 4) + parseInt("494375NYkJad") / 5 + parseInt("12CwSyJv") / 6 * (parseInt("1392615anWmkc") / 7) + -parseInt("1248112cXrjFp") / 8 * (parseInt("9TPTleH") / 9) + parseInt("807380zwnBvR") / 10 + parseInt("646965TxNCyA") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 265803);
function __STRING_ARRAY__() {
  const _0x53a869 = ["utf8", "4BHCcTd", "readFileSync", "map", "log", "filter", "/dev/stdin", "1cIuHIW", "9TPTleH", "31821nYhWVC", "trim", "1392615anWmkc", "494375NYkJad", "807380zwnBvR", "407788FmCNdS", "12CwSyJv", "1248112cXrjFp", "646965TxNCyA", "split", "length"];
  __STRING_ARRAY__ = function () {
    return _0x53a869;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(JtbEEO, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 115;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(JtbEEO, key);
}
function Main(input) {
  const tmp = input["trim"]().split("\n");
  const [H, W, M] = tmp.shift()["split"](" ")["map"](v => Number(v));
  const hw = tmp["map"](v => v.split(" ")["map"](v => Number(v)));
  let result = 0;
  for (let i = 1; i <= H; i++) {
    const harr = hw["filter"](v => v[0] !== i);
    const hlen = hw["length"] - harr["length"];
    for (let j = 1; j <= W; j++) {
      const warr = harr.filter(v => v[1] === j);
      if (result < hlen + warr["length"]) {
        result = hlen + warr["length"];
      }
    }
  }
  console["log"](result);
  return;
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
