'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x11f)) / 0x1 * (parseInt(__DECODE_0__(0x128)) / 0x2) + -parseInt(__DECODE_0__(0x125)) / 0x3 * (parseInt(__DECODE_0__(0x120)) / 0x4) + parseInt(__DECODE_0__(0x121)) / 0x5 + -parseInt(__DECODE_0__(0x11e)) / 0x6 + -parseInt(__DECODE_0__(0x123)) / 0x7 * (parseInt(__DECODE_0__(0x127)) / 0x8) + -parseInt(__DECODE_0__(0x12d)) / 0x9 * (-parseInt(__DECODE_0__(0x122)) / 0xa) + parseInt(__DECODE_0__(0x12a)) / 0xb * (parseInt(__DECODE_0__(0x12c)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3672f);
function main(input) {
  input = input[__DECODE_0__(0x124)]()[__DECODE_0__(0x126)]('\x0a');
  const line_one = input[0x0][__DECODE_0__(0x126)]('\x20');
  const K = parseInt(input[0x1]);
  let line_one_arr = [];
  for (let i in line_one) {
    line_one_arr[__DECODE_0__(0x129)](parseInt(line_one[i]));
  }
  for (let i = 0x0; i < K; i++) {
    if (line_one_arr[0x0] >= line_one_arr[0x1]) {
      line_one_arr[0x1] = line_one_arr[0x1] * 0x2;
      continue;
    }
    if (line_one_arr[0x1] >= line_one_arr[0x2]) {
      line_one_arr[0x2] = line_one_arr[0x2] * 0x2;
    }
  }
  if (line_one_arr[0x0] < line_one_arr[0x1] && line_one_arr[0x1] < line_one_arr[0x2]) {
    console[__DECODE_0__(0x12b)]('Yes');
  } else {
    console[__DECODE_0__(0x12b)]('No');
  }
}
function __DECODE_0__(azpSZr, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x11e;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(azpSZr, key);
}
function numberSort(array) {
  array['sort'](f);
  return array;
}
function f(a, b) {
  return a - b;
}
function __STRING_ARRAY__() {
  const _0x59741d = ['56Gvszwv', '16TiBZmz', 'push', '759UhAkQL', 'log', '2472VgtZny', '9RKgjNN', '1476264HAHzlo', '37441tkVvkw', '4KBXOvd', '1906045gRzFmz', '1899610XfcTAT', '320642XECWQd', 'trim', '285609ZFzRjd', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x59741d;
  };
  return __STRING_ARRAY__();
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));
