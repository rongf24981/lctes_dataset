function __DECODE_0__(aFmPiZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 467;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(aFmPiZ, key);
}
function __STRING_ARRAY__() {
  var _0x342e5c = ["70420MsqVyS", "1564506FgOdIm", "log", "filter", "161lQltCt", "926321rRZNmq", "372wHPVTh", "2269836afCBat", "map", "utf8", "4518824Qrgltf", "1964EjKgNv", "25WJUhtG", "readFileSync", "529wtpJla", "846tYRQVU", "split", "126344htkKyI", "shift", "trim", "length"];
  __STRING_ARRAY__ = function () {
    return _0x342e5c;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("529wtpJla") / 1 * (-parseInt("1964EjKgNv") / 2) + parseInt("2269836afCBat") / 3 + -parseInt("4518824Qrgltf") / 4 + parseInt("25WJUhtG") / 5 * (-parseInt("1564506FgOdIm") / 6) + -parseInt("161lQltCt") / 7 * (parseInt("126344htkKyI") / 8) + -parseInt("846tYRQVU") / 9 * (-parseInt("70420MsqVyS") / 10) + parseInt("926321rRZNmq") / 11 * (parseInt("372wHPVTh") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 712923);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]().split("\n");
while (true) {
  var arr = Arr["shift"]()["split"](" ")["map"](Number);
  if (arr[0] == 0) {
    break;
  }
  var sum = 0;
  arr = arr["filter"](function (v) {
    if (v > 10) {
      v = 10;
    }
    sum += v;
    return v == 1;
  });
  var i = arr["length"];
  while (i != 0) {
    if (sum + 10 <= 21) {
      sum += 10;
    }
    i--;
  }
  console["log"](sum > 21 ? 0 : sum);
}
