(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("10axyVxq") / 1 * (parseInt("164648nnhTix") / 2) + -parseInt("1500003QEuiUn") / 3 + -parseInt("4063716FwvRPK") / 4 + -parseInt("20SQtxEH") / 5 * (-parseInt("1532484mhZvRK") / 6) + parseInt("2096675ujGOhc") / 7 * (-parseInt("16MDdrDf") / 8) + -parseInt("1997010sNZNjz") / 9 * (parseInt("20cTqeNZ") / 10) + -parseInt("2783QYYOoJ") / 11 * (-parseInt("58188PPeVRi") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 512933);
function __DECODE_0__(Gmwdjy, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 433;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Gmwdjy, key);
}
function Main(input) {
  input = input["split"]("\n");
  T = input[0];
  var len = T["length"];
  var p = len % 2;
  q = Math["floor"](len / 2);
  cnt = 0;
  i = 0;
  for (i = 0; i < q; i++) {
    if (T["substr"](i, 1) == T.substr(len - 1 - i, 1)) {
      cnt = cnt + 0;
    } else {
      cnt++;
    }
  }
  console["log"](cnt);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x4d6795 = ["58188PPeVRi", "1997010sNZNjz", "2096675ujGOhc", "readFileSync", "length", "10axyVxq", "substr", "1532484mhZvRK", "2783QYYOoJ", "1500003QEuiUn", "split", "floor", "16MDdrDf", "utf8", "log", "4063716FwvRPK", "20cTqeNZ", "164648nnhTix", "20SQtxEH"];
  __STRING_ARRAY__ = function () {
    return _0x4d6795;
  };
  return __STRING_ARRAY__();
}
