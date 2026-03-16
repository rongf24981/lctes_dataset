(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("52953UUCJhe") / 1 + parseInt("6EKieHd") / 2 * (parseInt("245103XsalUu") / 3) + -parseInt("433396BLSrOK") / 4 * (-parseInt("5lQnEqr") / 5) + parseInt("6924mBpjGQ") / 6 * (parseInt("1883WWmGTG") / 7) + -parseInt("10216vebqga") / 8 * (-parseInt("342iXkhZN") / 9) + -parseInt("3163080gRhIOp") / 10 + -parseInt("396cVWobc") / 11 * (parseInt("96564dmcTbu") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 159357);
function* main() {
  const N = +(yield);
  let sum = 0;
  for (let k = 1; k <= N; k++) {
    sum += Math["floor"](k * Math.floor(1 + N / k) * Math.floor(N / k) / 2);
  }
  console["log"](sum);
}
const iter = main();
iter["next"]();
require("readline")["createInterface"]({
  input: process["stdin"]
}).on("line", line => iter["next"](line));
function __DECODE_0__(PWbaPq, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 471;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PWbaPq, key);
}
function __STRING_ARRAY__() {
  const _0x167bdf = ["stdin", "3163080gRhIOp", "396cVWobc", "1883WWmGTG", "5lQnEqr", "floor", "6EKieHd", "245103XsalUu", "96564dmcTbu", "10216vebqga", "createInterface", "next", "52953UUCJhe", "line", "6924mBpjGQ", "342iXkhZN", "log", "433396BLSrOK"];
  __STRING_ARRAY__ = function () {
    return _0x167bdf;
  };
  return __STRING_ARRAY__();
}
