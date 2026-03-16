function __STRING_ARRAY__() {
  var _0x41722e = ["5027885XZJsER", "650DEMTVC", "indexOf", "max", "utf8", "120015jMGjZz", "split", "readFileSync", "670584YXFWUl", "forEach", "2mRHWbx", "6091158YPxgpQ", "97966NgwIRw", "min", "102185IZqQQL", "272QUBzMI", "4OpZKpP", "push", "6493095zjUviD", "shift", "reduce"];
  __STRING_ARRAY__ = function () {
    return _0x41722e;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("102185IZqQQL") / 1 + parseInt("2mRHWbx") / 2 * (parseInt("670584YXFWUl") / 3) + -parseInt("4OpZKpP") / 4 * (-parseInt("5027885XZJsER") / 5) + -parseInt("6091158YPxgpQ") / 6 + -parseInt("120015jMGjZz") / 7 * (-parseInt("272QUBzMI") / 8) + -parseInt("6493095zjUviD") / 9 + -parseInt("650DEMTVC") / 10 * (-parseInt("97966NgwIRw") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 756462);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(liprqY, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 488;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(liprqY, key);
}
var arr = input.trim()["split"]("\n");
while (true) {
  var n = arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var yx = [];
  for (var i = 0; i < n; i++) {
    yx["push"](arr["shift"]()["split"](" ").map(Number));
  }
  var xy = [];
  var hand = [];
  for (var i = 0; i < n; i++) {
    xy[i] = [];
    hand[i] = [];
    for (var j = 0; j < n; j++) {
      xy[i][j] = yx[j][i];
      hand[i][j] = [0, 0];
    }
  }
  yx["forEach"](function (v, i) {
    var min = v.reduce(function (a, b) {
      return Math["min"](a, b);
    });
    hand[i][v["indexOf"](min)][0] = 1;
  });
  xy["forEach"](function (v, i) {
    var max = v["reduce"](function (a, b) {
      return Math["max"](a, b);
    });
    hand[v["indexOf"](max)][i][1] = 1;
  });
  var ans = function () {
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (hand[i][j][0] == 1 && hand[i][j][1] == 1) {
          return yx[i][j];
        }
      }
    }
    return 0;
  }();
  console.log(ans);
}
