'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("150434luwtHG") / 1 * (-parseInt("16zhcrHk") / 2) + parseInt("1989uIpJAv") / 3 * (parseInt("40oUMlKW") / 4) + -parseInt("85WPwThb") / 5 * (-parseInt("206916wJIRxF") / 6) + parseInt("389333bsitps") / 7 * (parseInt("184gvWUJK") / 8) + parseInt("1963701LbpiGn") / 9 * (parseInt("70rZeiKM") / 10) + -parseInt("21160194MzsZQG") / 11 + -parseInt("20462772fRiqmo") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 974039);
function main(input) {
  const N = parseInt(input);
  let distance = N - 1;
  for (let a = 2; a <= Math["sqrt"](N); ++a) {
    let b = N / a;
    if (Number["isInteger"](b) && a + b - 2 < distance) {
      distance = a + b - 2;
    }
  }
  console["log"](distance);
}
function __DECODE_0__(hHcZEu, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 101;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hHcZEu, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  const _0x4e9b17 = ["150434luwtHG", "sqrt", "85WPwThb", "isInteger", "utf8", "70rZeiKM", "/dev/stdin", "40oUMlKW", "readFileSync", "16zhcrHk", "log", "389333bsitps", "1963701LbpiGn", "21160194MzsZQG", "206916wJIRxF", "184gvWUJK", "20462772fRiqmo", "1989uIpJAv"];
  __STRING_ARRAY__ = function () {
    return _0x4e9b17;
  };
  return __STRING_ARRAY__();
}
