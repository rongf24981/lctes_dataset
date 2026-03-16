(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("398491PGwTrq") / 1 * (parseInt("2zGaBLh") / 2) + parseInt("3SRhzZy") / 3 * (parseInt("1839640YDhWxQ") / 4) + parseInt("2378085axpgrn") / 5 * (parseInt("6tBHcbR") / 6) + -parseInt("502782bZqbwM") / 7 + -parseInt("8zNmzAy") / 8 * (parseInt("1371690wGHAiD") / 9) + parseInt("10cgHaVv") / 10 * (-parseInt("5185631gDdpqY") / 11) + parseInt("14652LiljrN") / 12 * (parseInt("4329BjQAws") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 247972);
function __DECODE_0__(chUvpX, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 500;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(chUvpX, key);
}
function __STRING_ARRAY__() {
  var _0x5c70ab = ["3SRhzZy", "398491PGwTrq", "utf8", "2zGaBLh", "split", "6tBHcbR", "1839640YDhWxQ", "502782bZqbwM", "10cgHaVv", "1371690wGHAiD", "forEach", "readFileSync", "8zNmzAy", "14652LiljrN", "2378085axpgrn", "5185631gDdpqY", "log", "4329BjQAws"];
  __STRING_ARRAY__ = function () {
    return _0x5c70ab;
  };
  return __STRING_ARRAY__();
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.trim()["split"]("\n");
Arr["forEach"](function (v) {
  var a = v.split(" ")[0] - 0;
  var b = v["split"](" ")[1] - 0;
  console["log"](a + b);
});
