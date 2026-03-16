(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("3MuIAyN") / 1 * (parseInt("200726MvwilE") / 2) + -parseInt("2602326JsOzwT") / 3 + -parseInt("2487948PEzVXh") / 4 + -parseInt("4850340iwCNYf") / 5 + parseInt("148578vfveFq") / 6 * (-parseInt("161ICSNVk") / 7) + -parseInt("7939744VXQlzK") / 8 + parseInt("39964770ONqWIc") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 720105);
process.stdin.resume();
function __DECODE_0__(zNFLad, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 262;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(zNFLad, key);
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
  var abcd = lines[0]["split"](" ");
  var one = Number(abcd[0]);
  var two = Number(abcd[1]);
  var three = Number(abcd[2]);
  var four = Number(abcd[3]);
  var ans = [];
  ans.push(three + (two - four));
  ans["push"](three + four - one);
  ans.push(one + two - four);
  ans["push"](three + two - one);
  console["log"](ans["join"](" "));
});
function __STRING_ARRAY__() {
  var _0x192241 = ["2487948PEzVXh", "161ICSNVk", "log", "200726MvwilE", "148578vfveFq", "2602326JsOzwT", "39964770ONqWIc", "7939744VXQlzK", "readline", "stdout", "createInterface", "join", "close", "stdin", "push", "setEncoding", "line", "4850340iwCNYf", "3MuIAyN", "utf8", "split"];
  __STRING_ARRAY__ = function () {
    return _0x192241;
  };
  return __STRING_ARRAY__();
}
