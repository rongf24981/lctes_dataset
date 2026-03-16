(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1lefkTc") / 1 * (-parseInt("541018KbQHHN") / 2) + -parseInt("3rKOpsR") / 3 * (parseInt("643856pCDUET") / 4) + parseInt("3253505tXDCnN") / 5 + parseInt("12WOdTtG") / 6 * (parseInt("4154451WufvIB") / 7) + -parseInt("6046264nBaRnh") / 8 + parseInt("2090709XPRLDb") / 9 * (parseInt("10gfZQjh") / 10) + -parseInt("341TADypx") / 11 * (parseInt("301500pTStcY") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 644875);
function __STRING_ARRAY__() {
  const _0x3027d2 = ["4154451WufvIB", "3rKOpsR", "10gfZQjh", "utf8", "3253505tXDCnN", "643856pCDUET", "341TADypx", "log", "readFileSync", "301500pTStcY", "2090709XPRLDb", "6046264nBaRnh", "1lefkTc", "12WOdTtG", "541018KbQHHN"];
  __STRING_ARRAY__ = function () {
    return _0x3027d2;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(LBPxhy, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 194;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LBPxhy, key);
}
function Main(input) {
  const hyaku = Number(input) % 1000;
  console["log"](hyaku === 0 ? 0 : 1000 - hyaku);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
