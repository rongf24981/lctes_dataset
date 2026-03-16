function __STRING_ARRAY__() {
  const _0x28f774 = ["log", "fill", "463298GjhGjL", "524ekrFuU", "56GVwYqY", "20PWtKsY", "readFileSync", "length", "16AnBVet", "/dev/stdin", "33524lZcLFl", "15265foSjve", "map", "3839048snVIGC", "split", "407634LdyRqM", "30060gHzBza", "9gvNXOc", "reduce", "utf8", "push", "3906420ylgPQW"];
  __STRING_ARRAY__ = function () {
    return _0x28f774;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("33524lZcLFl") / 1 + parseInt("16AnBVet") / 2 * (-parseInt("30060gHzBza") / 3) + parseInt("524ekrFuU") / 4 * (-parseInt("15265foSjve") / 5) + parseInt("407634LdyRqM") / 6 * (parseInt("56GVwYqY") / 7) + -parseInt("3839048snVIGC") / 8 * (-parseInt("9gvNXOc") / 9) + -parseInt("20PWtKsY") / 10 * (-parseInt("463298GjhGjL") / 11) + -parseInt("3906420ylgPQW") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 335515);
const input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
const lines = input["split"]("\n");
const [N, K] = lines[0]["split"](" ").map(Number);
const k = [];
for (let i = 1; i <= K; i++) {
  const [L, R] = lines[i]["split"](" ")["map"](Number);
  k["push"]([L, R]);
}
const ksum = Array(K).fill(0);
function __DECODE_0__(EaAhFn, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 388;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EaAhFn, key);
}
const mod = 998244353;
const map = Array(N)["fill"](0);
map[0] = 1;
for (let i = 1; i < map["length"]; i++) {
  let c = 0;
  for (let j = 0; j < k.length; j++) {
    ksum[j] = ksum[j] + (map[i - k[j][0]] || 0) - (map[i - k[j][1] - 1] || 0);
  }
  map[i] = ksum["reduce"]((a, b) => a + b) % mod;
}
console["log"](map.pop());
