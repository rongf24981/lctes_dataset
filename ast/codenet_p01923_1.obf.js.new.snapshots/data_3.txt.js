(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("242791WhTnrS") / 1 + -parseInt("184396EQYUCs") / 2 * (-parseInt("3HRDAtF") / 3) + -parseInt("4xJRoTB") / 4 * (parseInt("939865BUwcDw") / 5) + -parseInt("2901006HCfbHp") / 6 * (parseInt("7ifSxud") / 7) + -parseInt("2646304YpDRyE") / 8 + -parseInt("611334nKLFii") / 9 * (-parseInt("80UAUTdP") / 10) + parseInt("5461731znXxBk") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 372656);
function __DECODE_0__(LXZdup, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 483;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LXZdup, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
function __STRING_ARRAY__() {
  var _0x51ac77 = ["2901006HCfbHp", "trim", "80UAUTdP", "readFileSync", "4xJRoTB", "3HRDAtF", "939865BUwcDw", "map", "611334nKLFii", "0 0", "2646304YpDRyE", "7ifSxud", "242791WhTnrS", "shift", "5461731znXxBk", "split", "184396EQYUCs"];
  __STRING_ARRAY__ = function () {
    return _0x51ac77;
  };
  return __STRING_ARRAY__();
}
while (true) {
  if (arr[0] == "0 0") {
    break;
  }
  var nm = arr["shift"]()["split"](" ")["map"](Number);
  var n = nm[0];
  var m = nm[1];
  var max = [];
  for (var i = 0; i < m; i++) {
    max[i] = 0;
  }
  for (var i = 0; i < n; i++) {
    var dv = arr["shift"]().split(" ").map(Number);
    var d = dv[0] - 1;
    var v = dv[1];
    if (max[d] < v) {
      max[d] = v;
    }
  }
  var sum = 0;
  for (var i = 0; i < m; i++) {
    sum += max[i];
  }
  console.log(sum);
}
