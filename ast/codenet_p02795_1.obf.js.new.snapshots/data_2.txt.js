'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1bf)) / 0x1 * (parseInt(__DECODE_0__(0x1c1)) / 0x2) + parseInt(__DECODE_0__(0x1c2)) / 0x3 * (parseInt(__DECODE_0__(0x1c3)) / 0x4) + parseInt(__DECODE_0__(0x1bc)) / 0x5 * (parseInt(__DECODE_0__(0x1c7)) / 0x6) + parseInt(__DECODE_0__(0x1ca)) / 0x7 + parseInt(__DECODE_0__(0x1c8)) / 0x8 + parseInt(__DECODE_0__(0x1c9)) / 0x9 * (-parseInt(__DECODE_0__(0x1c6)) / 0xa) + -parseInt(__DECODE_0__(0x1be)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa97a3);
function __DECODE_0__(EhBxmx, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1bc;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EhBxmx, key);
}
const main = arg => {
  const input = arg[__DECODE_0__(0x1cb)]()[__DECODE_0__(0x1bd)]('\x0a');
  let H = Number(input[0x0]['split']('\x20'));
  let W = Number(input[0x1][__DECODE_0__(0x1bd)]('\x20'));
  let N = Number(input[0x2][__DECODE_0__(0x1bd)]('\x20'));
  let paintedRow = 0x0;
  let paintedColumn = 0x0;
  let paintedCell = 0x0;
  while (0x1) {
    if (W >= H) {
      paintedCell += W - paintedColumn;
      paintedRow++;
    } else {
      paintedCell += H - paintedRow;
      paintedColumn++;
    }
    if (paintedCell >= N) {
      break;
    }
  }
  console[__DECODE_0__(0x1c0)](paintedColumn + paintedRow);
};
function __STRING_ARRAY__() {
  const _0x21e097 = ['readFileSync', '80KOofiZ', '12narySH', '4342088rrQdcM', '227583qbQZoV', '1981987rYoOMW', 'trim', '1106530GEOehx', 'split', '23637482UAPHrU', '2809ZsrFbk', 'log', '886NOSxGD', '3hxYFUl', '2129744qRTImd', 'utf8'];
  __STRING_ARRAY__ = function () {
    return _0x21e097;
  };
  return __STRING_ARRAY__();
}
main(require('fs')[__DECODE_0__(0x1c5)]('/dev/stdin', __DECODE_0__(0x1c4)));
