(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("247749bwzxnB") / 1 * (-parseInt("2ZnwoFz") / 2) + -parseInt("800688tuqzlG") / 3 + -parseInt("2399524xEKGci") / 4 * (parseInt("5ltNrZx") / 5) + -parseInt("3566586DtIRcw") / 6 * (parseInt("7iYGXQg") / 7) + -parseInt("531824VCoWGB") / 8 * (-parseInt("36HNgcDz") / 9) + parseInt("1895770WZBJJp") / 10 + parseInt("17160011xgvWCk") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 306533);
function __DECODE_0__(OHBIfk, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 265;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OHBIfk, key);
}
const Main = input => {
  const tmp = input["trim"]()["split"]("");
  let result = "";
  if (tmp["indexOf"]("7") === -1) {
    result = "No";
  } else {
    result = "Yes";
  }
  console["log"](result);
  return result;
};
function __STRING_ARRAY__() {
  const _0x4763ad = ["531824VCoWGB", "247749bwzxnB", "36HNgcDz", "utf8", "2399524xEKGci", "trim", "5ltNrZx", "2ZnwoFz", "3566586DtIRcw", "readFileSync", "7iYGXQg", "17160011xgvWCk", "log", "Yes", "split", "1895770WZBJJp", "800688tuqzlG", "indexOf"];
  __STRING_ARRAY__ = function () {
    return _0x4763ad;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
