(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xce)) / 0x1 * (-parseInt(__DECODE_0__(0xd0)) / 0x2) + -parseInt(__DECODE_0__(0xc3)) / 0x3 * (parseInt(__DECODE_0__(0xc7)) / 0x4) + parseInt(__DECODE_0__(0xc6)) / 0x5 + parseInt(__DECODE_0__(0xcf)) / 0x6 * (parseInt(__DECODE_0__(0xc2)) / 0x7) + -parseInt(__DECODE_0__(0xcd)) / 0x8 + parseInt(__DECODE_0__(0xcc)) / 0x9 * (parseInt(__DECODE_0__(0xc4)) / 0xa) + -parseInt(__DECODE_0__(0xc8)) / 0xb * (parseInt(__DECODE_0__(0xcb)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9d70b);
function __STRING_ARRAY__() {
  const _0x3027d2 = ['4154451WufvIB', '3rKOpsR', '10gfZQjh', 'utf8', '3253505tXDCnN', '643856pCDUET', '341TADypx', 'log', 'readFileSync', '301500pTStcY', '2090709XPRLDb', '6046264nBaRnh', '1lefkTc', '12WOdTtG', '541018KbQHHN'];
  __STRING_ARRAY__ = function () {
    return _0x3027d2;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(LBPxhy, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xc2;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LBPxhy, key);
}
function Main(input) {
  const hyaku = Number(input) % 0x3e8;
  console[__DECODE_0__(0xc9)](hyaku === 0x0 ? 0x0 : 0x3e8 - hyaku);
}
Main(require('fs')[__DECODE_0__(0xca)]('/dev/stdin', __DECODE_0__(0xc5)));
