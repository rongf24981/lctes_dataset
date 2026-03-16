function __STRING_ARRAY__() {
  var _0x7dd6a5 = ["15798OMWNLU", "2970pkOBvB", "1329455QtXvOW", "509146JDcGmc", "push", "trim", "370614NLRZhj", "split", "pop", "2051SELGYT", "/dev/stdin", "1740dpLota", "6JQNUbU", "20yWInFQ", "4hmvoEa", "713246wuPmre", "10920ecpEHQ", "log", "utf8", "39975QCAjkK"];
  __STRING_ARRAY__ = function () {
    return _0x7dd6a5;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("370614NLRZhj") / 1 + parseInt("713246wuPmre") / 2 * (parseInt("6JQNUbU") / 3) + -parseInt("4hmvoEa") / 4 * (-parseInt("1329455QtXvOW") / 5) + -parseInt("15798OMWNLU") / 6 * (-parseInt("2051SELGYT") / 7) + -parseInt("10920ecpEHQ") / 8 * (parseInt("2970pkOBvB") / 9) + -parseInt("20yWInFQ") / 10 * (-parseInt("509146JDcGmc") / 11) + -parseInt("1740dpLota") / 12 * (parseInt("39975QCAjkK") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 576239);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var arr = input.trim()["split"]("\n");
var Q = arr[0] - 0;
function __DECODE_0__(qMgGgO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 343;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qMgGgO, key);
}
var a = [];
var s = "";
for (var i = 1; i <= Q; i++) {
  var q = arr[i]["split"](" ");
  if (q[0] == "0") {
    a["push"](q[1] - 0);
  } else if (q[0] == "1") {
    s += a[q[1]] - 0 + "\n";
  } else {
    a["pop"]();
  }
}
console["log"](s["trim"]());
