function __DECODE_0__(CBxCGG, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 120;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CBxCGG, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("41iNLBPk") / 1 * (parseInt("8278ywbicN") / 2) + parseInt("3702TsFTeT") / 3 * (parseInt("1108fTqfLg") / 4) + -parseInt("23245eBtqQz") / 5 * (-parseInt("36XmJVNt") / 6) + -parseInt("2447354nxaHqc") / 7 + parseInt("2636624jRhyOh") / 8 + -parseInt("3645342lTLxam") / 9 + -parseInt("385790jDrPFV") / 10 * (-parseInt("55iRziXG") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 307224);
function Main(input) {
  var input = input.split("\n");
  const num = input[0];
  const arr = input[1]["split"](" ");
  var a = 1;
  var b = 0;
  arr["forEach"](i => a *= i);
  for (var i = 0; i < arr.length; i++) {
    b += a / arr[i];
  }
  console.log(a / b);
}
function __STRING_ARRAY__() {
  var _0xb6a3ce = ["2636624jRhyOh", "41iNLBPk", "8278ywbicN", "36XmJVNt", "385790jDrPFV", "3702TsFTeT", "2447354nxaHqc", "utf8", "forEach", "23245eBtqQz", "split", "1108fTqfLg", "3645342lTLxam", "55iRziXG"];
  __STRING_ARRAY__ = function () {
    return _0xb6a3ce;
  };
  return __STRING_ARRAY__();
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
