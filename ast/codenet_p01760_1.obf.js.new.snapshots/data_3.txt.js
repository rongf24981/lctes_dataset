function __DECODE_0__(kYJXCH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 352;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(kYJXCH, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("3413QRWJUW") / 1 * (parseInt("206QqippE") / 2) + parseInt("142017UobECn") / 3 + parseInt("196NaKbSO") / 4 * (parseInt("10315NCPyXl") / 5) + parseInt("6QTfrgl") / 6 * (parseInt("3235463NpOiMU") / 7) + parseInt("2928536qixQYq") / 8 + parseInt("100305cRKcfG") / 9 * (-parseInt("220SvNebI") / 10) + parseInt("473EOBBTe") / 11 * (-parseInt("26628OJxoeP") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 284556);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
var TD = arr["shift"]().split(" ")["map"](Number);
var T = TD[0];
var D = TD[1];
var t = arr["shift"]()["split"](" ")["map"](Number);
var tA = t[0];
var tB = t[1];
var d = arr["shift"]()["split"](" ")["map"](Number);
var dA = d[0];
function __STRING_ARRAY__() {
  var _0x389be0 = ["trim", "3235463NpOiMU", "6QTfrgl", "100305cRKcfG", "utf8", "3413QRWJUW", "2928536qixQYq", "abs", "min", "220SvNebI", "196NaKbSO", "split", "26628OJxoeP", "shift", "toFixed", "log", "10315NCPyXl", "206QqippE", "/dev/stdin", "473EOBBTe", "map", "142017UobECn"];
  __STRING_ARRAY__ = function () {
    return _0x389be0;
  };
  return __STRING_ARRAY__();
}
var dB = d[1];
var min = Infinity;
var i = 0;
while (true) {
  var vA = i * dA;
  if (vA > D) {
    break;
  }
  var j = 0;
  while (true) {
    var vB = j * dB;
    if (vA + vB > D) {
      break;
    }
    if (vA + vB != 0) {
      var c = T - (tA * vA + tB * vB) / (vA + vB);
      min = Math["min"](min, Math["abs"](c));
    }
    j++;
  }
  i++;
}
console["log"](min["toFixed"](10));
