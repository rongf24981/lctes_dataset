(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("461100DFlWtt") / 1 + -parseInt("6GIlUjA") / 2 * (parseInt("562251TrtXkt") / 3) + -parseInt("136DWKRkU") / 4 * (-parseInt("65045SWbUvl") / 5) + parseInt("95286jWZsTo") / 6 * (parseInt("175gyGRTu") / 7) + parseInt("2639216dzEIYa") / 8 + -parseInt("18jDwiqw") / 9 * (-parseInt("3361050GUNbzB") / 10) + parseInt("15111547AXjkGs") / 11 * (-parseInt("12PcGqTb") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 366515);
function __DECODE_0__(UCzxVo, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 377;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UCzxVo, key);
}
(function (input) {
  var p = input["replace"](/\n$/, "")["split"]("\n").map(Number);
  var n = p.length;
  for (var i = 0; i < n; i++) {
    var g = p["shift"]();
    var s = [];
    g["toString"](2)["split"]("").reverse().map(function (e, i) {
      if (e == 1) {
        s["push"](Math["pow"](2, i));
      }
    });
    console["log"](s.join(" "));
  }
})(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x128ab7 = ["12PcGqTb", "replace", "18jDwiqw", "split", "562251TrtXkt", "log", "175gyGRTu", "6GIlUjA", "push", "pow", "readFileSync", "/dev/stdin", "65045SWbUvl", "136DWKRkU", "3361050GUNbzB", "toString", "95286jWZsTo", "461100DFlWtt", "shift", "2639216dzEIYa", "15111547AXjkGs"];
  __STRING_ARRAY__ = function () {
    return _0x128ab7;
  };
  return __STRING_ARRAY__();
}
