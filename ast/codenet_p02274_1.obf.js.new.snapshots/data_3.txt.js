function __DECODE_0__(rAXcjP, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 206;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rAXcjP, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("366240fUmZhJ") / 1 + parseInt("49690CZtIHD") / 2 * (parseInt("75ZkktzR") / 3) + parseInt("1769940xKmvkV") / 4 + -parseInt("2199810rMYvks") / 5 + -parseInt("2233440sNFLxQ") / 6 + -parseInt("224602VbSkKf") / 7 * (parseInt("144dUCEvD") / 8) + parseInt("4226679UqlHRU") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 509731);
var cnt = 0;
(function main() {
  const lines = require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]()["split"]("\n");
  const n = Number(lines["shift"]());
  let arr = lines["shift"]()["split"](" ")["map"](Number);
  mergeSort(arr, 0, n);
  console["log"](cnt);
})();
function merge(arr, left, mid, right) {
  let L = arr["slice"](left, mid);
  let R = arr["slice"](mid, right);
  L["push"](Infinity);
  R.push(Infinity);
  let i = 0;
  let j = 0;
  let t = 0;
  for (let k = left; k < right; k++) {
    if (L[i] < R[j]) {
      arr[k] = L[i++];
      cnt += t;
    } else {
      arr[k] = R[j++];
      t += 1;
    }
  }
}
function __STRING_ARRAY__() {
  const _0xc66264 = ["144dUCEvD", "push", "224602VbSkKf", "/dev/stdin", "2233440sNFLxQ", "75ZkktzR", "readFileSync", "shift", "4226679UqlHRU", "log", "366240fUmZhJ", "slice", "1769940xKmvkV", "49690CZtIHD", "map", "trim", "2199810rMYvks", "floor", "split"];
  __STRING_ARRAY__ = function () {
    return _0xc66264;
  };
  return __STRING_ARRAY__();
}
function mergeSort(arr, left, right) {
  if (left + 1 < right) {
    let mid = Math["floor"]((left + right) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid, right);
    merge(arr, left, mid, right);
  }
}
