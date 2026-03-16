(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("2627UhEVmJ") / 1 * (-parseInt("20LUAcCZ") / 2) + parseInt("1662QfhHHW") / 3 * (-parseInt("340ejzbym") / 4) + parseInt("3735RDUXzZ") / 5 * (parseInt("84fEtnWC") / 6) + -parseInt("5446byvbZi") / 7 * (parseInt("616qtDqhg") / 8) + parseInt("135684ezEHSa") / 9 + -parseInt("930190lcTIED") / 10 + parseInt("121YWyxQh") / 11 * (parseInt("332292ULsqPF") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 103850);
var m = [-1, 2, 3, 5, 7, 11, 13];
function p(n) {
  if (m[n]) {
    return m[n];
  }
  var found = m["length"] - 1;
  var foundP = m[found];
  for (var i = foundP + 2;; i += 2) {
    if (isPrime(i)) {
      found++;
      m[found] = i;
      if (found == n) {
        return i;
      }
    }
  }
}
function isPrime(num) {
  if (num % 3 == 0) {
    return false;
  }
  var limit = Math["round"](Math["sqrt"](num));
  var i = 1;
  while (i * 6 - 1 <= limit) {
    if (num % (i * 6 - 1) == 0 || num % (i * 6 + 1) == 0) {
      return false;
    }
    i++;
  }
  return true;
}
function __STRING_ARRAY__() {
  var _0x216243 = ["135684ezEHSa", "round", "2627UhEVmJ", "332292ULsqPF", "5446byvbZi", "log", "shift", "84fEtnWC", "616qtDqhg", "930190lcTIED", "length", "readFileSync", "1662QfhHHW", "utf8", "3735RDUXzZ", "20LUAcCZ", "340ejzbym", "121YWyxQh", "sqrt", "split"];
  __STRING_ARRAY__ = function () {
    return _0x216243;
  };
  return __STRING_ARRAY__();
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var lines = input["split"]("\n");
var line;
function __DECODE_0__(cixEoQ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 493;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(cixEoQ, key);
}
while (line = lines["shift"]()) {
  var num = +line;
  if (num == 0) {
    break;
  }
  var s = 0;
  for (var i = num; i > 0; i--) {
    s += p(i);
  }
  console["log"](s);
}
