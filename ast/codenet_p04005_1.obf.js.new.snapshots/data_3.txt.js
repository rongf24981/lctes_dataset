function __DECODE_0__(dVDLLq, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 115;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dVDLLq, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1454784pBvzvj") / 1 + parseInt("3787310zkUqQo") / 2 + -parseInt("5677899OqHYaG") / 3 * (-parseInt("4hMuBoH") / 4) + parseInt("494780tqUNDq") / 5 + -parseInt("9920874ZoXkWR") / 6 + parseInt("8515738bHSxFQ") / 7 + -parseInt("8314032OeCgYh") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 954261);
function __STRING_ARRAY__() {
  var _0x558550 = ["4hMuBoH", "utf8", "sort", "readFileSync", "3787310zkUqQo", "trim", "log", "8515738bHSxFQ", "494780tqUNDq", "5677899OqHYaG", "map", "8314032OeCgYh", "split", "1454784pBvzvj", "9920874ZoXkWR"];
  __STRING_ARRAY__ = function () {
    return _0x558550;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input["split"](" ")["map"](Number);
  if (input[0] % 2 == 0 && input[1] % 2 == 0 && input[2] % 2 == 0) {
    console["log"](0);
  } else {
    input = input["sort"](function (a, b) {
      return a - b;
    });
    console["log"](input[1] * input[0]);
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]());
