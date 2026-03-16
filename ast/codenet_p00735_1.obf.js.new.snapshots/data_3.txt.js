function __DECODE_0__(TorMWV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 137;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TorMWV, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("608868yMzCWo") / 1 + -parseInt("2ClsGim") / 2 * (-parseInt("936855uwDwRn") / 3) + -parseInt("355132KVPclg") / 4 + parseInt("98830aVAWlk") / 5 * (-parseInt("90YZswhW") / 6) + parseInt("3559325TyLbEa") / 7 + parseInt("6316728HlkXWt") / 8 + -parseInt("897831qeYxmt") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 516451);
var ms = [];
var flag = [];
for (var i = 0; i < 300000; i++) {
  flag[i] = true;
}
var i = 1;
while (true) {
  var m = i * 7 - 1;
  var s = i * 7 + 1;
  if (m > 300000) {
    break;
  }
  i++;
  if (flag[m]) {
    ms.push(m);
  }
  if (flag[s]) {
    ms["push"](s);
  }
  var j = 2;
  while (true) {
    if (m * j > 300000) {
      break;
    }
    flag[m * j] = false;
    flag[s * j] = false;
    j++;
  }
}
function __STRING_ARRAY__() {
  var _0x22ab66 = ["some", "shift", "trim", "6316728HlkXWt", "2ClsGim", "355132KVPclg", "936855uwDwRn", "897831qeYxmt", "join", "98830aVAWlk", "push", "readFileSync", "3559325TyLbEa", "608868yMzCWo", "/dev/stdin", "utf8", "90YZswhW"];
  __STRING_ARRAY__ = function () {
    return _0x22ab66;
  };
  return __STRING_ARRAY__();
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]().split("\n");
while (true) {
  var n = arr["shift"]() - 0;
  if (n == 1) {
    break;
  }
  var ans = [];
  var i = 0;
  ms["some"](function (v) {
    if (n % v == 0) {
      ans["push"](v);
    }
    return n < v;
  });
  console.log(n + ": " + ans["join"](" "));
}
