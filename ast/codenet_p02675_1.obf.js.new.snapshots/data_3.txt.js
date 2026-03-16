function __STRING_ARRAY__() {
  var _0xfabc5b = ["2988933PXJLGT", "2186PLuBDq", "5764899MigUwS", "22789976dNhOzB", "10lEQKae", "log", "utf8", "length", "305uELkqV", "10008819uKTpQy", "1561GjHfXd", "4845652oMnyOF", "8heHJUp", "119652THGgZD", "pon", "hon"];
  __STRING_ARRAY__ = function () {
    return _0xfabc5b;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1561GjHfXd") / 1 * (parseInt("2186PLuBDq") / 2) + parseInt("2988933PXJLGT") / 3 + parseInt("4845652oMnyOF") / 4 + -parseInt("305uELkqV") / 5 * (parseInt("119652THGgZD") / 6) + parseInt("5764899MigUwS") / 7 * (-parseInt("8heHJUp") / 8) + -parseInt("10008819uKTpQy") / 9 * (-parseInt("10lEQKae") / 10) + -parseInt("22789976dNhOzB") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 914153);
function __DECODE_0__(ZBOtjJ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 113;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZBOtjJ, key);
}
function Main(input) {
  input = "" + input + "";
  input = input.substr(input["length"] - 1, 1);
  var d = "";
  if (input == 2 || input == 4 || input == 5 || input == 7 || input == 9) {
    d = "hon";
  }
  if (input == 0 || input == 1 || input == 6 || input == 8) {
    d = "pon";
  }
  if (input == 3) {
    d = "bon";
  }
  console["log"](d);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
