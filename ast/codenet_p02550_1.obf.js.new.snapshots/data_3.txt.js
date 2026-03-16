(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("226946nctVgW") / 1 + -parseInt("22090RgOZuM") / 2 + -parseInt("211215mdeqTj") / 3 * (-parseInt("20PBmWJB") / 4) + parseInt("289145xuuzFw") / 5 + parseInt("744456pvmgxU") / 6 * (parseInt("7BctaVd") / 7) + parseInt("1710056oIwDqn") / 8 * (parseInt("18AKbZEn") / 9) + -parseInt("5068170HGVSKB") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 216636);
const input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(WCrFTl, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 450;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WCrFTl, key);
}
const lines = input["split"]("\n");
const [N, X, M] = lines[0]["split"](" ")["map"](Number);
let a = X;
const map = {};
const loop = [];
const pre = [a];
for (let i = 1; i < N; i++) {
  a = a * a % M;
  if (map[a] === 2) {
    break;
  } else if (map[a]) {
    loop.push(a);
    pre["pop"]();
  } else {
    pre.push(a);
  }
  map[a] = (map[a] || 0) + 1;
}
function __STRING_ARRAY__() {
  const _0x36be30 = ["7BctaVd", "reduce", "length", "readFileSync", "226946nctVgW", "map", "push", "pop", "744456pvmgxU", "floor", "211215mdeqTj", "log", "22090RgOZuM", "20PBmWJB", "/dev/stdin", "18AKbZEn", "split", "1710056oIwDqn", "5068170HGVSKB", "289145xuuzFw"];
  __STRING_ARRAY__ = function () {
    return _0x36be30;
  };
  return __STRING_ARRAY__();
}
const suf = [];
for (let i = 0; i < (N - pre["length"]) % (loop["length"] || 1); i++) {
  suf["push"](loop[i]);
}
const sum = loop.reduce((a, b) => a + b, 0);
const lt = loop["length"] ? Math["floor"]((N - pre["length"]) / loop["length"]) : 0;
console["log"](pre["reduce"]((a, b) => a + b, 0) + sum * lt + suf["reduce"]((a, b) => a + b, 0));
