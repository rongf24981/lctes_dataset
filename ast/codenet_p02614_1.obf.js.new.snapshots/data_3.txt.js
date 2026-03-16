(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("138166vHzmAx") / 1 + parseInt("108474aaFwXL") / 2 + parseInt("3351lxcZSf") / 3 * (-parseInt("2724thFAGV") / 4) + -parseInt("530SAPvAf") / 5 * (parseInt("17772jrWixV") / 6) + -parseInt("212912tYTTSC") / 7 * (-parseInt("152oMMOWo") / 8) + parseInt("567999bixgSO") / 9 + parseInt("2921110yEmQMW") / 10 * (parseInt("33AfqbmN") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 635102);
const fs = require("fs");
const [h, w, k, ...m] = fs.readFileSync("/dev/stdin", "utf8").split(/\s/);
function __DECODE_0__(mZIfYq, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 499;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mZIfYq, key);
}
function solve(m, x = 0, y = 0, f) {
  if (m["length"] === 0 || m[0]["length"] === 0) {
    return 0;
  }
  const n = m["join"]("")["replace"](/\./g, "")["length"];
  let a = 0;
  if (n == k) {
    a++;
  }
  if (n < k) {
    return a;
  }
  if (!f) {
    for (let i = y; i < m["length"]; i++) {
      a += solve([...m["slice"](0, i), ...m["slice"](i + 1)], x, i < y ? y : i);
    }
  }
  for (let i = x; i < m[0]["length"]; i++) {
    a += solve(m["map"](l => l.slice(0, i) + l["slice"](i + 1)), i < x ? x : i, y, true);
  }
  return a;
}
console["log"](solve(m));
function __STRING_ARRAY__() {
  const _0x1ba532 = ["138166vHzmAx", "2921110yEmQMW", "utf8", "/dev/stdin", "map", "567999bixgSO", "33AfqbmN", "17772jrWixV", "152oMMOWo", "join", "108474aaFwXL", "530SAPvAf", "212912tYTTSC", "slice", "replace", "3351lxcZSf", "2724thFAGV", "length", "log"];
  __STRING_ARRAY__ = function () {
    return _0x1ba532;
  };
  return __STRING_ARRAY__();
}
