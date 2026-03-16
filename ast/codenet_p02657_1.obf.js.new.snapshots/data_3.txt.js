function __STRING_ARRAY__() {
  const _0x468646 = ["150936UhIqHW", "26CaQXms", "17288iraiSF", "map", "/dev/stdin", "955348WGuaYs", "trim", "6487830DTDdcP", "log", "4017339WmfslZ", "299125BUzSvV", "20euXSMe", "21461100zwVLxC", "readFileSync", "2191ltleCf", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x468646;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("299125BUzSvV") / 1 + parseInt("26CaQXms") / 2 * (-parseInt("150936UhIqHW") / 3) + parseInt("955348WGuaYs") / 4 * (parseInt("20euXSMe") / 5) + -parseInt("6487830DTDdcP") / 6 + parseInt("2191ltleCf") / 7 * (-parseInt("17288iraiSF") / 8) + -parseInt("4017339WmfslZ") / 9 + parseInt("21461100zwVLxC") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 542458);
function __DECODE_0__(ahWvzQ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 358;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ahWvzQ, key);
}
const main = stdin => {
  const [A, B] = stdin["trim"]().split(" ")["map"](x => parseInt(x));
  console["log"](A * B);
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
