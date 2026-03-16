(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("427452XksfFP") / 1 + parseInt("1269094LAfmhx") / 2 + parseInt("91293qtYkDw") / 3 + -parseInt("109292pPnSRW") / 4 * (parseInt("200qthpYE") / 5) + -parseInt("174wdRyQR") / 6 * (parseInt("147847egckmx") / 7) + parseInt("6809184spHPte") / 8 + -parseInt("2763xZPZrQ") / 9 * (-parseInt("15430YJmxKj") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 711850);
function __DECODE_0__(SGSiZY, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 417;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SGSiZY, key);
}
process["stdin"]["resume"]();
function __STRING_ARRAY__() {
  var _0x1646fc = ["close", "setEncoding", "createInterface", "91293qtYkDw", "push", "stdin", "6809184spHPte", "stdout", "109292pPnSRW", "2763xZPZrQ", "1269094LAfmhx", "174wdRyQR", "line", "15430YJmxKj", "200qthpYE", "147847egckmx", "resume", "427452XksfFP", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x1646fc;
  };
  return __STRING_ARRAY__();
}
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
  const N = +lines[0];
  console.log(N % 2 ? (N - 1) / 2 : N / 2 - 1);
});
