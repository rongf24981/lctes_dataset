(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("722231tNoWOx") / 1 + -parseInt("2097160rKjLvZ") / 2 + -parseInt("871893xThJnl") / 3 + parseInt("28VHkvjm") / 4 * (-parseInt("480715rpGgkX") / 5) + -parseInt("6GcdmCX") / 6 * (-parseInt("2567243XqKGMd") / 7) + parseInt("3218352NSaSNC") / 8 + parseInt("23781015ERWxQC") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 676935);
function __DECODE_0__(CEbnof, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 401;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CEbnof, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input.trim().split("\n");
var n = arr.shift() - 0;
var a = arr["shift"]().split(" ")["map"](Number);
var cnt = 0;
for (var i = 0; i < n - 1; i++) {
  if (a[i] < a[i + 1]) {
    cnt++;
  }
}
function __STRING_ARRAY__() {
  var _0x428e2d = ["2097160rKjLvZ", "722231tNoWOx", "28VHkvjm", "480715rpGgkX", "utf8", "23781015ERWxQC", "3218352NSaSNC", "6GcdmCX", "871893xThJnl", "readFileSync", "2567243XqKGMd", "map", "shift"];
  __STRING_ARRAY__ = function () {
    return _0x428e2d;
  };
  return __STRING_ARRAY__();
}
console.log(cnt);
