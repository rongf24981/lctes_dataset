function __DECODE_0__(nUDyiX, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 254;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nUDyiX, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("135224InDnUg") / 1 * (parseInt("4PynQkr") / 2) + parseInt("4914tWWeqL") / 3 * (-parseInt("2792vnXKfd") / 4) + -parseInt("5vghusN") / 5 * (parseInt("6737982eBSwHI") / 6) + parseInt("4620623JSELSB") / 7 + -parseInt("4497552eySEmr") / 8 + -parseInt("4165920GKSloQ") / 9 + parseInt("36793170rCByBp") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 777563);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x34dbf7 = ["36793170rCByBp", "trim", "4165920GKSloQ", "2792vnXKfd", "5vghusN", "6737982eBSwHI", "4PynQkr", "4620623JSELSB", "log", "forEach", "/dev/stdin", "4497552eySEmr", "split", "map", "4914tWWeqL", "135224InDnUg"];
  __STRING_ARRAY__ = function () {
    return _0x34dbf7;
  };
  return __STRING_ARRAY__();
}
var Arr = input["trim"]().split("\n");
var j = 0;
while (true) {
  var v = Arr.shift() - 0;
  if (v == 0) {
    break;
  }
  var m = Arr.shift()["split"](" ")["map"](Number);
  var money = m[0] * 10 + m[1] * 50 + m[2] * 100 + m[3] * 500 - v;
  var M = [0, 0, 0, 0];
  while (money >= 500) {
    M[3]++;
    money -= 500;
  }
  while (money >= 100) {
    M[2]++;
    money -= 100;
  }
  while (money >= 50) {
    M[1]++;
    money -= 50;
  }
  while (money >= 10) {
    M[0]++;
    money -= 10;
  }
  var coin = [10, 50, 100, 500];
  var str = "";
  m["forEach"](function (v, i) {
    if (v > M[i]) {
      str += coin[i] + " " + (v - M[i]) + "\n";
    }
  });
  console["log"](str);
}
