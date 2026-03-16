function __DECODE_0__(lbLCYk, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 231;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(lbLCYk, key);
}
function __STRING_ARRAY__() {
  var _0x512489 = ["forEach", "readFileSync", "384wLXNrj", "log", "2tCbgno", "7529951JoZvKC", "66jvjWLq", "9LqlBdp", "utf8", "shift", "57tahHyh", "fill", "2159333glNnXm", "map", "/dev/stdin", "21bBNNhP", "208773qSELvV", "2031680NCueRR", "74735zGTuhs", "12rfpsYQ", "split", "304504bIQaIX"];
  __STRING_ARRAY__ = function () {
    return _0x512489;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("208773qSELvV") / 1 * (-parseInt("2tCbgno") / 2) + -parseInt("57tahHyh") / 3 * (parseInt("384wLXNrj") / 4) + -parseInt("74735zGTuhs") / 5 * (parseInt("66jvjWLq") / 6) + -parseInt("21bBNNhP") / 7 * (parseInt("304504bIQaIX") / 8) + parseInt("9LqlBdp") / 9 * (-parseInt("2031680NCueRR") / 10) + -parseInt("2159333glNnXm") / 11 + parseInt("12rfpsYQ") / 12 * (parseInt("7529951JoZvKC") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 108099);
function Main(input) {
  input = input["split"]("\n");
  var m = input[0]["split"](" ")["map"](Number);
  input.shift();
  var arr = new Array(35)["fill"](0);
  input["forEach"](function (val) {
    var mem = val["split"](" ")["map"](Number);
    mem["shift"]();
    mem["forEach"](function (p) {
      arr[p]++;
    });
  });
  var ans = 0;
  arr["forEach"](function (val) {
    if (val == m[0]) {
      ans++;
    }
  });
  console["log"](ans);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8").trim());
