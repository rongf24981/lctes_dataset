'use strict';

const a0_0x42235a = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x72084d = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x72084d(0x136)) / 0x1 + -parseInt(_0x72084d(0x130)) / 0x2 * (parseInt(_0x72084d(0x133)) / 0x3) + parseInt(_0x72084d(0x13b)) / 0x4 + -parseInt(_0x72084d(0x13e)) / 0x5 + -parseInt(_0x72084d(0x139)) / 0x6 + -parseInt(_0x72084d(0x132)) / 0x7 + parseInt(_0x72084d(0x135)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7b019);
function __STRING_ARRAY__() {
  const _0x381438 = ['readFileSync', 'abs', '1626522sPIEXS', 'has', '2123592NnnYrh', 'log', 'add', '1685445JIOAxk', 'trim', '578FYmlKZ', 'utf8', '5798135mIeSGw', '591jDymJy', 'map', '10645184rkMAIL', '135701WpHTxX'];
  __STRING_ARRAY__ = function () {
    return _0x381438;
  };
  return __STRING_ARRAY__();
}
const main = arg => {
  const _0x351993 = __DECODE_0__;
  arg = arg[_0x351993(0x12f)]()['split']('\x0a');
  const N = parseInt(arg[0x0]);
  const a = arg[0x1]['split']('\x20')[_0x351993(0x134)](n => parseInt(n))['sort']((a, b) => a - b);
  const set = new Set();
  let max = 0x0;
  for (let i = 0x0; i < N; i++) {
    let cnt = 0x0;
    if (set[_0x351993(0x13a)](a[i])) {
      continue;
    }
    set[_0x351993(0x13d)](a[i]);
    for (let j = 0x0; j < N; j++) {
      if (Math[_0x351993(0x138)](a[j] - a[i]) <= 0x1) {
        cnt++;
      }
    }
    if (cnt > max) {
      max = cnt;
    }
  }
  console[_0x351993(0x13c)](max);
};
function __DECODE_0__(mIndht, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x12f;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mIndht, key);
}
main(require('fs')[a0_0x42235a(0x137)]('/dev/stdin', a0_0x42235a(0x131)));
