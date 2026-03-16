function __DECODE_0__(rAXcjP, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xce;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rAXcjP, key);
}
(function (stringArrayFunction, comparisonValue) {
  const _0x59f980 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x59f980(0xd5)) / 0x1 + parseInt(_0x59f980(0xd8)) / 0x2 * (parseInt(_0x59f980(0xd0)) / 0x3) + parseInt(_0x59f980(0xd7)) / 0x4 + -parseInt(_0x59f980(0xdb)) / 0x5 + -parseInt(_0x59f980(0xcf)) / 0x6 + -parseInt(_0x59f980(0xe0)) / 0x7 * (parseInt(_0x59f980(0xde)) / 0x8) + parseInt(_0x59f980(0xd3)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7c723);
var cnt = 0x0;
(function main() {
  const _0x1bfc25 = __DECODE_0__;
  const lines = require('fs')[_0x1bfc25(0xd1)](_0x1bfc25(0xce), 'utf8')[_0x1bfc25(0xda)]()[_0x1bfc25(0xdd)]('\x0a');
  const n = Number(lines[_0x1bfc25(0xd2)]());
  let arr = lines[_0x1bfc25(0xd2)]()[_0x1bfc25(0xdd)]('\x20')[_0x1bfc25(0xd9)](Number);
  mergeSort(arr, 0x0, n);
  console[_0x1bfc25(0xd4)](cnt);
})();
function merge(arr, left, mid, right) {
  const _0x3f4f47 = __DECODE_0__;
  let L = arr[_0x3f4f47(0xd6)](left, mid);
  let R = arr[_0x3f4f47(0xd6)](mid, right);
  L[_0x3f4f47(0xdf)](Infinity);
  R['push'](Infinity);
  let i = 0x0;
  let j = 0x0;
  let t = 0x0;
  for (let k = left; k < right; k++) {
    if (L[i] < R[j]) {
      arr[k] = L[i++];
      cnt += t;
    } else {
      arr[k] = R[j++];
      t += 0x1;
    }
  }
}
function __STRING_ARRAY__() {
  const _0xc66264 = ['144dUCEvD', 'push', '224602VbSkKf', '/dev/stdin', '2233440sNFLxQ', '75ZkktzR', 'readFileSync', 'shift', '4226679UqlHRU', 'log', '366240fUmZhJ', 'slice', '1769940xKmvkV', '49690CZtIHD', 'map', 'trim', '2199810rMYvks', 'floor', 'split'];
  __STRING_ARRAY__ = function () {
    return _0xc66264;
  };
  return __STRING_ARRAY__();
}
function mergeSort(arr, left, right) {
  const _0x14b5e3 = __DECODE_0__;
  if (left + 0x1 < right) {
    let mid = Math[_0x14b5e3(0xdc)]((left + right) / 0x2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid, right);
    merge(arr, left, mid, right);
  }
}
