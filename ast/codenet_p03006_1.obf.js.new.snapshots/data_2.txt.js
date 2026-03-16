function __DECODE_0__(dEwPIE, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x7b;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dEwPIE, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x8a)) / 0x1 + parseInt(__DECODE_0__(0x7d)) / 0x2 * (parseInt(__DECODE_0__(0x8b)) / 0x3) + parseInt(__DECODE_0__(0x87)) / 0x4 + parseInt(__DECODE_0__(0x82)) / 0x5 + parseInt(__DECODE_0__(0x86)) / 0x6 * (-parseInt(__DECODE_0__(0x7b)) / 0x7) + -parseInt(__DECODE_0__(0x7f)) / 0x8 + parseInt(__DECODE_0__(0x83)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xf03cd);
function Main(input) {
  input = input[__DECODE_0__(0x88)]('\x0a');
  const n = +input[0x0];
  if (n <= 0x2) {
    console[__DECODE_0__(0x85)](0x1);
    return;
  }
  const xy = input[__DECODE_0__(0x7e)](0x1)['map'](s => s[__DECODE_0__(0x88)]('\x20')['map'](n => +n));
  const map = {};
  xy[__DECODE_0__(0x8c)](a => {
    xy[__DECODE_0__(0x8c)](b => {
      if (a === b) {
        return;
      }
      const vec = [b[0x0] - a[0x0], b[0x1] - a[0x1]];
      const m = vec[__DECODE_0__(0x7c)]('_');
      map[m] = map[m] == null ? 0x1 : map[m] + 0x1;
    });
  });
  const res = Object[__DECODE_0__(0x89)](map)[__DECODE_0__(0x84)]((r, xystr) => {
    const count = map[xystr];
    return count > r[0x0] ? [count, xystr] : [r[0x0], r[0x1]];
  }, [0x0, '']);
  console[__DECODE_0__(0x85)](0x1 + (n - 0x1) - res[0x0]);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x80), __DECODE_0__(0x81)));
function __STRING_ARRAY__() {
  const _0x274a6d = ['3644856kkADIJ', '1937108rTNIXi', 'split', 'keys', '1334005DnWBkY', '5158563tmDgeZ', 'forEach', '14NhSrVz', 'join', '2xmutwg', 'slice', '2555920pDcIlf', '/dev/stdin', 'utf8', '7503820QAWVKZ', '1331082pzUGul', 'reduce', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x274a6d;
  };
  return __STRING_ARRAY__();
}
