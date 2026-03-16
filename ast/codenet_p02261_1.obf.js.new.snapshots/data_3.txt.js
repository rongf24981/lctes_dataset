'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("428498XosqJE") / 1 + parseInt("1063224ANgQcf") / 2 + parseInt("1236216ieDKCu") / 3 + -parseInt("4MAmASw") / 4 * (parseInt("2590855ihHDWR") / 5) + -parseInt("5298tVAdQz") / 6 * (-parseInt("1883WINNbH") / 7) + parseInt("56PgsvUD") / 8 * (-parseInt("299637rxTgMs") / 9) + parseInt("3051190RysLAG") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 306610);
const main = input => {
  input = input["split"]("\n");
  const N = Number(input[0]);
  const A1 = input[1]["split"](" ");
  const A2 = A1["concat"]();
  bubbleSort(A1, N);
  console["log"](A1.join(" "));
  console.log("Stable");
  selectionSort(A2, N);
  console["log"](A2["join"](" "));
  console["log"](A2.every((v, i) => v === A1[i]) ? "Stable" : "Not stable");
};
function bubbleSort(A, N) {
  for (let i = 0; i < N - 1; ++i) {
    for (let j = N - 1; j >= i + 1; --j) {
      if (Number(A[j - 1][1]) > Number(A[j][1])) {
        const tmp = A[j];
        A[j] = A[j - 1];
        A[j - 1] = tmp;
      }
    }
  }
}
function selectionSort(A, N) {
  for (let i = 0; i < N - 1; ++i) {
    let minj = i;
    for (let j = i; j < N; ++j) {
      if (Number(A[j][1]) < Number(A[minj][1])) {
        minj = j;
      }
    }
    if (i !== minj) {
      const tmp = A[i];
      A[i] = A[minj];
      A[minj] = tmp;
    }
  }
}
function __DECODE_0__(UnpooK, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 434;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UnpooK, key);
}
function __STRING_ARRAY__() {
  const _0x341b0d = ["5298tVAdQz", "concat", "/dev/stdin", "log", "1063224ANgQcf", "Not stable", "299637rxTgMs", "2590855ihHDWR", "3051190RysLAG", "Stable", "4MAmASw", "split", "1883WINNbH", "join", "1236216ieDKCu", "readFileSync", "428498XosqJE", "56PgsvUD"];
  __STRING_ARRAY__ = function () {
    return _0x341b0d;
  };
  return __STRING_ARRAY__();
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
