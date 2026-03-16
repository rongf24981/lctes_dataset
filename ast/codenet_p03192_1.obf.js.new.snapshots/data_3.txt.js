(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("192419myHTfD") / 1 * (parseInt("2YwmtEc") / 2) + -parseInt("1827093uGKcIS") / 3 + -parseInt("732rlrLzJ") / 4 * (parseInt("27290Oadkfp") / 5) + -parseInt("961782oDAZBy") / 6 + -parseInt("21nSRtcG") / 7 * (parseInt("2253312XZcPve") / 8) + -parseInt("9eWDzfU") / 9 * (-parseInt("1709530IFGJLC") / 10) + parseInt("31420532FJVtOb") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 606650);
function Main(input) {
  input = input.split("\n");
  S = input[0]["split"]("");
  var ans = 0;
  for (i = 0; i < S.length; i++) {
    if (S[i] == "2") {
      ans++;
    }
  }
  console["log"]("%s", ans);
}
function __STRING_ARRAY__() {
  var _0x222f47 = ["utf8", "split", "value", "192419myHTfD", "1827093uGKcIS", "2253312XZcPve", "readFileSync", "1709530IFGJLC", "9eWDzfU", "getElementById", "732rlrLzJ", "27290Oadkfp", "input", "log", "2YwmtEc", "961782oDAZBy", "31420532FJVtOb", "21nSRtcG"];
  __STRING_ARRAY__ = function () {
    return _0x222f47;
  };
  return __STRING_ARRAY__();
}
function debug() {
  var input = document["getElementById"]("input")["value"];
  Main(input);
}
function __DECODE_0__(ONkaXC, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 135;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ONkaXC, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
