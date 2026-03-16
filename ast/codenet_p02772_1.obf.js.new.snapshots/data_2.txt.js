function __DECODE_0__(koHqoz, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x19a;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(koHqoz, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1a2)) / 0x1 + parseInt(__DECODE_0__(0x19f)) / 0x2 + parseInt(__DECODE_0__(0x1a4)) / 0x3 * (-parseInt(__DECODE_0__(0x19d)) / 0x4) + parseInt(__DECODE_0__(0x1a0)) / 0x5 + parseInt(__DECODE_0__(0x1ac)) / 0x6 * (-parseInt(__DECODE_0__(0x1ab)) / 0x7) + -parseInt(__DECODE_0__(0x1a1)) / 0x8 * (parseInt(__DECODE_0__(0x1a7)) / 0x9) + parseInt(__DECODE_0__(0x1a3)) / 0xa * (-parseInt(__DECODE_0__(0x1a9)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x74768);
function Main(input) {
  input = input[__DECODE_0__(0x1a5)]('\x0a');
  const N = input[__DECODE_0__(0x19b)]();
  const A = input[__DECODE_0__(0x1a8)](v => parseInt(v));
  f = ![];
  for (i = 0x0; i < A[__DECODE_0__(0x19e)]; i++) {
    if (A[i] % 0x2 == 0x0) {
      if (A[i] % 0x3 != 0x0 && A[i] % 0x5 != 0x0) {
        f = !![];
      }
    }
  }
  if (f) {
    console[__DECODE_0__(0x1a6)]('DENIED');
  } else {
    console[__DECODE_0__(0x1a6)](__DECODE_0__(0x19a));
  }
}
Main(require('fs')[__DECODE_0__(0x19c)]('/dev/stdin', __DECODE_0__(0x1aa)));
function __STRING_ARRAY__() {
  const _0x76feac = ['APPROVED', 'shift', 'readFileSync', '16wlpycJ', 'length', '1684120OdTbAk', '3519865fJOehS', '306664LGYqaY', '61453ZqtxoS', '297890dokqNc', '313317wEcoOF', 'split', 'log', '9BicBRn', 'map', '11fuRMKz', 'utf8', '730338BkANTo', '30UBnVfo'];
  __STRING_ARRAY__ = function () {
    return _0x76feac;
  };
  return __STRING_ARRAY__();
}
