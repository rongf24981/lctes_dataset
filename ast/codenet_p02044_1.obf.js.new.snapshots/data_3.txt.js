(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("216041mCYLaZ") / 1 + -parseInt("1352456xffCTr") / 2 + -parseInt("555531bVnqeq") / 3 + -parseInt("3671656jySpmz") / 4 * (parseInt("5HIZqeD") / 5) + -parseInt("12yYUNzn") / 6 * (-parseInt("154861auSPwp") / 7) + parseInt("9990136cmLdxX") / 8 + -parseInt("9lrZvav") / 9 * (-parseInt("14318810MgoSkS") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 729534);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input.trim()["split"]("\n");
while (true) {
  var [n, m] = arr["shift"]()["split"](" ")["map"](Number);
  if (n == 0 && m == 0) {
    break;
  }
  var x = m / n;
  var sum = 0;
  var a = arr["shift"]()["split"](" ").map(Number);
  a.forEach(v => {
    if (v >= x) {
      sum += x;
    } else {
      sum += v;
    }
  });
  console["log"](sum);
}
function __DECODE_0__(bmRiAL, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 167;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bmRiAL, key);
}
function __STRING_ARRAY__() {
  var _0x2930cc = ["3671656jySpmz", "1352456xffCTr", "9lrZvav", "154861auSPwp", "5HIZqeD", "12yYUNzn", "split", "readFileSync", "map", "14318810MgoSkS", "log", "/dev/stdin", "9990136cmLdxX", "shift", "555531bVnqeq", "216041mCYLaZ"];
  __STRING_ARRAY__ = function () {
    return _0x2930cc;
  };
  return __STRING_ARRAY__();
}
