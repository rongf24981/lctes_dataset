function __DECODE_0__(qHPjIH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 470;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qHPjIH, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("5528tguQuu") / 1 * (parseInt("194slQAQn") / 2) + -parseInt("1378887ospwvW") / 3 * (-parseInt("4IsRWGF") / 4) + parseInt("3064395auoJZs") / 5 + parseInt("2035938LsVKPa") / 6 * (parseInt("7WCbCyn") / 7) + parseInt("16zzWITp") / 8 * (-parseInt("1072044JGAxTo") / 9) + -parseInt("6865870XNNufG") / 10 + -parseInt("7128671SXsFhc") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 375167);
function __STRING_ARRAY__() {
  var _0x11cee9 = ["194slQAQn", "resume", "7128671SXsFhc", "5528tguQuu", "2035938LsVKPa", "slice", "1072044JGAxTo", "1378887ospwvW", "overflow", "log", "shift", "16zzWITp", "4IsRWGF", "6865870XNNufG", "3064395auoJZs", "stdin", "data", "reverse", "7WCbCyn", "concat", "length"];
  __STRING_ARRAY__ = function () {
    return _0x11cee9;
  };
  return __STRING_ARRAY__();
}
function pad(n) {
  while (n["length"] < 7) {
    n = "0" + n;
  }
  return n;
}
function divide(s) {
  var a = [];
  var i = 0;
  var l = s["length"];
  var d = 7;
  for (; (a[i] = s.slice((i + 1) * -d, l + i * -d))["length"] > d - 1; i++);
  return a;
}
function unite(a) {
  return a["concat"]()["reverse"]().join("").replace(/^0*/, "");
}
function largeSum(n, m) {
  for (var h = 0, o = [], i = 0, l = Math.max(n["length"], m["length"]); i < l || h != 0; i++) {
    var a = ((parseInt(n[i], 10) || 0) + (parseInt(m[i], 10) || 0) + +h).toString(10);
    o[i] = a["length"] > 7 ? (h = a["slice"](0, 1), a.slice(1)) : (h = 0, pad(a));
  }
  return o;
}
process["stdin"].on("data", function (c) {
  var a = (c + "").trim().split("\n");
  for (var i = 0, l = +a["shift"]() * 2; i < l; i += 2) {
    var s = unite(largeSum(divide(a[i]), divide(a[i + 1])));
    console["log"](s == "" ? 0 : s.length > 80 ? "overflow" : s);
  }
})["resume"]();
