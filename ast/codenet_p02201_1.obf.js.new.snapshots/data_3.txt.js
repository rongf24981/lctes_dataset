function __STRING_ARRAY__() {
  var _0x3ce3a8 = ["/dev/stdin", "7134192ObivlF", "log", "24yvBkUx", "shift", "108966WruWJi", "1234680djSYXl", "92540ZNoqDX", "584974xbaFZY", "42MJZXND", "E869120", "split", "630645lvjWwY", "trim", "24irzTHO", "50bnhhbE", "1401296BmWuYB", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x3ce3a8;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(VpbUsg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 324;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VpbUsg, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("584974xbaFZY") / 1 + -parseInt("92540ZNoqDX") / 2 * (parseInt("24irzTHO") / 3) + parseInt("1401296BmWuYB") / 4 + -parseInt("630645lvjWwY") / 5 * (parseInt("24yvBkUx") / 6) + parseInt("42MJZXND") / 7 * (parseInt("1234680djSYXl") / 8) + parseInt("7134192ObivlF") / 9 + parseInt("50bnhhbE") / 10 * (-parseInt("108966WruWJi") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 559842);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
var n = arr["shift"]() - 0;
var cnt = 0;
arr.forEach(v => {
  if (v == "E869120") {
    cnt++;
  }
});
console["log"](cnt);
