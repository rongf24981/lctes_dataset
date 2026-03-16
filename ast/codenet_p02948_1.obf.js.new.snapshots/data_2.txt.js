'use strict';

function __DECODE_0__(YVTRXK, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe5;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YVTRXK, key);
}
function __STRING_ARRAY__() {
  const _0x18f004 = ['sort', '2917240pyaRDA', '119189qAvamM', '17872659jYfWEk', 'length', '272865UPMnwH', '1284240Hxtflw', 'log', 'slice', 'map', '88MOAjFf', '/dev/stdin', '1523352zzZnNN', '1849602vCvIib', 'trim', 'split', 'filter', '28qzKOiU'];
  __STRING_ARRAY__ = function () {
    return _0x18f004;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xf3)) / 0x1 + -parseInt(__DECODE_0__(0xe8)) / 0x2 + parseInt(__DECODE_0__(0xf2)) / 0x3 * (-parseInt(__DECODE_0__(0xec)) / 0x4) + -parseInt(__DECODE_0__(0xee)) / 0x5 + -parseInt(__DECODE_0__(0xe7)) / 0x6 + -parseInt(__DECODE_0__(0xef)) / 0x7 * (parseInt(__DECODE_0__(0xe5)) / 0x8) + parseInt(__DECODE_0__(0xf0)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa6fc0);
function Main(input) {
  const N = Number(input[__DECODE_0__(0xea)]('\x0a')[0x0][__DECODE_0__(0xea)]('\x20')[0x0]);
  const M = Number(input[__DECODE_0__(0xea)]('\x0a')[0x0][__DECODE_0__(0xea)]('\x20')[0x1]);
  const list = input[__DECODE_0__(0xea)]('\x0a')[__DECODE_0__(0xf5)](0x1)[__DECODE_0__(0xf6)](x => x['split']('\x20')['map'](x => Number(x)))[__DECODE_0__(0xeb)](x => x[0x0] <= M)[__DECODE_0__(0xed)]((a, b) => {
    if (a[0x1] === b[0x1]) {
      return b[0x0] - a[0x0];
    } else {
      return b[0x1] - a[0x1];
    }
  });
  let ans = 0x0;
  let now = 0x0;
  if (list[__DECODE_0__(0xf1)] === 0x0) {
    console[__DECODE_0__(0xf4)](0x0);
    return;
  }
  for (let i = 0x0; i < N; i++) {
    if (now === M) {
      break;
    }
    if (list[i][0x0] > M - now) {
      continue;
    }
    ans += list[i][0x1];
    now++;
  }
  console[__DECODE_0__(0xf4)](ans);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0xe6), 'utf8')[__DECODE_0__(0xe9)]());
