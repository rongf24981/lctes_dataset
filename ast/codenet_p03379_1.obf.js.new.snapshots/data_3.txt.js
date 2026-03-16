function __DECODE_0__(puqpTU, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 135;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(puqpTU, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("5lLDrUn") / 1 * (parseInt("162026sOgUaj") / 2) + -parseInt("97365pNUZli") / 3 * (-parseInt("100KjmUja") / 4) + parseInt("2878760pkRkBK") / 5 * (parseInt("6IftfIH") / 6) + parseInt("770392WDJBsF") / 7 + parseInt("2248288zgUQPZ") / 8 + parseInt("793656UjTBHz") / 9 + -parseInt("18428080tPVkSJ") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 428660);
function __STRING_ARRAY__() {
  const _0xce1b24 = ["162026sOgUaj", "2248288zgUQPZ", "readFileSync", "trim", "793656UjTBHz", "log", "100KjmUja", "97365pNUZli", "18428080tPVkSJ", "770392WDJBsF", "split", "/dev/stdin", "map", "sort", "2878760pkRkBK", "5lLDrUn", "concat", "push", "utf8", "6IftfIH"];
  __STRING_ARRAY__ = function () {
    return _0xce1b24;
  };
  return __STRING_ARRAY__();
}
console["log"]((args => {
  const [[N], X] = args["trim"]()["split"]("\n").map(r => r.split(" ")["map"](v => v | 0));
  const _X = []["concat"](X)["sort"]((a, b) => a - b);
  const M1 = _X[N / 2 - 1];
  const M2 = _X[N / 2];
  const m = [];
  for (let i = 0; i < N; i++) {
    if (X[i] <= M1) {
      m.push(M2);
    } else {
      m["push"](M1);
    }
  }
  return m.join`\n`;
})(require("fs")["readFileSync"]("/dev/stdin", "utf8")));
