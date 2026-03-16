function __DECODE_0__(uaBLHm, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 344;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uaBLHm, key);
}
function __STRING_ARRAY__() {
  const _0x312054 = ["5325940gcBVUB", "31712MALMqE", "trim", "7587720NWPAOt", "432300ywWnMR", "/dev/stdin", "length", "map", "split", "every", "utf8", "5UxmHcr", "2676822kXhNfA", "min", "keys", "9389450zWSlOR", "log", "5134728YWNaGo"];
  __STRING_ARRAY__ = function () {
    return _0x312054;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("31712MALMqE") / 1 + -parseInt("432300ywWnMR") / 2 + -parseInt("2676822kXhNfA") / 3 + -parseInt("5325940gcBVUB") / 4 + -parseInt("5UxmHcr") / 5 * (-parseInt("5134728YWNaGo") / 6) + parseInt("9389450zWSlOR") / 7 + parseInt("7587720NWPAOt") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 673982);
function main(input) {
  const lines = input["trim"]()["split"]("\n");
  const [N, M, X] = splitN(lines[0]);
  const costs = [];
  const options = [...Array(N)["keys"]()];
  select(options);
  function select(options, cost = 0, aList = []) {
    for (let i = 0; i < options["length"]; i++) {
      const _options = [...options];
      const [s] = _options.splice(i, 1);
      const [c, ...a] = splitN(lines[s + 1]);
      const _cost = cost + c;
      const _aList = a.map((v, i) => v + (aList[i] || 0));
      if (_aList["every"](v => v >= X)) {
        costs.push(_cost);
        continue;
      }
      select(_options, _cost, _aList);
    }
  }
  console["log"](costs.length ? Math["min"](...costs) : -1);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
function splitN(s) {
  return s["split"](" ")["map"](Number);
}
