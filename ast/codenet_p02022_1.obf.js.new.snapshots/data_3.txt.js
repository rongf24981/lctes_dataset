function __DECODE_0__(jUQgBN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 151;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jUQgBN, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1364414GOIZZR") / 1 + -parseInt("880834uIksWT") / 2 * (-parseInt("6ugUnZb") / 3) + -parseInt("24XBpXrK") / 4 * (parseInt("1258365BXMwqc") / 5) + parseInt("1156188aAkeQf") / 6 + -parseInt("7GISjXy") / 7 * (-parseInt("8157176tZunDx") / 8) + parseInt("315459APgSSo") / 9 * (-parseInt("430ueMgSg") / 10) + -parseInt("22iizetT") / 11 * (-parseInt("19333752BKGjyV") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 933826);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x64d116 = ["8157176tZunDx", "6ugUnZb", "readFileSync", "7GISjXy", "880834uIksWT", "trim", "22iizetT", "reduce", "19333752BKGjyV", "430ueMgSg", "1156188aAkeQf", "24XBpXrK", "split", "1364414GOIZZR", "log", "315459APgSSo", "1258365BXMwqc", "map"];
  __STRING_ARRAY__ = function () {
    return _0x64d116;
  };
  return __STRING_ARRAY__();
}
var arr = input["trim"]()["split"]("\n");
var A = arr[1]["split"](" ")["map"](Number)["reduce"]((a, b) => a + b);
var B = arr[2]["split"](" ")["map"](Number)["reduce"]((a, b) => a + b);
console["log"](A * B);
