(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("313396Xdnddi") / 1 + -parseInt("2WxsHby") / 2 * (-parseInt("623682pSReuR") / 3) + -parseInt("8NdyYjY") / 4 * (-parseInt("2203715TySlkH") / 5) + parseInt("366GaQiLo") / 6 * (-parseInt("14588IodNuQ") / 7) + parseInt("1542416nuOoer") / 8 + parseInt("896814DnPdUY") / 9 + -parseInt("180fpGeZN") / 10 * (parseInt("422235xWdiae") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 877170);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
var q = arr["shift"]() - 0;
function __DECODE_0__(RDmsMq, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 269;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RDmsMq, key);
}
var str = "";
var map = new Map();
for (var i = 0; i < q; i++) {
  var [a, b, c] = arr[i]["split"](" ");
  if (a == "0") {
    map["set"](b, c);
  } else {
    str += map["get"](b) + "\n";
  }
}
console["log"](str["trim"]());
function __STRING_ARRAY__() {
  var _0x3077f2 = ["366GaQiLo", "14588IodNuQ", "422235xWdiae", "896814DnPdUY", "2WxsHby", "/dev/stdin", "1542416nuOoer", "trim", "180fpGeZN", "313396Xdnddi", "2203715TySlkH", "get", "shift", "8NdyYjY", "set", "log", "utf8", "623682pSReuR", "split"];
  __STRING_ARRAY__ = function () {
    return _0x3077f2;
  };
  return __STRING_ARRAY__();
}
