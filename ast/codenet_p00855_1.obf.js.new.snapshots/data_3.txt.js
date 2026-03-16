(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("2ZFHcmk") / 1 * (parseInt("277464efwIJx") / 2) + parseInt("15zWqQNW") / 3 * (parseInt("407824oJdmJs") / 4) + -parseInt("64125EvNFpi") / 5 + -parseInt("6SIcOFS") / 6 * (parseInt("2841055pQswFO") / 7) + parseInt("353488eTxpMD") / 8 + parseInt("52335GaApoE") / 9 * (-parseInt("1160ZWnuSY") / 10) + parseInt("11GnoKiv") / 11 * (parseInt("14052876ZFyPOD") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 354345);
function prime(max) {
  var arr = [];
  for (var i = 0; i <= max; i++) {
    arr[i] = i;
  }
  arr[0] = false;
  arr[1] = false;
  var sqrt = Math["floor"](Math["sqrt"](max));
  for (var i = 2; i <= sqrt; i++) {
    if (arr[i] == false) {
      continue;
    }
    for (var j = i + i; j <= max; j += i) {
      arr[j] = false;
    }
  }
  var result = [];
  for (var i = 0; i <= max; i++) {
    if (arr[i] !== false) {
      result["push"](arr[i]);
    }
  }
  return result;
}
var p = prime(1299709);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(IdXOiw, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 440;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IdXOiw, key);
}
function __STRING_ARRAY__() {
  var _0x3c7162 = ["floor", "11GnoKiv", "/dev/stdin", "15zWqQNW", "52335GaApoE", "log", "353488eTxpMD", "push", "length", "readFileSync", "sqrt", "407824oJdmJs", "14052876ZFyPOD", "277464efwIJx", "64125EvNFpi", "2841055pQswFO", "utf8", "1160ZWnuSY", "map", "2ZFHcmk", "6SIcOFS"];
  __STRING_ARRAY__ = function () {
    return _0x3c7162;
  };
  return __STRING_ARRAY__();
}
var Arr = input.trim().split("\n")["map"](Number);
for (var i = 0; i < Arr["length"]; i++) {
  var a = Arr[i];
  if (a == 0) {
    break;
  }
  for (var j = 0; j < p["length"]; j++) {
    if (p[j] == a) {
      console["log"](0);
      break;
    }
    if (p[j] > a) {
      console["log"](p[j] - p[j - 1]);
      break;
    }
  }
}
