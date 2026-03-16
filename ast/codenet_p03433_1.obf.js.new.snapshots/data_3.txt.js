function __STRING_ARRAY__() {
  var _0x2ed309 = ["utf8", "161075HsUoSN", "3885152kiqONw", "6889860TQsRUO", "/dev/stdin", "split", "236lDqotc", "5pkCUtY", "14RAVgpa", "9061479uochRh", "log", "314234BIXBta", "readFileSync", "8371SXUAKO", "85992bEzWrw", "25899bHzUVD", "10ymEfBS", "Yes"];
  __STRING_ARRAY__ = function () {
    return _0x2ed309;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("5pkCUtY") / 1 * (parseInt("314234BIXBta") / 2) + -parseInt("25899bHzUVD") / 3 * (parseInt("236lDqotc") / 4) + -parseInt("161075HsUoSN") / 5 + -parseInt("6889860TQsRUO") / 6 + parseInt("14RAVgpa") / 7 * (-parseInt("3885152kiqONw") / 8) + -parseInt("9061479uochRh") / 9 * (parseInt("10ymEfBS") / 10) + -parseInt("8371SXUAKO") / 11 * (-parseInt("85992bEzWrw") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 999750);
function main(input) {
  var line = input["split"]("\n").map(n => parseInt(n, 10));
  while (line[0] > 500) {
    line[0] -= 500;
  }
  if (line[0] <= line[1]) {
    console["log"]("Yes");
  } else {
    console.log("No");
  }
}
function __DECODE_0__(wwKrVw, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 308;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wwKrVw, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
