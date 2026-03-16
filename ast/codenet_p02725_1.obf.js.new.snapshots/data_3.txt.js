'use strict';

function __DECODE_0__(RRnKiJ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 426;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RRnKiJ, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("103929NQmvVa") / 1 + -parseInt("1346062NOBlad") / 2 + -parseInt("2289072zvHwTF") / 3 + -parseInt("4iESDOJ") / 4 * (parseInt("2305815RSBflk") / 5) + -parseInt("2934108xbcGDX") / 6 + -parseInt("28ugwZEN") / 7 * (-parseInt("330512yeEIGz") / 8) + parseInt("25032897bqLWVD") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 456524);
function main(input) {
  const args = input["split"]("\n")[0];
  const a = input.split("\n")[1];
  let as = a["split"](" ");
  const K = Number(args["split"](" ")[0]);
  const N = Number(args["split"](" ")[1]);
  let ans = 0;
  const kh = Math["floor"](K / 2);
  for (let i = 0; i < N; i++) {
    ans += Math["abs"](0 - as[i]) > Math.abs(kh - as[i]) ? Math["abs"](kh - as[i]) : Math.abs(0 - as[i]);
  }
  console.log(ans);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  const _0x247cf8 = ["25032897bqLWVD", "4iESDOJ", "330512yeEIGz", "2934108xbcGDX", "28ugwZEN", "1346062NOBlad", "2305815RSBflk", "2289072zvHwTF", "103929NQmvVa", "floor", "utf8", "abs", "split", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x247cf8;
  };
  return __STRING_ARRAY__();
}
