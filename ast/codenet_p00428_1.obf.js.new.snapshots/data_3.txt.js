function __DECODE_0__(quQgyU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 109;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(quQgyU, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("14069JddCfS") / 1 * (-parseInt("22fstlzV") / 2) + parseInt("3BENUuB") / 3 * (-parseInt("990764GVMHnn") / 4) + parseInt("1114045XYgByi") / 5 + parseInt("1872162ILabzi") / 6 + -parseInt("340697pgTVtx") / 7 + -parseInt("17808qNwoJj") / 8 * (parseInt("1062FiVYzq") / 9) + -parseInt("30zcIIQN") / 10 * (-parseInt("236654jeJvuT") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 195107);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x3fa5e2 = ["1114045XYgByi", "shift", "/dev/stdin", "sum", "trim", "14069JddCfS", "30zcIIQN", "340697pgTVtx", "push", "3BENUuB", "990764GVMHnn", "utf8", "17808qNwoJj", "readFileSync", "1062FiVYzq", "1872162ILabzi", "22fstlzV", "split", "236654jeJvuT", "map"];
  __STRING_ARRAY__ = function () {
    return _0x3fa5e2;
  };
  return __STRING_ARRAY__();
}
var Arr = input["trim"]()["split"]("\n");
while (true) {
  var NM = Arr["shift"]();
  if (NM == "0 0") {
    break;
  }
  var nm = NM.split(" ")["map"](Number);
  var n = nm[0];
  var m = nm[1];
  var arr = [];
  for (var i = 0; i < m; i++) {
    arr.push({
      x: i + 1,
      sum: 0
    });
  }
  for (var i = 0; i < n; i++) {
    var data = Arr.shift()["split"](" ")["map"](Number);
    arr.forEach(function (v, j) {
      arr[j].sum += data[j];
    });
  }
  arr.sort(function (a, b) {
    a = a["sum"];
    b = b["sum"];
    return b - a;
  });
  var c = [];
  arr.forEach(function (v) {
    c["push"](v.x);
  });
  console.log(c.join(" "));
}
