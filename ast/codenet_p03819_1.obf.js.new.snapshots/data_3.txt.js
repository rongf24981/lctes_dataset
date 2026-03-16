(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("5ZiKHKo") / 1 * (-parseInt("352894vnaUpq") / 2) + -parseInt("2943ftGorU") / 3 * (-parseInt("2916sewgvN") / 4) + parseInt("2884325UGyxFg") / 5 + -parseInt("7911306awJboG") / 6 + parseInt("123977bZekkb") / 7 * (-parseInt("192IywsUA") / 8) + -parseInt("12958857KXDyzm") / 9 + parseInt("17321020GLJjjF") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 722863);
function Main(input) {
  input = input.split("\n");
  var N = input[0].split(" ")[0] - 0;
  var M = input[0].split(" ")[1] - 0;
  var answer = new Array(M + 1);
  answer["fill"](0);
  var line;
  for (var i = 1; i < input["length"]; i++) {
    line = input[i]["split"](" ");
    line[1] -= 0;
    line[0] -= 0;
    for (var j = 1; j <= M; j++) {
      if (!(line[1] - line[0] < j - 1) || !(line[1] % j >= line[0] % j) || !(line[0] % j > 0)) {
        answer[j]++;
      }
    }
  }
  answer["shift"]();
  console["log"](answer["join"]("\n"));
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __DECODE_0__(YFkrgu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 268;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YFkrgu, key);
}
function __STRING_ARRAY__() {
  var _0xcf3a78 = ["join", "5ZiKHKo", "fill", "123977bZekkb", "192IywsUA", "352894vnaUpq", "utf8", "2943ftGorU", "12958857KXDyzm", "split", "2916sewgvN", "log", "shift", "2884325UGyxFg", "17321020GLJjjF", "length", "7911306awJboG", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0xcf3a78;
  };
  return __STRING_ARRAY__();
}
