(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1331379gzoRmS") / 1 + parseInt("1193026ODoGBw") / 2 + -parseInt("906153faFoYZ") / 3 + -parseInt("36VAVIzg") / 4 * (parseInt("245925dLhimp") / 5) + parseInt("3338094zulCgQ") / 6 + parseInt("3155187ZXToAs") / 7 + parseInt("21688onnCfP") / 8 * (-parseInt("4509QnLuTV") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 832055);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x1670c4 = ["join", "split", "245925dLhimp", "21688onnCfP", "shift", "trim", "log", "4509QnLuTV", "36VAVIzg", "1193026ODoGBw", "3338094zulCgQ", "utf8", "/dev/stdin", "1331379gzoRmS", "906153faFoYZ", "repeat", "readFileSync", "3155187ZXToAs", "replace", "map"];
  __STRING_ARRAY__ = function () {
    return _0x1670c4;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(esWNBS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 174;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(esWNBS, key);
}
var data = input["trim"]().split("\n");
while (true) {
  var str = data["shift"]();
  if (str == "#") {
    break;
  }
  str = str["replace"](/\d/g, function (v) {
    return "n"["repeat"](v - 0);
  });
  var arr = str["split"]("/");
  arr = arr["map"](v => v.split(""));
  var [a, b, c, d] = data.shift()["split"](" ")["map"](Number);
  arr[a - 1][b - 1] = "n";
  arr[c - 1][d - 1] = "b";
  arr = arr.map(v => v["join"](""));
  str = arr["join"]("/");
  str = str["replace"](/n+/g, function (v) {
    return v.length;
  });
  console["log"](str);
}
