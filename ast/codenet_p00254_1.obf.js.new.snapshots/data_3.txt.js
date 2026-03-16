function __DECODE_0__(QBHkYB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 318;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QBHkYB, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("25HfYFHE") / 1 * (parseInt("70124XgQhEl") / 2) + parseInt("27LgGtwn") / 3 * (-parseInt("18484LkdMeO") / 4) + parseInt("2728945IDnTIN") / 5 * (-parseInt("6zfLCms") / 6) + parseInt("21eHRoNE") / 7 * (-parseInt("153696acJauH") / 8) + parseInt("4528359mjjfiq") / 9 + parseInt("40irgDio") / 10 * (parseInt("1148213eYYfeG") / 11) + parseInt("19800aDlsjg") / 12 * (parseInt("9230zioeli") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 570619);
function __STRING_ARRAY__() {
  var _0x41f159 = ["6174", "25HfYFHE", "sort", "shift", "map", "1111", "3333", "70124XgQhEl", "5555", "1148213eYYfeG", "0000", "2222", "19800aDlsjg", "4444", "readFileSync", "utf8", "2728945IDnTIN", "/dev/stdin", "153696acJauH", "9999", "6zfLCms", "trim", "7777", "27LgGtwn", "log", "4528359mjjfiq", "split", "40irgDio", "9230zioeli", "21eHRoNE", "6666", "18484LkdMeO"];
  __STRING_ARRAY__ = function () {
    return _0x41f159;
  };
  return __STRING_ARRAY__();
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
while (true) {
  var n = Arr["shift"]();
  if (n == "0000") {
    break;
  }
  if (n == "1111" || n == "2222" || n == "3333" || n == "4444" || n == "5555") {
    console["log"]("NA");
    continue;
  }
  if (n == "6666" || n == "7777" || n == "8888" || n == "9999") {
    console.log("NA");
    continue;
  }
  var i = 0;
  while (true) {
    if (n == "6174") {
      break;
    }
    i++;
    var arr = n["split"]("")["map"](Number);
    arr["sort"](function (a, b) {
      return b - a;
    });
    var L = parseInt("" + arr[0] + arr[1] + arr[2] + arr[3], 10);
    var S = parseInt("" + arr[3] + arr[2] + arr[1] + arr[0], 10);
    n = ("0000" + (L - S)).slice(-4);
  }
  console["log"](i);
}
