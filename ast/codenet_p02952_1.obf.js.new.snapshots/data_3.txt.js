function __STRING_ARRAY__() {
  var _0x8726d2 = ["27368XXqwTJ", "/dev/stdin", "27655116GzPlvC", "308GCVFPo", "1025451QBfPRH", "2001310WMlRGT", "11oYsVde", "2pRWhkY", "647403XhINtP", "8720172cVFGUQ", "12TJWNCv", "5PZVHns", "readFileSync", "utf8", "5803962xNbOAN"];
  __STRING_ARRAY__ = function () {
    return _0x8726d2;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("647403XhINtP") / 1 * (parseInt("2pRWhkY") / 2) + -parseInt("1025451QBfPRH") / 3 * (-parseInt("12TJWNCv") / 4) + parseInt("5PZVHns") / 5 * (-parseInt("5803962xNbOAN") / 6) + -parseInt("308GCVFPo") / 7 * (-parseInt("27368XXqwTJ") / 8) + -parseInt("8720172cVFGUQ") / 9 + -parseInt("2001310WMlRGT") / 10 + -parseInt("11oYsVde") / 11 * (-parseInt("27655116GzPlvC") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 696799);
function __DECODE_0__(IEFHGH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 327;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IEFHGH, key);
}
function keta(num) {
  for (var i = 1; i <= 6; i++) {
    if (num < 10 ** i) {
      return i % 2;
    }
  }
}
function Main(input) {
  var ans = 0;
  var cnt = 1;
  while (cnt <= input) {
    ans += keta(cnt);
    cnt++;
  }
  console.log(ans);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
