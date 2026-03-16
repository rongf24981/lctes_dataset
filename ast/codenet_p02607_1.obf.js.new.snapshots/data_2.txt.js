'use strict';

function __DECODE_0__(YyiSOA, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xb2;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YyiSOA, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xb8)) / 0x1 + -parseInt(__DECODE_0__(0xb6)) / 0x2 + parseInt(__DECODE_0__(0xb7)) / 0x3 + parseInt(__DECODE_0__(0xbf)) / 0x4 * (parseInt(__DECODE_0__(0xbe)) / 0x5) + -parseInt(__DECODE_0__(0xb2)) / 0x6 + -parseInt(__DECODE_0__(0xb5)) / 0x7 + parseInt(__DECODE_0__(0xb9)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe2476);
function __STRING_ARRAY__() {
  const _0x40bc03 = ['split', '/dev/stdin', '2660399auPhTH', '2863512IpHosm', '4075398RbVrEA', '409280NiOdJN', '21220200BZvzwm', 'length', 'log', 'trim', 'readFileSync', '704020NkQxjF', '4zkREuH', '6023184ZIlizB'];
  __STRING_ARRAY__ = function () {
    return _0x40bc03;
  };
  return __STRING_ARRAY__();
}
function main(arg) {
  let a = arg[__DECODE_0__(0xbc)]()['split']('\x0a')[0x1][__DECODE_0__(0xb3)]('\x20')['map'](Number);
  let N = a[__DECODE_0__(0xba)];
  let ans = 0x0;
  for (let i = 0x0; i < N; i++) {
    if ((i + 0x1) % 0x2 === 0x0) {
      continue;
    }
    if (a[i] % 0x2 === 0x0) {
      continue;
    }
    ans++;
  }
  console[__DECODE_0__(0xbb)](ans);
}
main(require('fs')[__DECODE_0__(0xbd)](__DECODE_0__(0xb4), 'utf8'));
