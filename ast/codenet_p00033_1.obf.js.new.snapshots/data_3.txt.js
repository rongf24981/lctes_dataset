(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("145961ZlFfel") / 1 * (parseInt("2vNfONU") / 2) + -parseInt("10587POJFQW") / 3 * (-parseInt("48cwjYdE") / 4) + -parseInt("1214920VZNjCB") / 5 + parseInt("1455018EgFQwN") / 6 + parseInt("216216DfhQWw") / 7 + parseInt("1830424KFMZfO") / 8 + -parseInt("261270KeIKzG") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 126567);
function __DECODE_0__(gPgKrN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 141;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(gPgKrN, key);
}
(function (input) {
  var p = input.replace(/\n$/, "").split("\n");
  var n = Number(p["shift"]());
  for (var i = 0; i < n; i++) {
    var a = p["shift"]()["split"](" ")["map"](Number);
    console["log"](order(a));
  }
})(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x3339d3 = ["1214920VZNjCB", "48cwjYdE", "log", "YES", "shift", "push", "261270KeIKzG", "split", "map", "/dev/stdin", "10587POJFQW", "1830424KFMZfO", "145961ZlFfel", "utf8", "216216DfhQWw", "readFileSync", "2vNfONU", "1455018EgFQwN"];
  __STRING_ARRAY__ = function () {
    return _0x3339d3;
  };
  return __STRING_ARRAY__();
}
function order(a) {
  var r = [];
  var x;
  var c = a["shift"]();
  while (x = a["shift"]()) {
    if (x > c) {
      c = x;
      continue;
    }
    r["push"](x);
  }
  var m = -Infinity;
  while (x = r.shift()) {
    if (x > m) {
      m = x;
      continue;
    }
    return "NO";
  }
  return "YES";
}
