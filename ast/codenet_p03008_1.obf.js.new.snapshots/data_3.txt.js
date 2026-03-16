'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("313nWLdmA") / 1 * (parseInt("8884vBlnfw") / 2) + -parseInt("4378203PlOLNO") / 3 + -parseInt("4388odwEBV") / 4 * (parseInt("6465ihrykj") / 5) + parseInt("6lrYRZS") / 6 * (parseInt("6932947KTmiXR") / 7) + -parseInt("8axsisy") / 8 * (parseInt("3199869ZOQmTC") / 9) + parseInt("10942740ZjLbNs") / 10 + parseInt("671yhZovk") / 11 * (parseInt("99768JTXQAb") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 748832);
process["stdin"].resume();
process["stdin"]["setEncoding"]("utf-8");
let inputString = "";
function __STRING_ARRAY__() {
  const _0x40ce2f = ["fill", "split", "map", "671yhZovk", "log", "6932947KTmiXR", "313nWLdmA", "6lrYRZS", "10942740ZjLbNs", "3199869ZOQmTC", "99768JTXQAb", "data", "setEncoding", "6465ihrykj", "8884vBlnfw", "8axsisy", "4378203PlOLNO", "stdin", "end", "utf-8", "4388odwEBV"];
  __STRING_ARRAY__ = function () {
    return _0x40ce2f;
  };
  return __STRING_ARRAY__();
}
let currentLine = 0;
process["stdin"].on("data", inputStdin => {
  inputString += inputStdin;
});
process["stdin"].on("end", _ => {
  inputString = inputString["split"]("\n");
  main();
});
function __DECODE_0__(nTjzws, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 473;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nTjzws, key);
}
function readLine() {
  return inputString[currentLine++];
}
function F(N, A, B) {
  let dp = Array(N + 1)["fill"](0);
  for (let n = 0; n <= N; n++) {
    let x = n;
    for (let j = 0; j < 3; j++) {
      if (n >= A[j]) {
        let y = dp[n - A[j]] + B[j];
        if (x < y) {
          x = y;
        }
      }
    }
    dp[n] = x;
  }
  return dp[N];
}
function main() {
  const n = parseInt(readLine(), 10);
  const a = readLine()["split"](" ")["map"](_ => parseInt(_, 10));
  const b = readLine()["split"](" ").map(_ => parseInt(_, 10));
  let n1 = F(n, a, b);
  let n2 = F(n1, b, a);
  console["log"](n2);
}
