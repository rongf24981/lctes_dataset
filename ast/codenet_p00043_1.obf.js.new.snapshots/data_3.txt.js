function __DECODE_0__(MmTicJ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 256;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MmTicJ, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("9SpsMAP") / 1 * (parseInt("13662wiWIvc") / 2) + -parseInt("536172sXxoPf") / 3 + -parseInt("170184pFdkSo") / 4 * (parseInt("20bYwnGo") / 5) + -parseInt("6tBVjID") / 6 * (-parseInt("1281714DNxjkV") / 7) + -parseInt("578768phDQjM") / 8 + -parseInt("45fMLAKh") / 9 * (parseInt("827500ibmxSW") / 10) + -parseInt("188815DQZwwf") / 11 * (-parseInt("612XUblSH") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 284992);
function Puzzle() {
  var obj = {};
  var arrA = "123,234,345,456,567,678,789,111,222,333,444,555,666,777,888,999"["split"](",");
  var arrB = "11,22,33,44,55,66,77,88,99".split(",");
  var i;
  var j;
  var k;
  var l;
  var m;
  for (i = 0; i < 16; i++) {
    for (j = 0; j < 16; j++) {
      for (k = 0; k < 16; k++) {
        for (l = 0; l < 16; l++) {
          for (m = 0; m < 9; m++) {
            var str = arrA[i] + arrA[j] + arrA[k] + arrA[l] + arrB[m];
            str = str.split("")["map"](Number)["sort"](function (a, b) {
              return a - b;
            }).join("");
            obj[str] = true;
          }
        }
      }
    }
  }
  return obj;
}
var P = Puzzle();
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
function __STRING_ARRAY__() {
  var _0x48ce25 = ["13662wiWIvc", "length", "test", "45fMLAKh", "536172sXxoPf", "map", "hasOwnProperty", "188815DQZwwf", "6tBVjID", "shift", "sort", "1281714DNxjkV", "join", "612XUblSH", "trim", "123,234,345,456,567,678,789,111,222,333,444,555,666,777,888,999", "log", "827500ibmxSW", "20bYwnGo", "readFileSync", "11,22,33,44,55,66,77,88,99", "split", "578768phDQjM", "utf8", "push", "170184pFdkSo", "9SpsMAP"];
  __STRING_ARRAY__ = function () {
    return _0x48ce25;
  };
  return __STRING_ARRAY__();
}
while (true) {
  if (Arr["length"] == 0) {
    break;
  }
  var str = Arr["shift"]();
  var ans = [];
  for (var i = 1; i <= 9; i++) {
    var arr = str["split"]("").map(Number);
    arr["push"](i);
    arr["sort"](function (a, b) {
      return a - b;
    });
    var v = arr["join"]("");
    if (/(.)\1\1\1\1/["test"](v)) {
      continue;
    }
    if (P["hasOwnProperty"](v)) {
      ans.push(i);
    }
  }
  console["log"](ans.length == 0 ? "0" : ans["join"](" "));
}
