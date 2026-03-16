(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("327627pqGhuA") / 1 + parseInt("531076eanerY") / 2 * (-parseInt("6oLkbVP") / 3) + parseInt("935908txPFiU") / 4 + -parseInt("398785VHRtrF") / 5 * (-parseInt("6yOhCUI") / 6) + parseInt("35AouuPO") / 7 * (parseInt("641824PubqiG") / 8) + parseInt("12447xPvGlm") / 9 * (-parseInt("2680lyzWWc") / 10) + parseInt("8843098FySSWs") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 289445);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input.trim()["split"]("\n");
var n = arr["shift"]() - 0;
function __DECODE_0__(GJOXtm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 214;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GJOXtm, key);
}
var xyz = [];
for (var i = 0; i <= n; i++) {
  xyz[i] = [0, 0, 0];
}
var x = arr["shift"]()["split"](" ").map(Number);
var y = arr["shift"]().split(" ")["map"](Number);
var z = arr.shift()["split"](" ")["map"](Number);
x["shift"]();
y["shift"]();
function __STRING_ARRAY__() {
  var _0x3f49cb = ["map", "utf8", "shift", "split", "35AouuPO", "327627pqGhuA", "398785VHRtrF", "6oLkbVP", "/dev/stdin", "log", "531076eanerY", "935908txPFiU", "readFileSync", "6yOhCUI", "12447xPvGlm", "8843098FySSWs", "2680lyzWWc", "641824PubqiG", "forEach"];
  __STRING_ARRAY__ = function () {
    return _0x3f49cb;
  };
  return __STRING_ARRAY__();
}
z["shift"]();
x["forEach"](v => {
  xyz[v][0] = 1;
});
y["forEach"](v => {
  xyz[v][1] = 1;
});
z["forEach"](v => {
  xyz[v][2] = 1;
});
xyz["shift"]();
var cnt = 0;
xyz["forEach"](v => {
  if (v[0] == 0 && v[2] == 1) {
    cnt++;
  } else if (v[1] == 1 && v[2] == 1) {
    cnt++;
  }
});
console["log"](cnt);
