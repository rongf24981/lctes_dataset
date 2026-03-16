'use strict';

function __DECODE_0__(dLJdny, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xab;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dLJdny, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xb0)) / 0x1 * (parseInt(__DECODE_0__(0xbf)) / 0x2) + parseInt(__DECODE_0__(0xae)) / 0x3 * (parseInt(__DECODE_0__(0xbe)) / 0x4) + -parseInt(__DECODE_0__(0xab)) / 0x5 * (-parseInt(__DECODE_0__(0xac)) / 0x6) + parseInt(__DECODE_0__(0xb7)) / 0x7 * (-parseInt(__DECODE_0__(0xb6)) / 0x8) + -parseInt(__DECODE_0__(0xb8)) / 0x9 * (-parseInt(__DECODE_0__(0xb5)) / 0xa) + parseInt(__DECODE_0__(0xb1)) / 0xb * (-parseInt(__DECODE_0__(0xbc)) / 0xc) + parseInt(__DECODE_0__(0xb2)) / 0xd * (parseInt(__DECODE_0__(0xc0)) / 0xe);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc7d50);
function __STRING_ARRAY__() {
  const _0x1f0b76 = ['trim', '95ZPKbJi', '4741mMGnlI', '1651pJBFnW', 'push', 'readFileSync', '15913910ApzFwS', '87528jSvHuk', '791bfODpX', '9eGCqqd', 'split', 'shift', 'fill', '23196YoNzfK', '/dev/stdin', '8BSrkuq', '14794twJnpe', '35714KPGucx', '125HWjOhg', '40434rMdovR', 'map', '152115MNJvJR'];
  __STRING_ARRAY__ = function () {
    return _0x1f0b76;
  };
  return __STRING_ARRAY__();
}
console['log'](function (args) {
  const tmp = args[__DECODE_0__(0xaf)]()[__DECODE_0__(0xb9)]('\x0a');
  const HW = tmp[0x0][__DECODE_0__(0xb9)]('\x20')[__DECODE_0__(0xad)](v => v | 0x0);
  const H = HW[0x0];
  const W = HW[0x1];
  const map = [Array(W + 0x2)[__DECODE_0__(0xbb)](Infinity)];
  let s = 0x0;
  for (let y = 0x1; y <= H; y++) {
    map[__DECODE_0__(0xb3)]([Infinity]);
    for (let x = 0x0; x < W; x++) {
      if (tmp[y][x] === '.') {
        s++;
        map[y]['push'](0x0);
      } else {
        map[y][__DECODE_0__(0xb3)](Infinity);
      }
    }
    map[y][__DECODE_0__(0xb3)](Infinity);
  }
  map[__DECODE_0__(0xb3)](Array(W + 0x2)[__DECODE_0__(0xbb)](Infinity));
  const dir = [[-0x1, 0x0], [0x0, -0x1], [0x1, 0x0], [0x0, 0x1]];
  const queue = [[0x1, 0x1, 0x2]];
  do {
    const q = queue[__DECODE_0__(0xba)]();
    for (const d of dir) {
      const x = q[0x0] + d[0x0];
      const y = q[0x1] + d[0x1];
      if (x === W && y === H) {
        return s - q[0x2];
      }
      if (map[y][x] === 0x0) {
        map[y][x] = q[0x2] + 0x1;
        queue['push']([x, y, q[0x2] + 0x1]);
      }
    }
  } while (queue[0x0]);
}(require('fs')[__DECODE_0__(0xb4)](__DECODE_0__(0xbd), 'utf8')));
