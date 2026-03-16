(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("165257kdogpo") / 1 + parseInt("2LlsMUC") / 2 * (-parseInt("36783rHGUGo") / 3) + -parseInt("2102340jcTAKZ") / 4 + -parseInt("1337275QihQDN") / 5 + -parseInt("1370706mJujCh") / 6 + parseInt("236173qdtmsF") / 7 * (parseInt("56ZVbYpr") / 8) + parseInt("11279826cGbtEn") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 290478);
function HW() {
  var arr = [];
  for (var i = 1; i < 150; i++) {
    for (var j = i + 1; j <= 150; j++) {
      arr["push"]([i, j, i * i + j * j]);
    }
  }
  arr["sort"](function (a, b) {
    if (a[2] == b[2]) {
      return a[0] - b[0];
    } else {
      return a[2] - b[2];
    }
  });
  return arr;
}
function __STRING_ARRAY__() {
  var _0xc03b89 = ["56ZVbYpr", "2LlsMUC", "shift", "36783rHGUGo", "1370706mJujCh", "trim", "log", "11279826cGbtEn", "sort", "length", "2102340jcTAKZ", "236173qdtmsF", "split", "1337275QihQDN", "utf8", "165257kdogpo", "push", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0xc03b89;
  };
  return __STRING_ARRAY__();
}
var Rectangles = HW();
function __DECODE_0__(qWIFPN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 479;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qWIFPN, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
while (true) {
  var hw = Arr["shift"]().split(" ").map(Number);
  var h = hw[0];
  var w = hw[1];
  if (h == 0 && w == 0) {
    break;
  }
  var num = h * h + w * w;
  for (var i = 0; i < Rectangles["length"]; i++) {
    if (Rectangles[i][0] == h && Rectangles[i][1] == w) {
      break;
    }
  }
  console["log"](Rectangles[i + 1][0] + " " + Rectangles[i + 1][1]);
}
