function __DECODE_0__(LMyWym, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 454;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LMyWym, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("929067ozBGxU") / 1 + parseInt("1598974mcYLkw") / 2 + -parseInt("2117415tegSQO") / 3 + parseInt("2009808zPGJuW") / 4 + parseInt("1704580xZowXf") / 5 * (parseInt("18bqGwVz") / 6) + parseInt("203akpZBe") / 7 * (parseInt("334864yIKHCn") / 8) + -parseInt("27960885VnXJgc") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 655066);
function __STRING_ARRAY__() {
  var _0x3e0b7a = ["1704580xZowXf", "929067ozBGxU", "2117415tegSQO", "2009808zPGJuW", "log", "334864yIKHCn", "shift", "trim", "203akpZBe", "1598974mcYLkw", "utf8", "sqrt", "/dev/stdin", "18bqGwVz", "map", "split", "27960885VnXJgc"];
  __STRING_ARRAY__ = function () {
    return _0x3e0b7a;
  };
  return __STRING_ARRAY__();
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input["trim"]().split("\n");
while (true) {
  var arr = Arr["shift"]()["split"](" ")["map"](Number);
  if (arr[0] == 0 && arr[1] == 0 && arr[2] == 0) {
    break;
  }
  arr.sort(function (a, b) {
    return a - b;
  });
  var R = Math["sqrt"](arr[0] * arr[0] + arr[1] * arr[1]);
  var n = Arr["shift"]() - 0;
  for (var i = 0; i < n; i++) {
    var r = Arr.shift() - 0;
    console["log"](r * 2 > R ? "OK" : "NA");
  }
}
