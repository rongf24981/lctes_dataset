(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("321XEsjJb") / 1 * (parseInt("10470eLcAyy") / 2) + -parseInt("2558082vCBBLt") / 3 + -parseInt("477140ItmnBf") / 4 * (parseInt("70DJnBaa") / 5) + parseInt("2130204BPKBAr") / 6 + parseInt("995183ZEqqma") / 7 * (-parseInt("24mmXYBc") / 8) + -parseInt("18zhzsAp") / 9 * (parseInt("4504870NrTffV") / 10) + -parseInt("30226559lDVcRP") / 11 * (-parseInt("12YQeoWt") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 933173);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
var data = [];
function __DECODE_0__(cWdMts, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 157;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(cWdMts, key);
}
var N;
function __STRING_ARRAY__() {
  var _0x120a63 = ["477140ItmnBf", "push", "reduce", "trim", "321XEsjJb", "length", "utf8", "map", "join", "10470eLcAyy", "slice", "18zhzsAp", "995183ZEqqma", "     ", "split", "70DJnBaa", "24mmXYBc", "2130204BPKBAr", "readFileSync", "30226559lDVcRP", "12YQeoWt", "2558082vCBBLt", "4504870NrTffV", "log", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x120a63;
  };
  return __STRING_ARRAY__();
}
for (var i = 0; i < Arr["length"]; i++) {
  var arr = Arr[i]["split"](" ")["map"](Number);
  if (arr["length"] == 1) {
    if (i == 0) {
      N = arr[0];
      continue;
    }
    var DATA = [];
    for (var j = 0; j < N + 1; j++) {
      DATA["push"](0);
    }
    for (var k = 0; k < N; k++) {
      var v = data[k];
      for (var l = 0; l < N + 1; l++) {
        DATA[l] += v[l];
      }
      v = v["map"](function (val) {
        return ("     " + val)["slice"](-5);
      });
      console["log"](v["join"](""));
    }
    DATA = DATA["map"](function (val) {
      return ("     " + val)["slice"](-5);
    });
    console["log"](DATA["join"](""));
    if (arr[0] == 0) {
      break;
    }
    data = [];
    N = arr[0];
  } else {
    var sum = arr["reduce"](function (a, b) {
      return a + b;
    });
    arr.push(sum);
    data["push"](arr);
  }
}
