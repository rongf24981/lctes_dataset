(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("405mslBvm") / 1 * (parseInt("1690GtGzhu") / 2) + -parseInt("505233kuHVkS") / 3 + parseInt("200xkXkwn") / 4 * (-parseInt("28055ybwZmH") / 5) + -parseInt("492EunutU") / 6 * (-parseInt("29043KFTmHM") / 7) + -parseInt("2680hFSkRG") / 8 * (parseInt("1224WeeTfy") / 9) + parseInt("1864640NnmJtD") / 10 + parseInt("17171wVNuAa") / 11 * (-parseInt("708CgOPIA") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 282287);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var arr = input["trim"]().split("\n");
function __STRING_ARRAY__() {
  var _0x262498 = ["utf8", "29043KFTmHM", "405mslBvm", "492EunutU", "map", "trim", "split", "forEach", "2680hFSkRG", "shift", "505233kuHVkS", "max", "log", "200xkXkwn", "1690GtGzhu", "708CgOPIA", "1224WeeTfy", "28055ybwZmH", "1864640NnmJtD", "17171wVNuAa", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x262498;
  };
  return __STRING_ARRAY__();
}
arr = arr["map"](v => v["split"](" ")["map"](Number));
var [n, t] = arr["shift"]();
var max = 0;
function __DECODE_0__(MGgVfV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 452;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MGgVfV, key);
}
arr["forEach"](v => {
  max = Math["max"](max, v[1] / v[0]);
});
console["log"]((max * t).toFixed(6));
