function __STRING_ARRAY__() {
  var _0x23d9a4 = ["log", "/dev/stdin", "9JUiHGp", "7489426bSnTCy", "5754312hnZldJ", "1972326WrqVAd", "map", "1483832HFcJHD", "473CUMfSJ", "5UvRMJg", "toFixed", "926550NtDFbs", "readFileSync", "utf8", "8Jbtrdz", "4182296BMbFIw", "floor", "499930gxQhKf"];
  __STRING_ARRAY__ = function () {
    return _0x23d9a4;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1483832HFcJHD") / 1 + -parseInt("926550NtDFbs") / 2 + parseInt("1972326WrqVAd") / 3 * (parseInt("8Jbtrdz") / 4) + -parseInt("5UvRMJg") / 5 * (parseInt("5754312hnZldJ") / 6) + parseInt("7489426bSnTCy") / 7 + parseInt("4182296BMbFIw") / 8 * (parseInt("9JUiHGp") / 9) + -parseInt("499930gxQhKf") / 10 * (parseInt("473CUMfSJ") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 819395);
var x = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(FwhDEi, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 396;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FwhDEi, key);
}
var array = x.split(" ")["map"](Number);
var a = array[0];
var b = array[1];
var d = Math["floor"](a / b);
var r = a % b;
var f = (a / b)["toFixed"](5);
console["log"](d + " " + r + " " + f);
