(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("203364VRSYzZ") / 1 + -parseInt("40trMxCe") / 2 * (-parseInt("7758rWPbtq") / 3) + parseInt("162160rmozaf") / 4 * (parseInt("20OwixJa") / 5) + parseInt("1400286tNcEpD") / 6 + -parseInt("1099133lvbzAJ") / 7 + -parseInt("1839304pkwOCT") / 8 + parseInt("2459295pzDoog") / 9 * (parseInt("10qwueBC") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 130220);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(bBfHgL, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 500;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bBfHgL, key);
}
var arr = input["trim"]()["split"]("\n");
var [a, b] = arr["shift"]().split(" ").map(Number);
var n = arr.shift() - 0;
var flag = 0;
while (n--) {
  var [s, f] = arr["shift"]()["split"](" ")["map"](Number);
  if (f <= a || b <= s) {
    continue;
  } else {
    flag = 1;
  }
}
function __STRING_ARRAY__() {
  var _0x6b4b08 = ["20OwixJa", "7758rWPbtq", "40trMxCe", "2459295pzDoog", "map", "/dev/stdin", "1839304pkwOCT", "203364VRSYzZ", "1099133lvbzAJ", "split", "readFileSync", "1400286tNcEpD", "162160rmozaf", "shift", "trim", "10qwueBC"];
  __STRING_ARRAY__ = function () {
    return _0x6b4b08;
  };
  return __STRING_ARRAY__();
}
console.log(flag);
