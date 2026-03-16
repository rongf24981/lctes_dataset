(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("8583UqPKdj") / 1 * (parseInt("18GGRWIs") / 2) + -parseInt("720327KuVeaD") / 3 * (-parseInt("4TkNcYY") / 4) + parseInt("678400cjXTkY") / 5 + parseInt("693930EWeEdj") / 6 + -parseInt("76363gvmLuL") / 7 * (parseInt("88mbIHev") / 8) + -parseInt("2347920TIEJYv") / 9 + parseInt("1092410nPIZCh") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 142559);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x434952 = ["76363gvmLuL", "length", "readFileSync", "trim", "utf8", "split", "4TkNcYY", "720327KuVeaD", "shift", "18GGRWIs", "1092410nPIZCh", "8583UqPKdj", "678400cjXTkY", "log", "2347920TIEJYv", "88mbIHev", "693930EWeEdj", "TIE"];
  __STRING_ARRAY__ = function () {
    return _0x434952;
  };
  return __STRING_ARRAY__();
}
var arr = input["trim"]()["split"]("\n");
var ans = "";
function __DECODE_0__(AuHRXM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 118;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(AuHRXM, key);
}
while (arr["shift"]() != 0) {
  var a = arr["shift"]().split(" ");
  var obj = {};
  for (var i = 0; i < a["length"]; i++) {
    obj[a[i]] = obj[a[i]] + 1 || 1;
    var s = [];
    for (var k in obj) {
      s.push([obj[k], k]);
    }
    s.sort(function (a, b) {
      return b[0] - a[0];
    });
    if (s["length"] == 1) {
      s[1] = [0];
    }
    if (s[0][0] > s[1][0] + a.length - (i + 1)) {
      ans += s[0][1] + " " + (i + 1) + "\n";
      break;
    }
  }
  if (i == a["length"]) {
    ans += "TIE" + "\n";
  }
}
console["log"](ans.trim());
