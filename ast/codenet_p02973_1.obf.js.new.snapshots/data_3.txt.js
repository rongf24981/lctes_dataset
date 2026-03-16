function __DECODE_0__(fgDQwd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 278;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fgDQwd, key);
}
function __STRING_ARRAY__() {
  var _0x12f5fa = ["3564664etmtQF", "readFileSync", "5870940RJhFvk", "push", "length", "/dev/stdin", "pop", "262122HkQvEX", "split", "12wDFgIk", "102FoENyM", "unshift", "126pIyJXc", "log", "418195ktqObm", "utf8", "68751ZPZOHg", "6544953kFzAuy", "9645lrCEpz"];
  __STRING_ARRAY__ = function () {
    return _0x12f5fa;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("418195ktqObm") / 1 + -parseInt("102FoENyM") / 2 * (-parseInt("68751ZPZOHg") / 3) + parseInt("12wDFgIk") / 4 * (parseInt("9645lrCEpz") / 5) + parseInt("126pIyJXc") / 6 * (parseInt("262122HkQvEX") / 7) + parseInt("3564664etmtQF") / 8 + -parseInt("6544953kFzAuy") / 9 + -parseInt("5870940RJhFvk") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 673997);
function Main(input) {
  input = input["split"]("\n");
  if (input[input["length"] - 1] === "") {
    input["pop"]();
  }
  const N = input[0] - 0;
  var colors = [];
  var temp;
  var min;
  var max;
  var mid;
  for (var i = 1; i < input["length"]; i++) {
    temp = input[i] - 0;
    if (colors.length === 0) {
      colors["push"](temp);
      continue;
    }
    if (temp <= colors[0]) {
      colors["unshift"](temp);
      continue;
    }
    if (temp > colors[colors.length - 1]) {
      colors[colors["length"] - 1] = temp;
      continue;
    }
    min = 0;
    max = colors["length"] - 1;
    while (max - min > 1) {
      mid = Math.floor((max + min) / 2);
      if (colors[mid] <= temp) {
        max = mid;
      } else {
        min = mid;
      }
    }
    colors[min] = temp;
  }
  console["log"](colors["length"]);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
