function __STRING_ARRAY__() {
  var _0x452858 = ["423binlrU", "30FfTiYz", "1647729rJSMqo", "1722CsjnxY", "trim", "117736felbYc", "join", "length", "split", "330362PAubJb", "441784hfjkki", "shift", "sort", "440328wKDohy", "log", "utf8", "42qAqpGa", "readFileSync", "80990ltwNhH"];
  __STRING_ARRAY__ = function () {
    return _0x452858;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("330362PAubJb") / 1 + -parseInt("1722CsjnxY") / 2 * (-parseInt("423binlrU") / 3) + -parseInt("117736felbYc") / 4 + -parseInt("80990ltwNhH") / 5 * (parseInt("42qAqpGa") / 6) + -parseInt("440328wKDohy") / 7 + parseInt("441784hfjkki") / 8 + parseInt("1647729rJSMqo") / 9 * (parseInt("30FfTiYz") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 189781);
function __DECODE_0__(LuWzAt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 223;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LuWzAt, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
while (true) {
  var N = Arr["shift"]() - 0;
  if (N == 0) {
    break;
  }
  var n = [];
  var p = 0;
  for (var i = 0; i < N; i++) {
    n[i] = 0;
  }
  var str = Arr["shift"]();
  for (var i = 0; i < str["length"]; i++) {
    var v = str[i];
    var j = i % N;
    if (v == "M") {
      n[j]++;
    }
    if (v == "S") {
      p += n[j] + 1;
      n[j] = 0;
    }
    if (v == "L") {
      n[j] += p + 1;
      p = 0;
    }
  }
  n["sort"](function (a, b) {
    return a - b;
  });
  console["log"](n["join"](" ") + " " + p);
}
