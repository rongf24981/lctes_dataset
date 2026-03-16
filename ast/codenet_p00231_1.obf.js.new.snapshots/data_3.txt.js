function __DECODE_0__(oPojQE, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 217;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(oPojQE, key);
}
function __STRING_ARRAY__() {
  var _0x237107 = ["/dev/stdin", "41878408bCupNj", "hasOwnProperty", "9256hTujqJ", "114hcINAq", "shift", "446271QkVquw", "log", "2025976nYfosJ", "46RRRsrS", "82593RSjPFB", "6997680ECfVcM", "10ZKGhsa", "4905JfyyaQ", "push", "readFileSync", "split", "129696WprefY", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x237107;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("82593RSjPFB") / 1 + parseInt("46RRRsrS") / 2 * (-parseInt("129696WprefY") / 3) + parseInt("2025976nYfosJ") / 4 * (-parseInt("10ZKGhsa") / 5) + -parseInt("114hcINAq") / 6 * (parseInt("446271QkVquw") / 7) + -parseInt("9256hTujqJ") / 8 * (parseInt("4905JfyyaQ") / 9) + parseInt("6997680ECfVcM") / 10 + parseInt("41878408bCupNj") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 740293);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.trim()["split"]("\n");
while (true) {
  var N = Arr.shift() - 0;
  if (N == 0) {
    break;
  }
  var plus = {};
  var minus = {};
  var pm = [];
  for (var i = 0; i < N; i++) {
    var arr = Arr["shift"]()["split"](" ").map(Number);
    var m = arr[0];
    var a = arr[1];
    var b = arr[2] - N * 0.001;
    plus[a] = m;
    minus[b] = m;
    pm["push"](a);
    pm.push(b);
  }
  pm.sort(function (a, b) {
    return a - b;
  });
  var flag = "OK";
  var sum = 0;
  for (var i = 0; i < pm.length; i++) {
    var v = pm[i];
    if (plus.hasOwnProperty(v)) {
      sum += plus[v];
    }
    if (minus["hasOwnProperty"](v)) {
      sum -= minus[v];
    }
    if (sum > 150) {
      flag = "NG";
      break;
    }
  }
  console["log"](flag);
}
