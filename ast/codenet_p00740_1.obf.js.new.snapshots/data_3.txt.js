function __STRING_ARRAY__() {
  var _0x4eb5be = ["4rVSJrj", "369008WypxqJ", "11krQlCs", "157OCqchB", "12HmlxWO", "/dev/stdin", "trim", "305055gDjfHC", "587573nDpNjN", "54uIJStj", "readFileSync", "utf8", "split", "12NmVxrt", "2003115Gblbym", "0 0", "push", "log", "11622ffFjOj", "shift", "24893778pkbPRb", "5817760XoLnaC"];
  __STRING_ARRAY__ = function () {
    return _0x4eb5be;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("157OCqchB") / 1 * (parseInt("11622ffFjOj") / 2) + parseInt("305055gDjfHC") / 3 + -parseInt("4rVSJrj") / 4 * (parseInt("2003115Gblbym") / 5) + parseInt("12HmlxWO") / 6 * (parseInt("587573nDpNjN") / 7) + parseInt("369008WypxqJ") / 8 * (parseInt("54uIJStj") / 9) + -parseInt("5817760XoLnaC") / 10 * (parseInt("11krQlCs") / 11) + parseInt("12NmVxrt") / 12 * (parseInt("24893778pkbPRb") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 566499);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
function __DECODE_0__(XYglBn, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 162;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XYglBn, key);
}
while (true) {
  var np = Arr["shift"]();
  if (np == "0 0") {
    break;
  }
  np = np["split"](" ").map(Number);
  var n = np[0];
  var p = np[1];
  var sum = p;
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr["push"](0);
  }
  var j = 0;
  for (var i = 0; i < 1000000; i++) {
    if (j == arr.length) {
      j = 0;
    }
    if (p > 0) {
      p--;
      arr[j]++;
      if (p == 0 && sum == arr[j]) {
        console["log"](j);
        break;
      }
    } else {
      p = arr[j];
      arr[j] = 0;
    }
    j++;
  }
}
