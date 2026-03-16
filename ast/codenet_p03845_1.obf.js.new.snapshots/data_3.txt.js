(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("40462wqPYDN") / 1 + -parseInt("186750bAleRr") / 2 + parseInt("1699440trPHxw") / 3 + parseInt("1016732ficQJF") / 4 + -parseInt("18855taCqnT") / 5 * (-parseInt("6eqrMVY") / 6) + -parseInt("140STEcCa") / 7 * (-parseInt("3728qhyaMJ") / 8) + -parseInt("3977649gMERgl") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 338880);
process["stdin"]["resume"]();
process["stdin"]["setEncoding"]("ascii");
var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
process["stdin"].on("data", function (data) {
  input_stdin += data;
});
process.on("SIGINT", function () {
  input_stdin_array = input_stdin["split"]("\n");
  main();
  process["exit"]();
});
process.stdin.on("end", function () {
  input_stdin_array = input_stdin["split"]("\n");
  main();
});
function __STRING_ARRAY__() {
  var _0x463915 = ["3728qhyaMJ", "exit", "1699440trPHxw", "40462wqPYDN", "setEncoding", "186750bAleRr", "18855taCqnT", "push", "3977649gMERgl", "resume", "data", "end", "log", "1016732ficQJF", "6eqrMVY", "ascii", "split", "stdin", "140STEcCa"];
  __STRING_ARRAY__ = function () {
    return _0x463915;
  };
  return __STRING_ARRAY__();
}
function readLine() {
  return input_stdin_array[input_currentline++];
}
function __DECODE_0__(HCqHPw, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 379;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HCqHPw, key);
}
function main() {
  var N = parseInt(readLine());
  var s = readLine().split(" ");
  var T = [0];
  var sum = 0;
  for (var i = 1; i <= N; i++) {
    T["push"](parseInt(s[i - 1]));
    sum += T[i];
  }
  var M = parseInt(readLine());
  for (var k = 0; k < M; k++) {
    s = readLine()["split"](" ");
    var i = parseInt(s[0]);
    var x = parseInt(s[1]);
    console["log"](sum - T[i] + x);
  }
}
