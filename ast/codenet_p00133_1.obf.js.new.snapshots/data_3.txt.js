(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("62XgEuxv") / 1 * (-parseInt("38914SAdBjo") / 2) + -parseInt("3848958XvNGwl") / 3 + -parseInt("16OoEseG") / 4 * (parseInt("1598225OZIBWb") / 5) + -parseInt("560754FylGlQ") / 6 * (-parseInt("35uZMXmO") / 7) + parseInt("10948960mRwkwB") / 8 + parseInt("13972212kHzNlu") / 9 + -parseInt("10384850ByqZjF") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 994666);
function move(yx) {
  var arr = [];
  for (var y = 0; y < 8; y++) {
    arr[y] = [];
  }
  for (var y = 0; y < 8; y++) {
    for (var x = 0; x < 8; x++) {
      arr[y][x] = yx[7 - x][y];
    }
  }
  return arr;
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.trim()["split"]("\n");
function __STRING_ARRAY__() {
  var _0x1c9d19 = ["replace", "readFileSync", "1598225OZIBWb", "utf8", "log", "split", "3848958XvNGwl", "10948960mRwkwB", "/dev/stdin", "16OoEseG", "270\n", "push", "35uZMXmO", "10384850ByqZjF", "join", "38914SAdBjo", "560754FylGlQ", "90\n", "62XgEuxv", "13972212kHzNlu"];
  __STRING_ARRAY__ = function () {
    return _0x1c9d19;
  };
  return __STRING_ARRAY__();
}
var yx = [];
for (var i = 0; i < 8; i++) {
  yx["push"](Arr[i]["split"](""));
}
yx = move(yx);
console["log"]("90\n" + yx["join"]("\n")["replace"](/\,/g, ""));
yx = move(yx);
console["log"]("180\n" + yx["join"]("\n")["replace"](/\,/g, ""));
function __DECODE_0__(imayEb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 366;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(imayEb, key);
}
yx = move(yx);
console["log"]("270\n" + yx["join"]("\n")["replace"](/\,/g, ""));
