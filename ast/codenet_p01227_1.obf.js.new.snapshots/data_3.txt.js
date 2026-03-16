(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("210866wUWZil") / 1 * (parseInt("2IYHHgQ") / 2) + parseInt("476625NQvpjW") / 3 + -parseInt("3314260dkIczX") / 4 + -parseInt("5ehOTNT") / 5 * (parseInt("5789904VzqNZx") / 6) + -parseInt("6057002VQJBTn") / 7 + parseInt("15680TbuqHU") / 8 * (parseInt("2916rUTUuj") / 9) + parseInt("25765870oEYMeb") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 500801);
function __DECODE_0__(etwuZe, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 416;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(etwuZe, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
function __STRING_ARRAY__() {
  var _0x334cfa = ["shift", "25765870oEYMeb", "15680TbuqHU", "2IYHHgQ", "5789904VzqNZx", "2916rUTUuj", "log", "map", "3314260dkIczX", "6057002VQJBTn", "split", "/dev/stdin", "push", "length", "readFileSync", "trim", "5ehOTNT", "476625NQvpjW", "utf8", "210866wUWZil"];
  __STRING_ARRAY__ = function () {
    return _0x334cfa;
  };
  return __STRING_ARRAY__();
}
var t = arr["shift"]() - 0;
while (t--) {
  var [n, k] = arr["shift"]()["split"](" ")["map"](Number);
  var x = arr["shift"]()["split"](" ")["map"](Number);
  var d = x[x["length"] - 1] - x[0];
  var a = [];
  for (var i = 0; i < x["length"] - 1; i++) {
    a["push"](x[i + 1] - x[i]);
  }
  a.sort((a, b) => b - a);
  var sum = 0;
  for (var i = 0; i < k - 1; i++) {
    if (i > a["length"] - 1) {
      break;
    }
    sum += a[i];
  }
  console["log"](d - sum);
}
