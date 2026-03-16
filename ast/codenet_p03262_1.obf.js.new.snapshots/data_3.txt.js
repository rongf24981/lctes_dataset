'use strict';

function __DECODE_0__(ViAvEu, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 486;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ViAvEu, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("24177zOerqJ") / 1 * (parseInt("6hMtDUr") / 2) + -parseInt("42648bXLeZO") / 3 + parseInt("374184XYktXS") / 4 + -parseInt("3635HGSvCj") / 5 * (parseInt("414CkrZfc") / 6) + parseInt("315tYUjEs") / 7 * (parseInt("21200TMzHQk") / 8) + -parseInt("104733IgSBgw") / 9 + -parseInt("718890HErcsG") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 137422);
const main = input => {
  input = input["split"]("\n");
  const N = parseInt(input[0]["split"](" ")[0]);
  const X = parseInt(input[0]["split"](" ")[1]);
  const arr = input[1]["split"](" ")["map"](v => parseInt(v))["sort"]((a, b) => a - b);
  let mostNear = 100000000000;
  arr["forEach"](v => {
    let dist = Math.abs(X - v);
    if (dist < mostNear) {
      mostNear = dist;
    }
  });
  for (let i = mostNear; i >= 0; i--) {
    for (let v of arr) {
      let diff = Math["abs"](v - X);
      if (diff % mostNear !== 0) {
        break;
      }
      console["log"](i);
      return;
    }
  }
};
function __STRING_ARRAY__() {
  const _0x1763ef = ["315tYUjEs", "6hMtDUr", "24177zOerqJ", "log", "split", "/dev/stdin", "abs", "3635HGSvCj", "map", "21200TMzHQk", "sort", "374184XYktXS", "42648bXLeZO", "104733IgSBgw", "414CkrZfc", "forEach", "718890HErcsG", "utf-8"];
  __STRING_ARRAY__ = function () {
    return _0x1763ef;
  };
  return __STRING_ARRAY__();
}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));
