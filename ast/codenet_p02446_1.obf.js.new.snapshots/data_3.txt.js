(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("890167xomebT") / 1 + -parseInt("14660KEszqA") / 2 * (-parseInt("375GuFfvG") / 3) + -parseInt("94880xHAAVK") / 4 + -parseInt("2067375QDNzzj") / 5 + -parseInt("206556edlBzB") / 6 * (-parseInt("238tILqxG") / 7) + -parseInt("7796808aXOYom") / 8 + -parseInt("7919847QWMWzL") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 685122);
function __DECODE_0__(fQynLj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 174;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fQynLj, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
function __STRING_ARRAY__() {
  var _0x4fa0fc = ["readFileSync", "trim", "split", "238tILqxG", "/dev/stdin", "375GuFfvG", "7919847QWMWzL", "log", "890167xomebT", "2067375QDNzzj", "14660KEszqA", "206556edlBzB", "shift", "join", "length", "94880xHAAVK", "7796808aXOYom", "map", "push", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x4fa0fc;
  };
  return __STRING_ARRAY__();
}
var n = arr["shift"]() - 0;
var a = arr["shift"]()["split"](" ")["map"](Number);
var b = [];
var memo = "";
for (var i = 0; i < a["length"]; i++) {
  if (a[i] !== memo) {
    b["push"](a[i]);
  }
  memo = a[i];
}
console["log"](b["join"](" "));
