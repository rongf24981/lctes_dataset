'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1ed)) / 0x1 + -parseInt(__DECODE_0__(0x1f0)) / 0x2 + -parseInt(__DECODE_0__(0x201)) / 0x3 * (-parseInt(__DECODE_0__(0x1ff)) / 0x4) + -parseInt(__DECODE_0__(0x1f3)) / 0x5 * (-parseInt(__DECODE_0__(0x200)) / 0x6) + parseInt(__DECODE_0__(0x1fb)) / 0x7 * (parseInt(__DECODE_0__(0x1fd)) / 0x8) + parseInt(__DECODE_0__(0x1f5)) / 0x9 * (parseInt(__DECODE_0__(0x1fa)) / 0xa) + -parseInt(__DECODE_0__(0x1f1)) / 0xb * (-parseInt(__DECODE_0__(0x1fc)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xac2f0);
function __STRING_ARRAY__() {
  const _0x5b15b0 = ['255835vmGCOL', 'map', '2295FRVlgd', 'length', 'split', '/dev/stdin', 'readFileSync', '890SmLQuM', '5625564NtJCqE', '132CVMipg', '8xEjvQu', 'log', '10204JmNJuG', '6ZsDhDx', '123anwnCz', 'push', 'sqrt', '662775MZsdhW', 'join', 'forEach', '2316976iKlrzV', '1544422rjNfRC', 'UTF-8'];
  __STRING_ARRAY__ = function () {
    return _0x5b15b0;
  };
  return __STRING_ARRAY__();
}
const arg_str = require('fs')[__DECODE_0__(0x1f9)](__DECODE_0__(0x1f8), __DECODE_0__(0x1f2));
const args = arg_str[__DECODE_0__(0x1f7)]('\x0a');
const N = parseInt(args[0x0]);
const a_array = args[0x1][__DECODE_0__(0x1f7)]('\x20')[__DECODE_0__(0x1f4)](x => parseInt(x));
function __DECODE_0__(DfcSSg, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ed;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DfcSSg, key);
}
for (let i = N; i >= 0x1; i--) {
  let i_n = 0x0;
  if (i == 0x1) {
    i_n = N;
  } else {
    i_n = Math[__DECODE_0__(0x203)](N);
  }
  for (let j = i_n; j >= 0x1; j--) {
    if (i < j) {
      if (j % i == 0x0) {
        a_array[i - 0x1] ^= a_array[j - 0x1];
      }
    } else {
      continue;
    }
  }
}
const result = [];
a_array[__DECODE_0__(0x1ef)]((item, index) => {
  if (item == 0x1) {
    result[__DECODE_0__(0x202)](index + 0x1);
  }
});
console[__DECODE_0__(0x1fe)](result[__DECODE_0__(0x1f6)]);
if (result[__DECODE_0__(0x1f6)] > 0x0) {
  console[__DECODE_0__(0x1fe)](result[__DECODE_0__(0x1ee)]('\x20'));
}
