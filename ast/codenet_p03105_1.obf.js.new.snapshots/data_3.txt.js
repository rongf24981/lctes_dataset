function __DECODE_0__(bVpHuJ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 209;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bVpHuJ, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("979111snCanK") / 1 + -parseInt("1085594ZPrAzn") / 2 * (-parseInt("3IdARIG") / 3) + parseInt("4wXGkYj") / 4 * (parseInt("2582200LFnwEV") / 5) + -parseInt("5654532pSfMsM") / 6 + -parseInt("254408rqYlBH") / 7 + -parseInt("8YQdyzS") / 8 * (-parseInt("1648827IWkDlL") / 9) + -parseInt("7139100bYYRNe") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 528875);
function __STRING_ARRAY__() {
  const _0x238556 = ["1085594ZPrAzn", "split", "7139100bYYRNe", "readFileSync", "log", "1648827IWkDlL", "254408rqYlBH", "2582200LFnwEV", "3IdARIG", "979111snCanK", "8YQdyzS", "map", "/dev/stdin", "5654532pSfMsM", "4wXGkYj"];
  __STRING_ARRAY__ = function () {
    return _0x238556;
  };
  return __STRING_ARRAY__();
}
const main = input => {
  const In = input["split"](" ")["map"](n => Number(n));
  const o1 = In[0] > In[1] ? 0 : In[1] / In[0];
  console["log"](o1 >= In[2] ? In[2] : o1);
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
