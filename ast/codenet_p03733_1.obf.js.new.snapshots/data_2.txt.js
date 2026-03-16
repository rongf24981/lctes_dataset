function __DECODE_0__(PltiIN, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xdc;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PltiIN, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xee)) / 0x1 + -parseInt(__DECODE_0__(0xde)) / 0x2 * (-parseInt(__DECODE_0__(0xe4)) / 0x3) + parseInt(__DECODE_0__(0xe1)) / 0x4 * (parseInt(__DECODE_0__(0xdf)) / 0x5) + -parseInt(__DECODE_0__(0xec)) / 0x6 * (-parseInt(__DECODE_0__(0xe6)) / 0x7) + -parseInt(__DECODE_0__(0xdc)) / 0x8 * (parseInt(__DECODE_0__(0xe3)) / 0x9) + -parseInt(__DECODE_0__(0xe2)) / 0xa * (-parseInt(__DECODE_0__(0xdd)) / 0xb) + -parseInt(__DECODE_0__(0xe0)) / 0xc * (parseInt(__DECODE_0__(0xea)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x58371);
function __STRING_ARRAY__() {
  const _0x2ba2f7 = ['6240wgQjOL', '9vXidCi', '12cfvGFF', 'readFileSync', '1889713KkSBkt', 'split', 'log', 'map', '24006853JnypmU', 'trim', '6PIyopC', 'sort', '561443DxJVCk', '457544jkhknx', '7524mGoNJH', '231286CatpzM', '907355EYVjqo', '12TPotnC', '12rzSaUO'];
  __STRING_ARRAY__ = function () {
    return _0x2ba2f7;
  };
  return __STRING_ARRAY__();
}
console[__DECODE_0__(0xe8)]((args => {
  const [[N, T], t] = args[__DECODE_0__(0xeb)]()[__DECODE_0__(0xe7)]`\n`['map'](r => r[__DECODE_0__(0xe7)]` `[__DECODE_0__(0xe9)](v => v | 0x0));
  t[__DECODE_0__(0xed)]((a, b) => a - b);
  let s = T;
  for (let i = 0x1; i < N; i++) {
    if (t[i - 0x1] + T > t[i]) {
      s += t[i] - t[i - 0x1];
    } else {
      s += T;
    }
  }
  return '' + s;
})(require('fs')[__DECODE_0__(0xe5)]('/dev/stdin', 'utf8')));
