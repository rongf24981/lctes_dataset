(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1281156xrDCsu") / 1 + parseInt("6610TXXOdX") / 2 * (parseInt("1491nhmpWG") / 3) + parseInt("2029516pGJlbT") / 4 + -parseInt("2541965VwPYip") / 5 + parseInt("7900686qYAnMH") / 6 * (-parseInt("7QlWwAD") / 7) + -parseInt("6943440qSrTBc") / 8 + parseInt("72UePNAJ") / 9 * (parseInt("237470PfNdMM") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 927992);
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
var PRIME = prime(100000);
function __STRING_ARRAY__() {
  var _0x11872f = ["1491nhmpWG", "floor", "readFileSync", "length", "7QlWwAD", "sqrt", "push", "log", "6610TXXOdX", "2541965VwPYip", "some", "72UePNAJ", "1281156xrDCsu", "6943440qSrTBc", "split", "2029516pGJlbT", "trim", "237470PfNdMM", "0 0 0", "7900686qYAnMH"];
  __STRING_ARRAY__ = function () {
    return _0x11872f;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(GKFUkf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 139;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GKFUkf, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]().split("\n");
arr["some"](function (v) {
  if (v == "0 0 0") {
    return true;
  }
  var mab = v["split"](" ").map(Number);
  var m = mab[0];
  var a = mab[1];
  var b = mab[2];
  var ans = [0, 0, 0];
  for (var p = 0; p < PRIME["length"]; p++) {
    for (var q = p; q < PRIME["length"]; q++) {
      var pq = PRIME[p] * PRIME[q];
      if (pq > m) {
        break;
      }
      if (PRIME[q] * a <= PRIME[p] * b && ans[2] < pq) {
        ans = [PRIME[p], PRIME[q], pq];
      }
    }
  }
  console["log"](ans[0] + " " + ans[1]);
});
