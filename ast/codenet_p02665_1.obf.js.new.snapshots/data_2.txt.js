function __DECODE_0__(Dodhqx, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xdf;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Dodhqx, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xec)) / 0x1 + parseInt(__DECODE_0__(0xeb)) / 0x2 * (parseInt(__DECODE_0__(0xe8)) / 0x3) + -parseInt(__DECODE_0__(0xe3)) / 0x4 * (-parseInt(__DECODE_0__(0xe0)) / 0x5) + -parseInt(__DECODE_0__(0xe6)) / 0x6 * (-parseInt(__DECODE_0__(0xe7)) / 0x7) + parseInt(__DECODE_0__(0xdf)) / 0x8 + -parseInt(__DECODE_0__(0xe4)) / 0x9 + parseInt(__DECODE_0__(0xe1)) / 0xa * (parseInt(__DECODE_0__(0xed)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x20c2c);
console['log']((args => {
  const [[N], A] = args['trim']()[__DECODE_0__(0xea)]('\x0a')[__DECODE_0__(0xee)](r => r['split']('\x20')[__DECODE_0__(0xee)](v => v | 0x0));
  const a = [0x1 - A[0x0]];
  for (let i = 0x1; i < N; i++) {
    a[__DECODE_0__(0xe9)](a[i - 0x1] * 0x2 - A[i]);
  }
  a[__DECODE_0__(0xe9)](0x0);
  let n = BigInt(A[N]);
  for (let i = N - 0x1; i >= 0x0; i--) {
    const c = a[i + 0x1] + A[i + 0x1];
    if (a[i] > c) {
      a[i] = c;
    } else {
      if (a[i] * 0x2 < c) {
        return '-1';
      }
    }
    n += BigInt(a[i] + A[i]);
  }
  return '' + n;
})(require('fs')[__DECODE_0__(0xe2)]('/dev/stdin', __DECODE_0__(0xe5))));
function __STRING_ARRAY__() {
  const _0x13abe6 = ['10FvfqUT', '10OKFNSO', 'readFileSync', '231932xbGTUo', '1015542kGNhdG', 'utf8', '6684iQCuhn', '77EPByTW', '39mGSkss', 'push', 'split', '7282cWYIlf', '114972MIGFks', '67199myEsoM', 'map', '1442688TrIEWQ'];
  __STRING_ARRAY__ = function () {
    return _0x13abe6;
  };
  return __STRING_ARRAY__();
}
