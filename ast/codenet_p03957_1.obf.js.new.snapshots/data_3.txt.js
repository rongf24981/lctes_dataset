function __STRING_ARRAY__() {
  var _0x1d2f2f = ["26bFZqGM", "946885cwyNCy", "log", "readFileSync", "Yes", "54690fNKeVZ", "length", "29790YJvqGd", "utf8", "9YwJxYA", "31920afmgxY", "split", "5651992HEaYuO", "3846924zWvdOO", "434SguadW", "2288GIHjwM", "203217NwBKGz"];
  __STRING_ARRAY__ = function () {
    return _0x1d2f2f;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(IiUNjC, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 270;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IiUNjC, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("29790YJvqGd") / 1 * (-parseInt("26bFZqGM") / 2) + parseInt("203217NwBKGz") / 3 + parseInt("3846924zWvdOO") / 4 + -parseInt("946885cwyNCy") / 5 + parseInt("54690fNKeVZ") / 6 * (-parseInt("434SguadW") / 7) + -parseInt("5651992HEaYuO") / 8 * (parseInt("9YwJxYA") / 9) + -parseInt("31920afmgxY") / 10 * (-parseInt("2288GIHjwM") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 619670);
function Main(input) {
  var input = input["split"]("\n");
  var string = input[0];
  var c;
  var f;
  var Cfound = 0;
  for (var i = 0; i < string["length"]; i++) {
    if (string[i] == "C" && !Cfound) {
      c = i;
      Cfound++;
    }
    ;
    if (Cfound && string[i] == "F") {
      f = i;
      return console.log("Yes");
    }
  }
  ;
  return console["log"]("No");
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
