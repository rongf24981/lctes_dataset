(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1sgelHN") / 1 * (parseInt("2625704SZunyL") / 2) + -parseInt("4212696QEkUYY") / 3 + -parseInt("8ZliksR") / 4 * (parseInt("1929435kFzcNC") / 5) + -parseInt("5138490dXkhUS") / 6 + -parseInt("7yPWQWG") / 7 * (parseInt("11960008QLCoCW") / 8) + -parseInt("13948443rWQkFr") / 9 + parseInt("56806860kzHKzr") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 916289);
function __DECODE_0__(lvtzVe, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 417;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(lvtzVe, key);
}
function bubbleSort(A) {
  var N = A["length"];
  var flag = 1;
  var i = 0;
  var cnt = 0;
  while (flag == 1) {
    flag = 0;
    for (var j = N - 1; j >= i + 1; j--) {
      if (A[j] < A[j - 1]) {
        var m = A[j];
        A[j] = A[j - 1];
        A[j - 1] = m;
        flag = 1;
        cnt++;
      }
    }
    i++;
  }
  return [A, cnt];
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input["trim"]().split("\n");
Arr.shift();
var arr = Arr[0]["split"](" ")["map"](Number);
function __STRING_ARRAY__() {
  var _0x1df891 = ["2625704SZunyL", "split", "8ZliksR", "4212696QEkUYY", "11960008QLCoCW", "1929435kFzcNC", "log", "utf8", "13948443rWQkFr", "trim", "7yPWQWG", "1sgelHN", "56806860kzHKzr", "map", "5138490dXkhUS", "length", "/dev/stdin", "join"];
  __STRING_ARRAY__ = function () {
    return _0x1df891;
  };
  return __STRING_ARRAY__();
}
var result = bubbleSort(arr);
console["log"](result[0]["join"](" "));
console["log"](result[1]);
