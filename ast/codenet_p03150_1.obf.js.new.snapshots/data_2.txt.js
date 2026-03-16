'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xa8)) / 0x1 + parseInt(__DECODE_0__(0xa0)) / 0x2 * (parseInt(__DECODE_0__(0x99)) / 0x3) + -parseInt(__DECODE_0__(0x9e)) / 0x4 * (parseInt(__DECODE_0__(0xab)) / 0x5) + parseInt(__DECODE_0__(0xa6)) / 0x6 + -parseInt(__DECODE_0__(0xa2)) / 0x7 * (parseInt(__DECODE_0__(0x9a)) / 0x8) + parseInt(__DECODE_0__(0xa4)) / 0x9 * (parseInt(__DECODE_0__(0xaa)) / 0xa) + parseInt(__DECODE_0__(0xac)) / 0xb * (-parseInt(__DECODE_0__(0xa3)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc4417);
function __DECODE_0__(XqDZjG, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x99;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XqDZjG, key);
}
function __STRING_ARRAY__() {
  const _0x33950e = ['stdin', 'stdout', '774BiSSKw', '512PWPMIG', 'line', 'keyence', 'slice', '4KVfGzE', 'log', '4546QQChzs', 'createInterface', '76223zbIXRm', '220548XnTdJr', '23733zaOIBK', 'indexOf', '9149388vhRkTa', 'shift', '17813FpeiaR', 'YES', '6050oGcUKg', '5145680yqJhSA', '715qHTNud'];
  __STRING_ARRAY__ = function () {
    return _0x33950e;
  };
  return __STRING_ARRAY__();
}
process[__DECODE_0__(0xad)]['resume']();
process[__DECODE_0__(0xad)]['setEncoding']('utf8');
var reader = require('readline')[__DECODE_0__(0xa1)]({
  'input': process['stdin'],
  'output': process[__DECODE_0__(0xae)]
});
reader['on'](__DECODE_0__(0x9b), line => {
  let word = line;
  let arr = ['k', 'e', 'y', 'e', 'n', 'c', 'e'];
  let keyence = __DECODE_0__(0x9c);
  if (word[__DECODE_0__(0xa5)]('keyence') != -0x1) {
    console[__DECODE_0__(0x9f)](__DECODE_0__(0xa9));
    return;
  }
  let str = '';
  let ans = ![];
  for (let i = 0x0; i < 0x6; i++) {
    str += arr[__DECODE_0__(0xa7)]();
    let tmp = keyence[__DECODE_0__(0x9d)](i + 0x1);
    if (word[__DECODE_0__(0xa5)](str) != -0x1 && word['indexOf'](tmp) != -0x1) {
      ans = !![];
      break;
    }
  }
  if (ans) {
    console[__DECODE_0__(0x9f)](__DECODE_0__(0xa9));
  } else {
    console[__DECODE_0__(0x9f)]('NO');
  }
});
