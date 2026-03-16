(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1014990YjGMvX") / 1 + parseInt("223824UygqJr") / 2 + -parseInt("498657aGtTgQ") / 3 * (-parseInt("4jXzeKq") / 4) + -parseInt("5208780ipVQxw") / 5 + parseInt("768780piSBnZ") / 6 + parseInt("2996210pouDzk") / 7 + parseInt("15369064IujJOu") / 8 * (parseInt("9pSeeeR") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 698678);
function __STRING_ARRAY__() {
  const _0x10a19e = ["log", "4jXzeKq", "utf8", "2996210pouDzk", "15369064IujJOu", "length", "498657aGtTgQ", "768780piSBnZ", "1014990YjGMvX", "floor", "9pSeeeR", "/dev/stdin", "match", "223824UygqJr", "5208780ipVQxw"];
  __STRING_ARRAY__ = function () {
    return _0x10a19e;
  };
  return __STRING_ARRAY__();
}
function Main(s) {
  const n = s["length"];
  const p = s["match"](/p/g).length;
  console["log"](Math["floor"](n / 2 - p));
}
function __DECODE_0__(NyDSCU, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 294;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NyDSCU, key);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
