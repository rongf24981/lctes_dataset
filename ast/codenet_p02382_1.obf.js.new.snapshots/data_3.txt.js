(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("16565WTopKg") / 1 * (-parseInt("150IBpbjc") / 2) + -parseInt("245301rnXZXA") / 3 + parseInt("2351212aBPaPe") / 4 * (parseInt("10uWRxgV") / 5) + -parseInt("4192404qdppxW") / 6 + parseInt("2418325nBIbAm") / 7 + -parseInt("6160ERxJCR") / 8 * (parseInt("5697aUjyaX") / 9) + parseInt("440sMJpOU") / 10 * (parseInt("408331wtKLpL") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 644119);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input.trim()["split"]("\n");
function __DECODE_0__(Krsxcf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 493;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Krsxcf, key);
}
var n = Arr[0] - 0;
var x = Arr[1]["split"](" ")["map"](Number);
var y = Arr[2].split(" ")["map"](Number);
var sum1 = 0;
var sum2 = 0;
var sum3 = 0;
var max = 0;
for (var i = 0; i < n; i++) {
  var a = Math["abs"](x[i] - y[i]);
  sum1 += a;
  sum2 += Math["pow"](a, 2);
  sum3 += Math["pow"](a, 3);
  max = Math.max(max, a);
}
function __STRING_ARRAY__() {
  var _0x20abef = ["pow", "toFixed", "utf8", "2418325nBIbAm", "4192404qdppxW", "150IBpbjc", "split", "abs", "245301rnXZXA", "log", "408331wtKLpL", "5697aUjyaX", "10uWRxgV", "6160ERxJCR", "2351212aBPaPe", "16565WTopKg", "map", "440sMJpOU"];
  __STRING_ARRAY__ = function () {
    return _0x20abef;
  };
  return __STRING_ARRAY__();
}
console.log(sum1["toFixed"](6));
console["log"](Math.sqrt(sum2).toFixed(6));
console["log"](Math["pow"](sum3, 1 / 3).toFixed(6));
console["log"](max["toFixed"](6));
