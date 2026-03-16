(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("663977InNEAt") / 1 + parseInt("2144874shLskR") / 2 + parseInt("1023lRlqcY") / 3 * (-parseInt("572izDKue") / 4) + parseInt("127705Yyahtk") / 5 * (-parseInt("138ORFtRa") / 6) + -parseInt("242228ThUNHP") / 7 * (parseInt("328hEKpjb") / 8) + parseInt("16434piftcP") / 9 * (parseInt("1460gcMwIK") / 10) + parseInt("9957420WAHClq") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 853260);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]().split("\n");
function __DECODE_0__(IPzmtx, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 195;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IPzmtx, key);
}
function __STRING_ARRAY__() {
  var _0xf6d7a1 = ["9957420WAHClq", "toFixed", "length", "1023lRlqcY", "split", "readFileSync", "1460gcMwIK", "map", "663977InNEAt", "trim", "2144874shLskR", "328hEKpjb", "YES", "16434piftcP", "138ORFtRa", "572izDKue", "127705Yyahtk", "log", "242228ThUNHP", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0xf6d7a1;
  };
  return __STRING_ARRAY__();
}
for (i = 0; i < Arr["length"]; i++) {
  var arr = Arr[i]["split"](" ")["map"](Number);
  (function (x1, y1, x2, y2, x3, y3, x4, y4) {
    var k1;
    var k2;
    if (x2 - x1 !== 0) {
      k1 = ((y2 - y1) / (x2 - x1))["toFixed"](11);
    } else {
      k1 = Infinity;
    }
    if (x4 - x3 !== 0) {
      k2 = (y4 - y3) / (x4 - x3)["toFixed"](11);
    } else {
      k2 = Infinity;
    }
    var ans = "NO";
    if (k1 == 0 && k2 == Infinity) {
      ans = "YES";
    }
    if (k2 == 0 && k1 == Infinity) {
      ans = "YES";
    }
    if (k1 == k2 * -1 && k1 != 0 && k2 != 0) {
      ans = "YES";
    }
    console["log"](ans);
  }).apply(null, arr);
}
