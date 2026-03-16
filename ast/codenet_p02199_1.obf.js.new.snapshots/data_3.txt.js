(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("128299HxqYJW") / 1 * (parseInt("2yPKyXw") / 2) + parseInt("3220680pmpfqO") / 3 * (-parseInt("4SNeHUH") / 4) + -parseInt("1963550kqaqAs") / 5 * (parseInt("6iGaine") / 6) + -parseInt("455203JbkNFn") / 7 * (parseInt("128SBCNYF") / 8) + -parseInt("2034864ujPbND") / 9 + parseInt("80JLeaoK") / 10 * (parseInt("998415qprZjd") / 11) + -parseInt("4689876xGlTuQ") / 12 * (-parseInt("91yMhdiu") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 857350);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
var [a, b] = arr["shift"]()["split"](" ")["map"](Number);
function __STRING_ARRAY__() {
  var _0x10a516 = ["128299HxqYJW", "4SNeHUH", "3220680pmpfqO", "1963550kqaqAs", "998415qprZjd", "map", "4689876xGlTuQ", "shift", "/dev/stdin", "readFileSync", "trim", "80JLeaoK", "2yPKyXw", "128SBCNYF", "2034864ujPbND", "455203JbkNFn", "91yMhdiu", "6iGaine", "log", "split"];
  __STRING_ARRAY__ = function () {
    return _0x10a516;
  };
  return __STRING_ARRAY__();
}
var [p, q, r] = arr.shift()["split"](" ")["map"](Number);
function __DECODE_0__(bUfbpO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 204;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bUfbpO, key);
}
var hanareta = b * p;
var tikaduita = (b - a) * q;
var d = hanareta - tikaduita;
console["log"]((d / (q + r) + b).toFixed(12));
