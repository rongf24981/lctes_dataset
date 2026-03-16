function __STRING_ARRAY__() {
  var _0x3060c6 = ["627106UiJmDb", "toLowerCase", "match", "1854lllILY", "readFileSync", "1nepMuC", "utf8", "16NVaAiY", "map", "193587TJNrMT", "toUpperCase", "replace", "3123zGqJWy", "/dev/stdin", "884983JdFpcz", "6055VXVcib", "2049156igQgjQ", "9950gCEZRo", "join", "555373IShelt"];
  __STRING_ARRAY__ = function () {
    return _0x3060c6;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(urVaFJ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 460;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(urVaFJ, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1nepMuC") / 1 * (-parseInt("627106UiJmDb") / 2) + parseInt("193587TJNrMT") / 3 + parseInt("2049156igQgjQ") / 4 + -parseInt("6055VXVcib") / 5 * (parseInt("1854lllILY") / 6) + -parseInt("555373IShelt") / 7 * (-parseInt("16NVaAiY") / 8) + -parseInt("3123zGqJWy") / 9 * (-parseInt("9950gCEZRo") / 10) + -parseInt("884983JdFpcz") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 312556);
(function (input) {
  console.log(input["replace"](/\n$/, "").split("")["map"](function (e) {
    if (e["match"](/[a-z]/)) {
      return e["toUpperCase"]();
    } else if (e["match"](/[A-Z]/)) {
      return e["toLowerCase"]();
    }
    return e;
  })["join"](""));
})(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
