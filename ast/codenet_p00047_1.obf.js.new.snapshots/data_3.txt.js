(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("382043SvfFsP") / 1 + -parseInt("547932clvLvT") / 2 + -parseInt("2023980pNtBHw") / 3 + -parseInt("4eaxVcU") / 4 * (-parseInt("3567845SFYSNw") / 5) + parseInt("5179008kgZOnH") / 6 + -parseInt("4387775yMDOFX") / 7 + parseInt("7186224kYWhVU") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 517521);
var a = "A";
process["stdin"]["resume"]();
function __STRING_ARRAY__() {
  var _0x293f07 = ["utf8", "4387775yMDOFX", "4eaxVcU", "split", "3567845SFYSNw", "5179008kgZOnH", "resume", "7186224kYWhVU", "log", "stdin", "data", "2023980pNtBHw", "end", "382043SvfFsP", "547932clvLvT"];
  __STRING_ARRAY__ = function () {
    return _0x293f07;
  };
  return __STRING_ARRAY__();
}
process["stdin"].setEncoding("utf8");
function __DECODE_0__(wVOLLt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 465;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wVOLLt, key);
}
process["stdin"].on("data", function (chunk) {
  input = chunk.trim()["split"](",");
  if (input[0] == a) {
    a = input[1];
  } else if (input[1] == a) {
    a = input[0];
  }
});
process["stdin"].on("end", function () {
  console["log"](a);
});
