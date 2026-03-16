(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("554051upDLFI") / 1 * (-parseInt("2tBhDSy") / 2) + -parseInt("3QbppIw") / 3 * (parseInt("1723672iFfkho") / 4) + parseInt("4976810aASKOD") / 5 + -parseInt("7922664LOREGL") / 6 + parseInt("544306IfOXUd") / 7 * (-parseInt("16jhTmle") / 8) + parseInt("5843718XJBuNN") / 9 + -parseInt("3110hlhYXu") / 10 * (-parseInt("18062WNkXGP") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 802499);
function __DECODE_0__(GlcFjO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 478;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GlcFjO, key);
}
function main(input) {
  var R = input[0] - 0;
  if (R < 1200) {
    console["log"]("ABC");
  } else if (R < 2800) {
    console["log"]("ARC");
  } else {
    console["log"]("AGC");
  }
}
function __STRING_ARRAY__() {
  var _0x483118 = ["3110hlhYXu", "log", "AGC", "ABC", "split", "18062WNkXGP", "4976810aASKOD", "ARC", "7922664LOREGL", "2tBhDSy", "trim", "3QbppIw", "5843718XJBuNN", "16jhTmle", "1723672iFfkho", "readFileSync", "554051upDLFI", "544306IfOXUd"];
  __STRING_ARRAY__ = function () {
    return _0x483118;
  };
  return __STRING_ARRAY__();
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]()["split"]("\n"));
