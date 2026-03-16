function __DECODE_0__(ZyBIXS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 412;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZyBIXS, key);
}
function __STRING_ARRAY__() {
  var _0x3bed21 = ["push", "1123969ssFEWO", "188qwAOWE", "42jxTwbi", "13188065AeipzF", "utf8", "382osPKxL", "660BInpyk", "3730490VHYxXW", "12PWwkix", "sort", "9SlyOEA", "length", "readFileSync", "15892jraKWr", "split", "floor", "log", "7459930MjszGN", "/dev/stdin", "2678384ztmfxy"];
  __STRING_ARRAY__ = function () {
    return _0x3bed21;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("382osPKxL") / 1 * (parseInt("188qwAOWE") / 2) + -parseInt("660BInpyk") / 3 * (-parseInt("15892jraKWr") / 4) + -parseInt("3730490VHYxXW") / 5 + parseInt("42jxTwbi") / 6 * (-parseInt("1123969ssFEWO") / 7) + -parseInt("2678384ztmfxy") / 8 + parseInt("9SlyOEA") / 9 * (parseInt("7459930MjszGN") / 10) + -parseInt("13188065AeipzF") / 11 * (-parseInt("12PWwkix") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 578195);
function median(l) {
  return l["sort"]()[Math["floor"](l["length"] / 2)];
}
function Main(input) {
  input = input["split"]("\n");
  N = parseInt(input[0]);
  a = input[1].split(" ");
  m = [];
  for (var i = 0; i < N; i++) {
    for (var j = i + 1; j < N + 1; j++) {
      m["push"](median(a.slice(i, j)));
    }
  }
  console["log"](median(m));
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
