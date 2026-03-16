(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("763904jVFdkU") / 1 + parseInt("2230174DjeFoj") / 2 + parseInt("143103fxSRlv") / 3 * (parseInt("24pEbvJf") / 4) + -parseInt("5tQXlUM") / 5 * (-parseInt("4487070OCzUHb") / 6) + parseInt("2699690CfFCFH") / 7 * (parseInt("32ZHatOf") / 8) + -parseInt("8469vCLQXX") / 9 * (-parseInt("5150lNifnZ") / 10) + -parseInt("7538234XiMKiz") / 11 * (parseInt("72iawHgS") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 828573);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(bjcVIj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 344;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bjcVIj, key);
}
var Arr = input["trim"]()["split"]("\n");
function __STRING_ARRAY__() {
  var _0x1e5d4d = ["8469vCLQXX", "forEach", "72iawHgS", "5150lNifnZ", "2699690CfFCFH", "readFileSync", "trim", "4487070OCzUHb", "round", "length", "2230174DjeFoj", "763904jVFdkU", "log", "map", "utf8", "32ZHatOf", "143103fxSRlv", "split", "7538234XiMKiz", "5tQXlUM", "24pEbvJf", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x1e5d4d;
  };
  return __STRING_ARRAY__();
}
var sum = 0;
var cnt = 0;
Arr["forEach"](function (v) {
  var arr = v.split(",")["map"](Number);
  sum += arr[0] * arr[1];
  cnt += arr[1];
});
console["log"](sum);
console.log(Math["round"](cnt / Arr["length"]));
