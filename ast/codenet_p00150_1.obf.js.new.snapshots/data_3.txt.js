function __DECODE_0__(BhTbFc, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 176;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BhTbFc, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1zShFbm") / 1 * (-parseInt("83894fdodut") / 2) + -parseInt("48861hzIRlc") / 3 * (-parseInt("4uCCipP") / 4) + -parseInt("10TLSzRG") / 5 * (parseInt("201276NKcyAB") / 6) + parseInt("2518838tKzVdX") / 7 * (parseInt("8oTgdwU") / 8) + parseInt("333cDBjBl") / 9 * (-parseInt("15410eItjhn") / 10) + parseInt("10142oksVor") / 11 * (parseInt("2148IpZDrO") / 12) + parseInt("299jLoiwS") / 13 * (-parseInt("32410WsjLdd") / 14);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 321858);
function prime(max) {
  var arr = [];
  for (var i = 0; i <= max; i++) {
    arr[i] = i;
  }
  arr[0] = false;
  arr[1] = false;
  var sqrt = Math["floor"](Math.sqrt(max));
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
var p = prime(999999);
function __STRING_ARRAY__() {
  var _0x4ea0ba = ["push", "299jLoiwS", "length", "201276NKcyAB", "10142oksVor", "32410WsjLdd", "10TLSzRG", "4uCCipP", "trim", "48861hzIRlc", "8oTgdwU", "utf8", "83894fdodut", "333cDBjBl", "1zShFbm", "split", "15410eItjhn", "2148IpZDrO", "/dev/stdin", "2518838tKzVdX", "floor", "log"];
  __STRING_ARRAY__ = function () {
    return _0x4ea0ba;
  };
  return __STRING_ARRAY__();
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n").map(Number);
for (var i = 0; i < Arr["length"]; i++) {
  var a = Arr[i];
  if (a == 0) {
    break;
  }
  var twin = "";
  for (var j = 1; j < p["length"]; j++) {
    if (p[j] > a) {
      break;
    }
    if (p[j] - p[j - 1] == 2) {
      twin = p[j - 1] + " " + p[j];
    }
  }
  console["log"](twin);
}
