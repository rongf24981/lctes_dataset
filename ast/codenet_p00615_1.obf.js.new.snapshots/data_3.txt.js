(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1487005fualpS") / 1 + -parseInt("610582GzMQSH") / 2 + -parseInt("33GhEdpr") / 3 * (-parseInt("315148fNDHfm") / 4) + -parseInt("6705845QqqFoP") / 5 + parseInt("579030yhYlLZ") / 6 * (parseInt("77ICAjLE") / 7) + parseInt("9787144wKkCtd") / 8 + parseInt("9gWHGzI") / 9 * (parseInt("7286270snxmqd") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 746767);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["replace"](/\n$/, "")["split"]("\n");
function __STRING_ARRAY__() {
  var _0x3b7d46 = ["map", "replace", "0 0", "1487005fualpS", "concat", "readFileSync", "579030yhYlLZ", "9787144wKkCtd", "315148fNDHfm", "split", "log", "33GhEdpr", "sort", "9gWHGzI", "/dev/stdin", "6705845QqqFoP", "max", "77ICAjLE", "7286270snxmqd", "610582GzMQSH", "abs", "shift"];
  __STRING_ARRAY__ = function () {
    return _0x3b7d46;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(iyGOhv, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 447;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iyGOhv, key);
}
while (true) {
  var str = Arr["shift"]();
  if (str == "0 0") {
    break;
  }
  var arr = str["split"](" ");
  var data = [0];
  if (arr[0] > 0) {
    data = data["concat"](Arr.shift()["split"](" ")["map"](Number));
  }
  if (arr[1] > 0) {
    data = data["concat"](Arr["shift"]()["split"](" ")["map"](Number));
  }
  data["sort"](function (a, b) {
    return a - b;
  });
  var max = 0;
  data.reduce(function (a, b) {
    max = Math["max"](max, Math["abs"](a - b));
    return b;
  });
  console["log"](max);
}
