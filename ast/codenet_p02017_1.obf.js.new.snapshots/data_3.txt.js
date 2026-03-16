function __DECODE_0__(RcsVYx, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 500;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RcsVYx, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1070683bZvHFc") / 1 + -parseInt("146ZBMutq") / 2 * (parseInt("5313wEFTQj") / 3) + -parseInt("2587964RawIBP") / 4 + -parseInt("15BTbeFr") / 5 * (-parseInt("1927158aAxmdq") / 6) + parseInt("7801542lhyYfA") / 7 + -parseInt("8wuRUXC") / 8 * (parseInt("2063205LSMgse") / 9) + -parseInt("15593440yfGbXZ") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 583905);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var [a, b, c, d] = input["trim"]().split(" ")["map"](Number);
if (a * b % 2 != 0 && (c + d) % 2 != 0) {
  console["log"]("No");
} else {
  console["log"]("Yes");
}
function __STRING_ARRAY__() {
  var _0x50b0bc = ["utf8", "146ZBMutq", "map", "log", "7801542lhyYfA", "15BTbeFr", "2063205LSMgse", "8wuRUXC", "1927158aAxmdq", "1070683bZvHFc", "2587964RawIBP", "5313wEFTQj", "Yes", "15593440yfGbXZ", "trim"];
  __STRING_ARRAY__ = function () {
    return _0x50b0bc;
  };
  return __STRING_ARRAY__();
}
