(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("121370KknPCr") / 1 + -parseInt("12860eOqVHC") / 2 * (parseInt("72qytgjq") / 3) + parseInt("1105208DfaVzC") / 4 + parseInt("207925NFlrAS") / 5 * (-parseInt("48YZkqtS") / 6) + parseInt("959063RpmFWG") / 7 + parseInt("24rKIZVY") / 8 * (parseInt("869499SaYutw") / 9) + -parseInt("1591000KLuULL") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 178414);
function Main(s) {
  s = s["split"](" ")["map"](a => +a);
  var ans = "x";
  if (s[0] + s[1] === 15) {
    ans = "+";
  }
  if (s[0] * s[1] === 15) {
    ans = "*";
  }
  console["log"](ans);
}
function __STRING_ARRAY__() {
  var _0x49bd9d = ["72qytgjq", "log", "24rKIZVY", "959063RpmFWG", "207925NFlrAS", "/dev/stdin", "121370KknPCr", "48YZkqtS", "utf8", "12860eOqVHC", "869499SaYutw", "map", "1105208DfaVzC", "1591000KLuULL", "split", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x49bd9d;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(vYViih, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 411;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vYViih, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
