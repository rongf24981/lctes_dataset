'use strict';

function __DECODE_0__(seSVvZ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 202;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(seSVvZ, key);
}
function __STRING_ARRAY__() {
  const _0x2b7808 = ["111629DTDJjZ", "24TFnkxE", "14CtKrnk", "sort", "5138276ptiUDO", "30fovTcO", "split", "42NRIoEi", "map", "2145378iTguvd", "readFileSync", "5466TQzejq", "min", "1615896AWMLAq", "/dev/stdin", "utf8", "10KijVnv", "log", "3010BxlRCE", "IMPOSSIBLE", "POSSIBLE", "1004201DEINMs", "647100kWhkHI", "4RZfptO"];
  __STRING_ARRAY__ = function () {
    return _0x2b7808;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("111629DTDJjZ") / 1 * (-parseInt("10KijVnv") / 2) + -parseInt("2145378iTguvd") / 3 * (-parseInt("4RZfptO") / 4) + parseInt("3010BxlRCE") / 5 * (-parseInt("5466TQzejq") / 6) + -parseInt("14CtKrnk") / 7 * (parseInt("1615896AWMLAq") / 8) + -parseInt("647100kWhkHI") / 9 * (-parseInt("30fovTcO") / 10) + parseInt("1004201DEINMs") / 11 * (-parseInt("24TFnkxE") / 12) + parseInt("5138276ptiUDO") / 13 * (parseInt("42NRIoEi") / 14);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 423459);
const getGcd = (a, b) => {
  if (a) {
    return getGcd(b % a, a);
  } else {
    return b;
  }
};
const main = arg => {
  arg = arg.trim()["split"]("\n");
  const N = parseInt(arg[0]["split"](" ")[0]);
  const K = parseInt(arg[0].split(" ")[1]);
  let A = arg[1]["split"](" ")["map"](n => parseInt(n))["sort"]((a, b) => b - a);
  const max = A[0];
  let gcd = Infinity;
  if (max < K) {
    console["log"]("IMPOSSIBLE");
    return;
  }
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      gcd = Math["min"](gcd, getGcd(A[i], A[j]));
    }
  }
  console["log"](K % gcd === 0 ? "POSSIBLE" : "IMPOSSIBLE");
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
