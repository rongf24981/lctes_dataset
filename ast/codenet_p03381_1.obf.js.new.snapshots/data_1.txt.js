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
const a0_0x56c709 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0xbd315a = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0xbd315a(0xae)) / 0x1 + -parseInt(_0xbd315a(0xa7)) / 0x2 + parseInt(_0xbd315a(0xb1)) / 0x3 * (parseInt(_0xbd315a(0xa1)) / 0x4) + parseInt(_0xbd315a(0xb0)) / 0x5 * (parseInt(_0xbd315a(0xa5)) / 0x6) + -parseInt(_0xbd315a(0xa6)) / 0x7 + -parseInt(_0xbd315a(0xa3)) / 0x8 * (parseInt(_0xbd315a(0xa8)) / 0x9) + parseInt(_0xbd315a(0xad)) / 0xa;
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
  const _0x69cbc = __DECODE_0__;
  const lines = input['split']('\x0a');
  let N = parseInt(lines[0x0]);
  let a = lines[0x1][_0x69cbc(0xaa)]('\x20')[_0x69cbc(0xa2)](function (i) {
    return parseInt(i);
  });
  let sortedA = a[_0x69cbc(0xac)]()[_0x69cbc(0xa4)](function (a, b) {
    return a - b;
  });
  const med1 = sortedA[N / 0x2 - 0x1];
  const med2 = sortedA[N / 0x2];
  a['forEach'](function (i) {
    const _0x469afe = _0x69cbc;
    console[_0x469afe(0xab)](i <= med1 ? med2 : med1);
  });
}
Main(require('fs')[a0_0x56c709(0xaf)](a0_0x56c709(0xa9), a0_0x56c709(0xb2)));
