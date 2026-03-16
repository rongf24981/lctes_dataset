function __DECODE_0__(OrnfWf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 382;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OrnfWf, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("2715fbPLVO") / 1 * (parseInt("446wffXDF") / 2) + parseInt("3099972NgFUQA") / 3 * (-parseInt("4bpzxOD") / 4) + -parseInt("25euznKi") / 5 * (-parseInt("369690XCcJHl") / 6) + -parseInt("75138cuZTrO") / 7 * (-parseInt("808xWohnA") / 8) + parseInt("10414746EDpLxz") / 9 + -parseInt("10680nOywpF") / 10 * (parseInt("11693lOoLUZ") / 11) + parseInt("9734652InBVZf") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 586571);
function Main(input) {
  var input = input["split"]("\n");
  var ballXList = input[2]["split"](" ");
  var ret = 0;
  for (var i = 0; i < input[0]; i++) {
    var aDistance = ballXList[i];
    var bDistance = input[1] - ballXList[i];
    var ret = ret + (aDistance < bDistance ? aDistance : bDistance) * 2;
  }
  console["log"](ret);
}
function __STRING_ARRAY__() {
  var _0x5aaa4f = ["2715fbPLVO", "369690XCcJHl", "10414746EDpLxz", "readFileSync", "25euznKi", "10680nOywpF", "808xWohnA", "11693lOoLUZ", "/dev/stdin", "4bpzxOD", "446wffXDF", "log", "9734652InBVZf", "75138cuZTrO", "split", "3099972NgFUQA"];
  __STRING_ARRAY__ = function () {
    return _0x5aaa4f;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
