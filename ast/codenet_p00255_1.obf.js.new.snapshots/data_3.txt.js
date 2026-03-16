(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1723717pMBpsD") / 1 + -parseInt("2KuEBKy") / 2 * (-parseInt("541887hbKKYc") / 3) + -parseInt("2383844juNKmN") / 4 + -parseInt("4229650ENJteD") / 5 + parseInt("6bksFEH") / 6 * (-parseInt("6501593yryEor") / 7) + parseInt("11896528EwelPn") / 8 + -parseInt("1055826qWoJvj") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 903408);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.trim()["split"]("\n");
while (true) {
  var n = Arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var p = Arr["shift"]()["split"](" ")["map"](Number);
  var j = Arr.shift()["split"](" ").map(Number);
  var sum = p["reduce"](function (a, b) {
    return a + b;
  });
  j["sort"](function (a, b) {
    return b - a;
  });
  var max = sum * n;
  while (true) {
    if (j["length"] == 0) {
      break;
    }
    n--;
    max = Math["max"](max, (sum + j["shift"]()) * n);
  }
  console["log"](max);
}
function __DECODE_0__(fJiAOj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 453;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fJiAOj, key);
}
function __STRING_ARRAY__() {
  var _0xc087de = ["6bksFEH", "1723717pMBpsD", "map", "11896528EwelPn", "split", "541887hbKKYc", "6501593yryEor", "reduce", "readFileSync", "4229650ENJteD", "shift", "log", "max", "/dev/stdin", "1055826qWoJvj", "2383844juNKmN", "length", "2KuEBKy", "sort"];
  __STRING_ARRAY__ = function () {
    return _0xc087de;
  };
  return __STRING_ARRAY__();
}
