(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("138tLNYiz") / 1 * (-parseInt("2222mLPOpp") / 2) + -parseInt("267oJOJRB") / 3 * (-parseInt("48788pUJTdg") / 4) + -parseInt("280435RJYPsz") / 5 * (-parseInt("42oHLFaW") / 6) + -parseInt("5157530xcvUAk") / 7 + -parseInt("3400088KzlpBB") / 8 + -parseInt("8671788JRmzMu") / 9 + parseInt("2812990SwcutF") / 10 * (parseInt("66MPwaoS") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 887285);
function __STRING_ARRAY__() {
  const _0x26ef77 = ["267oJOJRB", "utf8", "trim", "48788pUJTdg", "42oHLFaW", "66MPwaoS", "5157530xcvUAk", "8671788JRmzMu", "3400088KzlpBB", "findIndex", "2222mLPOpp", "280435RJYPsz", "/dev/stdin", "2812990SwcutF", "log", "readFileSync", "138tLNYiz"];
  __STRING_ARRAY__ = function () {
    return _0x26ef77;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  const idx = input["trim"]().split(" ").map(el => parseInt(el, 10))["findIndex"](el => el === 0);
  console["log"](idx + 1);
}
function __DECODE_0__(HlUsCF, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 213;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HlUsCF, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
