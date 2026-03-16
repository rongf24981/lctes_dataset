function __DECODE_0__(bLzNaG, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 348;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bLzNaG, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("288435igReam") / 1 + parseInt("2NHxmmi") / 2 * (parseInt("551505NkmYmw") / 3) + -parseInt("88NcyxTH") / 4 * (-parseInt("46915vQyfRg") / 5) + -parseInt("317964VobRsB") / 6 * (parseInt("35grTaMC") / 7) + parseInt("32olUNqd") / 8 * (-parseInt("275067aoELnQ") / 9) + parseInt("758480MeILmT") / 10 + parseInt("3946261ZNTcKP") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 149203);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input.trim().split("\n");
var n = arr["shift"]() - 0;
function __STRING_ARRAY__() {
  var _0x276cc9 = ["utf8", "88NcyxTH", "readFileSync", "/dev/stdin", "map", "317964VobRsB", "35grTaMC", "trim", "275067aoELnQ", "551505NkmYmw", "3946261ZNTcKP", "32olUNqd", "2NHxmmi", "288435igReam", "split", "758480MeILmT", "46915vQyfRg", "shift"];
  __STRING_ARRAY__ = function () {
    return _0x276cc9;
  };
  return __STRING_ARRAY__();
}
var a = arr["shift"]()["split"](" ").map(Number);
var q = arr["shift"]() - 0;
var s = "";
for (var i = 0; i < q; i++) {
  var [b, e, k] = arr[i].split(" ")["map"](Number);
  var cnt = 0;
  for (var j = b; j < e; j++) {
    if (a[j] == k) {
      cnt++;
    }
  }
  s += cnt + "\n";
}
console.log(s["trim"]());
