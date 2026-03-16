function __STRING_ARRAY__() {
  var _0x579fe9 = ["236885qbTyIO", "split", "pre-meiji", "50NSkwug", "utf8", "showa", "2154640Mvvjrp", "635012xCHyZb", "readFileSync", "log", "/dev/stdin", "map", "281070tkqJpF", "taisho", "84930EYSFgT", "386708JqOWIb", "meiji", "5178uYGxlG", "trim", "heisei"];
  __STRING_ARRAY__ = function () {
    return _0x579fe9;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("281070tkqJpF") / 1 + parseInt("50NSkwug") / 2 * (parseInt("5178uYGxlG") / 3) + parseInt("386708JqOWIb") / 4 + -parseInt("236885qbTyIO") / 5 + -parseInt("84930EYSFgT") / 6 + parseInt("635012xCHyZb") / 7 + parseInt("2154640Mvvjrp") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 157271);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]();
var lines = input["split"]("\n");
var line;
function __DECODE_0__(EcJnou, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 240;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EcJnou, key);
}
while (line = lines.shift()) {
  var arr = line.split(" ")["map"](function (n) {
    return +n;
  });
  var year = arr[0];
  var month = arr[1];
  var day = arr[2];
  var era = "";
  var today = new Date(year, month - 1, day);
  if (today < new Date(1868, 8, 8)) {
    era = "pre-meiji";
  } else if (today < new Date(1912, 6, 30)) {
    era = "meiji";
    year -= 1867;
  } else if (today < new Date(1926, 11, 25)) {
    era = "taisho";
    year -= 1911;
  } else if (today < new Date(1989, 0, 8)) {
    era = "showa";
    year -= 1925;
  } else {
    era = "heisei";
    year -= 1988;
  }
  if (era == "pre-meiji") {
    console.log("pre-meiji");
    continue;
  }
  console["log"](era, year, month, day);
}
