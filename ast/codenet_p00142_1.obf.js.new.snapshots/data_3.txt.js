function __DECODE_0__(RyvQMt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 192;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RyvQMt, key);
}
function __STRING_ARRAY__() {
  var _0x581535 = ["4130116UDSmRw", "19849247EPGIMm", "48FRExij", "log", "12kFhOtt", "9070092igNcEq", "trim", "1068129XSYyod", "3eURCjv", "shift", "forEach", "map", "/dev/stdin", "split", "utf8", "5sGoIMJ", "push", "length", "1zkSsiD", "10DSmqom", "21357193HNuZVP", "1406138GYVEwk", "readFileSync", "554176kDQBCi"];
  __STRING_ARRAY__ = function () {
    return _0x581535;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1zkSsiD") / 1 * (parseInt("1406138GYVEwk") / 2) + parseInt("3eURCjv") / 3 * (-parseInt("4130116UDSmRw") / 4) + -parseInt("5sGoIMJ") / 5 * (parseInt("9070092igNcEq") / 6) + parseInt("554176kDQBCi") / 7 + -parseInt("48FRExij") / 8 * (parseInt("1068129XSYyod") / 9) + parseInt("10DSmqom") / 10 * (parseInt("19849247EPGIMm") / 11) + -parseInt("12kFhOtt") / 12 * (-parseInt("21357193HNuZVP") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 973278);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n")["map"](Number);
while (true) {
  var n = arr["shift"]();
  if (n == 0) {
    break;
  }
  if (n == 1) {
    console["log"]("");
    continue;
  }
  var ary = [];
  for (var i = 0; i < n; i++) {
    ary[i] = false;
  }
  for (var i = 1; i < n; i++) {
    ary[i * i % n] = true;
  }
  var m = [];
  ary["forEach"](function (v, i) {
    if (v) {
      m["push"](i);
    }
  });
  var ans = [];
  var len = (n - 1) / 2;
  for (var i = 0; i <= len; i++) {
    ans[i] = 0;
  }
  for (var i = 0; i < m["length"]; i++) {
    for (var j = i + 1; j < m["length"]; j++) {
      var x = m[i] - m[j];
      if (x < 0) {
        x += n;
      }
      if (len < x) {
        x = n - x;
      }
      ans[x] += 2;
    }
  }
  ans["shift"]();
  ans["forEach"](function (v) {
    console["log"](v);
  });
}
