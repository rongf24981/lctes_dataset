function __STRING_ARRAY__() {
  var _0x2aa612 = ["YES", "399442qpLNGn", "utf8", "2358966vSEjOr", "21wEEmYc", "/dev/stdin", "6986064RulIPo", "848gzftMh", "2323635nqcOhG", "249VYSHfh", "114723jjjPmf", "29993579yRrCwI", "10fLuyCD", "readFileSync", "split", "24394vnPpfH", "trim"];
  __STRING_ARRAY__ = function () {
    return _0x2aa612;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(zwRkPW, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 449;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(zwRkPW, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("399442qpLNGn") / 1 + -parseInt("24394vnPpfH") / 2 * (parseInt("249VYSHfh") / 3) + parseInt("6986064RulIPo") / 4 + parseInt("2323635nqcOhG") / 5 + -parseInt("2358966vSEjOr") / 6 * (parseInt("21wEEmYc") / 7) + parseInt("848gzftMh") / 8 * (-parseInt("114723jjjPmf") / 9) + -parseInt("10fLuyCD") / 10 * (-parseInt("29993579yRrCwI") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 995474);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
Arr.forEach(function (v) {
  var arr = v["split"](" ").map(Number);
  var m = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  m = m.filter(function (v) {
    return v != arr[0] || v != arr[1] || v != arr[2];
  });
  var y = 0;
  var n = 0;
  m.forEach(function (v) {
    if (arr[0] + arr[1] + v <= 20) {
      y++;
    } else {
      n++;
    }
  });
  console.log(y >= n ? "YES" : "NO");
});
