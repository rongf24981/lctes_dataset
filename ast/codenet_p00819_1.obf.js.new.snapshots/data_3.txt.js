(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("654668mmoShV") / 1 + -parseInt("1854174NjTeCv") / 2 + -parseInt("356382OvwJsw") / 3 + parseInt("2933264ICkyYO") / 4 + -parseInt("4597235jZydnx") / 5 + parseInt("6ujDGsR") / 6 * (parseInt("6458739mciOJK") / 7) + parseInt("24xbRKpr") / 8 * (parseInt("441747nfdYbZ") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 492582);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
function __STRING_ARRAY__() {
  var _0x4713ba = ["reverse", "654668mmoShV", "utf8", "forEach", "6458739mciOJK", "shift", "4597235jZydnx", "6ujDGsR", "length", "2933264ICkyYO", "441747nfdYbZ", "replace", "1854174NjTeCv", "readFileSync", "24xbRKpr", "trim", "split", "log", "356382OvwJsw", "slice"];
  __STRING_ARRAY__ = function () {
    return _0x4713ba;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(UDccwN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 232;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UDccwN, key);
}
var n = Arr["shift"]() - 0;
for (var I = 0; I < n; I++) {
  var arr = Arr["shift"]().split("")["reverse"]();
  var str = Arr["shift"]();
  var x = str["length"];
  arr["forEach"](function (v) {
    if (v == "J") {
      str = str.slice(-1) + str["slice"](0, -1);
    } else if (v == "C") {
      str = str.slice(1) + str.slice(0, 1);
    } else if (v == "E" && x % 2 == 0) {
      str = str["slice"](x / 2, x) + str["slice"](0, x / 2);
    } else if (v == "E" && x % 2 == 1) {
      str = str["slice"](~~(x / 2) + 1, x) + str[~~(x / 2)] + str.slice(0, ~~(x / 2));
    } else if (v == "A") {
      str = str.split("")["reverse"]().join("");
    } else if (v == "P") {
      str = str["replace"](/\d/g, function (s) {
        if (s == "0") {
          return "9";
        } else {
          return s - 0 - 1;
        }
      });
    } else if (v == "M") {
      str = str["replace"](/\d/g, function (s) {
        if (s == "9") {
          return "0";
        } else {
          return s - 0 + 1;
        }
      });
    }
  });
  console["log"](str);
}
