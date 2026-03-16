function __STRING_ARRAY__() {
  var _0x4cd5be = ["2150145CbJtVM", "push", "readFileSync", "utf8", "168fKjnat", "split", "map", "log", "length", "trim", "106800UTZPMB", "143728dvqjeq", "16wOMyOt", "max", "161858uNggZY", "65544XJNQvf", "270865FQOfWU", "39067Ykedip"];
  __STRING_ARRAY__ = function () {
    return _0x4cd5be;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("161858uNggZY") / 1 + -parseInt("16wOMyOt") / 2 * (parseInt("65544XJNQvf") / 3) + parseInt("106800UTZPMB") / 4 + parseInt("270865FQOfWU") / 5 + parseInt("168fKjnat") / 6 * (-parseInt("39067Ykedip") / 7) + -parseInt("143728dvqjeq") / 8 + parseInt("2150145CbJtVM") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 132618);
function bomb(y, x, sum) {
  YX[y][x] = sum;
  if (y == yx["length"] - 1) {
    max = Math["max"](max, sum);
  } else if ((yx.length - 1) / 2 > y) {
    if (YX[y + 1][x] < sum + yx[y + 1][x]) {
      bomb(y + 1, x, sum + yx[y + 1][x]);
    }
    if (YX[y + 1][x + 1] < sum + yx[y + 1][x + 1]) {
      bomb(y + 1, x + 1, sum + yx[y + 1][x + 1]);
    }
  } else if ((yx.length - 1) / 2 <= y) {
    if (x - 1 >= 0) {
      if (YX[y + 1][x - 1] < sum + yx[y + 1][x - 1]) {
        bomb(y + 1, x - 1, sum + yx[y + 1][x - 1]);
      }
    }
    if (x < yx[y]["length"] - 1) {
      if (YX[y + 1][x] < sum + yx[y + 1][x]) {
        bomb(y + 1, x, sum + yx[y + 1][x]);
      }
    }
  }
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]().split("\n");
var yx = [];
function __DECODE_0__(YKxSqU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 212;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YKxSqU, key);
}
var YX = [];
Arr.forEach(function (v) {
  var x = v["split"](",")["map"](Number);
  var X = x["map"](function (v) {
    return 0;
  });
  yx.push(x);
  YX["push"](X);
});
var max = 0;
bomb(0, 0, yx[0][0]);
console["log"](max);
