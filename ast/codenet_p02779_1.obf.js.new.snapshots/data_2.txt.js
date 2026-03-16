'use strict';

function __STRING_ARRAY__() {
  const _0x5ca500 = ['148722NoiblF', '/dev/stdin', 'map', 'YES', 'split', 'utf8', 'log', '1003016TJWYyR', 'trim', 'indexOf', '670779ZzWlSG', '8428216JETbKQ', '3694260UIAtMq', '2895510hlCObO', 'readFileSync', '174zRYkne', '170niPrSW', '1058463eDwnFn', '10XmnrCt'];
  __STRING_ARRAY__ = function () {
    return _0x5ca500;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x139)) / 0x1 + -parseInt(__DECODE_0__(0x135)) / 0x2 + -parseInt(__DECODE_0__(0x134)) / 0x3 + parseInt(__DECODE_0__(0x12f)) / 0x4 * (-parseInt(__DECODE_0__(0x127)) / 0x5) + -parseInt(__DECODE_0__(0x137)) / 0x6 * (-parseInt(__DECODE_0__(0x128)) / 0x7) + parseInt(__DECODE_0__(0x133)) / 0x8 + parseInt(__DECODE_0__(0x132)) / 0x9 * (parseInt(__DECODE_0__(0x138)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc6d84);
function __DECODE_0__(ebmfKm, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x127;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ebmfKm, key);
}
function Main(input) {
  input = input[__DECODE_0__(0x130)]()[__DECODE_0__(0x12c)]('\x0a');
  const N = Number(input[0x0]['trim']());
  const A = input[0x1]['trim']()[__DECODE_0__(0x12c)]('\x20')[__DECODE_0__(0x12a)](Number);
  let ret = __DECODE_0__(0x12b);
  for (let i = 0x0; i < N; i++) {
    let tmp = A['slice'](i + 0x1);
    let r = tmp[__DECODE_0__(0x131)](A[i]);
    if (r !== -0x1) {
      ret = 'NO';
      break;
    }
  }
  console[__DECODE_0__(0x12e)](ret);
}
Main(require('fs')[__DECODE_0__(0x136)](__DECODE_0__(0x129), __DECODE_0__(0x12d)));
