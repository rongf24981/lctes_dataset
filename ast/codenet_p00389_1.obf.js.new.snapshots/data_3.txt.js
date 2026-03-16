(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("58CxcuqD") / 1 * (parseInt("7064tHrZFF") / 2) + parseInt("324681QWwWOO") / 3 * (parseInt("4PJffwx") / 4) + -parseInt("7225JLrudt") / 5 * (-parseInt("270jxswQn") / 6) + -parseInt("1328565zvCfZs") / 7 + parseInt("771456RVgBaP") / 8 + parseInt("104598YdSZGa") / 9 * (parseInt("80wpfwUH") / 10) + parseInt("1494361zdwmDz") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 103860);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x42c495 = ["7225JLrudt", "readFileSync", "1494361zdwmDz", "split", "771456RVgBaP", "324681QWwWOO", "7064tHrZFF", "1328565zvCfZs", "58CxcuqD", "80wpfwUH", "4PJffwx", "map", "/dev/stdin", "270jxswQn", "utf8", "104598YdSZGa"];
  __STRING_ARRAY__ = function () {
    return _0x42c495;
  };
  return __STRING_ARRAY__();
}
var [n, k] = input.trim()["split"](" ")["map"](Number);
function __DECODE_0__(UmSqmK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 491;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UmSqmK, key);
}
var takasa = 0;
var w = 0;
var cnt = 0;
while (true) {
  if (n == 0) {
    break;
  }
  n--;
  cnt++;
  if (w <= k * cnt) {
    takasa++;
    w += cnt;
    cnt = 0;
  }
}
console.log(takasa);
