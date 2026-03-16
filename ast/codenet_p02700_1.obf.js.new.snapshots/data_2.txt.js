function __STRING_ARRAY__() {
  const _0xfe1307 = ['11xqGYSo', '1031300BnaOvu', '3280QzreYX', '454180UVqTap', 'Yes', '7zfNwEs', '5412wfgPsO', '26zqQOYr', 'utf8', '9vlZMsy', 'log', '3970482oKGBBF', '7758BADLIA', '1200145pcUnyu', '36985UaMVYR', 'readFileSync', '28379osxkiO'];
  __STRING_ARRAY__ = function () {
    return _0xfe1307;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x194)) / 0x1 * (parseInt(__DECODE_0__(0x19e)) / 0x2) + -parseInt(__DECODE_0__(0x1a0)) / 0x3 * (parseInt(__DECODE_0__(0x198)) / 0x4) + -parseInt(__DECODE_0__(0x193)) / 0x5 + -parseInt(__DECODE_0__(0x1a2)) / 0x6 * (-parseInt(__DECODE_0__(0x19c)) / 0x7) + parseInt(__DECODE_0__(0x199)) / 0x8 * (parseInt(__DECODE_0__(0x1a3)) / 0x9) + -parseInt(__DECODE_0__(0x19a)) / 0xa * (parseInt(__DECODE_0__(0x197)) / 0xb) + parseInt(__DECODE_0__(0x19d)) / 0xc * (parseInt(__DECODE_0__(0x196)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x704c5);
function __DECODE_0__(EzryOW, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x193;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EzryOW, key);
}
function Main(input) {
  const array = input['split']('\x20');
  let takahashi = Number(array[0x0]);
  let aoki = Number(array[0x2]);
  let count = 0x0;
  let bool = !![];
  while (bool) {
    if (count % 0x2 === 0x0) {
      aoki = aoki - Number(array[0x1]);
      if (aoki <= 0x0) {
        console[__DECODE_0__(0x1a1)](__DECODE_0__(0x19b));
        bool = ![];
      }
    } else {
      takahashi = takahashi - Number(array[0x3]);
      if (takahashi <= 0x0) {
        console[__DECODE_0__(0x1a1)]('No');
        bool = ![];
      }
    }
    count++;
  }
}
Main(require('fs')[__DECODE_0__(0x195)]('/dev/stdin', __DECODE_0__(0x19f)));
