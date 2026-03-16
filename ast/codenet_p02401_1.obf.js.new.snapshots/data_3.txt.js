function __DECODE_0__(rMorPj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 199;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rMorPj, key);
}
function __STRING_ARRAY__() {
  var _0x1aa269 = ["length", "5455760SyMcga", "stdin", "split", "117306AeTHWc", "11aTRwaL", "7COJhMJ", "3056346uiGniS", "1690785EedguW", "28NMuqNW", "data", "106fSmZQG", "utf8", "log", "4546182Swlyaz", "15293gBENPC", "25002610glQVBd"];
  __STRING_ARRAY__ = function () {
    return _0x1aa269;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("15293gBENPC") / 1 * (parseInt("106fSmZQG") / 2) + -parseInt("117306AeTHWc") / 3 * (-parseInt("28NMuqNW") / 4) + parseInt("1690785EedguW") / 5 + parseInt("4546182Swlyaz") / 6 * (-parseInt("7COJhMJ") / 7) + -parseInt("5455760SyMcga") / 8 + -parseInt("3056346uiGniS") / 9 + -parseInt("25002610glQVBd") / 10 * (-parseInt("11aTRwaL") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 522342);
process["stdin"].resume();
process["stdin"].setEncoding("utf8");
process["stdin"].on("data", function (chunk) {
  var input = chunk.split("\n");
  var output = "";
  for (var i = 0; i < input["length"]; i++) {
    var r = calc(input[i]);
    if (r !== false) {
      console["log"](r);
    }
  }
  function calc(input) {
    var nums = input["split"](" ");
    nums[0] = Number(nums[0]);
    nums[2] = Number(nums[2]);
    if (nums[1] == "+") {
      return nums[0] + nums[2];
    } else if (nums[1] == "-") {
      return nums[0] - nums[2];
    } else if (nums[1] == "*") {
      return nums[0] * nums[2];
    } else if (nums[1] == "/") {
      return nums[0] / nums[2];
    } else if (nums[1] == "?") {
      return false;
    }
  }
});
