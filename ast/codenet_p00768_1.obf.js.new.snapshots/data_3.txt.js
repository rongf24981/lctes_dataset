(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("140982YheKzH") / 1 * (parseInt("2KoVepV") / 2) + -parseInt("241881ZPJSXv") / 3 + -parseInt("214316kDbPiL") / 4 + -parseInt("422900DAwdcm") / 5 * (parseInt("12QKNbcW") / 6) + -parseInt("251937vBmMED") / 7 + -parseInt("2125904ccvYlL") / 8 + parseInt("8611137uaPqdm") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 210716);
function __STRING_ARRAY__() {
  var _0x349ab7 = ["2125904ccvYlL", "251937vBmMED", "log", "422900DAwdcm", "/dev/stdin", "map", "241881ZPJSXv", "shift", "split", "2KoVepV", "trim", "utf8", "12QKNbcW", "214316kDbPiL", "8611137uaPqdm", "push", "readFileSync", "140982YheKzH"];
  __STRING_ARRAY__ = function () {
    return _0x349ab7;
  };
  return __STRING_ARRAY__();
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(MpPyMi, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 226;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MpPyMi, key);
}
var arr = input["trim"]()["split"]("\n");
while (true) {
  var MTPR = arr["shift"]();
  if (MTPR == "0 0 0 0") {
    break;
  }
  MTPR = MTPR["split"](" ").map(Number);
  var team = [];
  for (var i = 0; i < MTPR[1]; i++) {
    team["push"]([0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i]);
  }
  for (var i = 0; i < MTPR[3]; i++) {
    var mtpj = arr.shift()["split"](" ")["map"](Number);
    var m = mtpj[0];
    var t = mtpj[1] - 1;
    var p = mtpj[2] - 1;
    var j = mtpj[3];
    if (j == 0) {
      team[t][0]++;
      team[t][1] += m + team[t][2][p] * 20;
    }
    if (j != 0) {
      team[t][2][p]++;
    }
  }
  team.sort(function (a, b) {
    if (a[0] == b[0] && a[1] == b[1]) {
      return b[3] - a[3];
    } else if (a[0] == b[0]) {
      return a[1] - b[1];
    } else {
      return b[0] - a[0];
    }
  });
  var ans = [];
  var same = [-1, -1];
  team.forEach(function (v, i) {
    if (same[0] == v[0] && same[1] == v[1]) {
      ans[ans.length - 1] += "=" + (v[3] + 1);
    } else {
      ans["push"](v[3] + 1);
      same = [v[0], v[1]];
    }
  });
  console["log"](ans.join(","));
}
