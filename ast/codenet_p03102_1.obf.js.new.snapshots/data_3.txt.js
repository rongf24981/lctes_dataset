function __DECODE_0__(ucFtMw, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 106;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ucFtMw, key);
}
function __STRING_ARRAY__() {
  var _0x2a9ae9 = ["/dev/stdin", "15gAmFTZ", "5552127lBQVTJ", "log", "42099xiinlx", "1041812HTyAxm", "330547QjyQfm", "utf8", "248vdDXQY", "readFileSync", "4067046hzzfxt", "46cTYmUO", "split", "10zPVgwP", "17206321yJRhAp", "1603344SfgxXm"];
  __STRING_ARRAY__ = function () {
    return _0x2a9ae9;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("42099xiinlx") / 1 * (-parseInt("46cTYmUO") / 2) + parseInt("4067046hzzfxt") / 3 + parseInt("1041812HTyAxm") / 4 * (-parseInt("15gAmFTZ") / 5) + -parseInt("1603344SfgxXm") / 6 + -parseInt("330547QjyQfm") / 7 * (parseInt("248vdDXQY") / 8) + -parseInt("5552127lBQVTJ") / 9 * (parseInt("10zPVgwP") / 10) + parseInt("17206321yJRhAp") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 758833);
function Main(input) {
  input = input["split"]("\n");
  tmp0 = input[0]["split"](" ");
  N = Number(tmp0[0]);
  M = Number(tmp0[1]);
  C = Number(tmp0[2]);
  B = input[1]["split"](" ");
  var ans = 0;
  for (var i = 0; i < N; i++) {
    A = input[2 + i].split(" ");
    var tmpSum = 0;
    for (var j = 0; j < M; j++) {
      tmpSum += Number(A[j]) * Number(B[j]);
    }
    if (tmpSum + C > 0) {
      ans++;
    }
  }
  console["log"](ans);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
