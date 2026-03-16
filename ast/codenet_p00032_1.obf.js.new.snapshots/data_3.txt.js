(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1917203WFUbxc") / 1 * (-parseInt("2gmHmna") / 2) + parseInt("5018697TyJJoA") / 3 + -parseInt("6052228SMXAOn") / 4 + -parseInt("793075pHhsvK") / 5 * (-parseInt("30LDuhcL") / 6) + -parseInt("8992844DGexnH") / 7 + -parseInt("8LZusRG") / 8 * (-parseInt("704493Lsmmxp") / 9) + -parseInt("6974880kromLF") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 966217);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var lines = input["trim"]().split("\n");
var line;
var rectangles = 0;
var lozenges = 0;
while (line = lines.shift()) {
  var l = line.split(",")["map"](function (n) {
    return +n;
  });
  var a = l[0];
  var b = l[1];
  var c = l[2];
  if (a * a + b * b == c * c) {
    rectangles++;
  } else if (a == b) {
    lozenges++;
  }
}
function __STRING_ARRAY__() {
  var _0x3a01fd = ["5018697TyJJoA", "793075pHhsvK", "/dev/stdin", "704493Lsmmxp", "2gmHmna", "log", "8LZusRG", "map", "6974880kromLF", "trim", "6052228SMXAOn", "8992844DGexnH", "readFileSync", "1917203WFUbxc", "30LDuhcL"];
  __STRING_ARRAY__ = function () {
    return _0x3a01fd;
  };
  return __STRING_ARRAY__();
}
console["log"](rectangles);
function __DECODE_0__(huRkHs, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 154;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(huRkHs, key);
}
console["log"](lozenges);
