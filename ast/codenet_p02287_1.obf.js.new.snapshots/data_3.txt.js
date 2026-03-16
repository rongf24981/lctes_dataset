function __DECODE_0__(iCGBWy, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 202;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iCGBWy, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("5hwCjMK") / 1 * (parseInt("268042YQlGPb") / 2) + parseInt("2208441LqGXOH") / 3 + -parseInt("2561824DrLeeD") / 4 + parseInt("2795180DJNLmP") / 5 + parseInt("1887894DuUzfS") / 6 * (parseInt("7WGARxP") / 7) + -parseInt("7352120eqjChj") / 8 * (-parseInt("9dlWGFw") / 9) + -parseInt("20351060UMvmpN") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 523390);
function __STRING_ARRAY__() {
  var _0x180a24 = ["length", "2208441LqGXOH", "2795180DJNLmP", "7WGARxP", "trim", "5hwCjMK", "floor", "join", "log", "parent key = ", "9dlWGFw", "7352120eqjChj", "268042YQlGPb", "right key = ", "2561824DrLeeD", "slice", "left key = ", "1887894DuUzfS", "20351060UMvmpN", "/dev/stdin", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x180a24;
  };
  return __STRING_ARRAY__();
}
console["log"](require("fs").readFileSync("/dev/stdin", "utf8")["trim"]().split(/[ |\n]/)["slice"](1).map((k, i, a) => "node " + ++i + ": key = " + k + ", " + (i - 1 ? "parent key = " + a[Math["floor"](i / 2) - 1] + ", " : "") + (i * 2 - 1 < a.length ? "left key = " + a[i * 2 - 1] + ", " : "") + (i * 2 < a["length"] ? "right key = " + a[i * 2] + ", " : ""))["join"]("\n"));
