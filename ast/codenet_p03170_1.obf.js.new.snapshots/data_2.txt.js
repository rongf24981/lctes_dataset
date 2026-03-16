'use strict';

function __DECODE_0__(RupBiR, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ca;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RupBiR, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1da)) / 0x1 + parseInt(__DECODE_0__(0x1d8)) / 0x2 + -parseInt(__DECODE_0__(0x1cd)) / 0x3 + -parseInt(__DECODE_0__(0x1db)) / 0x4 * (parseInt(__DECODE_0__(0x1cf)) / 0x5) + -parseInt(__DECODE_0__(0x1d2)) / 0x6 * (-parseInt(__DECODE_0__(0x1ca)) / 0x7) + -parseInt(__DECODE_0__(0x1dc)) / 0x8 + parseInt(__DECODE_0__(0x1d5)) / 0x9 * (parseInt(__DECODE_0__(0x1ce)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x77502);
function __STRING_ARRAY__() {
  const _0x1c9601 = ['614890FwdWrS', '5xyZepj', 'First', 'shift', '222cOIbvr', 'readFileSync', 'Second', '153YrrzpW', 'utf8', 'trim', '1090934Qyhmiy', 'map', '70428wLQVLQ', '1060580NBGLqL', '2288952yFPmhx', '21182oLzcYq', 'log', 'tbd', '1777032nOiOLX'];
  __STRING_ARRAY__ = function () {
    return _0x1c9601;
  };
  return __STRING_ARRAY__();
}
(function (input) {
  input = input[__DECODE_0__(0x1d7)]()['split'](/\s+/)[__DECODE_0__(0x1d9)](x => x - 0x0);
  const N = input[__DECODE_0__(0x1d1)]();
  const K = input[__DECODE_0__(0x1d1)]();
  const A = input;
  const dp = new Array(K + 0x2)['fill'](__DECODE_0__(0x1cc));
  dp[K + 0x1] = !![];
  for (let i = K + 0x1; i >= 0x0; i--) {
    if (dp[i]) {
      if (dp[i - 0x1] === !![]) {
        i--;
        continue;
      }
    }
    for (let j = 0x1; j <= A[0x0]; j++) {
      if (i - j >= 0x0) {
        if (dp[i - j] === __DECODE_0__(0x1cc)) {
          dp[i - j] = ![];
        }
      }
    }
    if (!dp[i]) {
      for (let a = 0x0; a < N; a++) {
        if (i - A[a] >= 0x0) {
          dp[i - A[a]] = !![];
        }
      }
    }
  }
  if (dp[0x0]) {
    console[__DECODE_0__(0x1cb)](__DECODE_0__(0x1d0));
  } else {
    console['log'](__DECODE_0__(0x1d4));
  }
})(require('fs')[__DECODE_0__(0x1d3)]('/dev/stdin', __DECODE_0__(0x1d6)));
