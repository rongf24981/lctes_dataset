function __DECODE_0__(hRsNBc, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 490;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hRsNBc, key);
}
function __STRING_ARRAY__() {
  var _0x2bbd90 = ["12113NHOekG", "310724KAlsPS", "158ZKayPL", "8hXkClB", "/dev/stdin", "5450346dSRKYQ", "510yfwnqq", "649847WELwFZ", "readFileSync", "10170713nvuhqD", "5086494ddAgtq", "forEach", "15EiSVqY", "4006974wVPjly", "abs"];
  __STRING_ARRAY__ = function () {
    return _0x2bbd90;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("12113NHOekG") / 1 * (-parseInt("158ZKayPL") / 2) + -parseInt("4006974wVPjly") / 3 + -parseInt("310724KAlsPS") / 4 * (-parseInt("15EiSVqY") / 5) + -parseInt("5086494ddAgtq") / 6 + parseInt("10170713nvuhqD") / 7 * (parseInt("8hXkClB") / 8) + -parseInt("5450346dSRKYQ") / 9 + parseInt("510yfwnqq") / 10 * (parseInt("649847WELwFZ") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 953001);
function Main(input) {
  input = input.split(/\s/);
  input["forEach"](function (e, i, a) {
    a[i] = Number(a[i]);
  });
  var ans = "No";
  if (Math["abs"](input[0] - input[2]) <= input[3]) {
    ans = "Yes";
  }
  if (Math.abs(input[0] - input[1]) <= input[3] && Math["abs"](input[1] - input[2]) <= input[3]) {
    ans = "Yes";
  }
  console.log(ans);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
