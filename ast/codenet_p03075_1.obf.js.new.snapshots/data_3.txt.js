function __DECODE_0__(YUFVfl, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 418;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YUFVfl, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("554945fUJOgK") / 1 + -parseInt("2634658xSGKGo") / 2 * (parseInt("3ipityO") / 3) + -parseInt("1090636esCHzu") / 4 + parseInt("595XnDwNB") / 5 * (parseInt("31398nYoMIV") / 6) + -parseInt("7qQuZZg") / 7 * (parseInt("647576FDKYIk") / 8) + parseInt("2670471YprlUa") / 9 * (-parseInt("40ENDLPX") / 10) + parseInt("26787662TUphYf") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 755103);
fs = require("fs");
function __STRING_ARRAY__() {
  var _0x4ac1ab = ["31398nYoMIV", "647576FDKYIk", "3ipityO", "40ENDLPX", "554945fUJOgK", "26787662TUphYf", "1090636esCHzu", "log", "2634658xSGKGo", "utf8", "Yay!", "595XnDwNB", "readFileSync", "2670471YprlUa", "7qQuZZg", "split", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x4ac1ab;
  };
  return __STRING_ARRAY__();
}
l = fs["readFileSync"]("/dev/stdin", "utf8")["split"]("\n");
x = [];
for (i = 0; i < 6; i++) {
  x.push(parseInt(l[i]));
}
if (x[4] - x[0] <= x[5]) {
  console.log("Yay!");
} else {
  console["log"](":(");
}
