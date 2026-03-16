(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("807086cakeKz") / 1 + -parseInt("165276GkiNlI") / 2 + -parseInt("2585721bfESlC") / 3 * (parseInt("4emiUVK") / 4) + parseInt("1195vYvmMQ") / 5 * (-parseInt("2280ohthId") / 6) + -parseInt("4139471ejbWxH") / 7 + parseInt("8sXMGxC") / 8 * (parseInt("6956109rggmcn") / 9) + parseInt("5646030PZZpUi") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 517872);
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
function __DECODE_0__(thfQgc, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 326;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(thfQgc, key);
}
function __STRING_ARRAY__() {
  var _0x102430 = ["push", "4139471ejbWxH", "4emiUVK", "8sXMGxC", "sqrt", "1195vYvmMQ", "length", "floor", "165276GkiNlI", "807086cakeKz", "trim", "/dev/stdin", "map", "log", "6956109rggmcn", "5646030PZZpUi", "2280ohthId", "readFileSync", "2585721bfESlC"];
  __STRING_ARRAY__ = function () {
    return _0x102430;
  };
  return __STRING_ARRAY__();
}
var p = prime(9999999);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]().split("\n")["map"](Number);
for (var i = 0; i < Arr["length"]; i++) {
  var a = Arr[i];
  if (a == 0) {
    break;
  }
  var quad = "";
  for (var j = 5; j < p["length"]; j++) {
    if (p[j] > a) {
      break;
    }
    var x = p[j] - 8;
    if (x == p[j - 3] && x + 2 == p[j - 2] && x + 6 == p[j - 1]) {
      quad = p[j];
    }
  }
  console["log"](quad);
}
