(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x180)) / 0x1 * (parseInt(__DECODE_0__(0x179)) / 0x2) + parseInt(__DECODE_0__(0x17e)) / 0x3 + -parseInt(__DECODE_0__(0x175)) / 0x4 + -parseInt(__DECODE_0__(0x178)) / 0x5 * (parseInt(__DECODE_0__(0x17d)) / 0x6) + parseInt(__DECODE_0__(0x172)) / 0x7 * (-parseInt(__DECODE_0__(0x17f)) / 0x8) + parseInt(__DECODE_0__(0x17c)) / 0x9 + parseInt(__DECODE_0__(0x171)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x65ced);
function __DECODE_0__(NJeSfS, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x171;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NJeSfS, key);
}
function __STRING_ARRAY__() {
  const _0x2af680 = ['154574anvUur', 'floor', 'readFileSync', '4367529gxgQLe', '1862538BEcKUe', '1517514SwPnEH', '804144rGlklL', '1cIjiyA', 'map', '2388760aRtitY', '7TzSuNU', 'ceil', 'trim', '1299048xDLjqa', 'split', '/dev/stdin', '5prVDaw'];
  __STRING_ARRAY__ = function () {
    return _0x2af680;
  };
  return __STRING_ARRAY__();
}
console['log']((args => {
  const [[K], A] = args[__DECODE_0__(0x174)]()[__DECODE_0__(0x176)]`\n`[__DECODE_0__(0x181)](r => r['split']` `[__DECODE_0__(0x181)](v => v | 0x0));
  let min = 0x2;
  let max = 0x3;
  for (let i = K - 0x2; i >= 0x0; i--) {
    if (max + A[i + 0x1] - 0x1 < A[i]) {
      return '-1';
    }
    min = Math[__DECODE_0__(0x173)](min / A[i]) * A[i];
    max = Math[__DECODE_0__(0x17a)](max / A[i]) * A[i] + A[i] - 0x1;
  }
  return min + '\x20' + max;
})(require('fs')[__DECODE_0__(0x17b)](__DECODE_0__(0x177), 'utf8')));
