function __STRING_ARRAY__() {
  var _0x31c559 = ["utf8", "1633770TylTUE", "465504BncNZH", "9eJqibK", "222747tIsayg", "89404mRlAcz", "/dev/stdin", "split", "112frhSUH", "4279986YnZZZU", "log", "11852280izMDEo", "1157196KnbMTd"];
  __STRING_ARRAY__ = function () {
    return _0x31c559;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("465504BncNZH") / 1 + parseInt("1157196KnbMTd") / 2 + parseInt("9eJqibK") / 3 * (parseInt("89404mRlAcz") / 4) + parseInt("1633770TylTUE") / 5 + parseInt("4279986YnZZZU") / 6 + parseInt("222747tIsayg") / 7 * (-parseInt("112frhSUH") / 8) + -parseInt("11852280izMDEo") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 388826);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
function __DECODE_0__(NHXsjb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 113;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NHXsjb, key);
}
var arr = input.trim()["split"]("\n");
var a = arr[0];
var b = arr[1];
var str = "";
for (var i = 0; i < a.length; i++) {
  var flag = true;
  ;
  for (var j = 0; j < b.length; j++) {
    if (a[i + j] != b[j]) {
      flag = false;
      break;
    }
  }
  if (flag) {
    str += i + "\n";
  }
}
console["log"](str);
