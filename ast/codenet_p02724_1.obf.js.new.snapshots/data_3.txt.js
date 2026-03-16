function __DECODE_0__(VoTdJt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 172;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VoTdJt, key);
}
function __STRING_ARRAY__() {
  var _0x34b769 = ["utf8", "6PzCCMy", "379890OCqKql", "64275WSOyZE", "log", "28ZwWgvp", "163650RALrqf", "floor", "1556892AUIOkD", "920650RbMwZf", "311648VzIIDm", "185384bMUjBX", "8tCdvfu"];
  __STRING_ARRAY__ = function () {
    return _0x34b769;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("185384bMUjBX") / 1 + parseInt("6PzCCMy") / 2 * (-parseInt("64275WSOyZE") / 3) + parseInt("311648VzIIDm") / 4 + -parseInt("920650RbMwZf") / 5 + parseInt("163650RALrqf") / 6 * (-parseInt("28ZwWgvp") / 7) + parseInt("8tCdvfu") / 8 * (parseInt("1556892AUIOkD") / 9) + parseInt("379890OCqKql") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 116768);
function Main(input) {
  var joy = 0;
  joy += Math["floor"](input / 500) * 1000;
  joy += Math["floor"](input % 500 / 5) * 5;
  console["log"](joy);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
