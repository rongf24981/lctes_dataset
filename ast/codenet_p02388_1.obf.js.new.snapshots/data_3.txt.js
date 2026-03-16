'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("726497XXBHvD") / 1 + -parseInt("2Ctdnvr") / 2 * (-parseInt("5669415GUFIVv") / 3) + parseInt("2698456ZWaYOB") / 4 + parseInt("6463285IkNRqi") / 5 + parseInt("6sOgmwo") / 6 * (parseInt("13492234nkDEdD") / 7) + -parseInt("4342912XcYsUD") / 8 + parseInt("273897cyUiYn") / 9 * (-parseInt("1640vQKcMD") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 977159);
function __DECODE_0__(vGKIlm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 451;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vGKIlm, key);
}
function __STRING_ARRAY__() {
  var _0x5767bd = ["726497XXBHvD", "split", "2Ctdnvr", "trim", "13492234nkDEdD", "5669415GUFIVv", "273897cyUiYn", "6sOgmwo", "toString", "1640vQKcMD", "log", "6463285IkNRqi", "4342912XcYsUD", "readFileSync", "2698456ZWaYOB", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x5767bd;
  };
  return __STRING_ARRAY__();
}
(function (stdin) {
  var inputs = stdin["toString"]()["trim"]()["split"]("\n");
  (function (x) {
    console["log"](x * x * x);
  })(parseInt(inputs[0], 10));
})(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
