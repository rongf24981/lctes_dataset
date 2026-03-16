(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("110602zKEinb") / 1 + parseInt("26WCiLyC") / 2 * (parseInt("4701MJDZWI") / 3) + parseInt("344516OunZNL") / 4 + -parseInt("605495lLUIug") / 5 * (-parseInt("6IYIviI") / 6) + -parseInt("926401PTopuw") / 7 + -parseInt("964744tvxlfb") / 8 * (-parseInt("18rdMlnL") / 9) + -parseInt("3175190cIkuJX") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 129525);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
var [n, m, c] = arr["shift"]()["split"](" ")["map"](Number);
var L = arr.shift()["split"](" ").map(Number);
function __DECODE_0__(kMnHlN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 206;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(kMnHlN, key);
}
var cw = arr["map"](v => v["split"](" ")["map"](Number));
cw.sort(function (a, b) {
  return b[1] - a[1];
});
var sum = 0;
for (var i = 0; i < cw["length"]; i++) {
  if (m == 0) {
    break;
  }
  var max = L[cw[i][0] - 1];
  if (max > 0) {
    sum += cw[i][1];
    L[cw[i][0] - 1]--;
    m--;
  }
}
console["log"](sum);
function __STRING_ARRAY__() {
  var _0xe60a8e = ["length", "log", "3175190cIkuJX", "split", "605495lLUIug", "926401PTopuw", "shift", "trim", "4701MJDZWI", "6IYIviI", "344516OunZNL", "18rdMlnL", "964744tvxlfb", "110602zKEinb", "map", "/dev/stdin", "26WCiLyC"];
  __STRING_ARRAY__ = function () {
    return _0xe60a8e;
  };
  return __STRING_ARRAY__();
}
