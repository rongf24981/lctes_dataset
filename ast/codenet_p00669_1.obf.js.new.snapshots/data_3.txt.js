(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("598571KpqAAz") / 1 * (parseInt("2WoEprV") / 2) + -parseInt("6CALOys") / 3 * (parseInt("1995984IcZDoC") / 4) + -parseInt("4310760ansVXx") / 5 + parseInt("880626hkPnMf") / 6 + parseInt("7yldmoE") / 7 * (-parseInt("7327456ZMGhwS") / 8) + -parseInt("4954131mspeZZ") / 9 + parseInt("33097120esuqNw") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 728519);
function maxCards(arr, max) {
  for (var i = 0; i < n - (k - 1); i++) {
    var x = 1;
    var j = 0;
    while (j < k) {
      x *= arr[i + j];
      j++;
    }
    max = Math["max"](max, x);
  }
  return max;
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.trim()["split"]("\n");
function __DECODE_0__(wOkUVt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 322;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wOkUVt, key);
}
function __STRING_ARRAY__() {
  var _0x5a41b9 = ["7327456ZMGhwS", "880626hkPnMf", "max", "push", "6CALOys", "598571KpqAAz", "7yldmoE", "/dev/stdin", "4954131mspeZZ", "split", "log", "33097120esuqNw", "1995984IcZDoC", "2WoEprV", "4310760ansVXx", "readFileSync", "utf8", "map"];
  __STRING_ARRAY__ = function () {
    return _0x5a41b9;
  };
  return __STRING_ARRAY__();
}
var I = 0;
while (true) {
  var nk = Arr[I]["split"](" ")["map"](Number);
  I++;
  var n = nk[0];
  var k = nk[1];
  if (n == 0 && k == 0) {
    break;
  }
  var c = [];
  for (var i = 0; i < n; i++) {
    c["push"](Arr[I]);
    I++;
  }
  var maxA = 1;
  maxA = maxCards(c, maxA);
  var maxB = 1;
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      var memo = c[i];
      c[i] = c[j];
      c[j] = memo;
      maxB = maxCards(c, maxB);
      c[j] = c[i];
      c[i] = memo;
    }
  }
  console["log"](maxA > maxB ? "NO GAME" : maxB - maxA);
}
