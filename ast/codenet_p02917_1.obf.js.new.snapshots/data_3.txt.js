function __DECODE_0__(DFLTnB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 492;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DFLTnB, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1200924CGPRzH") / 1 + parseInt("1078008MSyHqZ") / 2 + -parseInt("280680kkHkcZ") / 3 + -parseInt("36eORLdH") / 4 * (parseInt("662605eXKDst") / 5) + -parseInt("3527598bJChqk") / 6 + parseInt("14KjOGfi") / 7 * (-parseInt("2293624GMbPGX") / 8) + -parseInt("35709831jkIiET") / 9 * (-parseInt("10wlpWZq") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 858251);
process.stdin["resume"]();
process.stdin["setEncoding"]("utf8");
var lines = [];
var reader = require("readline")["createInterface"]({
  input: process["stdin"],
  output: process["stdout"]
});
function __STRING_ARRAY__() {
  var _0x4973ef = ["min", "line", "setEncoding", "stdin", "10wlpWZq", "log", "push", "split", "map", "36eORLdH", "utf8", "stdout", "1078008MSyHqZ", "close", "280680kkHkcZ", "1200924CGPRzH", "readline", "35709831jkIiET", "3527598bJChqk", "662605eXKDst", "resume", "14KjOGfi", "createInterface", "2293624GMbPGX", "length"];
  __STRING_ARRAY__ = function () {
    return _0x4973ef;
  };
  return __STRING_ARRAY__();
}
reader.on("line", line => {
  lines["push"](line);
});
reader.on("close", () => {
  const list = lines[1]["split"](" ")["map"](v => v - 0);
  let ans = 0;
  for (let i = 0; i < list["length"] - 1; i++) {
    ans += Math["min"](list[i], list[i + 1]);
  }
  ans += list[list.length - 1] + list[0];
  console["log"](ans);
});
