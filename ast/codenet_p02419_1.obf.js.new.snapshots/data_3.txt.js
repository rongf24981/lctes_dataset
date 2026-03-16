'use strict';

function __STRING_ARRAY__() {
  var _0x74c8fc = ["211398rUkhOp", "8LMSGLY", "1619088hjWoCL", "log", "121280iMLhNO", "filter", "readFileSync", "utf8", "391757ThtOWC", "trim", "length", "1301657peKfEL", "split", "2oihzss", "76310ZidAWD", "toLowerCase", "14170222iotpYy", "48KGfXVE", "shift", "join", "639IChGEd", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x74c8fc;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(bDtWBk, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 499;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bDtWBk, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("391757ThtOWC") / 1 + parseInt("2oihzss") / 2 * (-parseInt("211398rUkhOp") / 3) + -parseInt("1619088hjWoCL") / 4 + -parseInt("121280iMLhNO") / 5 * (parseInt("48KGfXVE") / 6) + parseInt("1301657peKfEL") / 7 * (-parseInt("8LMSGLY") / 8) + -parseInt("639IChGEd") / 9 * (parseInt("76310ZidAWD") / 10) + parseInt("14170222iotpYy") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 282921);
(function (stdin) {
  var lines = stdin.toString()["split"]("\n");
  var result = function (word, data) {
    return data["filter"](function (v) {
      return v === word;
    })["length"];
  }(lines["shift"]()["toLowerCase"](), lines["join"]("")["split"]("END_OF_TEXT")[0]["toLowerCase"]()["trim"]()["split"](" "));
  console["log"](result);
})(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
