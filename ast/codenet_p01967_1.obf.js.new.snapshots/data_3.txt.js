(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("250491ZIrUVG") / 1 + -parseInt("1084536LYpvmq") / 2 + -parseInt("2368224AyqCSI") / 3 + parseInt("1108ikuIZG") / 4 * (parseInt("3620rnXnHY") / 5) + -parseInt("3496782DGCMWF") / 6 + parseInt("3004428YZWnqd") / 7 + parseInt("5813072cjKDMz") / 8 * (parseInt("18JcUBDo") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 419038);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(fJihNS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 260;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fJihNS, key);
}
var arr = input["trim"]()["split"]("\n");
function __STRING_ARRAY__() {
  var _0x31d278 = ["trim", "3496782DGCMWF", "5813072cjKDMz", "/dev/stdin", "map", "readFileSync", "18JcUBDo", "shift", "2368224AyqCSI", "length", "utf8", "split", "3620rnXnHY", "250491ZIrUVG", "1108ikuIZG", "1084536LYpvmq", "3004428YZWnqd"];
  __STRING_ARRAY__ = function () {
    return _0x31d278;
  };
  return __STRING_ARRAY__();
}
arr = arr["map"](v => v.split(" ").map(Number));
var n = arr["shift"]();
var c = arr["shift"]();
var q = arr["shift"]();
var apple = [];
for (var i = 0; i <= n; i++) {
  apple[i] = 0;
}
var ans = 0;
for (var i = 0; i < arr["length"]; i++) {
  var [t, x, d] = arr[i];
  if (t == 1) {
    apple[x] += d;
    if (c[x - 1] < apple[x]) {
      ans = x;
      break;
    }
  } else if (apple[x] < d) {
    ans = x;
    break;
  } else {
    apple[x] -= d;
  }
}
console.log(ans);
