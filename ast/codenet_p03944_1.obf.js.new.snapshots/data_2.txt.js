'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xd9)) / 0x1 + parseInt(__DECODE_0__(0xd5)) / 0x2 * (-parseInt(__DECODE_0__(0xdf)) / 0x3) + parseInt(__DECODE_0__(0xd3)) / 0x4 * (-parseInt(__DECODE_0__(0xcf)) / 0x5) + parseInt(__DECODE_0__(0xde)) / 0x6 * (-parseInt(__DECODE_0__(0xd6)) / 0x7) + parseInt(__DECODE_0__(0xd7)) / 0x8 * (-parseInt(__DECODE_0__(0xdd)) / 0x9) + parseInt(__DECODE_0__(0xda)) / 0xa + -parseInt(__DECODE_0__(0xdc)) / 0xb * (-parseInt(__DECODE_0__(0xd4)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9c355);
function __DECODE_0__(SJKcdi, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xcf;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SJKcdi, key);
}
function Main(input) {
  input = input[__DECODE_0__(0xd8)]()[__DECODE_0__(0xdb)]('\x0a');
  let WHN = input[0x0][__DECODE_0__(0xdb)]('\x20')[__DECODE_0__(0xe1)](Number);
  let minX = 0x0;
  let minY = 0x0;
  let maxX = WHN[0x0];
  let maxY = WHN[0x1];
  const N = WHN[0x2];
  for (let i = 0x1; i <= N; i++) {
    let tmp = input[i]['trim']()[__DECODE_0__(0xdb)]('\x20')[__DECODE_0__(0xe1)](Number);
    let A = tmp[0x2];
    if (A === 0x1) {
      if (tmp[0x0] > minX) {
        minX = tmp[0x0];
      }
    } else {
      if (A === 0x2) {
        if (tmp[0x0] < maxX) {
          maxX = tmp[0x0];
        }
      } else {
        if (A === 0x3) {
          if (tmp[0x1] > minY) {
            minY = tmp[0x1];
          }
        } else {
          if (A === 0x4) {
            if (tmp[0x1] < maxY) {
              maxY = tmp[0x1];
            }
          }
        }
      }
    }
  }
  const X = maxX - minX;
  const Y = maxY - minY;
  if (X <= 0x0 || Y <= 0x0) {
    console['log'](0x0);
  } else {
    console[__DECODE_0__(0xd0)](X * Y);
  }
}
Main(require('fs')[__DECODE_0__(0xe0)](__DECODE_0__(0xd1), __DECODE_0__(0xd2)));
function __STRING_ARRAY__() {
  const _0x271685 = ['11143790omYVCU', 'split', '21483GKAYQN', '54CghDZA', '3410076VCNwEq', '3ILEcwA', 'readFileSync', 'map', '5GzSlwJ', 'log', '/dev/stdin', 'utf8', '1069436oLJbqk', '17412FldftG', '1962154eoTXjd', '7sKjEwN', '308536yitpvM', 'trim', '1260169LxgdIT'];
  __STRING_ARRAY__ = function () {
    return _0x271685;
  };
  return __STRING_ARRAY__();
}
