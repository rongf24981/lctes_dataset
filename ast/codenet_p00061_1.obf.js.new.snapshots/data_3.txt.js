(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("765663ePbiCI") / 1 * (parseInt("2yUsBQs") / 2) + -parseInt("2431965qBEENV") / 3 + -parseInt("16QjLVYh") / 4 * (-parseInt("525205KFnRMU") / 5) + parseInt("661812ForYkG") / 6 * (-parseInt("7UzjTog") / 7) + -parseInt("8VwvTzy") / 8 * (parseInt("4550949UaPrwh") / 9) + parseInt("904360bXtbRi") / 10 + parseInt("6450081OerOOk") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 436016);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.trim()["split"]("\n0,0\n");
var inputA = Arr[0]["split"]("\n");
var inputB = Arr[1]["split"]("\n")["map"](Number);
var obj = {};
var s = [];
inputA.forEach(function (v) {
  var arr = v["split"](",")["map"](Number);
  obj[arr[0]] = arr[1];
  s["push"](arr[1]);
});
s.sort(function (a, b) {
  return b - a;
});
var s0 = s[0];
var t = [s0];
function __STRING_ARRAY__() {
  var _0x1937d6 = ["utf8", "7UzjTog", "4550949UaPrwh", "2431965qBEENV", "525205KFnRMU", "8VwvTzy", "readFileSync", "map", "push", "length", "split", "661812ForYkG", "2yUsBQs", "904360bXtbRi", "log", "forEach", "indexOf", "765663ePbiCI", "16QjLVYh", "/dev/stdin", "6450081OerOOk"];
  __STRING_ARRAY__ = function () {
    return _0x1937d6;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(ZyrdDl, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 231;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZyrdDl, key);
}
for (var i = 1; i < s["length"]; i++) {
  if (s0 == s[i]) {
    continue;
  }
  s0 = s[i];
  t.push(s[i]);
}
inputB["forEach"](function (v) {
  console["log"](t["indexOf"](obj[v]) + 1);
});
