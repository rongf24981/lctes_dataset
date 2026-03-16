(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("619EJbzaE") / 1 * (-parseInt("282SkQzdk") / 2) + -parseInt("266880BUZGwp") / 3 + parseInt("905532rrpCYf") / 4 + -parseInt("262995RRutio") / 5 + parseInt("606lcuUGn") / 6 * (-parseInt("266BbwCCY") / 7) + parseInt("1190176GkXiHc") / 8 + -parseInt("9DTgarX") / 9 * (parseInt("2011510bVxDVi") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 115886);
function __STRING_ARRAY__() {
  var _0x47955b = ["log", "619EJbzaE", "readFileSync", "9DTgarX", "1190176GkXiHc", "Yes", "2011510bVxDVi", "606lcuUGn", "266880BUZGwp", "utf8", "split", "266BbwCCY", "905532rrpCYf", "282SkQzdk", "262995RRutio", "trim"];
  __STRING_ARRAY__ = function () {
    return _0x47955b;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(DdZELx, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 289;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DdZELx, key);
}
function Main(input) {
  var A = parseInt(input[0], 10);
  var B = parseInt(input[1], 10);
  var C = parseInt(input[2], 10);
  if (A < B) {
    if (A < C && C < B) {
      console.log("Yes");
    } else {
      console["log"]("No");
    }
  } else if (B < C && C < A) {
    console.log("Yes");
  } else {
    console["log"]("No");
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]()["split"](/\n|\s/));
