(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1151440LPeXmB") / 1 + -parseInt("2354014OjKGJx") / 2 + -parseInt("12cJqVEa") / 3 * (parseInt("1346552oGlbtY") / 4) + parseInt("1058425HYyvgw") / 5 * (-parseInt("42TOOlmC") / 6) + -parseInt("5337262qthNZh") / 7 + parseInt("439600cdfXQC") / 8 + -parseInt("13090941cWnglL") / 9 * (-parseInt("30lLKUas") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 802217);
function __DECODE_0__(LxoXGf, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 406;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LxoXGf, key);
}
console["log"]((args => {
  const [N, M] = args["trim"]()["split"](" ")["map"](v => v - 2);
  return "" + Math.abs(N * M);
})(require("fs")["readFileSync"]("/dev/stdin", "utf8")));
function __STRING_ARRAY__() {
  const _0x1a3756 = ["split", "30lLKUas", "utf8", "/dev/stdin", "log", "1346552oGlbtY", "1058425HYyvgw", "12cJqVEa", "readFileSync", "13090941cWnglL", "439600cdfXQC", "5337262qthNZh", "2354014OjKGJx", "42TOOlmC", "1151440LPeXmB", "trim", "map"];
  __STRING_ARRAY__ = function () {
    return _0x1a3756;
  };
  return __STRING_ARRAY__();
}
