function __DECODE_0__(igfqjb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 274;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(igfqjb, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("28057eykQbw") / 1 * (parseInt("52wdJpST") / 2) + -parseInt("27VCYRsY") / 3 * (-parseInt("165492CplmKG") / 4) + -parseInt("51465Iqnhez") / 5 * (-parseInt("306sLJRwh") / 6) + -parseInt("3171189aRlrxH") / 7 + -parseInt("1776xgWdaJ") / 8 * (-parseInt("24363EDlcBD") / 9) + parseInt("1075990WKCgJv") / 10 + -parseInt("15875607NYRbFx") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 439071);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
var n = arr["shift"]() - 0;
var [a, b] = [0, 1];
arr.forEach(v => {
  var [q, x] = v["split"](" ")["map"](Number);
  if (q == 1) {
    b *= x;
    a *= x;
  } else if (q == 2) {
    a -= x;
  } else if (q == 3) {
    a += x;
  }
});
console["log"](a + " " + b);
function __STRING_ARRAY__() {
  var _0x422d14 = ["shift", "165492CplmKG", "51465Iqnhez", "readFileSync", "1776xgWdaJ", "15875607NYRbFx", "/dev/stdin", "log", "27VCYRsY", "306sLJRwh", "utf8", "map", "split", "28057eykQbw", "3171189aRlrxH", "52wdJpST", "trim", "24363EDlcBD", "1075990WKCgJv"];
  __STRING_ARRAY__ = function () {
    return _0x422d14;
  };
  return __STRING_ARRAY__();
}
