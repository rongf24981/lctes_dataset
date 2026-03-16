function __STRING_ARRAY__() {
  var _0x4a55c1 = ["4StYNvU", "6837201sWYMQZ", "shift", "map", "log", "3076812ygbngY", "3130655bLaDxt", "16212744bsNvUJ", "readFileSync", "utf8", "split", "1931496AxDNRm", "1083976SxAzqZ", "2224041ZFFydh"];
  __STRING_ARRAY__ = function () {
    return _0x4a55c1;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1083976SxAzqZ") / 1 + -parseInt("1931496AxDNRm") / 2 + -parseInt("2224041ZFFydh") / 3 * (-parseInt("4StYNvU") / 4) + -parseInt("3130655bLaDxt") / 5 + -parseInt("3076812ygbngY") / 6 + parseInt("6837201sWYMQZ") / 7 + parseInt("16212744bsNvUJ") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 556026);
function __DECODE_0__(voLRtg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 189;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(voLRtg, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input.trim().split("\n");
var n = arr.shift() - 0;
var a = arr["shift"]()["split"](" ")["map"](Number);
var m = arr.shift() - 0;
var b = arr["shift"]()["split"](" ").map(Number);
var memo = 0;
var cnt = 0;
for (var i = 0; i < m; i++) {
  var num = b[i];
  for (var j = memo; j < n; j++) {
    memo = j;
    if (num == a[j]) {
      cnt++;
      break;
    }
  }
}
console["log"](cnt == m ? 1 : 0);
