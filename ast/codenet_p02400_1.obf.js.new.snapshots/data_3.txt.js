function __DECODE_0__(CeREDb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 216;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CeREDb, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("6673dCkJeF") / 1 * (-parseInt("186cCVwsr") / 2) + parseInt("726585LajEPn") / 3 + parseInt("3654880XnXQng") / 4 + parseInt("260535jsLQPm") / 5 * (-parseInt("24nUaKMM") / 6) + -parseInt("7282632PgqKKm") / 7 + parseInt("2626016ZQqjSU") / 8 + -parseInt("2716560Zgsska") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 554112);
var lines = [];
function __STRING_ARRAY__() {
  var _0x29ac7d = ["6673dCkJeF", "726585LajEPn", "readline", "stdin", "log", "260535jsLQPm", "7282632PgqKKm", "186cCVwsr", "3654880XnXQng", "exit", "2716560Zgsska", "2626016ZQqjSU", "24nUaKMM", "toFixed", "createInterface"];
  __STRING_ARRAY__ = function () {
    return _0x29ac7d;
  };
  return __STRING_ARRAY__();
}
var reader = require("readline")["createInterface"]({
  input: process["stdin"],
  output: process.stdout
});
reader.on("line", function (line) {
  var a = line.split(" ");
  var b = parseInt(a[0], 10);
  var c = b * b * Math.PI;
  var d = b * 2 * Math.PI;
  console["log"](c["toFixed"](6) + " " + d["toFixed"](6));
  process["exit"]();
});
process["stdin"].on("end", function () {});
