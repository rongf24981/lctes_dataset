function __STRING_ARRAY__() {
  var _0x2598df = ["map", "log", "readFileSync", "11589450YAqUSU", "1460bWrLie", "17904XXfGHN", "14vMsvyL", "/dev/stdin", "2098017xCaDhg", "4347112gGIOdJ", "trim", "6RTRUoz", "2519152iCoOYL", "5870547DlPPYl", "length", "split", "275118IWhhov"];
  __STRING_ARRAY__ = function () {
    return _0x2598df;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("6RTRUoz") / 1 * (parseInt("275118IWhhov") / 2) + -parseInt("2098017xCaDhg") / 3 + parseInt("4347112gGIOdJ") / 4 + parseInt("1460bWrLie") / 5 * (parseInt("17904XXfGHN") / 6) + parseInt("14vMsvyL") / 7 * (parseInt("2519152iCoOYL") / 8) + -parseInt("5870547DlPPYl") / 9 + -parseInt("11589450YAqUSU") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 902681);
function __DECODE_0__(qbHVRu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 252;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qbHVRu, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n")["map"](Number);
while (Arr["length"] != 0) {
  var n = Arr.shift() / 4;
  if (n == 0) {
    break;
  }
  var sum = 0;
  while (n != 0) {
    sum += Arr.shift();
    n--;
  }
  console["log"](sum);
}
