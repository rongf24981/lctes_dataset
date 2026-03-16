function __STRING_ARRAY__() {
  var _0x379bf4 = ["2238294KNdyKS", "15258736rQvlqc", "3071257hOhxim", "836dIdgwt", "split", "/dev/stdin", "log", "4qJYKnS", "map", "utf8", "readFileSync", "4530099QFFadW", "13445nfSMVA", "296612INabNv", "9142011oRMUzR"];
  __STRING_ARRAY__ = function () {
    return _0x379bf4;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("4qJYKnS") / 1 * (parseInt("296612INabNv") / 2) + parseInt("4530099QFFadW") / 3 + parseInt("836dIdgwt") / 4 * (parseInt("13445nfSMVA") / 5) + -parseInt("2238294KNdyKS") / 6 + -parseInt("3071257hOhxim") / 7 + -parseInt("15258736rQvlqc") / 8 + parseInt("9142011oRMUzR") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 961895);
function __DECODE_0__(PZImDt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 471;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PZImDt, key);
}
function Main(input) {
  input = input["split"]("\n");
  n = Number(input[0]["split"](" "));
  a = input[1]["split"](" ")["map"](Number);
  b = input[2]["split"](" ")["map"](Number);
  c = input[3]["split"](" ")["map"](Number);
  var count = 0;
  for (var i = 0; i < n; i++) {
    count += b[a[i] - 1];
    if (a[i] === a[i - 1] + 1) {
      count += c[a[i] - 2];
    }
  }
  console["log"](count);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
