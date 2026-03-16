(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("16469IhMOlx") / 1 * (parseInt("130HHlYus") / 2) + -parseInt("2470089PmSpIb") / 3 + -parseInt("6653232dXQfcU") / 4 + -parseInt("25YcXuih") / 5 * (parseInt("1708086ogOKtC") / 6) + parseInt("7RmaSfa") / 7 * (parseInt("9760216tPYaTM") / 8) + -parseInt("27leNQlb") / 9 * (-parseInt("343820FjZtrD") / 10) + parseInt("26302617dqfaaD") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 874729);
function __DECODE_0__(uoAnxX, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 407;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uoAnxX, key);
}
function __STRING_ARRAY__() {
  var _0x451765 = ["split", "343820FjZtrD", "stringify", "slice", "26302617dqfaaD", "9760216tPYaTM", "7RmaSfa", "indexOf", "27leNQlb", "utf8", "trim", "25YcXuih", "/dev/stdin", "16469IhMOlx", "1708086ogOKtC", "log", "length", "parse", "130HHlYus", "6653232dXQfcU", "2470089PmSpIb"];
  __STRING_ARRAY__ = function () {
    return _0x451765;
  };
  return __STRING_ARRAY__();
}
function myout(text) {
  console["log"](text);
}
function Main(input) {
  input = input["trim"]()["split"]("\n");
  var tmpInput = JSON["parse"](JSON["stringify"](input[1]));
  var left = 0;
  var right = 0;
  while (tmpInput["indexOf"]("()") != -1) {
    tmpInput = tmpInput.replace("()", "");
  }
  for (var i = 0; i < tmpInput["length"]; i++) {
    var tmp = tmpInput["slice"](i, i + 1);
    if (tmp == "(") {
      left++;
    } else if (tmp == ")") {
      right++;
    }
  }
  for (var i = 0; i < right; i++) {
    input[1] = "(" + input[1];
  }
  for (var i = 0; i < left; i++) {
    input[1] += ")";
  }
  myout(input[1]);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8")["trim"]());
