const a0_0x494f56 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x108f85 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x108f85(0xc2)) / 0x1 + -parseInt(_0x108f85(0xcd)) / 0x2 * (parseInt(_0x108f85(0xce)) / 0x3) + -parseInt(_0x108f85(0xc6)) / 0x4 * (parseInt(_0x108f85(0xc3)) / 0x5) + parseInt(_0x108f85(0xc7)) / 0x6 + -parseInt(_0x108f85(0xc5)) / 0x7 * (-parseInt(_0x108f85(0xc4)) / 0x8) + -parseInt(_0x108f85(0xc9)) / 0x9 + -parseInt(_0x108f85(0xcc)) / 0xa * (-parseInt(_0x108f85(0xc1)) / 0xb);
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
  const _0x156243 = __DECODE_0__;
  const S = input[_0x156243(0xcb)]('\x0a')[0x0][_0x156243(0xcb)]('');
  const K = parseInt(input['split']('\x0a')[0x0][_0x156243(0xcb)]('\x20')[0x1]);
  for (var i = 0x0; i < S['length']; i++) {
    if (S[i] != '1') {
      console[_0x156243(0xc8)](S[i]);
      return;
    }
  }
  console[_0x156243(0xc8)](0x1);
}
function __STRING_ARRAY__() {
  const _0x1a5de3 = ['52723JPxXKC', '147775rMfpOL', '49672xgSlRr', '210oJbQVP', '4LcrwtM', '1052796LUZcEt', 'log', '619254ADlRuf', 'readFileSync', 'split', '90gCxiUq', '6iklTNH', '147669LVKppL', 'utf8', '/dev/stdin', '47509MEjZXZ'];
  __STRING_ARRAY__ = function () {
    return _0x1a5de3;
  };
  return __STRING_ARRAY__();
}
main(require('fs')[a0_0x494f56(0xca)](a0_0x494f56(0xc0), a0_0x494f56(0xcf)));
