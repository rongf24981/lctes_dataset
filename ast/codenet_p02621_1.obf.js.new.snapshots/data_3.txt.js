function __DECODE_0__(PzjGXS, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 174;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PzjGXS, key);
}
function __STRING_ARRAY__() {
  const _0x49b412 = ["455VBPsKA", "2050nIcQWc", "659271CRMlyC", "16uCXudn", "utf8", "8328015ajUbAv", "11RufUVO", "log", "1808554TwWVYd", "readFileSync", "48632CoNpjZ", "1220607fIZLVf", "462246FiAmyy", "5VONCXL", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x49b412;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1220607fIZLVf") / 1 + -parseInt("1808554TwWVYd") / 2 + parseInt("659271CRMlyC") / 3 * (parseInt("16uCXudn") / 4) + parseInt("5VONCXL") / 5 * (parseInt("462246FiAmyy") / 6) + parseInt("455VBPsKA") / 7 * (parseInt("48632CoNpjZ") / 8) + -parseInt("8328015ajUbAv") / 9 + parseInt("2050nIcQWc") / 10 * (-parseInt("11RufUVO") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 741994);
const input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
(input => {
  const a = input - 0;
  console["log"](a + a * a + a * a * a);
})(input);
