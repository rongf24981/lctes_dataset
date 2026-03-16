'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x90)) / 0x1 * (parseInt(__DECODE_0__(0x84)) / 0x2) + -parseInt(__DECODE_0__(0x88)) / 0x3 + parseInt(__DECODE_0__(0x91)) / 0x4 + -parseInt(__DECODE_0__(0x8d)) / 0x5 + -parseInt(__DECODE_0__(0x93)) / 0x6 + -parseInt(__DECODE_0__(0x8f)) / 0x7 * (-parseInt(__DECODE_0__(0x8b)) / 0x8) + parseInt(__DECODE_0__(0x8c)) / 0x9 * (parseInt(__DECODE_0__(0x87)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x799ab);
function __STRING_ARRAY__() {
  const _0xc73fa3 = ['trim', '5890008PyeWqr', '279963QxQmEK', '4338900ytCEKn', 'join', '7psRzBA', '77498sbACpQ', '1079836HMPFip', 'log', '229626pjwzMf', '/dev/stdin', '16gQyQNU', 'utf8', 'map', '150YhHuqn', '2065971uwVcSP', 'split'];
  __STRING_ARRAY__ = function () {
    return _0xc73fa3;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(SBnCAn, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x84;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SBnCAn, key);
}
function Main(input) {
  input = input[__DECODE_0__(0x8a)]()[__DECODE_0__(0x89)]('\x0a');
  const hw = input['shift']()[__DECODE_0__(0x89)]('\x20')['map'](str => Number(str));
  const H = hw[0x0];
  const W = hw[0x1];
  const data = input[__DECODE_0__(0x86)](ls => ls[__DECODE_0__(0x89)](''));
  const hy = [-0x1, -0x1, -0x1, 0x0, 0x0, 0x1, 0x1, 0x1];
  const wx = [-0x1, 0x0, 0x1, -0x1, 0x1, -0x1, 0x0, 0x1];
  for (let i = 0x0; i < H; i++) {
    for (let j = 0x0; j < W; j++) {
      if (data[i][j] === '#') {
        continue;
      }
      let count = 0x0;
      for (let k = 0x0; k < 0x8; k++) {
        const y = i + hy[k];
        const x = j + wx[k];
        if (y < 0x0 || H <= y) {
          continue;
        }
        if (x < 0x0 || W <= x) {
          continue;
        }
        if (data[y][x] === '#') {
          count += 0x1;
        }
      }
      data[i][j] = count;
    }
  }
  const result = data[__DECODE_0__(0x86)](ls => ls[__DECODE_0__(0x8e)](''))[__DECODE_0__(0x8e)]('\x0a');
  console[__DECODE_0__(0x92)](result);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x94), __DECODE_0__(0x85)));
