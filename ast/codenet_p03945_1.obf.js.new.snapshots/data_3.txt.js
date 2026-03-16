(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("12343gTAFEh") / 1 + -parseInt("20494norZJn") / 2 * (parseInt("15shYcKL") / 3) + parseInt("16DThFQn") / 4 * (parseInt("78005CTdfQl") / 5) + -parseInt("17394myJRaD") / 6 * (-parseInt("938XnVNbz") / 7) + -parseInt("1508624mwAfCA") / 8 * (parseInt("18wiIJIq") / 9) + parseInt("4398120fgWkZu") / 10 + parseInt("1529fPuWqO") / 11 * (-parseInt("16836OuokQu") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 254931);
function Main(input) {
  input = input["split"]("\n");
  var s = input[0];
  if (s["match"](/BW/g)) {
    var l1 = s["match"](/BW/g)["length"];
  } else {
    l1 = 0;
  }
  if (s["match"](/WB/g)) {
    var l2 = s["match"](/WB/g)["length"];
  } else {
    l2 = 0;
  }
  console["log"]("%s", l1 + l2);
}
function __STRING_ARRAY__() {
  var _0x117ed8 = ["log", "length", "20494norZJn", "split", "18wiIJIq", "readFileSync", "78005CTdfQl", "1508624mwAfCA", "938XnVNbz", "15shYcKL", "/dev/stdin", "16DThFQn", "1529fPuWqO", "17394myJRaD", "match", "12343gTAFEh", "utf8", "16836OuokQu", "4398120fgWkZu"];
  __STRING_ARRAY__ = function () {
    return _0x117ed8;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(WpKxwI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 263;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WpKxwI, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
