function __DECODE_0__(ALwimn, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 419;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ALwimn, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("264904UeogHE") / 1 + -parseInt("466688DkGrbX") / 2 + -parseInt("12lpJxBg") / 3 * (parseInt("136628kzbfVY") / 4) + -parseInt("1045790QxYBcY") / 5 + -parseInt("359622tGKWIe") / 6 * (-parseInt("35veseMw") / 7) + -parseInt("16DuOCFU") / 8 * (-parseInt("391410bQWWjY") / 9) + -parseInt("370JYqBKR") / 10 * (-parseInt("187594YnwAIi") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 173629);
function bomb() {
  var obj = {};
  var ans = "NA";
  var leaf = [[0, 0, 0], [1, 0, 0]];
  while (true) {
    if (leaf["length"] == 0) {
      break;
    }
    var ary = leaf["shift"]();
    var x = ary[0];
    var y = ary[1];
    if (obj.hasOwnProperty(x + "," + y)) {
      continue;
    } else {
      obj[x + "," + y] = true;
    }
    var cnt = ary[2];
    var v = xy[x][y];
    if (v == 1) {
      while (true) {
        y++;
        if (xy[x][y] != 1) {
          y--;
          break;
        }
      }
    } else if (v == 2) {
      while (true) {
        y--;
        if (xy[x][y] != 2) {
          break;
        }
      }
    }
    if (y == n - 1) {
      ans = cnt;
      break;
    }
    for (var i = 0; i <= 2; i++) {
      leaf["push"]([1 - x, y + i, cnt + 1]);
    }
  }
  return ans;
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
function __STRING_ARRAY__() {
  var _0x4045da = ["split", "12lpJxBg", "shift", "466688DkGrbX", "136628kzbfVY", "push", "187594YnwAIi", "16DuOCFU", "trim", "length", "utf8", "readFileSync", "log", "map", "/dev/stdin", "35veseMw", "1045790QxYBcY", "264904UeogHE", "370JYqBKR", "359622tGKWIe", "391410bQWWjY"];
  __STRING_ARRAY__ = function () {
    return _0x4045da;
  };
  return __STRING_ARRAY__();
}
while (true) {
  var n = arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var xy = [];
  xy[0] = arr["shift"]().split(" ").map(Number);
  xy[1] = arr.shift()["split"](" ")["map"](Number);
  console["log"](bomb());
}
