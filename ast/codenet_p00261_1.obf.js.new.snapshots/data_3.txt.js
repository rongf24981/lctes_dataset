function __STRING_ARRAY__() {
  var _0x1e19ed = ["25512NAxhXd", "length", "Yes", "44910173IrOIwR", "6550telxoR", "845973nwdVHX", "2000598wrdkYc", "679vDsCiR", "shift", "205DkhBLd", "110CBERWu", "split", "log", "64hbDqWN", "utf8", "103384cGhJRn", "100580QfYbtb"];
  __STRING_ARRAY__ = function () {
    return _0x1e19ed;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("6550telxoR") / 1 + -parseInt("64hbDqWN") / 2 * (-parseInt("25512NAxhXd") / 3) + -parseInt("100580QfYbtb") / 4 * (parseInt("205DkhBLd") / 5) + -parseInt("2000598wrdkYc") / 6 + -parseInt("679vDsCiR") / 7 * (parseInt("103384cGhJRn") / 8) + -parseInt("845973nwdVHX") / 9 * (parseInt("110CBERWu") / 10) + parseInt("44910173IrOIwR") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 709545);
function __DECODE_0__(ketSal, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 141;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ketSal, key);
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input.trim()["split"]("\n");
while (true) {
  var str = Arr["shift"]();
  if (str == "#") {
    break;
  }
  var p = "A";
  for (var i = 0; i < str["length"]; i++) {
    var s = str[i] - 0;
    if (p == "A" && s === 0) {
      p = "X";
    } else if (p == "A" && s === 1) {
      p = "Y";
    } else if (p == "B" && s === 0) {
      p = "Y";
    } else if (p == "B" && s === 1) {
      p = "X";
    } else if (p == "W" && s === 0) {
      p = "B";
    } else if (p == "W" && s === 1) {
      p = "Y";
    } else if (p == "X" && s === 0) {
      p = "";
    } else if (p == "X" && s === 1) {
      p = "Z";
    } else if (p == "Y" && s === 0) {
      p = "X";
    } else if (p == "Y" && s === 1) {
      p = "";
    } else if (p == "Z" && s === 0) {
      p = "W";
    } else if (p == "Z" && s === 1) {
      p = "B";
    }
  }
  console["log"](p == "B" ? "Yes" : "No");
}
