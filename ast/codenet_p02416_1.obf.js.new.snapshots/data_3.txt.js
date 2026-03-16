(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("719UgKszs") / 1 * (parseInt("2590qyPOUH") / 2) + -parseInt("741123ryhXIj") / 3 + parseInt("4JGJbpX") / 4 * (parseInt("1106305TKYAvL") / 5) + -parseInt("836238PdkVfV") / 6 * (-parseInt("42APdLgK") / 7) + -parseInt("6694088nBxaXs") / 8 + -parseInt("7047783AVJDry") / 9 + parseInt("30fhcXjN") / 10 * (parseInt("1615339FpfuvB") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 562262);
function __STRING_ARRAY__() {
  const _0x210693 = ["resume", "836238PdkVfV", "2590qyPOUH", "data", "slice", "map", "reduce", "join", "log", "utf8", "1106305TKYAvL", "4JGJbpX", "1615339FpfuvB", "42APdLgK", "30fhcXjN", "719UgKszs", "setEncoding", "741123ryhXIj", "trim", "6694088nBxaXs", "7047783AVJDry", "split", "stdin"];
  __STRING_ARRAY__ = function () {
    return _0x210693;
  };
  return __STRING_ARRAY__();
}
let content = "";
process.stdin["resume"]();
process["stdin"]["setEncoding"]("utf8");
function __DECODE_0__(aUrnlc, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 240;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(aUrnlc, key);
}
process["stdin"].on("data", buf => {
  content += buf;
});
process.stdin.on("end", () => {
  const lines = content["trim"]()["split"]("\n")["slice"](0, -1);
  const result = lines.map(num => num["split"]("")["map"](n => parseInt(n, 10))["reduce"]((prev, cur) => prev + cur));
  console["log"](result["join"]("\n"));
});
