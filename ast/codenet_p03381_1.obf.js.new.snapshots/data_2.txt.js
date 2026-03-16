function __STRING_ARRAY__() {
  const _0x3465f9 = ['9ttzZvq', '/dev/stdin', 'split', 'log', 'slice', '1420590eIsIpz', '106947znuqXg', 'readFileSync', '710IRxsKX', '3ZwJonp', 'utf8', '175880blKCbl', 'map', '275312XORFyt', 'sort', '5322xBcZtj', '7931IUKCTb', '447016TsYMGB'];
  __STRING_ARRAY__ = function () {
    return _0x3465f9;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(bBcvhO, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xa1;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bBcvhO, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xae)) / 0x1 + -parseInt(__DECODE_0__(0xa7)) / 0x2 + parseInt(__DECODE_0__(0xb1)) / 0x3 * (parseInt(__DECODE_0__(0xa1)) / 0x4) + parseInt(__DECODE_0__(0xb0)) / 0x5 * (parseInt(__DECODE_0__(0xa5)) / 0x6) + -parseInt(__DECODE_0__(0xa6)) / 0x7 + -parseInt(__DECODE_0__(0xa3)) / 0x8 * (parseInt(__DECODE_0__(0xa8)) / 0x9) + parseInt(__DECODE_0__(0xad)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x27083);
function Main(input) {
  const lines = input['split']('\x0a');
  let N = parseInt(lines[0x0]);
  let a = lines[0x1][__DECODE_0__(0xaa)]('\x20')[__DECODE_0__(0xa2)](function (i) {
    return parseInt(i);
  });
  let sortedA = a[__DECODE_0__(0xac)]()[__DECODE_0__(0xa4)](function (a, b) {
    return a - b;
  });
  const med1 = sortedA[N / 0x2 - 0x1];
  const med2 = sortedA[N / 0x2];
  a['forEach'](function (i) {
    console[__DECODE_0__(0xab)](i <= med1 ? med2 : med1);
  });
}
Main(require('fs')[__DECODE_0__(0xaf)](__DECODE_0__(0xa9), __DECODE_0__(0xb2)));
