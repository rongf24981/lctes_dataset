'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1a1)) / 0x1 + -parseInt(__DECODE_0__(0x1a3)) / 0x2 + parseInt(__DECODE_0__(0x1a7)) / 0x3 + -parseInt(__DECODE_0__(0x1a6)) / 0x4 * (-parseInt(__DECODE_0__(0x19e)) / 0x5) + -parseInt(__DECODE_0__(0x1a0)) / 0x6 + parseInt(__DECODE_0__(0x1a2)) / 0x7 * (-parseInt(__DECODE_0__(0x1a4)) / 0x8) + parseInt(__DECODE_0__(0x19d)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x936c7);
function __STRING_ARRAY__() {
  const _0x32030c = ['log', '431132oJwBGg', '3407601oGvSmf', 'split', 'utf-8', '10048833LXIcEv', '15IygPeC', 'sort', '6523404vxsikd', '358781XzaSlS', '4949WXNiyW', '1802530QzHRFV', '3872oyJHBj'];
  __STRING_ARRAY__ = function () {
    return _0x32030c;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(FPqIQV, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x19d;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FPqIQV, key);
}
function main(input) {
  input = input['trim']()['split']('\x0a');
  const N = Number(input[0x0]);
  const line2_arr = input[0x1][__DECODE_0__(0x1a8)]('\x20');
  let ans = 0x0;
  for (let i = 0x0; i < N; i++) {
    if (Number(line2_arr[i]) == 0x0) {
      continue;
    }
    for (let j = i + 0x1; j < N; j++) {
      ans = ans + Number(line2_arr[i]) * Number(line2_arr[j]);
    }
  }
  console[__DECODE_0__(0x1a5)](ans % 0x3b9aca07);
}
function numberSort(array) {
  array[__DECODE_0__(0x19f)](f);
  return array;
}
function f(a, b) {
  return a - b;
}
main(require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0x1a9)));
