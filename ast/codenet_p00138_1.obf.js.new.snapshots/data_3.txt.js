(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("97319CbNoyF") / 1 + parseInt("4rLbnaZ") / 2 * (parseInt("373362aWdcfB") / 3) + -parseInt("93532FaJkef") / 4 * (parseInt("5RZGjDi") / 5) + parseInt("3655422XZVmio") / 6 + parseInt("7CLWQQG") / 7 * (parseInt("5730664XonaXy") / 8) + parseInt("8271uVUKSF") / 9 * (-parseInt("1420OgUseX") / 10) + -parseInt("10480745lYASKJ") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 370483);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
var abc = [[], [], []];
var obj = {};
function __DECODE_0__(xOpXHb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 403;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xOpXHb, key);
}
for (var i = 0; i < Arr["length"]; i++) {
  var arr = Arr[i]["split"](" ")["map"](Number);
  abc[Math["floor"](i / 8)].push(arr[1]);
  obj[arr[1]] = arr[0];
}
for (var i = 0; i < 3; i++) {
  abc[i]["sort"](function (a, b) {
    return a - b;
  });
}
function __STRING_ARRAY__() {
  var _0x169597 = ["push", "sort", "trim", "10480745lYASKJ", "3655422XZVmio", "1420OgUseX", "utf8", "length", "/dev/stdin", "log", "split", "map", "97319CbNoyF", "toFixed", "5730664XonaXy", "7CLWQQG", "readFileSync", "373362aWdcfB", "floor", "5RZGjDi", "93532FaJkef", "4rLbnaZ", "8271uVUKSF"];
  __STRING_ARRAY__ = function () {
    return _0x169597;
  };
  return __STRING_ARRAY__();
}
console.log(obj[abc[0][0]] + " " + abc[0][0].toFixed(2));
console.log(obj[abc[0][1]] + " " + abc[0][1]["toFixed"](2));
console["log"](obj[abc[1][0]] + " " + abc[1][0]["toFixed"](2));
console.log(obj[abc[1][1]] + " " + abc[1][1]["toFixed"](2));
console["log"](obj[abc[2][0]] + " " + abc[2][0]["toFixed"](2));
console["log"](obj[abc[2][1]] + " " + abc[2][1]["toFixed"](2));
var d = [];
for (var i = 0; i < 3; i++) {
  d["push"](abc[i][2]);
}
d["sort"](function (a, b) {
  return a - b;
});
console["log"](obj[d[0]] + " " + d[0].toFixed(2));
console["log"](obj[d[1]] + " " + d[1]["toFixed"](2));
