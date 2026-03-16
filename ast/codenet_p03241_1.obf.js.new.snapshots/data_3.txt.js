(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1ymZvNq") / 1 * (-parseInt("3301494kspcVF") / 2) + parseInt("1741899LkVSos") / 3 * (parseInt("4BJsneK") / 4) + -parseInt("15cCVLVX") / 5 * (-parseInt("2095152gNFWMI") / 6) + parseInt("9035425uOtXGJ") / 7 + parseInt("2445864EqyEuv") / 8 + parseInt("6921XFTHLo") / 9 * (-parseInt("6390lpLaOm") / 10) + -parseInt("37899994SlLDlJ") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 938619);
function Main(input) {
  input = input["split"]("\n");
  tmp = input[0]["split"](" ");
  var N = parseInt(tmp[0], 10);
  var M = parseInt(tmp[1], 10);
  var divisors = divisor(M);
  var max = 0;
  for (var i = 0; i < divisors["length"]; i++) {
    var d = divisors[i];
    if (M / d >= N) {
      max = Math["max"](max, d);
    }
  }
  console["log"]("%d", max);
}
function divisor(n) {
  var res = [];
  for (var i = 1; i * i <= n; i++) {
    if (n % i == 0) {
      res["push"](i);
      if (n / i != i) {
        res["push"](n / i);
      }
    }
  }
  return res;
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __DECODE_0__(sHeiTe, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 449;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(sHeiTe, key);
}
function __STRING_ARRAY__() {
  var _0x1dd252 = ["1741899LkVSos", "1ymZvNq", "2445864EqyEuv", "6921XFTHLo", "15cCVLVX", "split", "37899994SlLDlJ", "2095152gNFWMI", "log", "readFileSync", "3301494kspcVF", "push", "max", "4BJsneK", "6390lpLaOm", "utf8", "9035425uOtXGJ", "length"];
  __STRING_ARRAY__ = function () {
    return _0x1dd252;
  };
  return __STRING_ARRAY__();
}
