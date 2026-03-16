(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1117933wbpVdg") / 1 + parseInt("908isKDEv") / 2 * (parseInt("11274nMUsoK") / 3) + -parseInt("3014076lzRfZf") / 4 + -parseInt("797845rRueLj") / 5 * (-parseInt("36MkPAEJ") / 6) + -parseInt("7rJrXJa") / 7 * (-parseInt("11440656LZyULI") / 8) + parseInt("127872wcUQzC") / 9 + parseInt("10vnwgoZ") / 10 * (-parseInt("14160212ZLdGXw") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 949092);
function __DECODE_0__(vhBHci, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 427;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vhBHci, key);
}
const main = input => {
  var d = input[1]["split"](" ")["map"](p => parseInt(p, 10))["sort"]((p, q) => p > q ? 1 : -1);
  console["log"](d[d["length"] / 2] - d[d["length"] / 2 - 1]);
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8").split("\n"));
function __STRING_ARRAY__() {
  const _0x35da73 = ["sort", "map", "11274nMUsoK", "length", "utf8", "7rJrXJa", "split", "127872wcUQzC", "908isKDEv", "10vnwgoZ", "1117933wbpVdg", "797845rRueLj", "3014076lzRfZf", "11440656LZyULI", "log", "readFileSync", "36MkPAEJ", "14160212ZLdGXw"];
  __STRING_ARRAY__ = function () {
    return _0x35da73;
  };
  return __STRING_ARRAY__();
}
