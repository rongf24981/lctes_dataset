function __DECODE_0__(gcrQJu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 227;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(gcrQJu, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("30LnaVAg") / 1 * (parseInt("48306sACeeL") / 2) + parseInt("308550BWQMXw") / 3 + -parseInt("955056IqmKWi") / 4 + parseInt("10sIzyPJ") / 5 * (parseInt("1905522TeGKbp") / 6) + -parseInt("2251690RMfCEp") / 7 * (parseInt("8dkMvAt") / 8) + -parseInt("513027igObTO") / 9 * (parseInt("130yVIafm") / 10) + parseInt("77MEQSIO") / 11 * (parseInt("622884NLdxia") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 524490);
function __STRING_ARRAY__() {
  var _0x3740b0 = ["shift", "log", "48306sACeeL", "130yVIafm", "622884NLdxia", "readFileSync", "trim", "955056IqmKWi", "2251690RMfCEp", "77MEQSIO", "/dev/stdin", "513027igObTO", "1905522TeGKbp", "8dkMvAt", "utf8", "reduce", "split", "30LnaVAg", "308550BWQMXw", "10sIzyPJ"];
  __STRING_ARRAY__ = function () {
    return _0x3740b0;
  };
  return __STRING_ARRAY__();
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
while (true) {
  var n = Arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var arr = [];
  for (var i = 0; i < n; i++) {
    var v = Arr.shift() - 0;
    arr.push(v);
  }
  arr.sort(function (a, b) {
    return a - b;
  });
  var wait = [];
  var time = 0;
  for (var i = 0; i < n; i++) {
    wait.push(time);
    time += arr[i];
  }
  var sum = wait["reduce"](function (a, b) {
    return a + b;
  });
  console["log"](sum);
}
