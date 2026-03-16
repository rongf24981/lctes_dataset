'use strict';

function __DECODE_0__(goqfsv, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 222;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(goqfsv, key);
}
function __STRING_ARRAY__() {
  var _0x3fc4a1 = ["max", "trim", "530rRNiDX", "5532NNrfRC", "push", "12BGMvTj", "14609smsPfC", "37127608IaBmDv", "abs", "shift", "324TLvWBe", "length", "1650622BWpgOy", "13sJcAiO", "515830tqDLFu", "log", "152526FVQhCU", "utf8", "split", "235281PbqNoT", "99TCfViz", "3032zXygYT", "1WAnpyr", "MAX_SAFE_INTEGER"];
  __STRING_ARRAY__ = function () {
    return _0x3fc4a1;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1WAnpyr") / 1 * (-parseInt("1650622BWpgOy") / 2) + -parseInt("235281PbqNoT") / 3 * (-parseInt("12BGMvTj") / 4) + parseInt("530rRNiDX") / 5 * (parseInt("5532NNrfRC") / 6) + -parseInt("14609smsPfC") / 7 * (parseInt("3032zXygYT") / 8) + parseInt("99TCfViz") / 9 * (-parseInt("515830tqDLFu") / 10) + -parseInt("152526FVQhCU") / 11 * (parseInt("324TLvWBe") / 12) + parseInt("13sJcAiO") / 13 * (parseInt("37127608IaBmDv") / 14);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 426906);
function main(arg) {
  arg = arg["trim"]()["split"]("\n");
  arg["shift"]();
  var H = arg["length"];
  var W = arg[0]["length"];
  var m1 = [];
  for (var i = 0; i < arg["length"]; i++) {
    m1["push"](arg[i]["split"](""));
  }
  var i = 0;
  var slist = [];
  for (var y = 0; y < H; y++) {
    for (var x = 0; x < W; x++) {
      if (m1[y][x] === "#") {
        slist["push"]([y, x]);
      }
    }
  }
  var tmp = [];
  for (var y = 0; y < H; y++) {
    for (var x = 0; x < W; x++) {
      if (m1[y][x] === ".") {
        var minD = Number["MAX_SAFE_INTEGER"];
        for (var i = 0; i < slist["length"]; i++) {
          var _y = slist[i][0];
          var _x = slist[i][1];
          var d = Math["abs"](_y - y) + Math["abs"](_x - x);
          if (d < minD) {
            minD = d;
          }
        }
        tmp["push"](minD);
      }
    }
  }
  console["log"](Math["max"](...tmp));
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
