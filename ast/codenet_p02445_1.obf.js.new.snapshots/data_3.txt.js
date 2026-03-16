function __DECODE_0__(VAqyUo, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 277;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VAqyUo, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("3AlwXeS") / 1 * (-parseInt("53386NyoqQO") / 2) + parseInt("3zbXqFe") / 3 * (parseInt("615460uRbGHZ") / 4) + parseInt("864245BqFyld") / 5 + parseInt("6VCIpYK") / 6 * (parseInt("6953247GoZpbv") / 7) + parseInt("16yAEkbi") / 8 * (parseInt("873963snZcLI") / 9) + parseInt("282870GgywDI") / 10 * (parseInt("253SZgHLc") / 11) + -parseInt("17761380cAwHDX") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 764814);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
var n = arr["shift"]() - 0;
var a = arr["shift"]().split(" ").map(Number);
var q = arr["shift"]() - 0;
for (var i = 0; i < q; i++) {
  var [b, e, t] = arr[i]["split"](" ")["map"](Number);
  var k = e - b;
  for (var j = 0; j < k; j++) {
    [a[b + j], a[t + j]] = [a[t + j], a[b + j]];
  }
}
console["log"](a["join"](" "));
function __STRING_ARRAY__() {
  var _0x2d74c2 = ["6VCIpYK", "864245BqFyld", "map", "readFileSync", "16yAEkbi", "shift", "615460uRbGHZ", "253SZgHLc", "17761380cAwHDX", "282870GgywDI", "utf8", "53386NyoqQO", "6953247GoZpbv", "3AlwXeS", "split", "/dev/stdin", "log", "join", "3zbXqFe", "873963snZcLI", "trim"];
  __STRING_ARRAY__ = function () {
    return _0x2d74c2;
  };
  return __STRING_ARRAY__();
}
