function __STRING_ARRAY__() {
  var _0x4db767 = ["350uSnpsc", "1053608eAICOV", "6167497qkOvvc", "readFileSync", "push", "2684925SOHWyr", "4491120BofKcn", "utf8", "shift", "split", "162ggLbgB", "208985htZDzw", "192QWUUog", "8VUkaXh", "204457CCqNzG", "/dev/stdin", "1542vbQUWq", "length"];
  __STRING_ARRAY__ = function () {
    return _0x4db767;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1542vbQUWq") / 1 * (parseInt("162ggLbgB") / 2) + -parseInt("4491120BofKcn") / 3 + parseInt("1053608eAICOV") / 4 + -parseInt("208985htZDzw") / 5 * (-parseInt("192QWUUog") / 6) + parseInt("6167497qkOvvc") / 7 * (parseInt("8VUkaXh") / 8) + parseInt("2684925SOHWyr") / 9 + -parseInt("350uSnpsc") / 10 * (parseInt("204457CCqNzG") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 757619);
function binarySearch(A, key) {
  var left = 0;
  var right = A["length"] - 1;
  var cnt = 0;
  while (true) {
    cnt++;
    if (left == right) {
      break;
    }
    var mid = Math.floor((left + right) / 2);
    if (A[mid] == key) {
      return cnt;
    }
    if (key < A[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return cnt;
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(VDsHgI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 210;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VDsHgI, key);
}
var Arr = input.trim()["split"]("\n");
while (true) {
  var n = Arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr["push"](Arr["shift"]() - 0);
  }
  console.log(binarySearch(arr, Arr["shift"]() - 0));
}
