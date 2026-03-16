'use strict';

function __DECODE_0__(lnPQSp, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 495;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(lnPQSp, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("237357NovKXt") / 1 + parseInt("219600zfKMFI") / 2 + -parseInt("6636meOtdE") / 3 * (-parseInt("2572sVcxwY") / 4) + -parseInt("7133220XRMvJI") / 5 + parseInt("53574nqKaca") / 6 * (-parseInt("1029lJJyXt") / 7) + -parseInt("1433680VaYFfb") / 8 * (parseInt("54uEBVVe") / 9) + parseInt("10mOtdtd") / 10 * (parseInt("30560893NBisYb") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 733269);
const main = arg => {
  arg = arg.trim()["split"]("\n");
  const N = parseInt(arg[0]);
  const A = arg[1]["split"](" ")["map"](n => parseInt(n));
  const totalSum = A["reduce"]((m, n) => m + n);
  let left = A[0];
  let right = totalSum - A[0];
  let answer = Infinity;
  for (let i = 0; i < N - 1; i++) {
    let diff = Math.abs(right - left);
    answer = Math["min"](answer, diff);
    right -= A[parseInt(i) + 1];
    left += A[parseInt(i) + 1];
  }
  console.log(answer);
};
function __STRING_ARRAY__() {
  const _0x33009e = ["readFileSync", "reduce", "1029lJJyXt", "6636meOtdE", "219600zfKMFI", "split", "10mOtdtd", "2572sVcxwY", "30560893NBisYb", "53574nqKaca", "237357NovKXt", "map", "1433680VaYFfb", "7133220XRMvJI", "min", "54uEBVVe"];
  __STRING_ARRAY__ = function () {
    return _0x33009e;
  };
  return __STRING_ARRAY__();
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
