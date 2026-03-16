'use strict';

function __STRING_ARRAY__() {
  const _0x3dfa2d = ['length', 'reduce', '60694bVhhtC', 'data', 'map', '325144DvfNyn', 'split', 'stdin', '1318944keesNn', 'log', '391027UsvTzb', 'trim', 'setEncoding', '1085405CJPqQn', 'resume', 'keys', '531801NbiVhh', '3vwVJxW', 'end', '6dUeNVm', '234911cvTNGU'];
  __STRING_ARRAY__ = function () {
    return _0x3dfa2d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xbb)) / 0x1 + -parseInt(__DECODE_0__(0xbe)) / 0x2 + -parseInt(__DECODE_0__(0xb8)) / 0x3 * (-parseInt(__DECODE_0__(0xc1)) / 0x4) + parseInt(__DECODE_0__(0xc9)) / 0x5 + parseInt(__DECODE_0__(0xba)) / 0x6 * (-parseInt(__DECODE_0__(0xc6)) / 0x7) + -parseInt(__DECODE_0__(0xc4)) / 0x8 + -parseInt(__DECODE_0__(0xb7)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x36789);
function main(n, array) {
  let counter = {};
  for (let a of array) {
    counter[a] = counter[a] || 0x0;
    counter[a]++;
  }
  let nums = Object[__DECODE_0__(0xb6)](counter);
  let evenCount = nums[__DECODE_0__(0xbd)]((count, num) => {
    if (counter[num] % 0x2 === 0x0) {
      return count + 0x1;
    } else {
      return count;
    }
  }, 0x0);
  let answer;
  if (evenCount % 0x2 === 0x0) {
    answer = nums[__DECODE_0__(0xbc)];
  } else {
    answer = nums[__DECODE_0__(0xbc)] - 0x1;
  }
  console[__DECODE_0__(0xc5)](answer);
}
function __DECODE_0__(VcwVCF, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xb6;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VcwVCF, key);
}
function doMain() {
  let input = '';
  process[__DECODE_0__(0xc3)][__DECODE_0__(0xca)]();
  process[__DECODE_0__(0xc3)][__DECODE_0__(0xc8)]('utf8');
  process['stdin']['on'](__DECODE_0__(0xbf), chunk => {
    input += chunk;
  });
  process['stdin']['on'](__DECODE_0__(0xb9), () => {
    input = input[__DECODE_0__(0xc7)]()[__DECODE_0__(0xc2)]('\x0a');
    let n = Number(input[0x0]);
    let array = input[0x1]['split']('\x20')[__DECODE_0__(0xc0)](a => Number(a));
    main(n, array);
  });
}
doMain();
