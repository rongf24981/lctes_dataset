function __DECODE_0__(KjDKIv, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 483;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KjDKIv, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("19244CNaBSb") / 1 * (parseInt("118lQgDwd") / 2) + parseInt("217149GpoYoW") / 3 * (parseInt("76CYyXnl") / 4) + -parseInt("6377760QlSvcM") / 5 + parseInt("6978132tIsKmo") / 6 + -parseInt("77IGIalI") / 7 * (parseInt("1067320SpTBIZ") / 8) + parseInt("36TTkRzE") / 9 * (parseInt("1930030IjkNwz") / 10) + parseInt("55HEbdHL") / 11 * (-parseInt("2138244RzUhzC") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 811655);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input.trim()["split"]("\n");
function __STRING_ARRAY__() {
  var _0x4b4a31 = ["000", "push", "76CYyXnl", "2138244RzUhzC", "6377760QlSvcM", "join", "6978132tIsKmo", "log", "36TTkRzE", "1067320SpTBIZ", "utf8", "shift", "map", "77IGIalI", "55HEbdHL", "217149GpoYoW", "readFileSync", "length", "19244CNaBSb", "split", "/dev/stdin", "118lQgDwd", "1930030IjkNwz"];
  __STRING_ARRAY__ = function () {
    return _0x4b4a31;
  };
  return __STRING_ARRAY__();
}
while (true) {
  var nlr = arr.shift()["split"](" ")["map"](Number);
  if (nlr["join"]("") == "000") {
    break;
  }
  var [n, l, r] = [nlr[0], nlr[1], nlr[2]];
  var A = [];
  for (var i = 0; i < n; i++) {
    A["push"](arr["shift"]() - 0);
  }
  var cnt = 0;
  for (var x = l; x <= r; x++) {
    var flag = true;
    for (var i = 0; i < A["length"]; i++) {
      if (x % A[i] == 0) {
        flag = false;
        if ((i + 1) % 2 != 0) {
          cnt++;
        }
        break;
      }
    }
    if (flag && n % 2 == 0) {
      cnt++;
    }
  }
  console["log"](cnt);
}
