function __DECODE_0__(ElpHVR, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x170;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ElpHVR, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x170)) / 0x1 * (-parseInt(__DECODE_0__(0x175)) / 0x2) + -parseInt(__DECODE_0__(0x17b)) / 0x3 + parseInt(__DECODE_0__(0x180)) / 0x4 + -parseInt(__DECODE_0__(0x178)) / 0x5 * (parseInt(__DECODE_0__(0x17f)) / 0x6) + parseInt(__DECODE_0__(0x174)) / 0x7 * (parseInt(__DECODE_0__(0x17d)) / 0x8) + parseInt(__DECODE_0__(0x171)) / 0x9 * (parseInt(__DECODE_0__(0x17a)) / 0xa) + parseInt(__DECODE_0__(0x177)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2ba44);
function Main(s) {
  s = s[__DECODE_0__(0x173)]('\x0a')[__DECODE_0__(0x17e)](a => parseInt(a));
  const n = s[0x0];
  s = s[0x1];
  const sn = Math['ceil'](Math['sqrt'](n));
  if (s === n) {
    console[__DECODE_0__(0x179)](n + 0x1);
    return;
  }
  for (var b = 0x2; b < sn; b++) {
    if (s === f(b, n)) {
      console['log'](b);
      return;
    }
  }
  var p = Math['floor']((n - s) / (sn - 0x1));
  for (; p > 0x0; p--) {
    b = Math[__DECODE_0__(0x176)]((n - s) / p + 0x1);
    if (s === f(b, n)) {
      console[__DECODE_0__(0x179)](b);
      return;
    }
  }
  console[__DECODE_0__(0x179)](-0x1);
}
function __STRING_ARRAY__() {
  const _0x3fb169 = ['floor', '4507855yMsjbM', '2895NJXOcA', 'log', '22490lOeCci', '970431Hzhhvl', '/dev/stdin', '382968DFLhXr', 'map', '138KhOJKC', '222048NcCyCU', '1DwiLIT', '1053bPtyPZ', 'readFileSync', 'split', '21aESMtl', '713026rHFFEy'];
  __STRING_ARRAY__ = function () {
    return _0x3fb169;
  };
  return __STRING_ARRAY__();
}
function f(b, n) {
  if (n < b) {
    return n;
  }
  return f(b, Math[__DECODE_0__(0x176)](n / b)) + n % b;
}
Main(require('fs')[__DECODE_0__(0x172)](__DECODE_0__(0x17c), 'utf8')['trim']());
