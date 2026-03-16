function __STRING_ARRAY__() {
  var _0x427ea0 = ["3594OWDSou", "/dev/stdin", "1514660idIiZd", "1255zYHKjk", "33cSEOfG", "360932etEgGV", "trim", "map", "369705XSfWeL", "log", "readFileSync", "utf8", "45kaVOXq", "91708RPejLH", "431541qFwKbF", "1550810epvWdH", "max", "168drGaZQ", "88kpgVgG"];
  __STRING_ARRAY__ = function () {
    return _0x427ea0;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(cRFvdj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 191;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(cRFvdj, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("431541qFwKbF") / 1 + parseInt("1514660idIiZd") / 2 + parseInt("33cSEOfG") / 3 * (parseInt("91708RPejLH") / 4) + -parseInt("1255zYHKjk") / 5 * (parseInt("3594OWDSou") / 6) + -parseInt("369705XSfWeL") / 7 * (parseInt("88kpgVgG") / 8) + -parseInt("45kaVOXq") / 9 * (parseInt("1550810epvWdH") / 10) + parseInt("360932etEgGV") / 11 * (parseInt("168drGaZQ") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 393717);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]().split(" ")["map"](Number);
var max = Math["max"](...arr);
console["log"](["A", "B", "C"][arr.indexOf(max)]);
