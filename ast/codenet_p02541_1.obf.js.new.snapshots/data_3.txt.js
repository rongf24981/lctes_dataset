(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("2061Zswzaq") / 1 * (-parseInt("282pSIFMC") / 2) + -parseInt("32727eZaeaw") / 3 + parseInt("6668CbkfLb") / 4 * (parseInt("1005BhRjGB") / 5) + parseInt("18dNjjXV") / 6 * (-parseInt("40782aBbGLF") / 7) + -parseInt("2876960EHzwzJ") / 8 + -parseInt("4167495ccULqb") / 9 + parseInt("11465860yUXtAL") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 339990);
function Main(input) {
  input = input.split("\n");
  const N = parseInt(input[0], 10);
  for (var i = 1; i > 0; i++) {
    var n = (Math["sqrt"](N * 8 * i + 1) - 1) * 0.5;
    if (Number["isInteger"](n) == true) {
      console.log(n);
      break;
    }
  }
}
function __STRING_ARRAY__() {
  var _0xb1337f = ["2061Zswzaq", "40782aBbGLF", "6668CbkfLb", "32727eZaeaw", "282pSIFMC", "isInteger", "11465860yUXtAL", "4167495ccULqb", "readFileSync", "18dNjjXV", "/dev/stdin", "2876960EHzwzJ", "sqrt", "1005BhRjGB"];
  __STRING_ARRAY__ = function () {
    return _0xb1337f;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(KltvmH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 174;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KltvmH, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
