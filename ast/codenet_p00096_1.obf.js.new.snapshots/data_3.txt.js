function __STRING_ARRAY__() {
  var _0x1ec3bf = ["24fMSsXc", "9FIsVPJ", "120195zkulBK", "201010RYkZpx", "trim", "80030eHvClm", "utf8", "push", "length", "sort", "40DKeZoD", "3111626PgsEdz", "693HhhiCf", "/dev/stdin", "439308cWPPaX", "4735096CMJkBg", "split", "6TJPxiS", "log", "shift", "readFileSync", "8159544yWYHAq"];
  __STRING_ARRAY__ = function () {
    return _0x1ec3bf;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(EZppCn, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 332;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EZppCn, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("201010RYkZpx") / 1 * (-parseInt("6TJPxiS") / 2) + parseInt("120195zkulBK") / 3 * (parseInt("24fMSsXc") / 4) + parseInt("40DKeZoD") / 5 * (-parseInt("439308cWPPaX") / 6) + -parseInt("3111626PgsEdz") / 7 + -parseInt("4735096CMJkBg") / 8 * (-parseInt("9FIsVPJ") / 9) + parseInt("80030eHvClm") / 10 * (parseInt("693HhhiCf") / 11) + parseInt("8159544yWYHAq") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 383136);
var ab = [];
for (var i = 0; i <= 1000; i++) {
  for (var j = 0; j <= 1000; j++) {
    ab["push"](i + j);
  }
}
ab["sort"](function (a, b) {
  return a - b;
});
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
while (true) {
  if (Arr.length == 0) {
    break;
  }
  var n = Arr["shift"]() - 0;
  var cnt = 0;
  var k = ab.length - 1;
  for (var i = 0; i < ab["length"]; i++) {
    while (ab[i] + ab[k] > n) {
      k--;
    }
    var memo = k;
    while (ab[i] + ab[memo] == n) {
      cnt++;
      memo--;
    }
  }
  console["log"](cnt);
}
