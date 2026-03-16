(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("275117qIfbvM") / 1 + -parseInt("4PpjpDh") / 2 * (parseInt("1468398xfTuif") / 3) + -parseInt("64832cmHYkP") / 4 + parseInt("2995tadior") / 5 * (-parseInt("7830UkwXzy") / 6) + -parseInt("1051659cqejwX") / 7 * (-parseInt("8PXSikv") / 8) + parseInt("18iXqBJU") / 9 * (parseInt("3914530DbcdEm") / 10) + parseInt("17858962mbmQAb") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 504733);
var table = {
  11: "a",
  12: "b",
  13: "c"
};
function __STRING_ARRAY__() {
  var _0x48dfd4 = ["1468398xfTuif", "split", "log", "17858962mbmQAb", "3914530DbcdEm", "275117qIfbvM", "64832cmHYkP", "replace", "8PXSikv", "1051659cqejwX", "hasOwnProperty", "match", "2995tadior", "18iXqBJU", "/dev/stdin", "7830UkwXzy", "4PpjpDh", "forEach", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x48dfd4;
  };
  return __STRING_ARRAY__();
}
table[14] = "d";
table[15] = "e";
table[21] = "f";
table[22] = "g";
table[23] = "h";
table[24] = "i";
table[25] = "j";
table[31] = "k";
table[32] = "l";
table[33] = "m";
table[34] = "n";
table[35] = "o";
table[41] = "p";
table[42] = "q";
table[43] = "r";
table[44] = "s";
table[45] = "t";
table[51] = "u";
table[52] = "v";
table[53] = "w";
table[54] = "x";
table[55] = "y";
table[61] = "z";
table[62] = ".";
table[63] = "?";
function __DECODE_0__(VInpKs, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 101;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VInpKs, key);
}
table[64] = "!";
table[65] = " ";
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input["replace"](/\n$/, "")["split"]("\n");
Arr["forEach"](function (str) {
  str = str["replace"](/\d\d/g, function (s) {
    if (table["hasOwnProperty"](s)) {
      s = table[s];
    }
    return s;
  });
  if (str["match"](/\d/)) {
    str = "NA";
  }
  console["log"](str);
});
