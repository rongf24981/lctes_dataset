(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("21yPDcVQ") / 1 * (-parseInt("90982nOtYHk") / 2) + -parseInt("3008187NJRutE") / 3 * (parseInt("4cNujDQ") / 4) + parseInt("69265muQwWp") / 5 * (parseInt("204LBjHuZ") / 6) + -parseInt("8797453yqNDxB") / 7 + -parseInt("254368YqqUqQ") / 8 + -parseInt("11154690YpKPpF") / 9 + -parseInt("3630PqIpYZ") / 10 * (-parseInt("87923jiHydk") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 797058);
var a = [""];
a[1] = "',.,!?"["split"]("");
a[2] = "abcABC"["split"]("");
a[3] = "defDEF"["split"]("");
a[4] = "ghiGHI"["split"]("");
a[5] = "jklJKL"["split"]("");
function __STRING_ARRAY__() {
  var _0x13d8cd = ["69265muQwWp", "21yPDcVQ", "defDEF", "4cNujDQ", "utf8", "log", "3630PqIpYZ", "jklJKL", "8797453yqNDxB", "length", "ghiGHI", "254368YqqUqQ", "/dev/stdin", "11154690YpKPpF", "readFileSync", "87923jiHydk", "3008187NJRutE", "wxyzWXYZ", "90982nOtYHk", "split", "abcABC", "forEach", "204LBjHuZ"];
  __STRING_ARRAY__ = function () {
    return _0x13d8cd;
  };
  return __STRING_ARRAY__();
}
a[6] = "mnoMNO"["split"]("");
a[7] = "pqrsPQRS"["split"]("");
a[8] = "tuvTUV"["split"]("");
function __DECODE_0__(DfiNjp, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 150;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DfiNjp, key);
}
a[9] = "wxyzWXYZ"["split"]("");
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input.trim()["split"]("\n");
arr["forEach"](function (v) {
  v = v.replace(/0+|1+|2+|3+|4+|5+|6+|7+|8+|9+/g, function (x) {
    if (x[0] == "0") {
      return x.slice(1).replace(/0/g, " ");
    } else {
      return a[x[0] - 0][x["length"] - 1];
    }
  });
  console["log"](v);
});
