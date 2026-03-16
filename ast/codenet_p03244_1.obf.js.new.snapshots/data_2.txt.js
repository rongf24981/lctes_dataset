'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xe0)) / 0x1 + parseInt(__DECODE_0__(0xe8)) / 0x2 * (parseInt(__DECODE_0__(0xe6)) / 0x3) + -parseInt(__DECODE_0__(0xde)) / 0x4 + parseInt(__DECODE_0__(0xec)) / 0x5 * (-parseInt(__DECODE_0__(0xeb)) / 0x6) + -parseInt(__DECODE_0__(0xe4)) / 0x7 * (-parseInt(__DECODE_0__(0xed)) / 0x8) + parseInt(__DECODE_0__(0xe5)) / 0x9 + parseInt(__DECODE_0__(0xe9)) / 0xa * (parseInt(__DECODE_0__(0xdd)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe2e6a);
function Main(input) {
  let lines = input[__DECODE_0__(0xdf)]('\x0a');
  let N = lines[__DECODE_0__(0xea)]() - 0x0;
  let V = lines[__DECODE_0__(0xea)]()[__DECODE_0__(0xdf)](/\s/)[__DECODE_0__(0xe1)](v => v - 0x0);
  let ans = 0x0;
  for (let n = 0x0; n < N - 0x2; n++) {
    if (V[n] == V[n + 0x1]) {
      ans += 0x1;
    }
    if (V[n] != V[n + 0x2]) {
      ans += 0x1;
    }
  }
  console['log'](ans);
}
function __STRING_ARRAY__() {
  const _0x14220e = ['12894739pdLsMo', '5612224moTmXq', 'split', '815547STFfAv', 'map', '/dev/stdin', 'utf8', '7xUbwnc', '3723858TPVrMc', '3DGkzMX', 'readFileSync', '920926TTuEaf', '20rmMHaY', 'shift', '12Bxvkvn', '3017890zEyBJN', '9091376WhrqeA'];
  __STRING_ARRAY__ = function () {
    return _0x14220e;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(JVFkzn, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xdd;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(JVFkzn, key);
}
Main(require('fs')[__DECODE_0__(0xe7)](__DECODE_0__(0xe2), __DECODE_0__(0xe3)));
