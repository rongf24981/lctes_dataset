(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("299147pIhJrm") / 1 * (-parseInt("2IswTvt") / 2) + parseInt("27vONWIv") / 3 * (parseInt("250748Hncpaw") / 4) + -parseInt("285iYKnhX") / 5 * (parseInt("58974uqmygz") / 6) + parseInt("4107726jBSCXz") / 7 + -parseInt("1074912KgJBfw") / 8 * (parseInt("18PnwjdP") / 9) + -parseInt("470820jXsiMA") / 10 * (-parseInt("77ZptGjz") / 11) + -parseInt("617448wdJFfX") / 12 * (-parseInt("26BeKGdd") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 455355);
function main(lines) {
  const [N, M] = na();
  const nodes = Array(N + 1)["fill"](0)["map"](() => new Set());
  for (let i = 1; i <= M; i++) {
    const [a, b] = na();
    nodes[a]["add"](b);
    nodes[b]["add"](a);
  }
  let ans = 0;
  searchRoute(nodes[1], [1]);
  function searchRoute(node, passed) {
    if (passed.length == N) {
      return ++ans;
    }
    for (let n of node) {
      if (passed.includes(n)) {
        continue;
      }
      searchRoute(nodes[n], passed["concat"](n));
    }
  }
  return ans;
}
const lines = require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]().split("\n");
let lineCount = 0;
function __STRING_ARRAY__() {
  const _0x1b6d2b = ["readFileSync", "285iYKnhX", "27vONWIv", "map", "470820jXsiMA", "2IswTvt", "4107726jBSCXz", "add", "250748Hncpaw", "split", "fill", "617448wdJFfX", "58974uqmygz", "1074912KgJBfw", "26BeKGdd", "trim", "concat", "299147pIhJrm", "77ZptGjz", "18PnwjdP"];
  __STRING_ARRAY__ = function () {
    return _0x1b6d2b;
  };
  return __STRING_ARRAY__();
}
const s = () => lines[lineCount++];
const n = () => Number(s());
function __DECODE_0__(bQMhev, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 227;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bQMhev, key);
}
const b = () => BigInt(s());
const sa = () => s()["split"](" ");
const na = () => sa().map(Number);
const ba = () => sa()["map"](BigInt);
const ans = main(lines);
console.log(ans);
