function __DECODE_0__(wnZogZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 443;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wnZogZ, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("118500NsCsIw") / 1 + parseInt("1430258cQCqPc") / 2 + parseInt("1201713jtHaYt") / 3 + -parseInt("3435140DXAcVd") / 4 + -parseInt("2750005HMRwCc") / 5 + -parseInt("2781876OqRxhk") / 6 + parseInt("35LRixxX") / 7 * (parseInt("2225184kPqeCH") / 8);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 515508);
function __STRING_ARRAY__() {
  var _0x16b49e = ["35LRixxX", "utf8", "join", "/dev/stdin", "trim", "shift", "1201713jtHaYt", "split", "push", "log", "2225184kPqeCH", "forEach", "2750005HMRwCc", "1430258cQCqPc", "length", "2781876OqRxhk", "3435140DXAcVd", "118500NsCsIw"];
  __STRING_ARRAY__ = function () {
    return _0x16b49e;
  };
  return __STRING_ARRAY__();
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
while (true) {
  var N = Arr["shift"]() - 0;
  if (N == 0) {
    break;
  }
  var arr = [];
  for (var i = 0; i < N; i++) {
    var ipqr = Arr["shift"]()["split"](" ").map(Number);
    arr["push"](ipqr);
  }
  var PQRC = Arr["shift"]().split(" ").map(Number);
  var result = [];
  arr["forEach"](function (v) {
    var bad = 0;
    if (PQRC[0] < v[1]) {
      bad++;
    }
    if (PQRC[1] < v[2]) {
      bad++;
    }
    if (PQRC[2] < v[3]) {
      bad++;
    }
    if (PQRC[3] < (v[1] + v[3]) * 4 + v[2] * 9) {
      bad++;
    }
    if (bad == 0) {
      result.push(v[0]);
    }
  });
  console["log"](result["length"] == 0 ? "NA" : result["join"]("\n"));
}
