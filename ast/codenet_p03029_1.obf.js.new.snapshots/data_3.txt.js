function __STRING_ARRAY__() {
  var _0x500d3c = ["1933757kAPugq", "trim", "shift", "3965550cDsTLO", "log", "map", "/dev/stdin", "3956832eUEZnx", "1465990oUVgHi", "2481OfUtSM", "utf8", "1145454CHKFWH", "floor", "938692FiCAqW", "4376ntLmrp", "split"];
  __STRING_ARRAY__ = function () {
    return _0x500d3c;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(PmNSFO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 271;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PmNSFO, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("938692FiCAqW") / 1 + -parseInt("1145454CHKFWH") / 2 + parseInt("2481OfUtSM") / 3 * (parseInt("4376ntLmrp") / 4) + parseInt("1465990oUVgHi") / 5 + parseInt("3965550cDsTLO") / 6 + -parseInt("1933757kAPugq") / 7 + parseInt("3956832eUEZnx") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 565795);
(stdin => {
  var lines = stdin["trim"]().split("\n");
  var inputs = lines["shift"]()["split"](" ")["map"](Number);
  console["log"](Math["floor"]((inputs[0] * 3 + inputs[1]) / 2));
})(require("fs").readFileSync("/dev/stdin", "utf8"));
