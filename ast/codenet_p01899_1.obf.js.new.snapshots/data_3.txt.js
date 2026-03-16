(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("3tVdQik") / 1 * (-parseInt("49076GqBoaz") / 2) + -parseInt("237GwRYFm") / 3 * (-parseInt("22492RaXrfQ") / 4) + -parseInt("65oodJQd") / 5 * (parseInt("341538IatDFl") / 6) + -parseInt("510307NVnVBA") / 7 * (-parseInt("8CCIUXf") / 8) + parseInt("9oGpuKF") / 9 * (-parseInt("2027080EegJTG") / 10) + parseInt("2501653HDtCNk") / 11 * (parseInt("24hKSvbp") / 12) + parseInt("5689853JOcDUF") / 13;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 393324);
function __DECODE_0__(ZqPrdP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 491;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZqPrdP, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]().split("\n");
var [n, d] = arr["shift"]().split(" ").map(Number);
var p = arr["shift"]()["split"](" ")["map"](Number);
var sum = 0;
function __STRING_ARRAY__() {
  var _0x4de65e = ["237GwRYFm", "/dev/stdin", "24hKSvbp", "510307NVnVBA", "5689853JOcDUF", "22492RaXrfQ", "9oGpuKF", "max", "8CCIUXf", "65oodJQd", "split", "shift", "forEach", "readFileSync", "utf8", "2501653HDtCNk", "341538IatDFl", "map", "49076GqBoaz", "trim", "3tVdQik", "2027080EegJTG", "log"];
  __STRING_ARRAY__ = function () {
    return _0x4de65e;
  };
  return __STRING_ARRAY__();
}
p["forEach"](v => {
  sum += Math["max"](0, v - d);
});
console["log"](sum == 0 ? "kusoge" : sum);
