function __STRING_ARRAY__() {
  const _0x807b55 = ['/dev/stdin', '4930788WJCdGE', '14EXYpXY', 'floor', 'utf8', '937383jLBByo', 'trim', 'map', '35959995CIwidh', 'reduce', 'length', '4809000mGXLdA', 'split', '3dbYZZB', '2386438oyixde', '10041978FWQTgj', 'log', '5672608qsNwtG', 'shift'];
  __STRING_ARRAY__ = function () {
    return _0x807b55;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const _0x322b10 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x322b10(0x113)) / 0x1 + -parseInt(_0x322b10(0x109)) / 0x2 * (-parseInt(_0x322b10(0x108)) / 0x3) + -parseInt(_0x322b10(0x10f)) / 0x4 + parseInt(_0x322b10(0x106)) / 0x5 + parseInt(_0x322b10(0x10a)) / 0x6 + -parseInt(_0x322b10(0x110)) / 0x7 * (-parseInt(_0x322b10(0x10c)) / 0x8) + -parseInt(_0x322b10(0x116)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe963d);
function __DECODE_0__(RYSfbX, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x104;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RYSfbX, key);
}
(function main() {
  const _0x15db50 = __DECODE_0__;
  const lines = require('fs')['readFileSync'](_0x15db50(0x10e), _0x15db50(0x112))[_0x15db50(0x114)]()['split']('\x0a');
  lines[_0x15db50(0x10d)]();
  const arr = lines[_0x15db50(0x10d)]()[_0x15db50(0x107)]('\x20')[_0x15db50(0x115)](Number);
  buildMaxHeap(arr);
  console[_0x15db50(0x10b)](arr[_0x15db50(0x104)]((s, e) => s += '\x20' + e, ''));
})();
function buildMaxHeap(arr) {
  const _0x587350 = __DECODE_0__;
  const n = arr['length'];
  const maxHeapify = i => {
    let left;
    let right;
    let largest;
    left = 0x2 * i + 0x1;
    right = 0x2 * i + 0x2;
    largest = left < n && arr[left] > arr[i] ? left : i;
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
    if (largest != i) {
      arr[largest] = [arr[i], arr[i] = arr[largest]][0x0];
      maxHeapify(largest);
    }
  };
  for (let i = Math[_0x587350(0x111)](arr[_0x587350(0x105)] / 0x2); i >= 0x0; i--) {
    maxHeapify(i);
  }
}
