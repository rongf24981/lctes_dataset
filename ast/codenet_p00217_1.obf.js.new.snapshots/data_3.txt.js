(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("2619BgjKpO") / 1 * (parseInt("1046AoWPFU") / 2) + -parseInt("3425436chueJR") / 3 + -parseInt("4009400dmRQno") / 4 + -parseInt("3661290tcfzFA") / 5 * (-parseInt("6UEuQbY") / 6) + -parseInt("8770272ssYcJj") / 7 + -parseInt("10187040rljGXa") / 8 + parseInt("31550301sPWtgP") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 937146);
function __DECODE_0__(BgugLm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 295;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BgugLm, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.trim()["split"]("\n");
while (true) {
  var AL = Arr["shift"]();
  if (AL == 0) {
    break;
  }
  var pd = [];
  for (var i = 0; i < AL; i++) {
    var arr = Arr["shift"]()["split"](" ")["map"](Number);
    var p = arr[0];
    var d = arr[1] + arr[2];
    pd["push"]([p, d]);
  }
  pd.sort(function (a, b) {
    if (a[1] <= b[1]) {
      return 1;
    } else {
      return -1;
    }
  });
  console["log"](pd[0]["join"](" "));
}
function __STRING_ARRAY__() {
  var _0x39ef4d = ["map", "4009400dmRQno", "3661290tcfzFA", "10187040rljGXa", "readFileSync", "2619BgjKpO", "1046AoWPFU", "join", "8770272ssYcJj", "6UEuQbY", "utf8", "shift", "31550301sPWtgP", "push", "split", "3425436chueJR", "log"];
  __STRING_ARRAY__ = function () {
    return _0x39ef4d;
  };
  return __STRING_ARRAY__();
}
