'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1433954hhPuXh") / 1 + -parseInt("1295242fZroYB") / 2 + parseInt("3cZhDow") / 3 * (parseInt("6087476XtazUi") / 4) + parseInt("5370965cHVdgl") / 5 * (parseInt("6HcIfmv") / 6) + -parseInt("553uXgDfp") / 7 * (-parseInt("18456ycQlgS") / 8) + parseInt("5667255QLbsiL") / 9 + -parseInt("34244250RNJCSc") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 769918);
const main = input => {
  const args = input["split"]("\n")["map"](arg => arg["split"](" "));
  const x = parseInt(args[0][0], 10);
  const y = parseInt(args[0][1], 10);
  const group1 = [1, 3, 5, 7, 8, 10, 12];
  const group2 = [4, 6, 9, 11];
  if (group1["includes"](x) && group1["includes"](y)) {
    console["log"]("Yes");
  } else if (group2.includes(x) && group2["includes"](y)) {
    console["log"]("Yes");
  } else {
    console["log"]("No");
  }
};
function __STRING_ARRAY__() {
  const _0x538637 = ["34244250RNJCSc", "utf8", "readFileSync", "/dev/stdin", "553uXgDfp", "6HcIfmv", "map", "log", "6087476XtazUi", "1433954hhPuXh", "3cZhDow", "split", "5370965cHVdgl", "includes", "18456ycQlgS", "1295242fZroYB", "5667255QLbsiL"];
  __STRING_ARRAY__ = function () {
    return _0x538637;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(VwkuRm, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 459;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VwkuRm, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
