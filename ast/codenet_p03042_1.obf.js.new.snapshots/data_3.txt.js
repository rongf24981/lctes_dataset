function __DECODE_0__(RYMKkg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 500;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RYMKkg, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("475881Fakvbf") / 1 + -parseInt("1264024HuCZvc") / 2 * (-parseInt("3jbpJWk") / 3) + parseInt("7144LTZZva") / 4 * (-parseInt("670NnhHUJ") / 5) + -parseInt("6LOpaIv") / 6 * (parseInt("10763221gaQUfI") / 7) + -parseInt("14001224DHTquJ") / 8 + parseInt("2622717pJYTAB") / 9 + parseInt("39618640UYAuPz") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 882328);
function __STRING_ARRAY__() {
  var _0x54f242 = ["/dev/stdin", "39618640UYAuPz", "log", "YYMM", "14001224DHTquJ", "2622717pJYTAB", "MMYY", "670NnhHUJ", "utf8", "475881Fakvbf", "3jbpJWk", "1264024HuCZvc", "readFileSync", "6LOpaIv", "charAt", "7144LTZZva", "10763221gaQUfI"];
  __STRING_ARRAY__ = function () {
    return _0x54f242;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  var a = parseInt(input["charAt"](0) + input["charAt"](1));
  var b = parseInt(input["charAt"](2) + input["charAt"](3));
  var r = 0;
  if (a >= 13 || a == 0) {
    r = 1;
  }
  if (b >= 13 || b == 0) {
    r = 2;
  }
  if (a >= 1 && a <= 12 && b >= 1 && b <= 12) {
    r = 3;
  }
  if (a >= 13 && b >= 13 || a >= 13 && b == 0 || a == 0 && b >= 13 || a == 0 && b == 0) {
    r = 4;
  }
  if (r == 1) {
    console.log("YYMM");
  }
  if (r == 2) {
    console["log"]("MMYY");
  }
  if (r == 3) {
    console["log"]("AMBIGUOUS");
  }
  if (r == 4) {
    console.log("NA");
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
