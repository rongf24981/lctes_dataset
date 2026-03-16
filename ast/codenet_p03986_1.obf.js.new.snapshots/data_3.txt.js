(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1HxuAVk") / 1 * (parseInt("342234vArROD") / 2) + parseInt("577287EriYrp") / 3 + -parseInt("4jPqMWl") / 4 * (-parseInt("51675HUkxLQ") / 5) + -parseInt("31908dglqOc") / 6 * (-parseInt("259GlrVJV") / 7) + parseInt("19816RNbxYk") / 8 * (-parseInt("153YkhzPJ") / 9) + parseInt("928510lLgRRp") / 10 + -parseInt("11ekKUYB") / 11 * (parseInt("6067956hQFCbL") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 115726);
function __DECODE_0__(OfolxW, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 225;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OfolxW, key);
}
const Main = input => {
  while (input["indexOf"]("ST") > -1) {
    input = input["replace"](/ST/g, "");
  }
  console.log(input.length);
};
function __STRING_ARRAY__() {
  const _0x29dee6 = ["4jPqMWl", "928510lLgRRp", "readFileSync", "/dev/stdin", "577287EriYrp", "259GlrVJV", "153YkhzPJ", "11ekKUYB", "31908dglqOc", "1HxuAVk", "342234vArROD", "51675HUkxLQ", "19816RNbxYk", "6067956hQFCbL", "indexOf", "replace"];
  __STRING_ARRAY__ = function () {
    return _0x29dee6;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
