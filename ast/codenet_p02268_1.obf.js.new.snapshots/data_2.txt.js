(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x19c)) / 0x1 + parseInt(__DECODE_0__(0x197)) / 0x2 + -parseInt(__DECODE_0__(0x199)) / 0x3 * (parseInt(__DECODE_0__(0x196)) / 0x4) + parseInt(__DECODE_0__(0x19d)) / 0x5 + parseInt(__DECODE_0__(0x190)) / 0x6 * (parseInt(__DECODE_0__(0x194)) / 0x7) + -parseInt(__DECODE_0__(0x19a)) / 0x8 + parseInt(__DECODE_0__(0x198)) / 0x9 * (parseInt(__DECODE_0__(0x195)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc5120);
var input = require('fs')[__DECODE_0__(0x193)](__DECODE_0__(0x19e), __DECODE_0__(0x192));
function __DECODE_0__(JVTkzh, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x18e;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(JVTkzh, key);
}
function __STRING_ARRAY__() {
  const _0x3032e0 = ['23980JihKpS', '117664GIWsQM', '1467304HHScUk', '1773bvODbf', '51GqCWEq', '12776176cfvYUA', 'log', '850867zWhDWC', '683815xnGPGB', '/dev/stdin', 'map', 'floor', 'reduce', '4263636lpSaJE', 'split', 'utf8', 'readFileSync', '7nfwpNy'];
  __STRING_ARRAY__ = function () {
    return _0x3032e0;
  };
  return __STRING_ARRAY__();
}
var Arr = input['trim']()[__DECODE_0__(0x191)]('\x0a');
const binarySearch = (key, arr, N) => {
  let mid;
  let left = 0x0;
  let right = N;
  while (left < right) {
    mid = Math[__DECODE_0__(0x18e)]((left + right) / 0x2);
    if (key < arr[mid]) {
      right = mid;
    } else {
      if (key > arr[mid]) {
        left = mid + 0x1;
      } else {
        return 0x1;
      }
    }
  }
  return 0x0;
};
(function () {
  const N1 = Number(Arr[0x0]);
  const arr1 = Arr[0x1]['split']('\x20')[__DECODE_0__(0x19f)](Number);
  const arr2 = Arr[0x3][__DECODE_0__(0x191)]('\x20')[__DECODE_0__(0x19f)](Number);
  console[__DECODE_0__(0x19b)](arr2['map'](e => binarySearch(e, arr1, N1))[__DECODE_0__(0x18f)]((a, b) => a + b, 0x0));
})();
