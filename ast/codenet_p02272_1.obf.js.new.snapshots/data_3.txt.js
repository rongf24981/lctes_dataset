(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1YGvJKI") / 1 * (-parseInt("981870PqIQfz") / 2) + -parseInt("1624134iSjrKI") / 3 + parseInt("2901904jAnRhG") / 4 + parseInt("33720egEfrt") / 5 * (-parseInt("624TrwziF") / 6) + -parseInt("28LSDxzX") / 7 * (-parseInt("292088ikDHle") / 8) + parseInt("2764647BQcHke") / 9 + parseInt("20bbsMjd") / 10 * (-parseInt("198836EgumES") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 390732);
process["stdin"]["resume"]();
process["stdin"].setEncoding("utf8");
let input = "";
process.stdin.on("data", function (chunk) {
  input += chunk;
});
process.stdin.on("end", function () {
  main(input["split"]("\n"));
});
function __STRING_ARRAY__() {
  const _0x25c7ba = ["2764647BQcHke", "log", "2901904jAnRhG", "utf8", "MAX_SAFE_INTEGER", "292088ikDHle", "28LSDxzX", "981870PqIQfz", "33720egEfrt", "20bbsMjd", "end", "1YGvJKI", "624TrwziF", "stdin", "resume", "split", "1624134iSjrKI", "198836EgumES", "push"];
  __STRING_ARRAY__ = function () {
    return _0x25c7ba;
  };
  return __STRING_ARRAY__();
}
let count = 0;
function merge(A, left, mid, right) {
  let n1 = mid - left;
  let n2 = right - mid;
  let L = [];
  let R = [];
  for (let i = 0; i < n1; i++) {
    L["push"](A[left + i]);
  }
  for (let i = 0; i < n2; i++) {
    R["push"](A[mid + i]);
  }
  L["push"](Number["MAX_SAFE_INTEGER"]);
  R["push"](Number["MAX_SAFE_INTEGER"]);
  let i = 0;
  let j = 0;
  for (let k = left; k < right; k++) {
    if (L[i] < R[j]) {
      A[k] = L[i++];
    } else {
      A[k] = R[j++];
    }
    count++;
  }
}
function mergeSort(A, left, right, count) {
  if (left + 1 >= right) {
    return;
  }
  let mid = Math.floor((left + right) / 2);
  mergeSort(A, left, mid);
  mergeSort(A, mid, right);
  merge(A, left, mid, right);
}
function __DECODE_0__(QwYZEU, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 256;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QwYZEU, key);
}
function main(lines) {
  let n = Number(lines[0]);
  let A = lines[1]["split"](" ").map(Number);
  mergeSort(A, 0, n);
  console["log"](A.join(" "));
  console["log"](count);
}
