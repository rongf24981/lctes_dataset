(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("803534FHkrtD") / 1 + -parseInt("1241560yzrrrV") / 2 + -parseInt("9YbXhKj") / 3 * (-parseInt("1177576WIfXtA") / 4) + parseInt("3567195xAQdlg") / 5 + parseInt("6GWngbH") / 6 * (parseInt("6959967BEzMUS") / 7) + -parseInt("1995160OfuAfs") / 8 * (-parseInt("27zLPdWD") / 9) + -parseInt("9643640gSEzFZ") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 950409);
function __DECODE_0__(OHQLOm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 390;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OHQLOm, key);
}
function __STRING_ARRAY__() {
  var _0x55ca8e = ["1177576WIfXtA", "9YbXhKj", "803534FHkrtD", "map", "9643640gSEzFZ", "readFileSync", "split", "toString", "shift", "trim", "6959967BEzMUS", "log", "1995160OfuAfs", "27zLPdWD", "apply", "1241560yzrrrV", "forEach", "3567195xAQdlg", "push", "6GWngbH"];
  __STRING_ARRAY__ = function () {
    return _0x55ca8e;
  };
  return __STRING_ARRAY__();
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]().split("\n");
while (true) {
  var n = Arr["shift"]() - 0;
  if (n === 0) {
    break;
  }
  var ans = [];
  for (var i = 0; i < n; i++) {
    var arr = Arr["shift"]()["split"](" ");
    var name = arr["shift"]();
    arr = arr["map"](Number);
    arr.unshift(name);
    (function (L, P, A, B, C, D, E, F, S, M) {
      var time = A + B + C + (D + E) * M;
      var money = F * S * M - P;
      ans["push"]([L, money / time]);
    })["apply"](null, arr);
  }
  ans.sort(function (a, b) {
    if (a[1] == b[1]) {
      if (a[0]["toString"]() > b[0]["toString"]()) {
        return 1;
      } else {
        return -1;
      }
    } else {
      return b[1] - a[1];
    }
  });
  ans["forEach"](function (v) {
    console["log"](v[0]);
  });
  console["log"]("#");
}
