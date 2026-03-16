function __DECODE_0__(lgTSUT, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 142;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(lgTSUT, key);
}
function __STRING_ARRAY__() {
  var _0xdd9d94 = ["1733874iUJOBy", "trim", "1226682LURvdH", "3112ntrpne", "utf8", "438056mPSkwI", "split", "579570SWPChs", "1jgkzbk", "readFileSync", "308364kXJjdX", "1865faFZHi", "log", "/dev/stdin", "1467536hFVgLO"];
  __STRING_ARRAY__ = function () {
    return _0xdd9d94;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1jgkzbk") / 1 * (parseInt("308364kXJjdX") / 2) + parseInt("579570SWPChs") / 3 + parseInt("3112ntrpne") / 4 * (-parseInt("1865faFZHi") / 5) + parseInt("1733874iUJOBy") / 6 + -parseInt("1467536hFVgLO") / 7 + -parseInt("438056mPSkwI") / 8 + parseInt("1226682LURvdH") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 218050);
function Main(input) {
  var str = input["trim"]();
  var h = str["split"](" ");
  var n = h[0];
  var k = h[1];
  var kekka = 0;
  var kekka = n - k + 1;
  console["log"](kekka);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
