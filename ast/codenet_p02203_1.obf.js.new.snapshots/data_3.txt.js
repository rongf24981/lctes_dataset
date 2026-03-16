(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("109IHndFX") / 1 * (-parseInt("14482wBguir") / 2) + parseInt("3789288RLFuQG") / 3 + -parseInt("1483756uOQRnD") / 4 + -parseInt("316465sFpkTF") / 5 * (parseInt("18IKFzfK") / 6) + parseInt("8583295OyisoA") / 7 + parseInt("10165472vKVqGd") / 8 + parseInt("15926031PjxBFE") / 9 * (-parseInt("10qFwFbC") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 640319);
function __DECODE_0__(WjhvFi, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 223;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WjhvFi, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input.trim().split("\n");
var n = arr["shift"]() - 0;
var v = arr["shift"]()["split"](" ")["map"](Number);
var cnt = 1;
for (var i = 0; i < n - 1; i++) {
  if (v[i] >= v[i + 1]) {
    cnt++;
  }
}
function __STRING_ARRAY__() {
  var _0x2a1c49 = ["1483756uOQRnD", "109IHndFX", "18IKFzfK", "3789288RLFuQG", "15926031PjxBFE", "utf8", "/dev/stdin", "split", "10165472vKVqGd", "log", "316465sFpkTF", "14482wBguir", "8583295OyisoA", "shift", "10qFwFbC", "map", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x2a1c49;
  };
  return __STRING_ARRAY__();
}
console["log"](cnt);
console["log"](n);
