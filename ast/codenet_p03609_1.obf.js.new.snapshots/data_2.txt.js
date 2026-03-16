function __STRING_ARRAY__() {
  const _0x1081e4 = ['1862193EHNHrl', 'readFileSync', 'utf8', '/dev/stdin', '2145610hXTNVm', '880muRQpH', 'log', '19305mxIEbG', '1428452BJISkT', '415784uegWLs', 'split', '14ttJSyx', '22DWarza', 'map', '16494wJXNAm', '2BBCvTO', 'trim', '226371qDmcld'];
  __STRING_ARRAY__ = function () {
    return _0x1081e4;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x198)) / 0x1 + parseInt(__DECODE_0__(0x196)) / 0x2 * (-parseInt(__DECODE_0__(0x199)) / 0x3) + parseInt(__DECODE_0__(0x1a1)) / 0x4 + -parseInt(__DECODE_0__(0x19e)) / 0x5 * (-parseInt(__DECODE_0__(0x195)) / 0x6) + parseInt(__DECODE_0__(0x1a4)) / 0x7 * (-parseInt(__DECODE_0__(0x1a2)) / 0x8) + -parseInt(__DECODE_0__(0x1a0)) / 0x9 + parseInt(__DECODE_0__(0x19d)) / 0xa * (parseInt(__DECODE_0__(0x1a5)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4d5c2);
function __DECODE_0__(wDqMzv, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x195;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wDqMzv, key);
}
function main(input) {
  input = input[__DECODE_0__(0x197)]();
  const a = input[__DECODE_0__(0x1a3)]('\x20')[__DECODE_0__(0x1a6)](Number);
  if (a[0x0] <= a[0x1]) {
    console[__DECODE_0__(0x19f)]('0');
  } else {
    console[__DECODE_0__(0x19f)](a[0x0] - a[0x1]);
  }
}
main(require('fs')[__DECODE_0__(0x19a)](__DECODE_0__(0x19c), __DECODE_0__(0x19b)));
