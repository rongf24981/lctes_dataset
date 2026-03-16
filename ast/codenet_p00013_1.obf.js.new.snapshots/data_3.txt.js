(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("478574zKNGfT") / 1 + -parseInt("1857682wAqHZv") / 2 + parseInt("1183542ZaTLoq") / 3 + -parseInt("2257864OUJDxR") / 4 + -parseInt("3795qhdlPi") / 5 * (parseInt("906fRvvHC") / 6) + parseInt("805WXEepX") / 7 * (-parseInt("2808KZinqy") / 8) + -parseInt("477wMPDXc") / 9 * (-parseInt("417990iqNNNQ") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 483006);
function __STRING_ARRAY__() {
  var _0x3ac0b9 = ["/dev/stdin", "906fRvvHC", "2808KZinqy", "utf8", "log", "split", "push", "805WXEepX", "some", "3795qhdlPi", "1857682wAqHZv", "417990iqNNNQ", "1183542ZaTLoq", "478574zKNGfT", "2257864OUJDxR", "pop", "readFileSync", "477wMPDXc"];
  __STRING_ARRAY__ = function () {
    return _0x3ac0b9;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(IGdjzC, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 447;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IGdjzC, key);
}
q = [];
require("fs")["readFileSync"]("/dev/stdin", "utf8").trim()["split"]("\n")["some"](function (i) {
  if (i != 0) {
    q["push"](i);
  } else {
    console["log"](q["pop"]());
  }
});
