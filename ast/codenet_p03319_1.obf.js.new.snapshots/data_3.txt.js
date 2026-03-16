function __STRING_ARRAY__() {
  var _0x20a502 = ["split", "2682711aWiWAB", "29713684diswHP", "11668400sxaAAt", "ceil", "6926495GTGiCS", "100TyzlKf", "4RGrqOm", "indexOf", "2076EowpBh", "838071YrIAwf", "12187RyhUUJ", "1kloBJl", "readFileSync", "502666fKacJw"];
  __STRING_ARRAY__ = function () {
    return _0x20a502;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1kloBJl") / 1 * (parseInt("502666fKacJw") / 2) + -parseInt("2682711aWiWAB") / 3 + -parseInt("4RGrqOm") / 4 * (parseInt("6926495GTGiCS") / 5) + parseInt("2076EowpBh") / 6 * (parseInt("12187RyhUUJ") / 7) + -parseInt("11668400sxaAAt") / 8 + parseInt("838071YrIAwf") / 9 * (parseInt("100TyzlKf") / 10) + parseInt("29713684diswHP") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 748067);
function __DECODE_0__(aWRmsK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 274;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(aWRmsK, key);
}
function Main(input) {
  var NKA = input["split"]("\n");
  var NK = NKA[0].split(" ");
  var N = parseInt(NK[0], 10);
  var K = parseInt(NK[1], 10);
  var A = NKA[1]["split"](" ").map(v => parseInt(v, 10));
  var minPoint = A["indexOf"](1);
  var left = Math["ceil"](minPoint / (K - 1));
  var right = Math["ceil"]((N - minPoint - 1) / (K - 1));
  console.log(left + right);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
