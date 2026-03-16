(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("76320CUIrtA") / 1 + -parseInt("326fNRRRy") / 2 * (parseInt("13962BlyKhJ") / 3) + parseInt("1221236QMJczF") / 4 + -parseInt("25Isovxp") / 5 * (-parseInt("448482JXEPBv") / 6) + -parseInt("1321341SbASCE") / 7 + parseInt("7017328Rsirud") / 8 + -parseInt("1939725aYOfNj") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 469640);
function __DECODE_0__(rcOwPX, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 332;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rcOwPX, key);
}
function Main(input) {
  var k = parseInt(input["split"]("\n")[0], 10);
  var a = 0;
  var b = 0;
  for (i = 1; i <= k; i++) {
    if (i % 2 == 0) {
      a++;
    } else {
      b++;
    }
  }
  console["log"](a * b);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0xc68cb4 = ["25Isovxp", "13962BlyKhJ", "1321341SbASCE", "7017328Rsirud", "/dev/stdin", "split", "readFileSync", "1221236QMJczF", "448482JXEPBv", "326fNRRRy", "log", "1939725aYOfNj", "76320CUIrtA"];
  __STRING_ARRAY__ = function () {
    return _0xc68cb4;
  };
  return __STRING_ARRAY__();
}
