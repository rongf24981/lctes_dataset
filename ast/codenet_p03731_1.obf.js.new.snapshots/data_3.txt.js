'use strict';

function __DECODE_0__(qsIKeS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 386;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qsIKeS, key);
}
function __STRING_ARRAY__() {
  var _0x64c46c = ["readFileSync", "log", "utf8", "470170rkibjV", "split", "1220478tHHqMf", "680esaqOW", "3868997jIKrfH", "223506HPuYdp", "8874IYKiAE", "12775kFTTiC", "1jRqZTL", "/dev/stdin", "330698QoTIdL", "770OdzpGp", "12hPWNGD", "8KjzkWP"];
  __STRING_ARRAY__ = function () {
    return _0x64c46c;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1jRqZTL") / 1 * (-parseInt("330698QoTIdL") / 2) + parseInt("223506HPuYdp") / 3 * (-parseInt("8KjzkWP") / 4) + parseInt("470170rkibjV") / 5 + parseInt("1220478tHHqMf") / 6 + -parseInt("12775kFTTiC") / 7 * (parseInt("680esaqOW") / 8) + parseInt("8874IYKiAE") / 9 * (-parseInt("770OdzpGp") / 10) + -parseInt("3868997jIKrfH") / 11 * (-parseInt("12hPWNGD") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 103774);
function Main(input) {
  input = input["split"]("\n");
  var input0 = input[0]["split"](" ");
  var N = parseInt(input0[0]);
  var T = parseInt(input0[1]);
  var t = input[1]["split"](" ");
  for (var i = 0; i < N; i++) {
    t[i] = parseInt(t[i]);
  }
  var count = 0;
  var t_i;
  for (var i = 1; i < N; i++) {
    t_i = t[i] - t[i - 1];
    if (t_i < T) {
      count += t_i;
    } else {
      count += T;
    }
  }
  console["log"](count + T);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
