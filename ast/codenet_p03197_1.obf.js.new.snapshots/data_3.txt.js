function __DECODE_0__(RLPYBU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 267;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RLPYBU, key);
}
function __STRING_ARRAY__() {
  var _0x574b6c = ["3533189NrcGGq", "120zfqzpx", "1002354BOCFaO", "length", "9161952NeOOrM", "21505rMYqig", "second", "6545421BougMK", "76osLAOK", "9088815dDwxDS", "map", "/dev/stdin", "split", "8550213Mdaykq", "8sFuZpl", "trim", "log", "8ZMCPYy", "shift"];
  __STRING_ARRAY__ = function () {
    return _0x574b6c;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("21505rMYqig") / 1 * (-parseInt("76osLAOK") / 2) + -parseInt("1002354BOCFaO") / 3 * (parseInt("8sFuZpl") / 4) + -parseInt("9088815dDwxDS") / 5 + -parseInt("9161952NeOOrM") / 6 + parseInt("8550213Mdaykq") / 7 * (parseInt("8ZMCPYy") / 8) + parseInt("6545421BougMK") / 9 + -parseInt("120zfqzpx") / 10 * (-parseInt("3533189NrcGGq") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 972935);
function Main(input) {
  input = input["split"]("\n")["map"](Number);
  input["shift"]();
  var n = arrsum(input);
  if (n == input["length"]) {
    n = 1;
  }
  if (n % 2 == 1) {
    console["log"]("first");
  } else {
    console["log"]("second");
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8")["trim"]());
function arrsum(arr) {
  var sum = 0;
  for (var i = 0, len = arr.length; i < len; ++i) {
    sum += arr[i];
  }
  ;
  return sum;
}
