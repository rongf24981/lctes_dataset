function __DECODE_0__(SgZuxn, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 217;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SgZuxn, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("47514DxaoZt") / 1 + -parseInt("776830DLsIIM") / 2 + -parseInt("361647SuKbDb") / 3 + parseInt("219120CMJCZU") / 4 + parseInt("15msigkZ") / 5 * (parseInt("42906bqAVAe") / 6) + -parseInt("7JIovYR") / 7 * (parseInt("1666840apOnTz") / 8) + -parseInt("9jGGoIT") / 9 * (-parseInt("8441270fsRcYK") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 250555);
function Main(input) {
  input = input["split"]("\n");
  var k = 0;
  while (1) {
    input[k] = input[k]["split"](" ");
    var m = parseInt(input[k][0], 10);
    var nmin = parseInt(input[k][1], 10);
    var nmax = parseInt(input[k++][2], 10);
    if (m == 0 && nmin == 0 && nmax == 0) {
      break;
    }
    var maxg = 0;
    var maxn = 0;
    var p = [];
    for (var i = 0; i < m; i++) {
      p[i] = parseInt(input[k++], 10);
    }
    for (var i = nmin - 1; i < nmax; i++) {
      if (p[i] - p[i + 1] >= maxg) {
        maxg = p[i] - p[i + 1];
        maxn = i;
      }
    }
    console["log"](maxn + 1);
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x39e5b6 = ["1666840apOnTz", "7JIovYR", "readFileSync", "9jGGoIT", "776830DLsIIM", "47514DxaoZt", "split", "utf8", "361647SuKbDb", "8441270fsRcYK", "42906bqAVAe", "/dev/stdin", "219120CMJCZU", "15msigkZ", "log"];
  __STRING_ARRAY__ = function () {
    return _0x39e5b6;
  };
  return __STRING_ARRAY__();
}
