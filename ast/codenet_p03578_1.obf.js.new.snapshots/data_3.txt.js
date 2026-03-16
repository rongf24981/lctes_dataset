function __DECODE_0__(dHlNId, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 253;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dHlNId, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1325716uuScqM") / 1 + -parseInt("2fTPlpq") / 2 * (-parseInt("4451679ipLNQa") / 3) + -parseInt("4WhcOlk") / 4 * (parseInt("6416810zoerHu") / 5) + parseInt("12gykjUO") / 6 * (-parseInt("376117sfkqoM") / 7) + -parseInt("312104XAJBdJ") / 8 * (parseInt("315szxFru") / 9) + -parseInt("8401190edJGlD") / 10 + parseInt("93731tSaPiw") / 11 * (parseInt("2436FCYokk") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 942974);
console["log"]((args => {
  const [[N], D, [M], T] = args["trim"]()["split"]("\n")["map"](r => r.split(" ")["map"](v => v | 0));
  D["sort"]((a, b) => a - b);
  T.sort((a, b) => a - b);
  let j = -1;
  Q: for (let i = 0; i < M; i++) {
    while (++j < N) {
      if (D[j] > T[i]) {
        return "NO";
      }
      if (D[j] === T[i]) {
        continue Q;
      }
    }
    return "NO";
  }
  return "YES";
})(require("fs").readFileSync("/dev/stdin", "utf8")));
function __STRING_ARRAY__() {
  const _0x4b95e8 = ["4451679ipLNQa", "map", "12gykjUO", "trim", "sort", "8401190edJGlD", "93731tSaPiw", "6416810zoerHu", "376117sfkqoM", "1325716uuScqM", "/dev/stdin", "315szxFru", "312104XAJBdJ", "4WhcOlk", "split", "log", "2fTPlpq", "YES", "2436FCYokk"];
  __STRING_ARRAY__ = function () {
    return _0x4b95e8;
  };
  return __STRING_ARRAY__();
}
