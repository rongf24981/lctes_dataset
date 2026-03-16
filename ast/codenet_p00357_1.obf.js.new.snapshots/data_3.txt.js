function __DECODE_0__(FvQVTq, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 329;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FvQVTq, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("322998qdrVFx") / 1 + parseInt("1808462KkSNwL") / 2 * (parseInt("3LSJDXu") / 3) + -parseInt("3193684cCsgOu") / 4 + parseInt("685zdPdCf") / 5 * (-parseInt("20166EBFMac") / 6) + -parseInt("3411177ifwvSX") / 7 + -parseInt("6158264arGRjg") / 8 + parseInt("22700457GYETqU") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 587534);
function tobu(arr) {
  var max = 0;
  for (var i = 0; i < arr["length"] - 1; i++) {
    if (i > max) {
      break;
    }
    var d = Math["floor"](arr[i] / 10);
    max = Math["max"](max, i + d);
  }
  return max >= arr.length - 1;
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n").map(Number);
var n = arr.shift();
if (tobu(arr) && tobu(arr["reverse"]())) {
  console["log"]("yes");
} else {
  console.log("no");
}
function __STRING_ARRAY__() {
  var _0x2243a9 = ["3193684cCsgOu", "trim", "yes", "/dev/stdin", "22700457GYETqU", "685zdPdCf", "readFileSync", "1808462KkSNwL", "322998qdrVFx", "3411177ifwvSX", "3LSJDXu", "floor", "length", "6158264arGRjg", "20166EBFMac", "reverse", "split", "log", "max"];
  __STRING_ARRAY__ = function () {
    return _0x2243a9;
  };
  return __STRING_ARRAY__();
}
