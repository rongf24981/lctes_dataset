function __DECODE_0__(dJWdfQ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 114;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dJWdfQ, key);
}
function __STRING_ARRAY__() {
  var _0x35dded = ["1887720LQaRqw", "split", "1041kYRAeJ", "109568HOroed", "422226TlPPMy", "4418bsErFx", "790740ZEFNSS", "399198jlwiFN", "35JPqkPZ", "5936643jVOsDx", "110osozjI", "log", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x35dded;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("422226TlPPMy") / 1 + parseInt("4418bsErFx") / 2 * (parseInt("1041kYRAeJ") / 3) + parseInt("109568HOroed") / 4 * (-parseInt("110osozjI") / 5) + -parseInt("399198jlwiFN") / 6 * (-parseInt("35JPqkPZ") / 7) + parseInt("1887720LQaRqw") / 8 + -parseInt("5936643jVOsDx") / 9 + -parseInt("790740ZEFNSS") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 416054);
function Main(data) {
  data = data["split"](" ");
  data[0] = Number(data[0]);
  data[1] = Number(data[1]);
  var a = data[1] + (data[0] - data[1]) + (data[0] - (data[0] - data[1])) * 2 + (data[0] - data[1] - (data[0] - (data[0] - data[1]))) * 3;
  console["log"](a);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
