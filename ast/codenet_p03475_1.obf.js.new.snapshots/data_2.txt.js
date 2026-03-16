'use strict';

function __DECODE_0__(wGNfFU, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xbb;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wGNfFU, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xca)) / 0x1 * (parseInt(__DECODE_0__(0xcb)) / 0x2) + -parseInt(__DECODE_0__(0xc2)) / 0x3 + -parseInt(__DECODE_0__(0xc0)) / 0x4 + -parseInt(__DECODE_0__(0xc1)) / 0x5 + parseInt(__DECODE_0__(0xbf)) / 0x6 * (-parseInt(__DECODE_0__(0xc3)) / 0x7) + -parseInt(__DECODE_0__(0xc8)) / 0x8 * (parseInt(__DECODE_0__(0xbc)) / 0x9) + -parseInt(__DECODE_0__(0xbd)) / 0xa * (-parseInt(__DECODE_0__(0xbb)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe2969);
function __STRING_ARRAY__() {
  const _0x54bc80 = ['10CAtgXM', 'shift', '929256LpmSMK', '6701096BMGWIv', '9074835XhaPsG', '372924AyaRJw', '49CZDTal', 'utf8', '/dev/stdin', 'readFileSync', 'map', '368bwGjVt', 'log', '175lWCMEl', '330OfTPFL', '72106595bMthNt', '175986RaDSsO'];
  __STRING_ARRAY__ = function () {
    return _0x54bc80;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  input = input['split'](/\n/);
  const n = ~~input[__DECODE_0__(0xbe)]();
  input = input[__DECODE_0__(0xc7)](v => v['split'](/\s/)[__DECODE_0__(0xc7)](x => ~~x));
  let ans = '';
  for (let i = 0x0; i < input['length']; i++) {
    let time = 0x0;
    let wait = 0x0;
    for (let j = i; j < input['length']; j++) {
      time += time > input[j][0x1] ? 0x0 : input[j][0x1] - time;
      time += input[j][0x0];
    }
    ans += time + '\x0a';
  }
  ans += '0\x0a';
  console[__DECODE_0__(0xc9)](ans);
}
main(require('fs')[__DECODE_0__(0xc6)](__DECODE_0__(0xc5), __DECODE_0__(0xc4)));
