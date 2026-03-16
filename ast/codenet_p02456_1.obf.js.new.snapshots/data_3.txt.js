function __STRING_ARRAY__() {
  var _0x33f515 = ["137125VyQatY", "452187lJExOR", "9wqSPsu", "1056172racPrH", "53fCZFAL", "has", "7946clyvwF", "2501280ilexBy", "set", "split", "utf8", "shift", "707cBVrlc", "trim", "/dev/stdin", "size", "2548220zpNCzg", "13308nLqFMG"];
  __STRING_ARRAY__ = function () {
    return _0x33f515;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("53fCZFAL") / 1 * (-parseInt("7946clyvwF") / 2) + -parseInt("452187lJExOR") / 3 + parseInt("1056172racPrH") / 4 + parseInt("137125VyQatY") / 5 + -parseInt("13308nLqFMG") / 6 * (parseInt("707cBVrlc") / 7) + parseInt("2501280ilexBy") / 8 + parseInt("9wqSPsu") / 9 * (-parseInt("2548220zpNCzg") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 185128);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
function __DECODE_0__(HUnpdR, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 246;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HUnpdR, key);
}
var arr = input["trim"]()["split"]("\n");
var q = arr["shift"]() - 0;
var str = "";
var set = new Map();
for (var i = 0; i < q; i++) {
  var [a, b] = arr[i]["split"](" ");
  if (a == "0") {
    set["set"](b, 0);
    str += set["size"] + "\n";
  } else if (a == "1") {
    str += (set["has"](b) ? 1 : 0) + "\n";
  } else {
    set.delete(b);
  }
}
console.log(str.trim());
