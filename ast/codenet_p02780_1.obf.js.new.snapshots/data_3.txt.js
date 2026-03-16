'use strict';

function __DECODE_0__(rssypR, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 203;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rssypR, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("185102gnCMmx") / 1 + -parseInt("466oRZZKI") / 2 * (parseInt("5997gvoZSS") / 3) + -parseInt("43808FMZgaY") / 4 + -parseInt("531900oaKxiu") / 5 + -parseInt("1507374EWuepP") / 6 + -parseInt("1644902PaOnya") / 7 + parseInt("9217576oMDrLN") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 267985);
const fact = n => {
  if (n === 1) {
    1;
  }
  return n + fact(n - 1);
};
function Main(input) {
  input = input["trim"]().split("\n");
  const array = input[0]["split"](" ")["map"](s => parseInt(s));
  const N = array[0];
  const K = array[1];
  let A = input[1].split(" ")["map"](s => parseInt(s));
  let dp = {};
  for (let i = 0; i < N; ++i) {
    const a = A[i];
    if (dp[a]) {
      continue;
    }
    let tmp = 0;
    for (let j = a; j > 0; --j) {
      tmp += j;
    }
    dp[a] = tmp;
  }
  let result = 0;
  for (let i = 0; i < N - (K - 1); ++i) {
    let total = 0;
    for (let j = i; j < i + K; ++j) {
      total += dp[A[j]] * 1 / A[j];
    }
    result = Math["max"](total, result);
  }
  console.log(result["toFixed"](12));
}
function __STRING_ARRAY__() {
  const _0x42b174 = ["1644902PaOnya", "9217576oMDrLN", "531900oaKxiu", "readFileSync", "toFixed", "5997gvoZSS", "466oRZZKI", "max", "split", "map", "43808FMZgaY", "185102gnCMmx", "1507374EWuepP", "utf8", "trim"];
  __STRING_ARRAY__ = function () {
    return _0x42b174;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
