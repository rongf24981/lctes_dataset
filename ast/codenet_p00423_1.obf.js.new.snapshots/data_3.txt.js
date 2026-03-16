function __DECODE_0__(GUbTDf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 142;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GUbTDf, key);
}
function __STRING_ARRAY__() {
  var _0x31757c = ["log", "2013843GBVYwk", "5898DyWdBh", "8187018nJumXK", "536WWHJNN", "9BysRFL", "shift", "4384036feJHcj", "/dev/stdin", "786219gCgNwS", "6196224kJSxkW", "utf8", "25970KntwGZ", "5okJjSh", "split", "join", "trim"];
  __STRING_ARRAY__ = function () {
    return _0x31757c;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("5898DyWdBh") / 1 * (-parseInt("536WWHJNN") / 2) + parseInt("2013843GBVYwk") / 3 + -parseInt("4384036feJHcj") / 4 * (-parseInt("5okJjSh") / 5) + parseInt("8187018nJumXK") / 6 + parseInt("786219gCgNwS") / 7 + -parseInt("6196224kJSxkW") / 8 + parseInt("9BysRFL") / 9 * (parseInt("25970KntwGZ") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 891515);
(function (stdin) {
  var lines = stdin["trim"]()["split"]("\n");
  while (1) {
    var line = lines["shift"]();
    if (line == "0") {
      break;
    }
    var n = Number(line);
    var a = 0;
    var b = 0;
    for (var i = 0; i < n; i++) {
      var numbers = lines["shift"]()["split"](" ").map(Number);
      if (numbers[0] == numbers[1]) {
        a += numbers[0];
        b += numbers[0];
      } else if (numbers[0] > numbers[1]) {
        a += numbers[0] + numbers[1];
      } else {
        b += numbers[0] + numbers[1];
      }
    }
    console["log"]([a, b]["join"](" "));
  }
})(require("fs").readFileSync("/dev/stdin", "utf8"));
