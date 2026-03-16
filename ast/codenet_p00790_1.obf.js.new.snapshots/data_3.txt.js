(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("113856sDskfN") / 1 + -parseInt("989116jggAnX") / 2 * (parseInt("3DMsllG") / 3) + -parseInt("70936bQDCKL") / 4 * (parseInt("70mVjAIR") / 5) + parseInt("2048652nnihfH") / 6 + -parseInt("1208571XoYAHv") / 7 + -parseInt("3112nqzQMk") / 8 * (parseInt("1044yEpAYc") / 9) + parseInt("71580jkiNjn") / 10 * (parseInt("1771emvUaG") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 419413);
function move(d1, d2, d3, d4, d5, d6) {
  var x = this["toString"]();
  if (x == "s") {
    return [d2, d6, d3, d4, d1, d5];
  } else if (x == "n") {
    return [d5, d1, d3, d4, d6, d2];
  } else if (x == "w") {
    return [d4, d2, d1, d6, d5, d3];
  } else if (x == "e") {
    return [d3, d2, d6, d1, d5, d4];
  }
}
function __STRING_ARRAY__() {
  var _0x2dad45 = ["1044yEpAYc", "989116jggAnX", "1208571XoYAHv", "71580jkiNjn", "/dev/stdin", "70936bQDCKL", "log", "toString", "3112nqzQMk", "70mVjAIR", "shift", "1771emvUaG", "113856sDskfN", "2048652nnihfH", "3DMsllG"];
  __STRING_ARRAY__ = function () {
    return _0x2dad45;
  };
  return __STRING_ARRAY__();
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
function __DECODE_0__(qTciNb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 238;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qTciNb, key);
}
var arr = input.trim().split("\n");
while (true) {
  var n = arr.shift() - 0;
  if (n == 0) {
    break;
  }
  var dice = [1, 2, 3, 4, 5, 6];
  while (n--) {
    var str = arr["shift"]();
    dice = move.apply(str[0], dice);
  }
  console["log"](dice[0]);
}
