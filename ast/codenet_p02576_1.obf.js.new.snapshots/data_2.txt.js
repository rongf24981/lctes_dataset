'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1a5)) / 0x1 * (-parseInt(__DECODE_0__(0x1a3)) / 0x2) + parseInt(__DECODE_0__(0x1a6)) / 0x3 * (parseInt(__DECODE_0__(0x1a4)) / 0x4) + parseInt(__DECODE_0__(0x1a2)) / 0x5 + -parseInt(__DECODE_0__(0x1a0)) / 0x6 + -parseInt(__DECODE_0__(0x1ab)) / 0x7 * (parseInt(__DECODE_0__(0x19f)) / 0x8) + parseInt(__DECODE_0__(0x1a1)) / 0x9 + -parseInt(__DECODE_0__(0x1a7)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4f9b6);
function __DECODE_0__(tKdoeB, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x19d;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tKdoeB, key);
}
function __STRING_ARRAY__() {
  const _0x2896a2 = ['4911uYFTqv', '357tRVaXo', '2802440rKdsiJ', 'readFileSync', 'sort', 'utf-8', '21gUSFIE', 'log', '/dev/stdin', '1086104rDjDVx', '1084878LxpKNq', '5143194hqsSLw', '584965bbfMOt', '54hfRsdO', '21464BQiegi'];
  __STRING_ARRAY__ = function () {
    return _0x2896a2;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  input = input['trim']()['split']('\x20');
  const N = Number(input[0x0]);
  const X = Number(input[0x1]);
  const T = Number(input[0x2]);
  let ans = 0x0;
  let i;
  for (i = 0x0; ans < N; i++) {
    ans += X;
  }
  console[__DECODE_0__(0x19d)](T * i);
}
function numberSort(array) {
  array[__DECODE_0__(0x1a9)](f);
  return array;
}
function f(a, b) {
  return a - b;
}
main(require('fs')[__DECODE_0__(0x1a8)](__DECODE_0__(0x19e), __DECODE_0__(0x1aa)));
