(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("39EtttuA") / 1 * (-parseInt("17788IkLeHu") / 2) + -parseInt("2645187GfMHWf") / 3 + -parseInt("6564768AmTyVa") / 4 + parseInt("3313145jjmfwo") / 5 + parseInt("487248sMWFcH") / 6 + -parseInt("119xNVJGL") / 7 * (-parseInt("534840WlDrgH") / 8) + -parseInt("9XxrlWG") / 9 * (-parseInt("11444760PSPeml") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 848793);
function prime(max) {
  var arr = [];
  for (var i = 0; i <= max; i++) {
    arr[i] = i;
  }
  arr[0] = false;
  arr[1] = false;
  var sqrt = Math.floor(Math["sqrt"](max));
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
function __STRING_ARRAY__() {
  var _0x19edc0 = ["length", "/dev/stdin", "487248sMWFcH", "6564768AmTyVa", "3313145jjmfwo", "trim", "readFileSync", "sqrt", "2645187GfMHWf", "push", "shift", "split", "17788IkLeHu", "119xNVJGL", "39EtttuA", "9XxrlWG", "534840WlDrgH", "log", "utf8", "11444760PSPeml"];
  __STRING_ARRAY__ = function () {
    return _0x19edc0;
  };
  return __STRING_ARRAY__();
}
var p = prime(50000);
function __DECODE_0__(tSiNob, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 357;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tSiNob, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
while (true) {
  var n = Arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var cnt = 0;
  var k = p["length"] - 1;
  for (var i = 0; i < p.length; i++) {
    while (p[i] + p[k] > n) {
      k--;
    }
    if (k < i) {
      break;
    }
    if (p[i] + p[k] == n) {
      cnt++;
    }
  }
  console["log"](cnt);
}
