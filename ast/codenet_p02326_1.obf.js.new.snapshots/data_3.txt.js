(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1316596wcuQVM") / 1 + -parseInt("1604226BWrbpF") / 2 + parseInt("246gpyhrF") / 3 * (-parseInt("2644sPdCbw") / 4) + parseInt("77710bpZmCN") / 5 * (parseInt("24DPsYTO") / 6) + -parseInt("2569DZFxDC") / 7 * (parseInt("1928pPRrhA") / 8) + -parseInt("3133557wvPcFM") / 9 + -parseInt("33699910ClNzxT") / 10 * (-parseInt("11XUpjRB") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 822628);
function __STRING_ARRAY__() {
  var _0x41f46e = ["1316596wcuQVM", "1928pPRrhA", "33699910ClNzxT", "2644sPdCbw", "min", "24DPsYTO", "readFileSync", "split", "map", "3133557wvPcFM", "11XUpjRB", "shift", "246gpyhrF", "77710bpZmCN", "2569DZFxDC", "/dev/stdin", "utf8", "1604226BWrbpF"];
  __STRING_ARRAY__ = function () {
    return _0x41f46e;
  };
  return __STRING_ARRAY__();
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input.trim()["split"]("\n");
var [h, w] = arr["shift"]().split(" ")["map"](Number);
function __DECODE_0__(djWbxG, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 281;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(djWbxG, key);
}
var yx = [];
for (var i = 0; i < h; i++) {
  yx[i] = arr["shift"]().split(" ")["map"](v => 1 - (v - 0));
}
for (var y = 1; y < h; y++) {
  for (var x = 1; x < w; x++) {
    if (yx[y][x] == 1) {
      yx[y][x] = Math["min"](yx[y - 1][x], yx[y][x - 1], yx[y - 1][x - 1]) + 1;
    }
  }
}
var max = 0;
for (var y = 0; y < h; y++) {
  for (var x = 0; x < w; x++) {
    max = Math.max(max, yx[y][x]);
  }
}
console.log(max * max);
