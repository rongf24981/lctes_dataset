(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("291884aNkXjM") / 1 + parseInt("284bFLPtQ") / 2 * (-parseInt("5736hVDzIi") / 3) + -parseInt("7652myMScw") / 4 * (-parseInt("565TrHJUh") / 5) + parseInt("8178gNIImg") / 6 * (parseInt("63fGBDlL") / 7) + -parseInt("660040qfLhcW") / 8 + -parseInt("2431089akwjGg") / 9 + parseInt("1230CDnRxI") / 10 * (parseInt("77957JxQZgJ") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 184123);
var toInt = x => parseInt(x, 10);
var toIntArr = arr => arr["map"](x => toInt(x));
var abs = x => x > 0 ? x : -x;
function __STRING_ARRAY__() {
  var _0x217c4c = ["7652myMScw", "565TrHJUh", "291884aNkXjM", "284bFLPtQ", "/dev/stdin", "77957JxQZgJ", "2431089akwjGg", "63fGBDlL", "8178gNIImg", "split", "5736hVDzIi", "1230CDnRxI", "length", "log", "map", "660040qfLhcW", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x217c4c;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(OKQpQz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 358;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OKQpQz, key);
}
function min() {
  var rest = arguments;
  var val = rest[0];
  for (var i = 1; i < rest["length"]; i++) {
    if (rest[i] < val) {
      val = rest[i];
    }
  }
  return val;
}
function max() {
  var rest = arguments;
  var val = rest[0];
  for (var i = 1; i < rest["length"]; i++) {
    if (rest[i] > val) {
      val = rest[i];
    }
  }
  return val;
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function Main(input) {
  var input = input.split("\n");
  var nk = toIntArr(input[0]["split"](" "));
  var x = nk[0];
  var y = nk[1];
  var a = y / x;
  var temp = 1;
  var ans = 0;
  while (temp <= a) {
    temp *= 2;
    ans++;
  }
  console["log"](ans);
}
