function __STRING_ARRAY__() {
  var _0x5c3599 = ["5247942WsHOYJ", "2734395oiMcDI", "4213440QHrGhi", "739437lAbeVu", "301383XWpGtX", "/dev/stdin", "376rtOWfN", "6982129prUWkk", "readFileSync", "log", "35330WWXubJ", "15pwLGtp", "utf8", "trim"];
  __STRING_ARRAY__ = function () {
    return _0x5c3599;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("739437lAbeVu") / 1 + parseInt("35330WWXubJ") / 2 * (parseInt("15pwLGtp") / 3) + -parseInt("4213440QHrGhi") / 4 + parseInt("2734395oiMcDI") / 5 + -parseInt("5247942WsHOYJ") / 6 + parseInt("6982129prUWkk") / 7 + -parseInt("376rtOWfN") / 8 * (-parseInt("301383XWpGtX") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 539086);
function main(input) {
  var n = input[0] - 0;
  var cnt = 1;
  var ans = 0;
  for (cnt = 1; ans < n; cnt++) {
    ans += cnt;
  }
  console["log"](cnt - 1);
}
function __DECODE_0__(tyyGtb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 465;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tyyGtb, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]().split("\n"));
