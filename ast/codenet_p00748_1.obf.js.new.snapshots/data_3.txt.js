(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("110722suUWzp") / 1 + parseInt("1668240yoHfAn") / 2 + parseInt("24vnudtg") / 3 * (parseInt("81988kgIffi") / 4) + -parseInt("3584635vYLykl") / 5 + -parseInt("53130FaEzma") / 6 + parseInt("682857EQwMRn") / 7 * (parseInt("8WhHMwN") / 8) + parseInt("313578StvFCG") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 515429);
var a = [1];
for (var i = 1; i < 100000; i++) {
  a[i] = a[i - 1] + i + 1;
}
var b = [1];
function __STRING_ARRAY__() {
  var _0x183411 = ["map", "24vnudtg", "8WhHMwN", "trim", "682857EQwMRn", "min", "/dev/stdin", "81988kgIffi", "log", "utf8", "3584635vYLykl", "1668240yoHfAn", "313578StvFCG", "readFileSync", "110722suUWzp", "53130FaEzma"];
  __STRING_ARRAY__ = function () {
    return _0x183411;
  };
  return __STRING_ARRAY__();
}
var i = 1;
while (true) {
  b[i] = b[i - 1] + a[i];
  if (b[i] > 100000) {
    break;
  }
  i++;
}
var dpA = [];
var dpB = [];
for (var i = 0; i < 100000; i++) {
  dpA[i] = Infinity;
}
function __DECODE_0__(QxTMjk, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 278;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QxTMjk, key);
}
for (var i = 0; i < 100000; i++) {
  dpB[i] = Infinity;
}
dpA[0] = 0;
dpB[0] = 0;
for (var i = 0; i < 100000; i++) {
  for (var j = 0; j < b.length; j++) {
    if (i - b[j] >= 0) {
      dpA[i] = Math["min"](dpA[i - b[j]] + 1, dpA[i]);
    }
    if (b[j] % 2 == 1 && i - b[j] >= 0) {
      dpB[i] = Math["min"](dpB[i - b[j]] + 1, dpB[i]);
    }
  }
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]().split("\n")["map"](Number);
while (true) {
  var n = arr.shift();
  if (n == 0) {
    break;
  }
  console["log"](dpA[n] + " " + dpB[n]);
}
