(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("458988ztWTbr") / 1 + parseInt("448940XmmDtr") / 2 * (-parseInt("3unamNd") / 3) + -parseInt("3207648DxpuBz") / 4 + parseInt("5vPvitk") / 5 * (-parseInt("4184088EvlfiH") / 6) + parseInt("4807117XWVufF") / 7 + -parseInt("6112080NwQwhr") / 8 + parseInt("25704351WUsxsM") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 596042);
input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(SuDhad, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 234;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SuDhad, key);
}
lines = input["split"]("\n");
N = lines["shift"]() * 1;
function __STRING_ARRAY__() {
  var _0x155fc6 = ["readFileSync", "4807117XWVufF", "458988ztWTbr", "push", "3207648DxpuBz", "448940XmmDtr", "shift", "join", "/dev/stdin", "4184088EvlfiH", "split", "3unamNd", "5vPvitk", "splice", "25704351WUsxsM", "log", "reverse", "6112080NwQwhr"];
  __STRING_ARRAY__ = function () {
    return _0x155fc6;
  };
  return __STRING_ARRAY__();
}
b = lines["shift"]()["split"](" ");
a = [];
for (i = N; i > 0; i--) {
  found = false;
  for (j = i; j > 0; j--) {
    if (b[j - 1] == j) {
      a["push"](b["splice"](j - 1, 1));
      found = true;
      break;
    }
  }
  if (!found) {
    a = [-1];
    break;
  }
}
console["log"](a["reverse"]()["join"]("\n"));
