(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("543605Uyekyi") / 1 + parseInt("181238JJjKyi") / 2 * (-parseInt("21SoEipf") / 3) + parseInt("1093576AXpFNX") / 4 + parseInt("341145UsJoCO") / 5 * (parseInt("30kXGVAd") / 6) + parseInt("63yBLGhj") / 7 * (parseInt("437320FvHImy") / 8) + parseInt("4898502OJagpg") / 9 + -parseInt("1306030EbfFwc") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 342261);
function __DECODE_0__(TcnrFy, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 262;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TcnrFy, key);
}
function __STRING_ARRAY__() {
  var _0x5ee354 = ["log", "181238JJjKyi", "437320FvHImy", "4898502OJagpg", "split", "21SoEipf", "341145UsJoCO", "543605Uyekyi", "1306030EbfFwc", "30kXGVAd", "utf8", "readFileSync", "/dev/stdin", "1093576AXpFNX", "63yBLGhj"];
  __STRING_ARRAY__ = function () {
    return _0x5ee354;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input["split"]("\n");
  var line = input[0]["split"](" ");
  var m = parseInt(line[0]);
  var n = parseInt(line[1]);
  var ans = (m - 1) * (n - 1);
  console["log"](ans);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
