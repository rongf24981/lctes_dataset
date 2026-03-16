(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("604212XQGMJG") / 1 + -parseInt("775816qHzBjq") / 2 + parseInt("1905966PMEMtb") / 3 + parseInt("188WPlRIx") / 4 * (parseInt("96820qCoOyw") / 5) + -parseInt("6354996jjpfwK") / 6 + parseInt("7pMWuFd") / 7 * (-parseInt("599528GbWPsb") / 8) + parseInt("10051461mcUbcf") / 9 * (parseInt("10IZefRm") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 536032);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x301157 = ["6354996jjpfwK", "599528GbWPsb", "log", "188WPlRIx", "604212XQGMJG", "1905966PMEMtb", "96820qCoOyw", "10IZefRm", "trim", "/dev/stdin", "10051461mcUbcf", "775816qHzBjq", "readFileSync", "split", "7pMWuFd", "utf8", "join", "length"];
  __STRING_ARRAY__ = function () {
    return _0x301157;
  };
  return __STRING_ARRAY__();
}
var arr = input["trim"]()["split"]("\n");
var s = arr[0].split("");
function __DECODE_0__(wiIAXI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 302;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wiIAXI, key);
}
for (var i = 0; i < s["length"]; i++) {
  for (var j = i + 1; j < s["length"]; j++) {
    if (s[i] == s[j]) {
      s[i] = "";
      s[j] = "";
      break;
    }
  }
}
var n = s["join"]("")["length"];
if (n == 0 || n == 1) {
  console["log"](0);
} else if (n % 2 == 0) {
  console.log(n / 2);
} else {
  console.log((n - 1) / 2);
}
