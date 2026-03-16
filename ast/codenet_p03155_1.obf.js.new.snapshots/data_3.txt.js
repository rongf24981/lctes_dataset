function __STRING_ARRAY__() {
  var _0x4eff84 = ["32880JMuscw", "/dev/stdin", "2447408ZIgmbG", "12968496COrbzy", "309rgOskU", "20070083zUfrDb", "trim", "460120NQUVTy", "split", "utf8", "49kOWEsj", "9965YuogEV", "5130jEhGsn", "log", "map", "10ABpsQf", "372837gyzOTs"];
  __STRING_ARRAY__ = function () {
    return _0x4eff84;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(chxQOC, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 196;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(chxQOC, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("372837gyzOTs") / 1 + -parseInt("2447408ZIgmbG") / 2 + parseInt("309rgOskU") / 3 * (parseInt("32880JMuscw") / 4) + parseInt("9965YuogEV") / 5 * (parseInt("5130jEhGsn") / 6) + -parseInt("49kOWEsj") / 7 * (parseInt("460120NQUVTy") / 8) + parseInt("12968496COrbzy") / 9 * (-parseInt("10ABpsQf") / 10) + parseInt("20070083zUfrDb") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 935138);
function Main(input) {
  input = input["split"]("\n")["map"](Number);
  console["log"]((input[0] + 1 - input[1]) * (input[0] + 1 - input[2]));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8")["trim"]());
