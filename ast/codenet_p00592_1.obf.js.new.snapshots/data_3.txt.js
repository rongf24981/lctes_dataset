(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1lPBeoy") / 1 * (-parseInt("1018106rXAbKB") / 2) + -parseInt("2930517lyntYe") / 3 + -parseInt("2891576lLsJme") / 4 * (-parseInt("5XXWOFn") / 5) + -parseInt("12KyJHIn") / 6 * (-parseInt("2380343owHVOV") / 7) + -parseInt("2446096GJJsIa") / 8 + -parseInt("4769181BmggUa") / 9 + parseInt("4282500pJRLjr") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 527785);
function time(x) {
  x = x["split"]("").map(Number);
  return x[0] * 10 * 60 + x[1] * 60 + x[2] * 10 + x[3];
}
function __STRING_ARRAY__() {
  var _0x5265c4 = ["4769181BmggUa", "0 0 0", "1018106rXAbKB", "2380343owHVOV", "max", "utf8", "1lPBeoy", "readFileSync", "5XXWOFn", "shift", "2930517lyntYe", "2891576lLsJme", "trim", "12KyJHIn", "/dev/stdin", "4282500pJRLjr", "split", "2446096GJJsIa"];
  __STRING_ARRAY__ = function () {
    return _0x5265c4;
  };
  return __STRING_ARRAY__();
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
function __DECODE_0__(RJoiHa, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 345;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RJoiHa, key);
}
while (true) {
  var npq = arr["shift"]();
  if (npq == "0 0 0") {
    break;
  }
  npq = npq.split(" ");
  var n = npq[0] - 0;
  var p = time(npq[1]);
  var q = time(npq[2]);
  var tv = [];
  for (var i = p; i < q; i++) {
    tv[i] = 0;
  }
  for (var i = 0; i < n; i++) {
    var cm = arr["shift"]();
    var ary = arr["shift"]()["split"](" ");
    for (var j = 0; j < cm; j++) {
      var start = time(ary["shift"]());
      var stop = time(ary.shift());
      for (var k = start; k < stop; k++) {
        tv[k]++;
      }
    }
  }
  var max = 0;
  var cnt = 0;
  for (var i = p; i < q; i++) {
    if (tv[i] != n) {
      cnt++;
    } else {
      max = Math["max"](max, cnt);
      cnt = 0;
    }
  }
  max = Math["max"](max, cnt);
  console.log(max);
}
