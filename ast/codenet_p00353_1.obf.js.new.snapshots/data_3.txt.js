function __DECODE_0__(GThxXw, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 320;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GThxXw, key);
}
function __STRING_ARRAY__() {
  var _0x462a5d = ["124716QtscsV", "6tAwAmn", "227020senYrY", "1379015MegSUw", "819qbIItc", "40BBzozh", "2728gagHvl", "11854ulBosX", "split", "144HFksVj", "10qdxARP", "utf8", "6MkXFcq", "map", "/dev/stdin", "log", "readFileSync", "862743SvhFUK", "828640XULBEX"];
  __STRING_ARRAY__ = function () {
    return _0x462a5d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("11854ulBosX") / 1 * (parseInt("40BBzozh") / 2) + parseInt("6MkXFcq") / 3 * (parseInt("227020senYrY") / 4) + -parseInt("828640XULBEX") / 5 * (parseInt("6tAwAmn") / 6) + -parseInt("862743SvhFUK") / 7 + -parseInt("2728gagHvl") / 8 * (-parseInt("144HFksVj") / 9) + parseInt("10qdxARP") / 10 * (-parseInt("1379015MegSUw") / 11) + parseInt("124716QtscsV") / 12 * (parseInt("819qbIItc") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 122303);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var [m, f, b] = input.trim()["split"](" ")["map"](Number);
if (m >= b) {
  console["log"](0);
} else if (m + f < b) {
  console.log("NA");
} else {
  console.log(b - m);
}
