(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("402734MNeUng") / 1 + -parseInt("595028pRJgNU") / 2 + parseInt("3HLmkrA") / 3 * (parseInt("265624sKfBbC") / 4) + -parseInt("1065DZDELk") / 5 * (-parseInt("13578EKxIKF") / 6) + -parseInt("2446472aeOgce") / 7 + -parseInt("152LceueW") / 8 * (parseInt("234RTSLpC") / 9) + -parseInt("56270sjnADu") / 10 * (parseInt("55bgzhrh") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 275520);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x57233f = ["shift", "402734MNeUng", "56270sjnADu", "234RTSLpC", "152LceueW", "log", "2446472aeOgce", "replace", "55bgzhrh", "split", "/dev/stdin", "1065DZDELk", "595028pRJgNU", "265624sKfBbC", "13578EKxIKF", "utf8", "test", "3HLmkrA", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x57233f;
  };
  return __STRING_ARRAY__();
}
var Arr = input["replace"](/\n$/, "")["split"]("\n");
var n = Arr["shift"]();
function __DECODE_0__(tgeQmR, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 396;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tgeQmR, key);
}
for (var i = 0; i < n; i++) {
  if (/^>'(=+)#\1~$/["test"](Arr[i])) {
    console["log"]("A");
  } else if (/^>\^(Q=)+~~$/.test(Arr[i])) {
    console["log"]("B");
  } else {
    console["log"]("NA");
  }
}
