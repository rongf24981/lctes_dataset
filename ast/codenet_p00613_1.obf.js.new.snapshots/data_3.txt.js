function __STRING_ARRAY__() {
  var _0x2fbfab = ["718530aXaMYq", "readFileSync", "845920WkVzkc", "shift", "5850290VkqQmt", "127xsAmPp", "6nRmosu", "utf8", "2052837Jfnams", "reduce", "trim", "2064kUUtYR", "2986tbbOeI", "split", "map", "70EvfMuk", "347247AIGZyc"];
  __STRING_ARRAY__ = function () {
    return _0x2fbfab;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("127xsAmPp") / 1 * (parseInt("2986tbbOeI") / 2) + -parseInt("347247AIGZyc") / 3 + parseInt("845920WkVzkc") / 4 + -parseInt("718530aXaMYq") / 5 * (parseInt("6nRmosu") / 6) + -parseInt("70EvfMuk") / 7 * (parseInt("2064kUUtYR") / 8) + -parseInt("2052837Jfnams") / 9 + parseInt("5850290VkqQmt") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 116770);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]().split("\n");
function __DECODE_0__(ueuyDY, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 373;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ueuyDY, key);
}
while (true) {
  var K = Arr["shift"]() - 0;
  if (K == 0) {
    break;
  }
  var arr = Arr["shift"]()["split"](" ")["map"](Number);
  var sum = arr["reduce"](function (a, b) {
    return a + b;
  });
  console.log(sum / (K - 1));
}
