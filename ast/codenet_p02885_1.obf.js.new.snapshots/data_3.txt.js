(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("775708PNnTpU") / 1 + -parseInt("2287448yVqlIH") / 2 + -parseInt("3VQCaRc") / 3 * (-parseInt("4506812NMzLqw") / 4) + -parseInt("7401725KZGhjF") / 5 * (parseInt("6PaOIva") / 6) + parseInt("618352zQbSqx") / 7 + parseInt("7496288BDdmDi") / 8 + parseInt("18073809vtKyUW") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 760499);
function __DECODE_0__(Eviaim, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 383;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Eviaim, key);
}
function Main(input) {
  var args = input["trim"]().split(" ")["map"](Number);
  var nums = args[1] * 2;
  var ans = 0;
  if (nums <= args[0]) {
    ans = args[0] - nums;
  }
  console["log"](ans);
}
function __STRING_ARRAY__() {
  var _0xee1730 = ["/dev/stdin", "utf8", "775708PNnTpU", "3VQCaRc", "7496288BDdmDi", "18073809vtKyUW", "6PaOIva", "4506812NMzLqw", "trim", "618352zQbSqx", "map", "log", "2287448yVqlIH", "readFileSync", "7401725KZGhjF"];
  __STRING_ARRAY__ = function () {
    return _0xee1730;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
