(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("803052zcjgxP") / 1 + parseInt("235078TEnjGo") / 2 * (-parseInt("12Sldqrh") / 3) + -parseInt("1906688nGzrlH") / 4 + -parseInt("730ojLiUU") / 5 * (-parseInt("4710ukIklJ") / 6) + -parseInt("4092305OETGmH") / 7 + -parseInt("4941184OVAqyR") / 8 + parseInt("29790513CMxcuo") / 9 * (parseInt("10BXGDWg") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 472524);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input.trim()["split"]("\n")["map"](Number);
var n = arr.shift();
var a = arr.shift();
var cnt = 1;
var max = 1;
var memo = 0;
arr["forEach"](v => {
  if (a > v) {
    if (memo == 1) {
      cnt = 2;
    } else {
      cnt++;
    }
    memo = -1;
  } else if (a < v) {
    if (memo == -1) {
      cnt = 2;
    } else {
      cnt++;
    }
    memo = 1;
  }
  max = Math.max(max, cnt);
  a = v;
});
function __DECODE_0__(mHOjZE, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 242;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mHOjZE, key);
}
function __STRING_ARRAY__() {
  var _0x85fae1 = ["4710ukIklJ", "10BXGDWg", "4941184OVAqyR", "4092305OETGmH", "split", "29790513CMxcuo", "forEach", "/dev/stdin", "730ojLiUU", "803052zcjgxP", "235078TEnjGo", "1906688nGzrlH", "map", "utf8", "readFileSync", "log", "12Sldqrh"];
  __STRING_ARRAY__ = function () {
    return _0x85fae1;
  };
  return __STRING_ARRAY__();
}
console["log"](max);
