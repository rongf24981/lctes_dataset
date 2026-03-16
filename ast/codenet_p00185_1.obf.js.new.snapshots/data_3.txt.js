function __DECODE_0__(EVMsCQ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 331;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EVMsCQ, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("141711pyVkGa") / 1 * (parseInt("4tKCKsS") / 2) + -parseInt("37287PrRLQZ") / 3 * (parseInt("244BlaEyy") / 4) + parseInt("505avOIii") / 5 * (-parseInt("70188Mswcgr") / 6) + parseInt("4054470cQQOPL") / 7 + -parseInt("3084144onKOqF") / 8 + parseInt("225iwmqPF") / 9 * (parseInt("354190EWhcrz") / 10) + -parseInt("4976389NPezBo") / 11 * (-parseInt("48eUzwnc") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 665674);
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
  var result = {};
  for (var i = 0; i <= max; i++) {
    if (arr[i] !== false) {
      result[arr[i]] = true;
    }
  }
  return result;
}
function __STRING_ARRAY__() {
  var _0x2cb07e = ["4976389NPezBo", "70188Mswcgr", "readFileSync", "354190EWhcrz", "37287PrRLQZ", "3084144onKOqF", "225iwmqPF", "141711pyVkGa", "4054470cQQOPL", "4tKCKsS", "split", "log", "sqrt", "hasOwnProperty", "map", "244BlaEyy", "utf8", "floor", "length", "505avOIii", "48eUzwnc", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x2cb07e;
  };
  return __STRING_ARRAY__();
}
var p = prime(1000000);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.trim()["split"]("\n")["map"](Number);
for (var I = 0; I < Arr["length"]; I++) {
  var v = Arr[I];
  if (v == 0) {
    break;
  }
  var cnt = 0;
  var obj = {};
  for (var k in p) {
    if (k >= v) {
      break;
    }
    if (obj["hasOwnProperty"](k)) {
      continue;
    }
    obj[v - k] = true;
    if (p["hasOwnProperty"](v - k)) {
      cnt++;
    }
  }
  console["log"](cnt);
}
