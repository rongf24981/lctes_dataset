(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("546191VUDaFC") / 1 + parseInt("1931098GrdUCH") / 2 + parseInt("54426qhcRgP") / 3 * (parseInt("164BCvfmT") / 4) + -parseInt("2331365pqxQTt") / 5 * (-parseInt("12WetPHb") / 6) + -parseInt("309771dTIAOC") / 7 * (parseInt("184DvhzDC") / 8) + parseInt("871308JwdUlY") / 9 + -parseInt("5460330VTzSYg") / 10 * (parseInt("11NiAzrT") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 628686);
function __DECODE_0__(VLvPTY, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 116;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VLvPTY, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x4d7251 = ["utf8", "abs", "/dev/stdin", "1931098GrdUCH", "pow", "log", "5460330VTzSYg", "toFixed", "2331365pqxQTt", "12WetPHb", "309771dTIAOC", "164BCvfmT", "54426qhcRgP", "11NiAzrT", "871308JwdUlY", "184DvhzDC", "readFileSync", "546191VUDaFC"];
  __STRING_ARRAY__ = function () {
    return _0x4d7251;
  };
  return __STRING_ARRAY__();
}
var Arr = input.trim().split("\n");
while (true) {
  var Q = Arr.shift() - 0;
  if (Q == -1) {
    break;
  }
  var x = Q / 2;
  while (Math["abs"](Math["pow"](x, 3) - Q) >= Q * 0.00001) {
    x = x - (Math["pow"](x, 3) - Q) / (Math["pow"](x, 2) * 3);
  }
  console["log"](x["toFixed"](6));
}
