function __STRING_ARRAY__() {
  var _0x577795 = ["568287rzDYdZ", "utf8", "190RiWbtZ", "/dev/stdin", "14GMXYay", "3847960oMyzcL", "log", "3662380NYZfJr", "toString", "8380884nXRalL", "8WeqBqv", "1542884xkVvzk", "1176428GSinZX", "2061069gsOxpA", "split"];
  __STRING_ARRAY__ = function () {
    return _0x577795;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1176428GSinZX") / 1 + -parseInt("1542884xkVvzk") / 2 + parseInt("2061069gsOxpA") / 3 * (-parseInt("8WeqBqv") / 4) + parseInt("3662380NYZfJr") / 5 + parseInt("8380884nXRalL") / 6 + parseInt("14GMXYay") / 7 * (parseInt("3847960oMyzcL") / 8) + parseInt("568287rzDYdZ") / 9 * (-parseInt("190RiWbtZ") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 922503);
function __DECODE_0__(nNdVyE, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 159;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nNdVyE, key);
}
(function (stdin) {
  var lines = stdin["toString"]()["split"](" ");
  var x = parseInt(lines[0], 10);
  var y = parseInt(lines[1], 10);
  console["log"](x * y, (x + y) * 2);
})(require("fs").readFileSync("/dev/stdin", "utf8"));
