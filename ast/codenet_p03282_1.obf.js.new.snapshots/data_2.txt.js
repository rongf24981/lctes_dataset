(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xc2)) / 0x1 + -parseInt(__DECODE_0__(0xcd)) / 0x2 * (parseInt(__DECODE_0__(0xce)) / 0x3) + -parseInt(__DECODE_0__(0xc6)) / 0x4 * (parseInt(__DECODE_0__(0xc3)) / 0x5) + parseInt(__DECODE_0__(0xc7)) / 0x6 + -parseInt(__DECODE_0__(0xc5)) / 0x7 * (-parseInt(__DECODE_0__(0xc4)) / 0x8) + -parseInt(__DECODE_0__(0xc9)) / 0x9 + -parseInt(__DECODE_0__(0xcc)) / 0xa * (-parseInt(__DECODE_0__(0xc1)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x18dde);
function __DECODE_0__(QLlyyO, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xc0;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QLlyyO, key);
}
function main(input) {
  const S = input[__DECODE_0__(0xcb)]('\x0a')[0x0][__DECODE_0__(0xcb)]('');
  const K = parseInt(input['split']('\x0a')[0x0][__DECODE_0__(0xcb)]('\x20')[0x1]);
  for (var i = 0x0; i < S['length']; i++) {
    if (S[i] != '1') {
      console[__DECODE_0__(0xc8)](S[i]);
      return;
    }
  }
  console[__DECODE_0__(0xc8)](0x1);
}
function __STRING_ARRAY__() {
  const _0x1a5de3 = ['52723JPxXKC', '147775rMfpOL', '49672xgSlRr', '210oJbQVP', '4LcrwtM', '1052796LUZcEt', 'log', '619254ADlRuf', 'readFileSync', 'split', '90gCxiUq', '6iklTNH', '147669LVKppL', 'utf8', '/dev/stdin', '47509MEjZXZ'];
  __STRING_ARRAY__ = function () {
    return _0x1a5de3;
  };
  return __STRING_ARRAY__();
}
main(require('fs')[__DECODE_0__(0xca)](__DECODE_0__(0xc0), __DECODE_0__(0xcf)));
