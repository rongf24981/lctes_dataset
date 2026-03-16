'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("166383aLhAdc") / 1 + parseInt("30106HGJvuG") / 2 * (-parseInt("3CBfcDn") / 3) + parseInt("1033960aPFVMf") / 4 + -parseInt("304320aMPOyh") / 5 + parseInt("217896DzgWON") / 6 + -parseInt("692090hUlaSY") / 7 + parseInt("1574184SGRjuh") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 150409);
function __DECODE_0__(kiMOoG, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 429;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(kiMOoG, key);
}
function __STRING_ARRAY__() {
  const _0x570d0e = ["304320aMPOyh", "692090hUlaSY", "217896DzgWON", "1574184SGRjuh", "166383aLhAdc", "utf8", "split", "3CBfcDn", "log", "/dev/stdin", "reduce", "30106HGJvuG", "map", "1033960aPFVMf"];
  __STRING_ARRAY__ = function () {
    return _0x570d0e;
  };
  return __STRING_ARRAY__();
}
const main = input => {
  let n = input[0]["split"]("");
  console["log"](n["map"](val => val == "9" ? "1" : "9")["reduce"]((acc, cur) => acc + cur));
};
main(require("fs").readFileSync("/dev/stdin", "utf8")["split"]("\n"));
