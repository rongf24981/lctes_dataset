(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("24379iWCptX") / 1 * (parseInt("126cGSPsl") / 2) + -parseInt("4931379mwjeJx") / 3 + -parseInt("977536XieIXG") / 4 + -parseInt("2804010WtMksx") / 5 + -parseInt("219900Czhrjn") / 6 * (-parseInt("140FKOjlf") / 7) + parseInt("152MNZICz") / 8 * (parseInt("674397CVVRGi") / 9) + -parseInt("2612400ADfAgZ") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 982385);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
function __STRING_ARRAY__() {
  var _0x3eb495 = ["readFileSync", "219900Czhrjn", "shift", "977536XieIXG", "674397CVVRGi", "utf8", "126cGSPsl", "trim", "140FKOjlf", "2804010WtMksx", "4931379mwjeJx", "split", "24379iWCptX", "map", "log", "152MNZICz", "/dev/stdin", "2612400ADfAgZ"];
  __STRING_ARRAY__ = function () {
    return _0x3eb495;
  };
  return __STRING_ARRAY__();
}
var [n, m] = arr["shift"]()["split"](" ")["map"](Number);
var cnt = 0;
function __DECODE_0__(SwfIRC, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 192;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SwfIRC, key);
}
for (var i = 0; i < n; i++) {
  var s = arr[i];
  var t = arr[i + n];
  for (var j = 0; j < m; j++) {
    if (s[j] != t[j]) {
      cnt++;
    }
  }
}
console["log"](cnt);
