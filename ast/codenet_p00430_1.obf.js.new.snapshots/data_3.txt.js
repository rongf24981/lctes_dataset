function __STRING_ARRAY__() {
  var _0x49d3e9 = ["push", "split", "230ZHdsSo", "1959129oEhfOm", "join", "6hmrLHp", "31053VOmeAv", "79998WSnyxM", "6171084DxqIDr", "length", "2860fqlFIe", "2204040vlRIvJ", "931ljgUDq", "utf8", "readFileSync", "222779vhhixE", "/dev/stdin", "37912bKKuau"];
  __STRING_ARRAY__ = function () {
    return _0x49d3e9;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("222779vhhixE") / 1 * (parseInt("6hmrLHp") / 2) + parseInt("1959129oEhfOm") / 3 + parseInt("2204040vlRIvJ") / 4 + -parseInt("230ZHdsSo") / 5 * (-parseInt("79998WSnyxM") / 6) + parseInt("931ljgUDq") / 7 * (-parseInt("37912bKKuau") / 8) + -parseInt("6171084DxqIDr") / 9 + -parseInt("2860fqlFIe") / 10 * (parseInt("31053VOmeAv") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 362367);
function bomb(arr) {
  console.log(arr["join"](" "));
  if (arr[0] === 1) {
    return;
  }
  var i = arr["length"] - 1;
  while (true) {
    if (arr[i] !== 1) {
      if (arr[i] === 2 || i === arr["length"] - 1) {
        arr[i]--;
        arr["push"](1);
      } else {
        arr[i]--;
        arr[i + 1]++;
      }
      break;
    }
    i--;
  }
  bomb(arr);
}
function __DECODE_0__(NbUBCC, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 480;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NbUBCC, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.trim()["split"]("\n");
while (true) {
  var n = Arr.shift() - 0;
  if (n == 0) {
    break;
  }
  bomb([n]);
}
