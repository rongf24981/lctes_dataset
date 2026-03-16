(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1121988vilwQC") / 1 + -parseInt("2uoYYUl") / 2 * (parseInt("2479419zqvIXu") / 3) + parseInt("107808KrHQkG") / 4 * (-parseInt("75wEpuEa") / 5) + -parseInt("278034bTtAnG") / 6 * (parseInt("70eLlNgg") / 7) + -parseInt("6480416orHZiZ") / 8 + parseInt("15005700GwTYPe") / 9 + parseInt("28307450cYEbIy") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 871862);
process["stdin"]["resume"]();
function __STRING_ARRAY__() {
  var _0x7f0371 = ["setEncoding", "2479419zqvIXu", "278034bTtAnG", "line", "1121988vilwQC", "close", "utf8", "max", "70eLlNgg", "75wEpuEa", "resume", "stdin", "107808KrHQkG", "stdout", "apply", "28307450cYEbIy", "push", "2uoYYUl", "createInterface", "15005700GwTYPe", "6480416orHZiZ", "log"];
  __STRING_ARRAY__ = function () {
    return _0x7f0371;
  };
  return __STRING_ARRAY__();
}
process["stdin"]["setEncoding"]("utf8");
var lines = [];
var t = [];
var reader = require("readline")["createInterface"]({
  input: process.stdin,
  output: process["stdout"]
});
reader.on("line", line => {
  lines["push"](line);
});
function __DECODE_0__(abTxHY, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 192;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(abTxHY, key);
}
reader.on("close", () => {
  var x = lines[0].split(" ");
  var a = parseInt(x[0]);
  var b = parseInt(x[1]);
  var c = parseInt(x[2]);
  var d = parseInt(x[3]);
  var ac = a * c;
  var ad = a * d;
  var bc = b * c;
  var bd = b * d;
  t["push"](ac);
  t["push"](ad);
  t.push(bc);
  t["push"](bd);
  console["log"](Math["max"]["apply"](null, t));
});
