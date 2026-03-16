'use strict';

function __STRING_ARRAY__() {
  const _0x246db6 = ["242qbFPxu", "643313GkQgKB", "2607690gnBdeo", "shift", "35FVzLev", "1344qAuvrJ", "log", "sort", "trim", "readFileSync", "549663eWdvhp", "208146kPmSPs", "96Iseqvr", "1497850verRHB", "56200DpdVIR", "4FMUwHc", "length", "45FhiDuV", "split", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x246db6;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1344qAuvrJ") / 1 * (parseInt("242qbFPxu") / 2) + -parseInt("549663eWdvhp") / 3 * (-parseInt("4FMUwHc") / 4) + -parseInt("2607690gnBdeo") / 5 + -parseInt("208146kPmSPs") / 6 * (-parseInt("35FVzLev") / 7) + parseInt("56200DpdVIR") / 8 * (-parseInt("45FhiDuV") / 9) + -parseInt("1497850verRHB") / 10 + parseInt("643313GkQgKB") / 11 * (parseInt("96Iseqvr") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 280716);
const lines = require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]()["split"]("\n");
const N = +lines[0];
const A = lines[1]["split"](" ");
let indices = [];
for (let i = 0; i < N; i++) {
  A[i] = +A[i];
  indices[indices.length] = i;
}
indices = indices["sort"]((a, b) => A[a] - A[b]);
let sum = 0;
let que = [[0, N - 1, 0]];
function __DECODE_0__(mYUBLj, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 266;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mYUBLj, key);
}
while (que.length > 0) {
  let lri = que["shift"]();
  let left = lri[0];
  let right = lri[1];
  let index = lri[2];
  if (left > right) {
    continue;
  }
  let i = index;
  while (indices[i] < left || indices[i] > right) {
    i++;
  }
  let ind = indices[i];
  sum += A[ind] * (ind - left + 1) * (right - ind + 1);
  if (left <= ind - 1) {
    que[que["length"]] = [left, ind - 1, i + 1];
  }
  if (ind + 1 <= right) {
    que[que["length"]] = [ind + 1, right, i + 1];
  }
}
console["log"](sum);
