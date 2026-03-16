(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("528024XQGnzF") / 1 + parseInt("949736xJQcvt") / 2 + -parseInt("10227AEWbKT") / 3 + -parseInt("47920jHsAKO") / 4 + -parseInt("1340JaeVNP") / 5 * (parseInt("5574AdrJZD") / 6) + parseInt("2978353ldcYhl") / 7 + parseInt("304cIROTr") / 8 * (-parseInt("196641ikQbPr") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 333748);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n")["map"](Number);
var n = Arr["shift"]();
var sum = 0;
for (var i = 0; i < n; i++) {
  sum += Arr[i];
}
console["log"](Math.floor(sum / n));
function __DECODE_0__(SeUFwP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 125;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SeUFwP, key);
}
function __STRING_ARRAY__() {
  var _0x146e8b = ["2978353ldcYhl", "196641ikQbPr", "47920jHsAKO", "10227AEWbKT", "949736xJQcvt", "528024XQGnzF", "1340JaeVNP", "log", "map", "split", "304cIROTr", "shift", "/dev/stdin", "trim", "5574AdrJZD", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x146e8b;
  };
  return __STRING_ARRAY__();
}
