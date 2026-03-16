'use strict';

function __DECODE_0__(bxcyRF, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 332;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bxcyRF, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("149287Qtldnx") / 1 * (-parseInt("2HTPJTc") / 2) + -parseInt("15WltMOQ") / 3 * (-parseInt("78304pSAePl") / 4) + parseInt("885AKMGwr") / 5 * (-parseInt("10350LTtVDG") / 6) + -parseInt("1263227tQrWus") / 7 + -parseInt("1943336GVzLsf") / 8 + parseInt("18RSCoyJ") / 9 * (parseInt("659240lWAoUW") / 10) + parseInt("5547047vRYioA") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 154589);
function __STRING_ARRAY__() {
  const _0x2baa5e = ["1263227tQrWus", "5547047vRYioA", "/dev/stdin", "885AKMGwr", "UNRESTORABLE", "2HTPJTc", "length", "18RSCoyJ", "join", "78304pSAePl", "149287Qtldnx", "15WltMOQ", "10350LTtVDG", "1943336GVzLsf", "log", "split", "659240lWAoUW"];
  __STRING_ARRAY__ = function () {
    return _0x2baa5e;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  input = input.split(/\n/);
  let S = input[0]["split"]("");
  const T = input[1]["split"]("");
  const us = "UNRESTORABLE";
  for (let i = S["length"] - T.length; i >= 0; i--) {
    let x = 0;
    for (let j = 0; j < T["length"]; j++) {
      if (S[i + j] == T[j] || S[i + j] == "?") {} else {
        x++;
        continue;
      }
    }
    if (x > 0) {
      continue;
    }
    for (let k = 0; k < T["length"]; k++) {
      S[i + k] = T[k];
    }
    for (let i = 0; i < S["length"]; i++) {
      S[i] = S[i] == "?" ? "a" : S[i];
    }
    console["log"](S = S["join"](""));
    return;
  }
  console["log"](us);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
