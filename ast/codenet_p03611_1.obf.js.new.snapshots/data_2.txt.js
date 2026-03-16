'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x136)) / 0x1 + -parseInt(__DECODE_0__(0x130)) / 0x2 * (parseInt(__DECODE_0__(0x133)) / 0x3) + parseInt(__DECODE_0__(0x13b)) / 0x4 + -parseInt(__DECODE_0__(0x13e)) / 0x5 + -parseInt(__DECODE_0__(0x139)) / 0x6 + -parseInt(__DECODE_0__(0x132)) / 0x7 + parseInt(__DECODE_0__(0x135)) / 0x8;
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
  arg = arg[__DECODE_0__(0x12f)]()['split']('\x0a');
  const N = parseInt(arg[0x0]);
  const a = arg[0x1]['split']('\x20')[__DECODE_0__(0x134)](n => parseInt(n))['sort']((a, b) => a - b);
  const set = new Set();
  let max = 0x0;
  for (let i = 0x0; i < N; i++) {
    let cnt = 0x0;
    if (set[__DECODE_0__(0x13a)](a[i])) {
      continue;
    }
    set[__DECODE_0__(0x13d)](a[i]);
    for (let j = 0x0; j < N; j++) {
      if (Math[__DECODE_0__(0x138)](a[j] - a[i]) <= 0x1) {
        cnt++;
      }
    }
    if (cnt > max) {
      max = cnt;
    }
  }
  console[__DECODE_0__(0x13c)](max);
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
main(require('fs')[__DECODE_0__(0x137)]('/dev/stdin', __DECODE_0__(0x131)));
