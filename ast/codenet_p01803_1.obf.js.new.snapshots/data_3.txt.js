function __STRING_ARRAY__() {
  var _0x2b736a = ["1500433kqkMHT", "keys", "350152QETgHb", "6KomUub", "test", "max", "log", "9bFziOd", "utf8", "5QOSQhX", "split", "139727LPEBhq", "length", "4014832ExdxrP", "forEach", "4493550NVCPbV", "768020BDIbMI", "slice", "77466oeEJNw", "48cGsWKL", "shift"];
  __STRING_ARRAY__ = function () {
    return _0x2b736a;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("350152QETgHb") / 1 + parseInt("77466oeEJNw") / 2 * (-parseInt("48cGsWKL") / 3) + parseInt("768020BDIbMI") / 4 * (parseInt("5QOSQhX") / 5) + parseInt("6KomUub") / 6 * (parseInt("139727LPEBhq") / 7) + -parseInt("4014832ExdxrP") / 8 * (-parseInt("9bFziOd") / 9) + parseInt("4493550NVCPbV") / 10 + parseInt("1500433kqkMHT") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 329698);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var arr = input.trim()["split"]("\n");
function __DECODE_0__(liQwSr, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 315;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(liQwSr, key);
}
while (true) {
  var n = arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var Arr = arr.splice(0, n);
  var obj = {};
  var max = 0;
  Arr["forEach"](function (v) {
    var str = v;
    var s = str[0];
    var flag = false;
    for (var i = 0; i < str["length"]; i++) {
      if (flag) {
        s += str[i];
      }
      flag = /[aiueo]/["test"](str[i]) ? true : false;
    }
    obj[s] = true;
    max = Math["max"](max, s["length"]);
  });
  for (var i = 1; i <= max; i++) {
    var Obj = {};
    for (var key in obj) {
      Obj[key["slice"](0, i)] = true;
    }
    if (Object["keys"](Obj)["length"] == n) {
      console["log"](i);
      break;
    }
    if (i == max) {
      console["log"](-1);
    }
  }
}
