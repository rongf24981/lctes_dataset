function __DECODE_0__(cDOKom, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 152;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(cDOKom, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("317613gxiaPa") / 1 + -parseInt("61240GHwtRS") / 2 + parseInt("9483oWGqmM") / 3 * (parseInt("8nmHqYz") / 4) + -parseInt("15HThnjw") / 5 * (-parseInt("109146lMcKZa") / 6) + -parseInt("3523702bicqSf") / 7 + -parseInt("119080qSFIYC") / 8 + -parseInt("31635MdlMHr") / 9 * (-parseInt("3130oHXXvW") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 294586);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
function __STRING_ARRAY__() {
  var _0x11f3a0 = ["3130oHXXvW", "109146lMcKZa", "length", "61240GHwtRS", "8nmHqYz", "log", "9483oWGqmM", "shift", "317613gxiaPa", "split", "31635MdlMHr", "map", "sort", "3523702bicqSf", "15HThnjw", "119080qSFIYC", "push"];
  __STRING_ARRAY__ = function () {
    return _0x11f3a0;
  };
  return __STRING_ARRAY__();
}
var arr = input.trim()["split"]("\n");
while (true) {
  var n = arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var ary = [];
  while (n--) {
    var hms = arr["shift"]()["split"](" ");
    var start = hms[0].split(":")["map"](Number);
    var end = hms[1]["split"](":").map(Number);
    start = start[0] * 60 * 60 + start[1] * 60 + start[2];
    end = end[0] * 60 * 60 + end[1] * 60 + end[2];
    ary["push"]([start, end]);
  }
  ary.sort(function (a, b) {
    return a[0] - b[0];
  });
  var train = [];
  var cnt = 0;
  ary.forEach(function (v) {
    if (train["length"] == 0) {
      cnt++;
      train["push"](v[1]);
    } else {
      train["sort"](function (a, b) {
        return a - b;
      });
      if (train[0] <= v[0]) {
        train["shift"]();
        train["push"](v[1]);
      } else {
        cnt++;
        train["push"](v[1]);
      }
    }
  });
  console["log"](cnt);
}
