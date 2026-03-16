function __STRING_ARRAY__() {
  const _0x1ab575 = ["log", "28SbIqUO", "70134PwocJZ", "trim", "189NnJzjL", "32117049GuKEHb", "length", "812720AMnaJK", "7862288MSHSdb", "1284506ztZwrQ", "1465389VHDCtt", "/dev/stdin", "394996tJkEjN"];
  __STRING_ARRAY__ = function () {
    return _0x1ab575;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("394996tJkEjN") / 1 + -parseInt("1284506ztZwrQ") / 2 + parseInt("1465389VHDCtt") / 3 + -parseInt("28SbIqUO") / 4 * (parseInt("812720AMnaJK") / 5) + -parseInt("70134PwocJZ") / 6 * (parseInt("189NnJzjL") / 7) + -parseInt("7862288MSHSdb") / 8 + parseInt("32117049GuKEHb") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 583578);
function __DECODE_0__(vqPTqS, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 376;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vqPTqS, key);
}
console["log"]((args => {
  const s = args["trim"]();
  const L = s["length"];
  const p = Array(L).fill(0);
  for (let i = L; --i;) {
    p[i - 1] = p[i] + (s[i] === "p");
  }
  let g = 0;
  let w = 0;
  for (let i = 0; i < L; i++) {
    if (s[i] === "g") {
      if (g > p[i]) {
        g--;
        w++;
      } else {
        g++;
      }
    } else {
      g--;
    }
  }
  return "" + w;
})(require("fs").readFileSync("/dev/stdin", "utf8")));
