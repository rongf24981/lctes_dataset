(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("516200bMsjbb") / 1 + -parseInt("170DBSlwN") / 2 * (-parseInt("12315nGkuAk") / 3) + parseInt("1480904qCHdth") / 4 * (parseInt("5dClPtx") / 5) + -parseInt("5636934hMODvE") / 6 + parseInt("8966944KHLwtd") / 7 * (parseInt("8EfwJcR") / 8) + parseInt("9703935ZzPUsr") / 9 + parseInt("457570PnpBlx") / 10 * (-parseInt("187mdTxdl") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 844800);
function __STRING_ARRAY__() {
  const _0x216d8c = ["trim", "5dClPtx", "1480904qCHdth", "9703935ZzPUsr", "utf8", "map", "log", "170DBSlwN", "shift", "457570PnpBlx", "12315nGkuAk", "yes", "516200bMsjbb", "split", "8966944KHLwtd", "5636934hMODvE", "readFileSync", "forEach", "8EfwJcR", "187mdTxdl"];
  __STRING_ARRAY__ = function () {
    return _0x216d8c;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(OwntQE, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 275;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OwntQE, key);
}
(function main() {
  const lines = require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]().split("\n");
  const n1 = Number(lines["shift"]());
  const arr1 = lines["shift"]()["split"](" ")["map"](Number);
  const n2 = Number(lines["shift"]());
  const arr2 = lines["shift"]()["split"](" ").map(Number);
  const solve = (i, m) => {
    if (m == 0) {
      return true;
    }
    if (i >= n1) {
      return false;
    }
    return solve(i + 1, m) || solve(i + 1, m - arr1[i]);
  };
  arr2.map(m => solve(0, m) ? "yes" : "no")["forEach"](res => console["log"](res));
})();
