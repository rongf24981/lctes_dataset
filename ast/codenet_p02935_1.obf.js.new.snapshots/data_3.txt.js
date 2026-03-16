function __DECODE_0__(CgwwPP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 395;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CgwwPP, key);
}
function __STRING_ARRAY__() {
  var _0x702f38 = ["174GQEGWQ", "2515945otnfsK", "line", "split", "18101MBAlHq", "stdin", "1253334oDxwsz", "8oNSZRU", "utf8", "stdout", "setEncoding", "push", "resume", "log", "createInterface", "5544098GCHhMG", "splice", "16caLiRQ", "469172mHKYwp", "length", "map", "sort", "2510508UNJMtw", "290wqNYfZ", "13152339TjxWyL"];
  __STRING_ARRAY__ = function () {
    return _0x702f38;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("18101MBAlHq") / 1 * (parseInt("174GQEGWQ") / 2) + -parseInt("1253334oDxwsz") / 3 + parseInt("8oNSZRU") / 4 * (-parseInt("2515945otnfsK") / 5) + -parseInt("2510508UNJMtw") / 6 + parseInt("5544098GCHhMG") / 7 * (parseInt("16caLiRQ") / 8) + parseInt("13152339TjxWyL") / 9 + parseInt("290wqNYfZ") / 10 * (parseInt("469172mHKYwp") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 864946);
process["stdin"]["resume"]();
process["stdin"]["setEncoding"]("utf8");
var lines = [];
var reader = require("readline")["createInterface"]({
  input: process["stdin"],
  output: process["stdout"]
});
reader.on("line", line => {
  lines["push"](line);
});
reader.on("close", () => {
  var n = Number(lines[0]);
  var v = lines[1]["split"](" ");
  v = v["map"](function (str) {
    return Number(str);
  });
  for (i = 0; i < n - 1; i++) {
    var min1 = v["sort"]((a, b) => a - b)[0];
    v["splice"](0, 1);
    var min2 = v[0];
    v["splice"](0, 1);
    var a = (min1 + min2) / 2;
    if (v["length"] == 0) {
      break;
    }
    v["push"](a);
  }
  console["log"](a);
});
