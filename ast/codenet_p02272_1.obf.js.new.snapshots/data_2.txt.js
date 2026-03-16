(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x10d)) / 0x1 * (-parseInt(__DECODE_0__(0x109)) / 0x2) + -parseInt(__DECODE_0__(0x112)) / 0x3 + parseInt(__DECODE_0__(0x104)) / 0x4 + parseInt(__DECODE_0__(0x10a)) / 0x5 * (-parseInt(__DECODE_0__(0x10e)) / 0x6) + -parseInt(__DECODE_0__(0x108)) / 0x7 * (-parseInt(__DECODE_0__(0x107)) / 0x8) + parseInt(__DECODE_0__(0x102)) / 0x9 + parseInt(__DECODE_0__(0x10b)) / 0xa * (-parseInt(__DECODE_0__(0x100)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5f64c);
process[__DECODE_0__(0x10f)][__DECODE_0__(0x110)]();
process[__DECODE_0__(0x10f)]['setEncoding'](__DECODE_0__(0x105));
let input = '';
process['stdin']['on']('data', function (chunk) {
  input += chunk;
});
process['stdin']['on'](__DECODE_0__(0x10c), function () {
  main(input[__DECODE_0__(0x111)]('\x0a'));
});
function __STRING_ARRAY__() {
  const _0x25c7ba = ['2764647BQcHke', 'log', '2901904jAnRhG', 'utf8', 'MAX_SAFE_INTEGER', '292088ikDHle', '28LSDxzX', '981870PqIQfz', '33720egEfrt', '20bbsMjd', 'end', '1YGvJKI', '624TrwziF', 'stdin', 'resume', 'split', '1624134iSjrKI', '198836EgumES', 'push'];
  __STRING_ARRAY__ = function () {
    return _0x25c7ba;
  };
  return __STRING_ARRAY__();
}
let count = 0x0;
function merge(A, left, mid, right) {
  let n1 = mid - left;
  let n2 = right - mid;
  let L = [];
  let R = [];
  for (let i = 0x0; i < n1; i++) {
    L[__DECODE_0__(0x101)](A[left + i]);
  }
  for (let i = 0x0; i < n2; i++) {
    R[__DECODE_0__(0x101)](A[mid + i]);
  }
  L[__DECODE_0__(0x101)](Number[__DECODE_0__(0x106)]);
  R[__DECODE_0__(0x101)](Number[__DECODE_0__(0x106)]);
  let i = 0x0;
  let j = 0x0;
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
  if (left + 0x1 >= right) {
    return;
  }
  let mid = Math['floor']((left + right) / 0x2);
  mergeSort(A, left, mid);
  mergeSort(A, mid, right);
  merge(A, left, mid, right);
}
function __DECODE_0__(QwYZEU, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x100;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QwYZEU, key);
}
function main(lines) {
  let n = Number(lines[0x0]);
  let A = lines[0x1][__DECODE_0__(0x111)]('\x20')['map'](Number);
  mergeSort(A, 0x0, n);
  console[__DECODE_0__(0x103)](A['join']('\x20'));
  console[__DECODE_0__(0x103)](count);
}
