function __DECODE_0__(PltiIN, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 220;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PltiIN, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("561443DxJVCk") / 1 + -parseInt("231286CatpzM") / 2 * (-parseInt("12cfvGFF") / 3) + parseInt("12rzSaUO") / 4 * (parseInt("907355EYVjqo") / 5) + -parseInt("6PIyopC") / 6 * (-parseInt("1889713KkSBkt") / 7) + -parseInt("457544jkhknx") / 8 * (parseInt("9vXidCi") / 9) + -parseInt("6240wgQjOL") / 10 * (-parseInt("7524mGoNJH") / 11) + -parseInt("12TPotnC") / 12 * (parseInt("24006853JnypmU") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 361329);
function __STRING_ARRAY__() {
  const _0x2ba2f7 = ["6240wgQjOL", "9vXidCi", "12cfvGFF", "readFileSync", "1889713KkSBkt", "split", "log", "map", "24006853JnypmU", "trim", "6PIyopC", "sort", "561443DxJVCk", "457544jkhknx", "7524mGoNJH", "231286CatpzM", "907355EYVjqo", "12TPotnC", "12rzSaUO"];
  __STRING_ARRAY__ = function () {
    return _0x2ba2f7;
  };
  return __STRING_ARRAY__();
}
console["log"]((args => {
  const [[N, T], t] = args["trim"]()["split"]`\n`.map(r => r["split"]` `["map"](v => v | 0));
  t["sort"]((a, b) => a - b);
  let s = T;
  for (let i = 1; i < N; i++) {
    if (t[i - 1] + T > t[i]) {
      s += t[i] - t[i - 1];
    } else {
      s += T;
    }
  }
  return "" + s;
})(require("fs")["readFileSync"]("/dev/stdin", "utf8")));
