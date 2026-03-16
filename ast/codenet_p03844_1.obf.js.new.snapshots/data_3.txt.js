(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("485230eqDdqg") / 1 + parseInt("1574500BOEmPY") / 2 + -parseInt("5816511mXAQbg") / 3 + -parseInt("4316160ljSKRq") / 4 + parseInt("9362070gnsvQW") / 5 + -parseInt("6837402OnUdHB") / 6 + parseInt("5523WxlRqh") / 7 * (parseInt("20224wgjJzO") / 8);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 982042);
process["stdin"].resume();
function __STRING_ARRAY__() {
  var _0x53105a = ["log", "6837402OnUdHB", "1574500BOEmPY", "split", "485230eqDdqg", "5523WxlRqh", "stdin", "SIGINT", "20224wgjJzO", "ascii", "exit", "5816511mXAQbg", "9362070gnsvQW", "data", "4316160ljSKRq"];
  __STRING_ARRAY__ = function () {
    return _0x53105a;
  };
  return __STRING_ARRAY__();
}
process["stdin"].setEncoding("ascii");
var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
process.stdin.on("data", function (data) {
  input_stdin += data;
});
process.on("SIGINT", function () {
  input_stdin_array = input_stdin.split("\n");
  main();
  process["exit"]();
});
process.stdin.on("end", function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});
function readLine() {
  return input_stdin_array[input_currentline++];
}
function __DECODE_0__(boikmr, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 228;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(boikmr, key);
}
function main() {
  var s = readLine()["split"](" ");
  var a = parseInt(s[0]);
  var op = s[1];
  var b = parseInt(s[2]);
  var c;
  if (op == "+") {
    c = a + b;
  } else {
    c = a - b;
  }
  console["log"](c);
}
