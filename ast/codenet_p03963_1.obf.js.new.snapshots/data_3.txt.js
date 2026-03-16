function __STRING_ARRAY__() {
  var _0x316b7f = ["33015ATfHVC", "/dev/stdin", "utf8", "308535SPoXcC", "log", "378HbAcLi", "split", "272975BsjYDQ", "14sqzqQW", "2003448bWdpIm", "11006073ZRUIMJ", "4465560vnRTEa", "2744gFWYOd"];
  __STRING_ARRAY__ = function () {
    return _0x316b7f;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(Fclelx, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 242;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Fclelx, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("308535SPoXcC") / 1 + -parseInt("14sqzqQW") / 2 * (parseInt("33015ATfHVC") / 3) + -parseInt("2003448bWdpIm") / 4 + -parseInt("272975BsjYDQ") / 5 + parseInt("378HbAcLi") / 6 * (parseInt("2744gFWYOd") / 7) + -parseInt("4465560vnRTEa") / 8 + parseInt("11006073ZRUIMJ") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 365441);
function Main(input) {
  var input = input["split"]("\n");
  var tmp = input[0]["split"](" ");
  var N = tmp[0];
  var K = tmp[1];
  var pattern = K;
  for (i = 1; i < N; i++) {
    pattern *= K - 1;
  }
  console["log"](pattern);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
