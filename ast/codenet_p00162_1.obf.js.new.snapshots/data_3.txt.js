function __STRING_ARRAY__() {
  var _0xe95459 = ["360XkVoZm", "241315Kwydym", "46mwLVHY", "/dev/stdin", "log", "1576855SswmiN", "34980rVXJSb", "split", "8JSvbaF", "map", "replace", "readFileSync", "1853328kZuvTB", "2532TDsdoG", "3907590MRnzsK", "4887711lltTiZ"];
  __STRING_ARRAY__ = function () {
    return _0xe95459;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("241315Kwydym") / 1 + -parseInt("46mwLVHY") / 2 * (-parseInt("2532TDsdoG") / 3) + parseInt("34980rVXJSb") / 4 * (-parseInt("360XkVoZm") / 5) + parseInt("1853328kZuvTB") / 6 + parseInt("1576855SswmiN") / 7 + -parseInt("8JSvbaF") / 8 * (-parseInt("4887711lltTiZ") / 9) + -parseInt("3907590MRnzsK") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 317560);
function hamming() {
  var obj = {};
  for (var i = 1; i <= 1000000; i++) {
    var h = i;
    while (h % 2 == 0) {
      h /= 2;
    }
    while (h % 3 == 0) {
      h /= 3;
    }
    while (h % 5 == 0) {
      h /= 5;
    }
    if (h == 1) {
      obj[i] = true;
    }
  }
  return obj;
}
var Numbers = hamming();
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(gedcsX, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 317;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(gedcsX, key);
}
var Arr = input["replace"](/\n$/, "")["split"]("\n");
while (true) {
  var mn = Arr.shift()["split"](" ")["map"](Number);
  if (mn[0] == 0) {
    break;
  }
  var cnt = 0;
  for (var i = mn[0]; i <= mn[1]; i++) {
    if (Numbers[i]) {
      cnt++;
    }
  }
  console["log"](cnt);
}
