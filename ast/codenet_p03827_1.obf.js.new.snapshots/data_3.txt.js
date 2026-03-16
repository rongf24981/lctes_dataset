function __STRING_ARRAY__() {
  var _0x26b2d9 = ["240wevOip", "log", "7368OReleV", "655715iCGmFf", "46960TcnowB", "/dev/stdin", "1204zTfBVk", "246650FklFKO", "276282yuBaaw", "217WNjwdZ", "36BNILRH", "6TQAzvq", "split", "5660864WzjbwO"];
  __STRING_ARRAY__ = function () {
    return _0x26b2d9;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(HjlCVz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 481;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HjlCVz, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1204zTfBVk") / 1 + -parseInt("276282yuBaaw") / 2 + parseInt("7368OReleV") / 3 * (parseInt("240wevOip") / 4) + parseInt("655715iCGmFf") / 5 * (-parseInt("6TQAzvq") / 6) + parseInt("217WNjwdZ") / 7 * (-parseInt("46960TcnowB") / 8) + parseInt("36BNILRH") / 9 * (-parseInt("246650FklFKO") / 10) + parseInt("5660864WzjbwO") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 113274);
function Main(input) {
  input = input["split"]("\n");
  var num = input[0];
  var character = input[1];
  var max = 0;
  var x = 0;
  for (var i = 0; i < character.length; i++) {
    if (character[i] === "I") {
      x++;
    } else {
      x--;
    }
    if (max < x) {
      max = x;
    }
  }
  console["log"](max);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
