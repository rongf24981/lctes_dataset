(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("52057MdhgAW") / 1 * (parseInt("14JeQQkD") / 2) + -parseInt("637236TrDgDe") / 3 + parseInt("316dqKRNE") / 4 * (parseInt("40660gwofxF") / 5) + -parseInt("1669224fcMZQi") / 6 + parseInt("147vuXTTJ") / 7 * (-parseInt("35488xjGIIT") / 8) + -parseInt("3259755YWqAYq") / 9 + -parseInt("30bxSkQx") / 10 * (-parseInt("4082683UrHkjb") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 445521);
function __DECODE_0__(HzkcAf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 456;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HzkcAf, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0xf9b317 = ["sort", "push", "316dqKRNE", "4082683UrHkjb", "147vuXTTJ", "35488xjGIIT", "30bxSkQx", "length", "trim", "readFileSync", "shift", "40660gwofxF", "log", "637236TrDgDe", "14JeQQkD", "3259755YWqAYq", "1669224fcMZQi", "52057MdhgAW", "split"];
  __STRING_ARRAY__ = function () {
    return _0xf9b317;
  };
  return __STRING_ARRAY__();
}
var Arr = input["trim"]().split("\n");
var D = Arr["shift"]() - 0;
var x = Arr["shift"]() - 0;
var X = [];
for (var i = 0; i < x; i++) {
  var v = Arr["shift"]()["split"](" ");
  if (v[0] == "D") {
    X.push(v[1] - 0);
  }
}
X["sort"](function (a, b) {
  return b - a;
});
var y = Arr["shift"]() - 0;
var Y = [];
for (var i = 0; i < y; i++) {
  var v = Arr.shift()["split"](" ");
  if (v[0] == "DD") {
    Y["push"](v[1] - 0);
  }
}
Y["sort"](function (a, b) {
  return b - a;
});
var max = 0;
for (var x = 0; x <= X["length"]; x++) {
  for (var y = 0; y <= Y["length"]; y++) {
    if (D < x + y * 2) {
      break;
    }
    var sum = 0;
    for (var i = 0; i < x; i++) {
      sum += X[i];
    }
    for (var i = 0; i < y; i++) {
      sum += Y[i];
    }
    max = Math.max(max, sum);
  }
}
console["log"](max);
