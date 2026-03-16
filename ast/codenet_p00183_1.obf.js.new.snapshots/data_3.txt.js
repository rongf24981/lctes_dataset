(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("313894VceNon") / 1 + parseInt("661280aUHKYc") / 2 + -parseInt("1944417pbszgx") / 3 + parseInt("249168wTaugd") / 4 + -parseInt("2072100uEdZOF") / 5 + parseInt("29010ytvZVe") / 6 * (parseInt("875CwbvAX") / 7) + -parseInt("650456OcSITD") / 8 * (-parseInt("9mdkFHX") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 329949);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x440cb4 = ["875CwbvAX", "shift", "2072100uEdZOF", "650456OcSITD", "/dev/stdin", "661280aUHKYc", "9mdkFHX", "log", "split", "29010ytvZVe", "249168wTaugd", "313894VceNon", "utf8", "1944417pbszgx", "replace"];
  __STRING_ARRAY__ = function () {
    return _0x440cb4;
  };
  return __STRING_ARRAY__();
}
var Arr = input["replace"](/\n$/, "")["split"]("\n");
function __DECODE_0__(XsnjoB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 107;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XsnjoB, key);
}
while (true) {
  var x = Arr["shift"]()["split"]("");
  if (x[0] == "0") {
    break;
  }
  var y = Arr["shift"]()["split"]("");
  var z = Arr["shift"]().split("");
  var ans = "NA";
  for (var i = 0; i < 2; i++) {
    var s = ["b", "w"][i];
    if (x[0] + x[1] + x[2] == s + s + s) {
      ans = s;
    }
    if (y[0] + y[1] + y[2] == s + s + s) {
      ans = s;
    }
    if (z[0] + z[1] + z[2] == s + s + s) {
      ans = s;
    }
    if (x[0] + y[0] + z[0] == s + s + s) {
      ans = s;
    }
    if (x[1] + y[1] + z[1] == s + s + s) {
      ans = s;
    }
    if (x[2] + y[2] + z[2] == s + s + s) {
      ans = s;
    }
    if (x[0] + y[1] + z[2] == s + s + s) {
      ans = s;
    }
    if (x[2] + y[1] + z[0] == s + s + s) {
      ans = s;
    }
  }
  console["log"](ans);
}
