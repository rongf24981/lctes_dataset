(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("450161lRjNZA") / 1 * (parseInt("2vOEXOM") / 2) + parseInt("141HKkJDR") / 3 * (-parseInt("58948QdOOOD") / 4) + parseInt("14055VJdCnP") / 5 * (-parseInt("258xxUEQy") / 6) + -parseInt("154882tRMwha") / 7 + -parseInt("16XDFuoU") / 8 * (parseInt("1982277IFrXis") / 9) + parseInt("2110730kIgdUd") / 10 + parseInt("22536514aAjaGe") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 533542);
function __DECODE_0__(tRHpyV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 477;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tRHpyV, key);
}
var abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.trim()["split"]("\n");
function __STRING_ARRAY__() {
  var _0x3049fa = ["indexOf", "split", "16XDFuoU", "58948QdOOOD", "14055VJdCnP", "join", "450161lRjNZA", "141HKkJDR", "map", "22536514aAjaGe", "shift", "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", "length", "2110730kIgdUd", "154882tRMwha", "258xxUEQy", "readFileSync", "/dev/stdin", "utf8", "1982277IFrXis", "2vOEXOM"];
  __STRING_ARRAY__ = function () {
    return _0x3049fa;
  };
  return __STRING_ARRAY__();
}
while (true) {
  var n = Arr.shift() - 0;
  if (n == 0) {
    break;
  }
  var k = Arr["shift"]()["split"](" ")["map"](Number);
  var arr = Arr["shift"]().split("");
  var j = 0;
  for (var i = 0; i < arr["length"]; i++) {
    var num = abc["indexOf"](arr[i]) - k[i % k["length"]];
    if (num < 0) {
      num += abc.length;
    }
    arr[i] = abc[num];
  }
  console.log(arr["join"](""));
}
