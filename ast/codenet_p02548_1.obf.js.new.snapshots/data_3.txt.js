function __DECODE_0__(TVHgYe, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 429;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TVHgYe, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("243649AzetXh") / 1 + parseInt("650874RzRLkC") / 2 + -parseInt("277863gdBApg") / 3 + -parseInt("3388004NSFdSb") / 4 * (-parseInt("10xSVWDm") / 5) + parseInt("251214dXWkEM") / 6 + parseInt("3641337jKpjnt") / 7 + -parseInt("10594552XpSlrA") / 8 * (parseInt("9JEqaNy") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 920910);
function __STRING_ARRAY__() {
  var _0x107564 = ["/dev/stdin", "3388004NSFdSb", "251214dXWkEM", "3641337jKpjnt", "243649AzetXh", "9JEqaNy", "split", "utf8", "277863gdBApg", "floor", "650874RzRLkC", "10xSVWDm", "10594552XpSlrA"];
  __STRING_ARRAY__ = function () {
    return _0x107564;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input.split("\n");
  N = parseInt(input[0]["split"](" "));
  var result = 0;
  for (var i = 1; i < N; i++) {
    result += Math["floor"]((N - 1) / i);
  }
  console.log("%d", result);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
