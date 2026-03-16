(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1UlMNTB") / 1 * (-parseInt("365962DuEzbZ") / 2) + parseInt("16386FFuojJ") / 3 * (-parseInt("888hEEORp") / 4) + parseInt("5799045zXpbcU") / 5 + parseInt("7130622ngLDHW") / 6 + -parseInt("6592684wcpwBa") / 7 + parseInt("800IQcOrs") / 8 * (-parseInt("105471kNCtRa") / 9) + parseInt("5770TzbVaL") / 10 * (parseInt("34001XRbqZA") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 622496);
function __STRING_ARRAY__() {
  var _0x4b4f6f = ["16386FFuojJ", "1UlMNTB", "split", "34001XRbqZA", "5799045zXpbcU", "888hEEORp", "log", "105471kNCtRa", "7130622ngLDHW", "shift", "800IQcOrs", "length", "utf8", "365962DuEzbZ", "readFileSync", "5770TzbVaL", "6592684wcpwBa", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x4b4f6f;
  };
  return __STRING_ARRAY__();
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.trim()["split"]("\n");
var t = Arr[0].split(" ")[1] - 0;
function __DECODE_0__(LaxtHg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 169;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LaxtHg, key);
}
Arr["shift"]();
var T = 0;
while (Arr["length"] != 0) {
  var arr = Arr[0].split(" ");
  Arr["shift"]();
  var a = arr[0];
  var b = arr[1] - 0;
  if (b - t <= 0) {
    console["log"](a + " " + (T + b));
    T += b;
  } else {
    Arr.push(a + " " + (b - t));
    T += t;
  }
}
