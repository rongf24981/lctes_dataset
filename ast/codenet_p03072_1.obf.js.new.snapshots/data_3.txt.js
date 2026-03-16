function __STRING_ARRAY__() {
  var _0x2bec26 = ["readFileSync", "7190bVEeUY", "log", "6724384vzsfBv", "1812622ruiDZD", "785Cljpsy", "36444miKcQf", "/dev/stdin", "19849247uvCZSn", "6kJsZnw", "shift", "71206tzUPLp", "4TGowXo", "8226TukAbP", "1216731xRPoYZ", "12qNWBVN", "split"];
  __STRING_ARRAY__ = function () {
    return _0x2bec26;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("71206tzUPLp") / 1 * (parseInt("6kJsZnw") / 2) + -parseInt("1216731xRPoYZ") / 3 * (-parseInt("4TGowXo") / 4) + parseInt("785Cljpsy") / 5 * (parseInt("36444miKcQf") / 6) + -parseInt("1812622ruiDZD") / 7 + parseInt("6724384vzsfBv") / 8 + -parseInt("8226TukAbP") / 9 * (-parseInt("7190bVEeUY") / 10) + -parseInt("19849247uvCZSn") / 11 * (parseInt("12qNWBVN") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 579868);
input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
lines = input.split("\n");
function __DECODE_0__(UdBenh, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 309;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UdBenh, key);
}
N = lines["shift"]() * 1;
A = lines["shift"]()["split"](" ");
h = 0;
cnt = 0;
for (i = 0; i < N; i++) {
  if (h <= A[i]) {
    cnt++;
    h = A[i];
  }
}
console["log"](cnt);
