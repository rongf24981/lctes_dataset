(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1LczYLV") / 1 * (-parseInt("2333374mQLrbI") / 2) + -parseInt("758607DEMORv") / 3 + parseInt("821948eGHGLA") / 4 + -parseInt("902735UbCthO") / 5 * (parseInt("36NkbUeY") / 6) + -parseInt("1629397KolJhf") / 7 + -parseInt("10092720NEAgZv") / 8 + -parseInt("1179cwGtHb") / 9 * (-parseInt("338610NeLwZf") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 644079);
function __DECODE_0__(IvtrlY, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 460;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IvtrlY, key);
}
process["stdin"].resume();
process["stdin"]["setEncoding"]("utf8");
var lines = [];
var reader = require("readline").createInterface({
  input: process["stdin"],
  output: process["stdout"]
});
reader.on("line", line => {
  lines.push(line);
});
reader.on("close", () => {
  const N = lines[0] - 0;
  let tmp = 0;
  for (let i = 1; i <= 1000000; i++) {
    tmp *= 10;
    tmp += 7;
    tmp %= N;
    if (tmp === 0) {
      console["log"](i);
      return;
    }
  }
  console["log"](-1);
});
function check(ans) {
  return true;
}
function __STRING_ARRAY__() {
  var _0x43a72d = ["758607DEMORv", "2333374mQLrbI", "utf8", "stdout", "36NkbUeY", "338610NeLwZf", "readline", "line", "close", "1LczYLV", "10092720NEAgZv", "821948eGHGLA", "setEncoding", "902735UbCthO", "log", "1179cwGtHb", "1629397KolJhf", "stdin"];
  __STRING_ARRAY__ = function () {
    return _0x43a72d;
  };
  return __STRING_ARRAY__();
}
