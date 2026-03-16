(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("522643udaWtX") / 1 * (-parseInt("2sDwvVP") / 2) + parseInt("1362549PiwnbD") / 3 + parseInt("88cGqwFD") / 4 * (-parseInt("163855xvllim") / 5) + parseInt("4447902CoUWFj") / 6 * (-parseInt("7AdplFG") / 7) + parseInt("6416240mOEECS") / 8 + parseInt("5139378dBYGlu") / 9 + -parseInt("4206340vocHoQ") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 466985);
function Main(input) {
  function counter(str, seq) {
    return str["split"](seq)["length"] - 1;
  }
  lines = input.split("\n");
  var s = lines[0];
  var bw = counter(s, "BW");
  var wb = counter(s, "WB");
  console["log"](bw + wb);
}
function __DECODE_0__(cmDqUc, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 277;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(cmDqUc, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x49933d = ["readFileSync", "4206340vocHoQ", "88cGqwFD", "length", "2sDwvVP", "/dev/stdin", "6416240mOEECS", "7AdplFG", "log", "split", "522643udaWtX", "4447902CoUWFj", "5139378dBYGlu", "utf8", "163855xvllim", "1362549PiwnbD"];
  __STRING_ARRAY__ = function () {
    return _0x49933d;
  };
  return __STRING_ARRAY__();
}
