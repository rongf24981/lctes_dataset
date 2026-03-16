function __DECODE_0__(NujtYL, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 213;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NujtYL, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("88167nQycfQ") / 1 * (parseInt("28OLPiKx") / 2) + -parseInt("276513hJLQnL") / 3 * (parseInt("76mtBMEZ") / 4) + -parseInt("8408790oLdjSN") / 5 + parseInt("861078eQQHAF") / 6 * (parseInt("56ulJRQX") / 7) + -parseInt("208928ArqORL") / 8 + -parseInt("7136964tMlgdE") / 9 + parseInt("27865860ituiBl") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 916909);
function __STRING_ARRAY__() {
  var _0x544363 = ["readFileSync", "88167nQycfQ", "27865860ituiBl", "trim", "8408790oLdjSN", "7136964tMlgdE", "utf8", "white", "76mtBMEZ", "56ulJRQX", "substr", "red", "208928ArqORL", "28OLPiKx", "fuchsia", "length", "861078eQQHAF", "lime", "blue", "276513hJLQnL", "pow", "split", "log"];
  __STRING_ARRAY__ = function () {
    return _0x544363;
  };
  return __STRING_ARRAY__();
}
(function (input) {
  var lines = input["split"]("\n");
  var colors = [["black", 0, 0, 0], ["blue", 0, 0, 255], ["lime", 0, 255, 0], ["aqua", 0, 255, 0], ["red", 255, 0, 0], ["fuchsia", 255, 0, 255], ["yellow", 255, 255, 0], ["white", 255, 255, 255]];
  for (var i = 0; i < lines["length"]; ++i) {
    if (lines[i][0] === "#") {
      var best_color;
      var min_d = 196609;
      var r = parseInt(lines[i].substr(1, 2), 16);
      var g = parseInt(lines[i]["substr"](3, 2), 16);
      var b = parseInt(lines[i]["substr"](5, 2), 16);
      for (var j = 0; j < colors.length; ++j) {
        var d = Math["pow"](r - colors[j][1], 2) + Math.pow(g - colors[j][2], 2) + Math["pow"](b - colors[j][3], 2);
        if (d < min_d) {
          min_d = d;
          best_color = colors[j][0];
        }
      }
      console["log"](best_color);
    }
  }
})(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]());
