function __STRING_ARRAY__() {
  var _0x2858b6 = ["361492PnmpZw", "map", "11206971XGSxLv", "100BdLnKt", "max", "394513yooRUA", "readFileSync", "log", "546787LiWTaK", "utf8", "4471624GAuKXW", "2235575BeoLtL", "split", "139431DmyYIQ", "trim", "0 0", "6sBxZai", "shift", "/dev/stdin", "length"];
  __STRING_ARRAY__ = function () {
    return _0x2858b6;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("546787LiWTaK") / 1 + -parseInt("361492PnmpZw") / 2 + parseInt("139431DmyYIQ") / 3 * (parseInt("100BdLnKt") / 4) + -parseInt("2235575BeoLtL") / 5 + parseInt("6sBxZai") / 6 * (parseInt("394513yooRUA") / 7) + -parseInt("4471624GAuKXW") / 8 + parseInt("11206971XGSxLv") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 729902);
function __DECODE_0__(vFAidr, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 244;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vFAidr, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
while (true) {
  var v = Arr["shift"]();
  if (v == "0 0") {
    break;
  }
  var NQ = v["split"](" ")["map"](Number);
  var arr = [];
  for (var i = 0; i < 50; i++) {
    arr[i] = 0;
  }
  for (var i = 0; i < NQ[0]; i++) {
    var day = Arr.shift()["split"](" ")["map"](Number);
    var L = day["shift"]();
    for (var j = 0; j < L; j++) {
      arr[day[j]]++;
    }
  }
  var result = 0;
  var max = Math["max"].apply(null, arr);
  if (max >= NQ[1]) {
    NQ[1] = max;
  }
  for (var i = 0; i < arr["length"]; i++) {
    if (arr[i] >= NQ[1]) {
      result = i;
      break;
    }
  }
  console["log"](result);
}
