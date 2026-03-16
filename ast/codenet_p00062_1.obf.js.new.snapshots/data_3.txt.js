(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("28NKQgyU") / 1 * (parseInt("9502mMwpEn") / 2) + -parseInt("3628704NfqBEo") / 3 + parseInt("4PDSewe") / 4 * (parseInt("5926885wbhYbR") / 5) + -parseInt("24DlijxD") / 6 * (-parseInt("2695973gfKuwP") / 7) + parseInt("16CslliL") / 8 * (parseInt("5163219xFtTlx") / 9) + -parseInt("5620kKuktO") / 10 * (parseInt("22418jBwhsX") / 11) + -parseInt("1488LZrRfd") / 12 * (parseInt("87334ovFzDv") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 818387);
function __DECODE_0__(pBNJRz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 369;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(pBNJRz, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x143f40 = ["1488LZrRfd", "log", "push", "4PDSewe", "utf8", "split", "3628704NfqBEo", "24DlijxD", "87334ovFzDv", "5163219xFtTlx", "5620kKuktO", "22418jBwhsX", "readFileSync", "28NKQgyU", "5926885wbhYbR", "2695973gfKuwP", "length", "shift", "9502mMwpEn", "16CslliL"];
  __STRING_ARRAY__ = function () {
    return _0x143f40;
  };
  return __STRING_ARRAY__();
}
var lines = input["split"]("\n");
var line;
while (line = lines["shift"]()) {
  var nums = line.split("").map(function (n) {
    return +n;
  });
  var n = nums["length"];
  while (n > 1) {
    var a = [];
    for (var i = 0; i < n - 1; i++) {
      a["push"]((nums[i] + nums[i + 1]) % 10);
    }
    n--;
    nums = a;
  }
  console["log"](nums[0]);
}
