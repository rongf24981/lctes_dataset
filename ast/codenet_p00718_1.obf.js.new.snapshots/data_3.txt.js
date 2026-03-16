(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("74328zIbTJz") / 1 + -parseInt("14qTJYSK") / 2 * (-parseInt("104271FWlaGX") / 3) + parseInt("513820WofqeM") / 4 * (parseInt("5VbqvLh") / 5) + -parseInt("6vdioiZ") / 6 * (-parseInt("1520351yEPOFk") / 7) + parseInt("1123880QHWKos") / 8 + parseInt("2080125FjOBjw") / 9 + parseInt("8821630pCtUyc") / 10 * (-parseInt("11xFppZW") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 152722);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]().split("\n");
function __STRING_ARRAY__() {
  var _0x3475bf = ["shift", "5VbqvLh", "readFileSync", "log", "74328zIbTJz", "forEach", "000", "utf8", "map", "513820WofqeM", "trim", "1520351yEPOFk", "14qTJYSK", "2080125FjOBjw", "11xFppZW", "104271FWlaGX", "8821630pCtUyc", "split", "1123880QHWKos", "6vdioiZ"];
  __STRING_ARRAY__ = function () {
    return _0x3475bf;
  };
  return __STRING_ARRAY__();
}
var n = Arr["shift"]() - 0;
function __DECODE_0__(rdKGJS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 414;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rdKGJS, key);
}
for (var I = 0; I < n; I++) {
  var arr = Arr["shift"]()["split"](" ");
  var sum = 0;
  arr["forEach"](function (v) {
    v = v.replace(/(\d?)([mcxi])/g, function (s, s1, s2) {
      s1 = s1 ? s1 - 0 : 1;
      if (s2 == "m") {
        s2 = 1000;
      }
      if (s2 == "c") {
        s2 = 100;
      }
      if (s2 == "x") {
        s2 = 10;
      }
      if (s2 == "i") {
        s2 = 1;
      }
      sum += s1 * s2;
      return s;
    });
  });
  var str = ("000" + sum).slice(-4);
  var S = str["split"]("")["map"](Number);
  var result = "";
  S.forEach(function (v, i) {
    if (v == 1) {
      v = "";
    }
    if (v !== 0) {
      if (i == 0) {
        result += v + "m";
      }
      if (i == 1) {
        result += v + "c";
      }
      if (i == 2) {
        result += v + "x";
      }
      if (i == 3) {
        result += v + "i";
      }
    }
  });
  console["log"](result);
}
