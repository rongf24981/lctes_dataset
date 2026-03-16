(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("215107qgWZXB") / 1 + parseInt("1041880HYauJe") / 2 + parseInt("2461542empTed") / 3 + parseInt("747700DhCbYy") / 4 * (-parseInt("25kEoaRR") / 5) + -parseInt("935862oqxxgf") / 6 + -parseInt("875SRrpFX") / 7 * (-parseInt("25320UQVmJm") / 8) + -parseInt("2021031CNkLaK") / 9 * (-parseInt("10XGTeQO") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 655929);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]();
function __DECODE_0__(tFCTst, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 201;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tFCTst, key);
}
function __STRING_ARRAY__() {
  var _0x3bfa86 = ["log", "2021031CNkLaK", "filter", "/dev/stdin", "2461542empTed", "utf8", "length", "shift", "25kEoaRR", "readFileSync", "0 0", "875SRrpFX", "935862oqxxgf", "747700DhCbYy", "10XGTeQO", "split", "25320UQVmJm", "1041880HYauJe", "215107qgWZXB", "trim"];
  __STRING_ARRAY__ = function () {
    return _0x3bfa86;
  };
  return __STRING_ARRAY__();
}
var lines = input["split"]("\n");
while (lines.length > 0) {
  var path = [];
  var line;
  while ((line = lines["shift"]()) != "0 0") {
    var nums = line["split"](" ");
    var from = +nums[0];
    var to = +nums[1];
    path[from] = (path[from] || 0) + 1;
    path[to] = (path[to] || 0) + 1;
  }
  var odds = path["filter"](function (n) {
    return n % 2 == 1;
  });
  if (path[1] % 2 == 1 && path[2] % 2 == 1 && odds["length"] > 2) {
    console["log"]("NG");
  } else {
    console["log"]("OK");
  }
}
