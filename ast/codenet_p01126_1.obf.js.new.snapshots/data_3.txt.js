(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("221469kZoDlQ") / 1 + -parseInt("3360694GsEAzu") / 2 + parseInt("4429395Uvlysp") / 3 + -parseInt("4511428CFWbhB") / 4 + -parseInt("15ZRZMJe") / 5 * (parseInt("1461534oqFHXx") / 6) + -parseInt("7fdokQw") / 7 * (parseInt("9054784ARvNqU") / 8) + -parseInt("35160633tDCAus") / 9 * (-parseInt("10eyBEpI") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 933852);
function __DECODE_0__(AUrNJL, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 265;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(AUrNJL, key);
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
function __STRING_ARRAY__() {
  var _0x1da5c8 = ["utf8", "7fdokQw", "4429395Uvlysp", "log", "1461534oqFHXx", "split", "10eyBEpI", "35160633tDCAus", "sort", "map", "4511428CFWbhB", "221469kZoDlQ", "3360694GsEAzu", "0 0 0", "shift", "trim", "15ZRZMJe", "push", "9054784ARvNqU"];
  __STRING_ARRAY__ = function () {
    return _0x1da5c8;
  };
  return __STRING_ARRAY__();
}
while (true) {
  var A = Arr["shift"]();
  if (A == "0 0 0") {
    break;
  }
  var arr = A["split"](" ")["map"](Number);
  var m = arr[1];
  var start = arr[2];
  var hpq = [];
  for (var i = 0; i < m; i++) {
    hpq["push"](Arr["shift"]());
  }
  hpq["sort"](function (a, b) {
    a = a.split(" ")[0] - 0;
    b = b["split"](" ")[0] - 0;
    if (a >= b) {
      return -1;
    } else {
      return 1;
    }
  });
  var H = 1001;
  for (var i = 0; i < hpq.length; i++) {
    var HPQ = hpq[i]["split"](" ")["map"](Number);
    var h = HPQ[0];
    var p = HPQ[1];
    var q = HPQ[2];
    if (H == h) {
      continue;
    }
    if (start == p || start == q) {
      H = h;
      start = start == p ? q : p;
    }
  }
  console["log"](start);
}
