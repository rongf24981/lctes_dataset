(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("30285liXgyY") / 1 * (-parseInt("2obkYAj") / 2) + -parseInt("620340CftHfn") / 3 + parseInt("8XYwPux") / 4 * (-parseInt("41635rbPLet") / 5) + parseInt("18eIJlgI") / 6 * (parseInt("477673ZAHNtg") / 7) + -parseInt("1496848HHkwAz") / 8 + parseInt("933966ttpSvB") / 9 + parseInt("1789410ImZbuZ") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 107177);
function Main(input) {
  input = input["split"]("\n").map(n => parseInt(n, 10));
  console["log"](Math["pow"](input[0], 2) - input[1]);
}
function __DECODE_0__(dAqoQt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 463;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dAqoQt, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x4e667c = ["41635rbPLet", "8XYwPux", "readFileSync", "log", "18eIJlgI", "/dev/stdin", "2obkYAj", "620340CftHfn", "1789410ImZbuZ", "477673ZAHNtg", "1496848HHkwAz", "933966ttpSvB", "pow", "30285liXgyY", "utf8", "split"];
  __STRING_ARRAY__ = function () {
    return _0x4e667c;
  };
  return __STRING_ARRAY__();
}
