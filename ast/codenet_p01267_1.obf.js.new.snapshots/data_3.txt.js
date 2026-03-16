(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1pNtzge") / 1 * (parseInt("655940fAqVzi") / 2) + -parseInt("804390uuTVzd") / 3 + parseInt("16ikNVVA") / 4 * (-parseInt("270090sjgOLD") / 5) + parseInt("3835188GJcakQ") / 6 + -parseInt("449351eaQhmG") / 7 + -parseInt("6194544futxPD") / 8 + parseInt("12626289VFWOiU") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 391436);
function __DECODE_0__(iyMkyM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 459;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iyMkyM, key);
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input["replace"](/\n$/, "")["split"]("\n");
while (true) {
  var arr = Arr["shift"]().split(" ").map(Number);
  if (arr.join("") == "00000") {
    break;
  }
  var y = Arr["shift"]()["split"](" ")["map"](Number);
  (function (N, A, B, C, X) {
    var i = 0;
    while (true) {
      if (y[0] == X) {
        y["shift"]();
      }
      if (y["length"] == 0) {
        console["log"](i);
        break;
      }
      X = (A * X + B) % C;
      i++;
      if (i == 10001) {
        console["log"](-1);
        break;
      }
    }
  })["apply"](null, arr);
}
function __STRING_ARRAY__() {
  var _0xc6a4b7 = ["map", "449351eaQhmG", "00000", "split", "3835188GJcakQ", "1pNtzge", "shift", "utf8", "apply", "16ikNVVA", "6194544futxPD", "12626289VFWOiU", "270090sjgOLD", "804390uuTVzd", "replace", "655940fAqVzi", "log", "length", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0xc6a4b7;
  };
  return __STRING_ARRAY__();
}
