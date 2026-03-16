function __STRING_ARRAY__() {
  var _0x419d23 = ["1010LFaxKX", "split", "1700565KFrdVr", "1150752VFNZRl", "6fpQEwP", "readFileSync", "trim", "511290elgTcE", "12888RojFWd", "4ZBKaPU", "751668NJCefH", "map", "1043kRKohR", "2hxDqId", "305008jrzZpz", "41371xNiVbm"];
  __STRING_ARRAY__ = function () {
    return _0x419d23;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(qsMmsv, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 318;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qsMmsv, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("2hxDqId") / 1 * (parseInt("305008jrzZpz") / 2) + parseInt("751668NJCefH") / 3 * (-parseInt("4ZBKaPU") / 4) + -parseInt("1700565KFrdVr") / 5 * (-parseInt("6fpQEwP") / 6) + -parseInt("1043kRKohR") / 7 * (-parseInt("12888RojFWd") / 8) + parseInt("511290elgTcE") / 9 + parseInt("1010LFaxKX") / 10 * (-parseInt("41371xNiVbm") / 11) + -parseInt("1150752VFNZRl") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 215657);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var [w, h, c] = input["trim"]()["split"](" ")["map"](Number);
var max = 1;
for (var i = 1; i <= 1000; i++) {
  if (w % i == 0 && h % i == 0) {
    max = i;
  }
}
console.log(w * h / (max * max) * c);
