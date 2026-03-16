function __DECODE_0__(fznMDu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 351;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fznMDu, key);
}
function __STRING_ARRAY__() {
  var _0x3a94aa = ["/dev/stdin", "444564ypIjjx", "setEncoding", "split", "2IUXPnC", "7760159hTfKbo", "438258NkKHhY", "91436AlGUit", "log", "8TuMSyO", "1412890vZjQoG", "3775604LLPliL", "18TyGEAL", "utf8", "4595faCjXo", "stdin", "initial_answer", "1374TyQmbm"];
  __STRING_ARRAY__ = function () {
    return _0x3a94aa;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("2IUXPnC") / 1 * (parseInt("91436AlGUit") / 2) + parseInt("438258NkKHhY") / 3 + -parseInt("444564ypIjjx") / 4 + parseInt("4595faCjXo") / 5 * (parseInt("1374TyQmbm") / 6) + parseInt("3775604LLPliL") / 7 * (parseInt("8TuMSyO") / 8) + -parseInt("18TyGEAL") / 9 * (-parseInt("1412890vZjQoG") / 10) + -parseInt("7760159hTfKbo") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 270441);
process["stdin"].resume();
process["stdin"]["setEncoding"]("utf8");
function Main(input) {
  var arg = input.split("\n");
  var line0 = arg[0].split(" ");
  var line1 = arg[1]["split"](" ");
  var line2 = arg[2].split(" ");
  var line3 = arg[3].split(" ");
  var input1 = Number(line0[0]);
  var input2 = Number(line1[0]);
  var input3 = Number(line2[0]);
  var input4 = Number(line3[0]);
  var ans = "initial_answer";
  if (input1 < input2) {
    console["log"](input3 * input1);
  } else {
    console["log"](input3 * input2 + (input1 - input2) * input4);
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
