(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("678728zbIdKq") / 1 * (parseInt("2lBcRvy") / 2) + parseInt("1626oLNEkm") / 3 * (parseInt("4504WHnNwl") / 4) + -parseInt("181705SBnLmG") / 5 * (-parseInt("6MfmORF") / 6) + -parseInt("7BrpXhS") / 7 * (parseInt("403672xuDQkj") / 8) + -parseInt("57195MuBjUN") / 9 * (-parseInt("150HaZcWn") / 10) + parseInt("8382lvFQSb") / 11 * (parseInt("4164XWMqkt") / 12) + parseInt("1835678zazABR") / 13;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 418391);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input.trim().split("\n");
var n = arr["shift"]() - 0;
var p = arr["shift"]()["split"](" ")["map"](Number);
var ans = 0;
function __DECODE_0__(JiRDxp, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 496;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(JiRDxp, key);
}
for (var i = 1; i <= 100; i++) {
  var cnt = 0;
  p["forEach"](v => {
    if (v >= i) {
      cnt++;
    }
  });
  if (cnt >= i) {
    ans = i;
  }
}
function __STRING_ARRAY__() {
  var _0x1059cc = ["403672xuDQkj", "181705SBnLmG", "map", "split", "readFileSync", "1626oLNEkm", "57195MuBjUN", "4164XWMqkt", "678728zbIdKq", "4504WHnNwl", "shift", "150HaZcWn", "utf8", "1835678zazABR", "6MfmORF", "2lBcRvy", "/dev/stdin", "forEach", "8382lvFQSb", "7BrpXhS"];
  __STRING_ARRAY__ = function () {
    return _0x1059cc;
  };
  return __STRING_ARRAY__();
}
console.log(ans);
