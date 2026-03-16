function __STRING_ARRAY__() {
  var _0x1bacd5 = ["1121730kHDhHJ", "2098938clToCc", "3QhDLlA", "ceil", "max", "54SLRWCd", "516610AdfNIU", "21575850hitbFt", "7RvQOMO", "1984690njkGSy", "readFileSync", "2532316jTSxKS", "683976EZLPsz", "split", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x1bacd5;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1121730kHDhHJ") / 1 + -parseInt("516610AdfNIU") / 2 * (parseInt("3QhDLlA") / 3) + parseInt("2532316jTSxKS") / 4 + parseInt("1984690njkGSy") / 5 + -parseInt("2098938clToCc") / 6 * (parseInt("7RvQOMO") / 7) + parseInt("683976EZLPsz") / 8 * (-parseInt("54SLRWCd") / 9) + parseInt("21575850hitbFt") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 944762);
function __DECODE_0__(DvPDVy, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 172;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DvPDVy, key);
}
function Main(input) {
  TT = 0;
  AA = 0;
  input = input["split"]("\n");
  N = input[0];
  for (i = 1; i <= N; i++) {
    tmp = input[i].split(" ");
    T = tmp[0] * 1;
    A = tmp[1] * 1;
    if (TT <= T && AA <= A) {
      TT = T;
      AA = A;
    } else {
      ratioT = TT / T;
      ratioA = AA / A;
      ratio = Math["ceil"](Math["max"](ratioT, ratioA));
      TT = T * ratio;
      AA = A * ratio;
    }
  }
  console.log(TT + AA);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
