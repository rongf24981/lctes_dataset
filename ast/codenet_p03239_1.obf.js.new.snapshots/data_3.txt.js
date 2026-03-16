function __STRING_ARRAY__() {
  var _0x98a8d4 = ["614428BruOSj", "split", "stdin", "log", "2821zvVlmy", "64834yIHIzC", "562836aVwgKf", "7605064PWgNbV", "2712vEYmkA", "min", "163989PElMpl", "close", "createInterface", "5uxoddt", "3002DYblTQ", "map", "2080Abcpqk", "3hXaiLy", "TLE", "readline"];
  __STRING_ARRAY__ = function () {
    return _0x98a8d4;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("3hXaiLy") / 1 * (-parseInt("3002DYblTQ") / 2) + parseInt("562836aVwgKf") / 3 + -parseInt("614428BruOSj") / 4 * (parseInt("5uxoddt") / 5) + -parseInt("2712vEYmkA") / 6 * (-parseInt("2821zvVlmy") / 7) + -parseInt("7605064PWgNbV") / 8 + -parseInt("163989PElMpl") / 9 + parseInt("2080Abcpqk") / 10 * (parseInt("64834yIHIzC") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 477762);
var lines = [];
function __DECODE_0__(XSAVyi, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 138;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XSAVyi, key);
}
var result = Infinity;
var readline = require("readline");
var rl = readline["createInterface"]({
  input: process["stdin"],
  output: process.stdout
});
rl.on("line", function (x) {
  lines.push(x);
});
rl.on("close", function () {
  var N = Number(lines[0]["split"](" ")[0]);
  var T = Number(lines[0]["split"](" ")[1]);
  lines.shift();
  var array = lines.map(value => value["split"](" ")["map"](value => Number(value)));
  for (var i of array) {
    if (i[1] <= T) {
      result = Math["min"](result, i[0]);
    }
  }
  if (result !== Infinity) {
    console["log"](result);
  } else {
    console.log("TLE");
  }
});
