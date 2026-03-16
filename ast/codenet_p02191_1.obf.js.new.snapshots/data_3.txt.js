function __DECODE_0__(RbAyas, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 245;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RbAyas, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("38MuKajw") / 1 * (parseInt("2026HpwUZf") / 2) + parseInt("795441zzJJfx") / 3 * (-parseInt("4DlGJUQ") / 4) + -parseInt("1097605zHHxru") / 5 + -parseInt("932214xiPrzK") / 6 + -parseInt("1111215QFykxQ") / 7 + parseInt("2851072mQIAoU") / 8 + parseInt("6103206MGSHxw") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 197242);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input.trim().split("\n");
function __STRING_ARRAY__() {
  var _0x288c3b = ["push", "floor", "utf8", "6103206MGSHxw", "932214xiPrzK", "4DlGJUQ", "forEach", "split", "readFileSync", "map", "/dev/stdin", "1111215QFykxQ", "2851072mQIAoU", "ookii", "length", "join", "2026HpwUZf", "38MuKajw", "shift", "1097605zHHxru", "izyou", "795441zzJJfx"];
  __STRING_ARRAY__ = function () {
    return _0x288c3b;
  };
  return __STRING_ARRAY__();
}
var [n, q] = arr["shift"]()["split"](" ")["map"](Number);
var ary = arr["shift"]()["split"](" ")["map"](Number);
ary.sort((a, b) => a - b);
function tansaku(x, str) {
  var first = -1;
  var last = ary["length"];
  while (last - first > 1) {
    var mid = first + Math["floor"]((last - first) / 2);
    if (ary[mid] < x) {
      first = mid;
    } else if (str == "ookii" && ary[mid] == x) {
      first = mid;
    } else {
      last = mid;
    }
  }
  return last;
}
var ans = [];
arr["forEach"](v => {
  var [l, r] = v["split"](" ")["map"](Number);
  ans["push"](tansaku(r, "ookii") - tansaku(l, "izyou"));
});
console.log(ans["join"]("\n"));
