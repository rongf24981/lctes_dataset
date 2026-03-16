function __DECODE_0__(SEHeVB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 492;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SEHeVB, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("6JiRIRB") / 1 * (-parseInt("34522xmhtzE") / 2) + parseInt("2552955obTiub") / 3 * (-parseInt("4TNHsuX") / 4) + -parseInt("5fyBYGo") / 5 * (parseInt("245694aEcOFR") / 6) + -parseInt("7094682htWlUp") / 7 + parseInt("5254520uWqtGs") / 8 + -parseInt("108MOhhRQ") / 9 * (-parseInt("82490dnUYaP") / 10) + parseInt("11gVzCsF") / 11 * (parseInt("23950572IPUeKX") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 742658);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var [x, y] = input["trim"]()["split"](" ").map(Number);
var cnt = 0;
for (var i = 0; i <= x; i++) {
  if (y * i * 2 / (x * 2) % 1 === 0) {
    cnt++;
  }
}
function __STRING_ARRAY__() {
  var _0x5b548e = ["245694aEcOFR", "4TNHsuX", "23950572IPUeKX", "5254520uWqtGs", "11gVzCsF", "trim", "6JiRIRB", "2552955obTiub", "108MOhhRQ", "82490dnUYaP", "7094682htWlUp", "utf8", "split", "34522xmhtzE", "5fyBYGo", "log", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x5b548e;
  };
  return __STRING_ARRAY__();
}
console["log"](x + 1 + y + 1 - cnt);
