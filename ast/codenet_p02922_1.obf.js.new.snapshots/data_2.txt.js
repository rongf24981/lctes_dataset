'use strict';

function __DECODE_0__(jdFFva, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x8b;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jdFFva, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x97)) / 0x1 + -parseInt(__DECODE_0__(0x96)) / 0x2 * (parseInt(__DECODE_0__(0x90)) / 0x3) + -parseInt(__DECODE_0__(0x8f)) / 0x4 + parseInt(__DECODE_0__(0x8b)) / 0x5 * (-parseInt(__DECODE_0__(0x8d)) / 0x6) + parseInt(__DECODE_0__(0x8c)) / 0x7 * (-parseInt(__DECODE_0__(0x94)) / 0x8) + -parseInt(__DECODE_0__(0x95)) / 0x9 + parseInt(__DECODE_0__(0x91)) / 0xa * (parseInt(__DECODE_0__(0x93)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x956c1);
const Main = input => {
  let xs = input['trim']()['split']('\x20')[__DECODE_0__(0x92)](v => parseInt(v, 0xa));
  let a = xs[0x0];
  let b = xs[0x1];
  let ans = 0x1;
  if (a >= b) {
    ans = 0x1;
  } else {
    for (let i = 0x1; (a - 0x1) * i + 0x1 < b; i++) {
      ans += 0x1;
    }
  }
  console[__DECODE_0__(0x8e)](ans);
};
function __STRING_ARRAY__() {
  const _0x39435a = ['27905myUuRJ', '182WmCCCS', '1206anFhML', 'log', '3920944ITGuVC', '121971AHTozI', '3043720vZJCoa', 'map', '165gUWOkQ', '2408ztcwDH', '9605511PTGRtS', '12zHlcMB', '532483QGivYh', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x39435a;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0x98)]('/dev/stdin', 'utf8'));
