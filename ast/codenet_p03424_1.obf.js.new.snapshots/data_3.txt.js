(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("5884FRHazg") / 1 + -parseInt("1898pAFAPu") / 2 * (parseInt("2847oHtaEY") / 3) + parseInt("2827628kyGgXI") / 4 * (parseInt("5FodJNJ") / 5) + -parseInt("1296LDBdRk") / 6 * (parseInt("28399xwjwCj") / 7) + parseInt("104xnJTSS") / 8 * (parseInt("112581AlquFt") / 9) + -parseInt("1783330slbyqu") / 10 + parseInt("17436672FsHjmj") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 493546);
function __DECODE_0__(xeCBhS, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 268;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xeCBhS, key);
}
function __STRING_ARRAY__() {
  const _0x1a8828 = ["length", "1296LDBdRk", "2827628kyGgXI", "/dev/stdin", "5FodJNJ", "split", "28399xwjwCj", "1783330slbyqu", "104xnJTSS", "112581AlquFt", "5884FRHazg", "log", "17436672FsHjmj", "2847oHtaEY", "1898pAFAPu"];
  __STRING_ARRAY__ = function () {
    return _0x1a8828;
  };
  return __STRING_ARRAY__();
}
function main(s) {
  const set = new Set(s.split("\n")[1]["split"](" "));
  const ans = [...set]["length"] === 4 ? "Four" : "Three";
  console["log"](ans);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
