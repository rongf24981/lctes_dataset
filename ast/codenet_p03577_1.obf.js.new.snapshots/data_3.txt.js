function __DECODE_0__(PdDLtN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 185;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PdDLtN, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("6182WruTFK") / 1 + -parseInt("1898dzHlCq") / 2 * (parseInt("147tvZGam") / 3) + -parseInt("236JNQHob") / 4 * (parseInt("20555KyPABW") / 5) + parseInt("1471356KBoUpt") / 6 + parseInt("693525CBvRny") / 7 + -parseInt("8AFgzfm") / 8 * (-parseInt("63783nNBUoB") / 9) + parseInt("741700djKwVP") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 142690);
process["stdin"]["resume"]();
process["stdin"]["setEncoding"]("utf8");
var g_input = "";
function __STRING_ARRAY__() {
  var _0x9c6f7d = ["resume", "1471356KBoUpt", "slice", "log", "63783nNBUoB", "utf8", "stdin", "length", "147tvZGam", "8AFgzfm", "end", "split", "6182WruTFK", "20555KyPABW", "1898dzHlCq", "236JNQHob", "setEncoding", "FESTIVAL", "741700djKwVP", "693525CBvRny"];
  __STRING_ARRAY__ = function () {
    return _0x9c6f7d;
  };
  return __STRING_ARRAY__();
}
process["stdin"].on("data", function (chunk) {
  g_input += chunk;
});
process["stdin"].on("end", function () {
  Main(g_input["split"](/\r?\n/));
});
function Main(input) {
  console["log"](input[0]["slice"](0, input[0]["length"] - "FESTIVAL".length));
  return 0;
}
