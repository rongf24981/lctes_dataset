(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("181145eJvEEo") / 1 + parseInt("1216878TPZhBo") / 2 + -parseInt("2452320QcMzZj") / 3 + -parseInt("45648HBfbGX") / 4 * (-parseInt("85ftVHvD") / 5) + parseInt("4278204ttWrZW") / 6 + parseInt("14EkIYtT") / 7 * (-parseInt("1876752QpMmXh") / 8) + -parseInt("613071SRLVCm") / 9 * (-parseInt("10qCSUKT") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 478113);
function __DECODE_0__(HanENt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 378;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HanENt, key);
}
function __STRING_ARRAY__() {
  var _0x954dd6 = ["85ftVHvD", "forEach", "1216878TPZhBo", "14EkIYtT", "613071SRLVCm", "45648HBfbGX", "trim", "reduce", "10qCSUKT", "2452320QcMzZj", "0 0", "split", "map", "shift", "4278204ttWrZW", "181145eJvEEo", "1876752QpMmXh", "/dev/stdin", "log"];
  __STRING_ARRAY__ = function () {
    return _0x954dd6;
  };
  return __STRING_ARRAY__();
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
while (true) {
  var wd = arr.shift();
  if (wd == "0 0") {
    break;
  }
  var W = arr.shift()["split"](" ")["map"](Number);
  var D = arr["shift"]()["split"](" ")["map"](Number);
  var sum = W["reduce"](function (a, b) {
    return a + b;
  });
  D["forEach"](function (v) {
    var index = W.indexOf(v);
    if (index != -1) {
      W[index] = "";
    } else {
      sum += v;
    }
  });
  console["log"](sum);
}
