(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("372123eXtRIf") / 1 + parseInt("29704JZHuAj") / 2 * (-parseInt("3oXyyUj") / 3) + parseInt("6694452SJyLwg") / 4 * (-parseInt("5vLaMvv") / 5) + -parseInt("942300wIFkSN") / 6 + parseInt("6156423iNvbbL") / 7 + parseInt("4578208xjlPzd") / 8 + parseInt("7813665vSMGxS") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 846558);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var lines = input.split("\n");
var w = +lines.shift();
var n = +lines["shift"]();
var list = [];
var line = null;
while (line = lines.shift()) {
  var args = line["split"](",");
  list["push"](args);
}
var answers = [];
for (var i = 1; i <= w; i++) {
  var k = i;
  list["forEach"](function (args) {
    if (args[0] == k) {
      k = args[1];
    } else if (args[1] == k) {
      k = args[0];
    }
  });
  answers[k] = i;
}
answers["shift"]();
function __STRING_ARRAY__() {
  var _0x45a7c4 = ["utf8", "/dev/stdin", "4578208xjlPzd", "forEach", "shift", "readFileSync", "push", "6694452SJyLwg", "3oXyyUj", "split", "372123eXtRIf", "6156423iNvbbL", "7813665vSMGxS", "942300wIFkSN", "29704JZHuAj", "5vLaMvv", "join"];
  __STRING_ARRAY__ = function () {
    return _0x45a7c4;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(FYdyNo, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 323;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FYdyNo, key);
}
console.log(answers["join"]("\n"));
