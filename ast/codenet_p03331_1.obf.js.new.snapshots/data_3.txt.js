function __DECODE_0__(LQtQVg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 481;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LQtQVg, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("820675DXCmYK") / 1 + -parseInt("416SIRjxq") / 2 * (parseInt("6057Ivrxnu") / 3) + -parseInt("4ObuLCC") / 4 * (-parseInt("3672155YRIZpb") / 5) + -parseInt("351042xssxDz") / 6 * (parseInt("7xsiVFE") / 7) + parseInt("8asVeYG") / 8 * (-parseInt("3100077LySTew") / 9) + parseInt("2187870SncAVF") / 10 + -parseInt("4655904gTYmre") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 527717);
function main(input) {
  var digits = input["toString"]()["length"];
  var input = parseInt(input, 10);
  var divisor = Math["pow"](10, digits - 1);
  var arr = [];
  for (var i = 0; i < digits; i++) {
    arr["push"](Math["floor"](input / divisor));
    input = input % divisor;
    divisor /= 10;
  }
  var answer = arr["reduce"]((a, b) => a + b);
  if (answer == 1) {
    answer = 10;
  }
  console["log"](answer);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x4385a8 = ["416SIRjxq", "log", "3672155YRIZpb", "pow", "/dev/stdin", "readFileSync", "351042xssxDz", "4ObuLCC", "floor", "820675DXCmYK", "8asVeYG", "6057Ivrxnu", "push", "utf8", "toString", "3100077LySTew", "4655904gTYmre", "7xsiVFE", "2187870SncAVF", "reduce", "length"];
  __STRING_ARRAY__ = function () {
    return _0x4385a8;
  };
  return __STRING_ARRAY__();
}
