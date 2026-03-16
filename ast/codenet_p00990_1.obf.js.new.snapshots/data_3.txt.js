(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("78347iGOHtZ") / 1 * (-parseInt("10huhvZk") / 2) + parseInt("24822tIQOBO") / 3 * (parseInt("24lWWYdl") / 4) + parseInt("1112025WfLJFB") / 5 + -parseInt("42dIDbzx") / 6 * (parseInt("227983IgjeGp") / 7) + -parseInt("21664OZQIPC") / 8 + parseInt("189045CfirIh") / 9 + parseInt("1060LAQPPD") / 10 * (-parseInt("20174qpzYbH") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 259694);
function __DECODE_0__(vmGNZm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 449;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vmGNZm, key);
}
function over(x) {
  if (x >= 10) {
    x = x - 10 + 1;
  }
  return x;
}
function __STRING_ARRAY__() {
  var _0xa8080b = ["trim", "log", "utf8", "10huhvZk", "24lWWYdl", "split", "189045CfirIh", "length", "42dIDbzx", "/dev/stdin", "227983IgjeGp", "push", "20174qpzYbH", "1112025WfLJFB", "78347iGOHtZ", "readFileSync", "1060LAQPPD", "24822tIQOBO", "map", "21664OZQIPC", "shift"];
  __STRING_ARRAY__ = function () {
    return _0xa8080b;
  };
  return __STRING_ARRAY__();
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
var n = arr["shift"]() - 0;
var id = arr["shift"]()["split"]("");
var a = arr.shift() - 0;
var ary = arr.shift().split(" ")["map"](Number);
var k = [];
var sum = 0;
id.forEach(function (v, i) {
  if (v == "*") {
    if (i % 2 == 0) {
      k["push"](1);
    } else {
      k["push"](2);
    }
  } else if (i % 2 == 0) {
    sum += v - 0;
  } else {
    sum += over((v - 0) * 2);
  }
});
var dp = [];
for (var i = 0; i <= 7; i++) {
  dp[i] = [];
  for (var s = 0; s < 1000000; s++) {
    dp[i][s] = false;
  }
}
dp[0][sum] = 1;
for (var i = 0; i < k.length; i++) {
  for (var j = 0; j < ary["length"]; j++) {
    for (var s = 0; s < 1000000; s++) {
      dp[i + 1][s + over(ary[j] * k[i])] += dp[i][s];
    }
  }
}
var ans = 0;
for (var s = 0; s < 100000; s++) {
  ans += dp[k["length"]][s * 10];
}
console["log"](ans);
