(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("22471fwqfNl") / 1 + parseInt("9610poUpuA") / 2 + -parseInt("3BkXbZd") / 3 * (-parseInt("270188lfVSxa") / 4) + parseInt("2210075AVaJhY") / 5 + parseInt("1936554qkjFUm") / 6 + parseInt("509012HytDEx") / 7 + -parseInt("27952AgoRsw") / 8 * (parseInt("1773JGgfaW") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 243995);
function seach(x) {
  var flag = true;
  var cnt = 0;
  var sum = 0;
  for (var i = 0; i < ary["length"]; i++) {
    if (x < ary[i]) {
      flag = false;
      break;
    } else if (sum + ary[i] == x) {
      sum = 0;
      cnt++;
    } else if (sum + ary[i] > x) {
      sum = ary[i];
      cnt++;
    } else if (sum + ary[i] < x) {
      sum += ary[i];
    }
    if (cnt == m) {
      flag = false;
      break;
    }
  }
  return flag;
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
function __STRING_ARRAY__() {
  var _0x3e9ab5 = ["1936554qkjFUm", "9610poUpuA", "0 0", "push", "/dev/stdin", "3BkXbZd", "27952AgoRsw", "1773JGgfaW", "map", "270188lfVSxa", "length", "log", "trim", "utf8", "readFileSync", "22471fwqfNl", "split", "2210075AVaJhY", "509012HytDEx", "shift"];
  __STRING_ARRAY__ = function () {
    return _0x3e9ab5;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(OnGXGz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 110;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OnGXGz, key);
}
while (true) {
  var mn = arr["shift"]();
  if (mn == "0 0") {
    break;
  }
  mn = mn["split"](" ")["map"](Number);
  var m = mn[0];
  var n = mn[1];
  var ary = [];
  while (n--) {
    ary["push"](arr["shift"]() - 0);
  }
  var L = 0;
  var R = 1500000;
  while (true) {
    var middle = Math.floor((L + R) / 2);
    if (seach(middle)) {
      R = middle - 1;
    } else {
      L = middle + 1;
    }
    if (L > R) {
      break;
    }
  }
  console["log"](R + 1);
}
