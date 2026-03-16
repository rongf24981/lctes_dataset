function __STRING_ARRAY__() {
  const _0x4abf73 = ["split", "4941906MMuQcI", "map", "3SvVsml", "sort", "log", "110451yiQVTA", "5bnEcgK", "30IhnsbQ", "380112vGEBdg", "1033749UHezsT", "/dev/stdin", "140bBIgBh", "827758VxSqjf", "14099734OZKmtv", "trim", "readFileSync", "3846140WwqyXs"];
  __STRING_ARRAY__ = function () {
    return _0x4abf73;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(vHraUV, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 381;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vHraUV, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("110451yiQVTA") / 1 + parseInt("827758VxSqjf") / 2 + -parseInt("3SvVsml") / 3 * (parseInt("3846140WwqyXs") / 4) + -parseInt("5bnEcgK") / 5 * (parseInt("4941906MMuQcI") / 6) + -parseInt("140bBIgBh") / 7 * (-parseInt("380112vGEBdg") / 8) + -parseInt("1033749UHezsT") / 9 * (parseInt("30IhnsbQ") / 10) + parseInt("14099734OZKmtv") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 626635);
console["log"]((args => {
  const [[N], A] = args["trim"]()["split"]("\n")["map"](r => r["split"](" ").map(v => v | 0));
  A["sort"]((a, b) => a - b);
  let sum = A[0];
  let n = 0;
  for (let i = 1; i < N; i++) {
    if (sum * 2 >= A[i]) {
      n++;
    } else {
      n = 0;
    }
    if (sum + A[i] >= 1000000000) {
      return "" + (n + N - i);
    }
    sum = sum + A[i];
  }
  return "" + (n + 1);
})(require("fs")["readFileSync"]("/dev/stdin", "utf8")));
