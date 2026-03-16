function __DECODE_0__(CidUAZ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 480;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CidUAZ, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("871994XXokMu") / 1 * (parseInt("2XWKQCy") / 2) + parseInt("1392801DoUxoD") / 3 + -parseInt("4213360JIeavt") / 4 + parseInt("15ooZuMN") / 5 * (parseInt("2544540ivMCtU") / 6) + -parseInt("9353498JcRWvW") / 7 + -parseInt("3680928DDgEhC") / 8 + parseInt("25128639nFSEms") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 806944);
function main(input) {
  input = input["trim"]();
  const a = input["split"](" ")["map"](Number);
  console["log"](a[1] % a[0] == 0 ? a[0] + a[1] : a[1] - a[0]);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  const _0x5368fc = ["3680928DDgEhC", "log", "2XWKQCy", "trim", "1392801DoUxoD", "split", "25128639nFSEms", "15ooZuMN", "/dev/stdin", "4213360JIeavt", "readFileSync", "9353498JcRWvW", "871994XXokMu", "map", "2544540ivMCtU", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x5368fc;
  };
  return __STRING_ARRAY__();
}
