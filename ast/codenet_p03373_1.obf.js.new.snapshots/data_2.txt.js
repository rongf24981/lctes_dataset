'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1f1)) / 0x1 * (-parseInt(__DECODE_0__(0x1e8)) / 0x2) + parseInt(__DECODE_0__(0x1e5)) / 0x3 + parseInt(__DECODE_0__(0x1e2)) / 0x4 + -parseInt(__DECODE_0__(0x1e3)) / 0x5 * (parseInt(__DECODE_0__(0x1f2)) / 0x6) + -parseInt(__DECODE_0__(0x1e9)) / 0x7 * (-parseInt(__DECODE_0__(0x1eb)) / 0x8) + parseInt(__DECODE_0__(0x1ed)) / 0x9 * (parseInt(__DECODE_0__(0x1ef)) / 0xa) + -parseInt(__DECODE_0__(0x1e4)) / 0xb * (parseInt(__DECODE_0__(0x1ee)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x95e93);
function __STRING_ARRAY__() {
  const _0x6a4112 = ['log', 'readFileSync', '4665852HgdbaL', '1665iDbUeo', '11972125jTjXxh', '2997135GBhBjS', 'min', 'map', '1140814ZjKPjw', '212079oSezzi', 'max', '272WvGYMq', 'utf8', '162522AZePul', '36fDtgLw', '560vygFrB', 'split', '1flexEx', '16182clZxRa'];
  __STRING_ARRAY__ = function () {
    return _0x6a4112;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(SyrpPn, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1e0;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SyrpPn, key);
}
function main(s) {
  s = s[__DECODE_0__(0x1f0)]('\x0a')[0x0][__DECODE_0__(0x1f0)]('\x20')[__DECODE_0__(0x1e7)](n => Number(n));
  const A = s[0x0];
  const B = s[0x1];
  const C = s[0x2];
  const X = s[0x3];
  const Y = s[0x4];
  const min = Math[__DECODE_0__(0x1e6)](X, Y);
  const case1 = A * X + B * Y;
  const case2 = 0x2 * C * min + (X - min) * A + (Y - min) * B;
  const case3 = 0x2 * C * Math[__DECODE_0__(0x1ea)](X, Y);
  const answer = Math[__DECODE_0__(0x1e6)](...[case1, case2, case3]);
  console[__DECODE_0__(0x1e0)](answer);
}
main(require('fs')[__DECODE_0__(0x1e1)]('/dev/stdin', __DECODE_0__(0x1ec)));
