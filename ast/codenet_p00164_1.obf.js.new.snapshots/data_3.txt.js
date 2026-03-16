(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1YmPwLK") / 1 * (-parseInt("2813438RCkBem") / 2) + parseInt("491631qMuWNr") / 3 + -parseInt("12mhmGgP") / 4 * (-parseInt("1843605aOoAoD") / 5) + parseInt("6805494WdMsbG") / 6 + parseInt("7260414zuJsHr") / 7 + parseInt("8466016KEIyLd") / 8 + parseInt("16227vqiZZD") / 9 * (-parseInt("13080ziPtGc") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 734700);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
function __DECODE_0__(oIqaah, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 333;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(oIqaah, key);
}
function __STRING_ARRAY__() {
  var _0x157d48 = ["trim", "7260414zuJsHr", "491631qMuWNr", "utf8", "/dev/stdin", "8466016KEIyLd", "6805494WdMsbG", "shift", "log", "1YmPwLK", "split", "12mhmGgP", "2813438RCkBem", "13080ziPtGc", "16227vqiZZD", "1843605aOoAoD"];
  __STRING_ARRAY__ = function () {
    return _0x157d48;
  };
  return __STRING_ARRAY__();
}
while (true) {
  var n = Arr.shift() - 0;
  if (n == 0) {
    break;
  }
  var arr = Arr["shift"]()["split"](" ").map(Number);
  var ball = 32;
  var i = 0;
  while (true) {
    ball -= (ball - 1) % 5;
    console["log"](ball);
    if (ball == 1) {
      console["log"](0);
      break;
    }
    ball -= arr[i % n];
    i++;
    console["log"](ball);
  }
}
