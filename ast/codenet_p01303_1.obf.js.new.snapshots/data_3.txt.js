function __STRING_ARRAY__() {
  var _0x52d83c = ["split", "utf8", "405HDvVqv", "shift", "6flIrJy", "map", "3954090lmUljV", "3564040CgKAKn", "10924SLrJPF", "816039dYPtGl", "7511656dZlkJo", "1949703bFCLOI", "replace", "36983835tebMhR"];
  __STRING_ARRAY__ = function () {
    return _0x52d83c;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(BlnoHM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 354;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BlnoHM, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("816039dYPtGl") / 1 + -parseInt("3954090lmUljV") / 2 + -parseInt("405HDvVqv") / 3 * (parseInt("10924SLrJPF") / 4) + parseInt("3564040CgKAKn") / 5 * (parseInt("6flIrJy") / 6) + parseInt("1949703bFCLOI") / 7 + -parseInt("7511656dZlkJo") / 8 + parseInt("36983835tebMhR") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 999926);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input["replace"](/\n$/, "")["split"]("\n");
var N = Arr.shift() - 0;
for (var I = 0; I < N; I++) {
  var xywh = Arr["shift"]().split(" ").map(Number);
  var x1 = xywh[0];
  var x2 = xywh[0] + xywh[2];
  var y1 = xywh[1];
  var y2 = xywh[1] + xywh[3];
  var n = Arr["shift"]() - 0;
  var cnt = 0;
  for (var i = 0; i < n; i++) {
    var XY = Arr["shift"]()["split"](" ")["map"](Number);
    var X = XY[0];
    var Y = XY[1];
    if (x1 <= X && x2 >= X && y1 <= Y && y2 >= Y) {
      cnt++;
    }
  }
  console.log(cnt);
}
