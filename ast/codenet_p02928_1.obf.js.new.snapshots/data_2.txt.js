(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xf1)) / 0x1 * (-parseInt(__DECODE_0__(0xe9)) / 0x2) + -parseInt(__DECODE_0__(0xf5)) / 0x3 + -parseInt(__DECODE_0__(0xf7)) / 0x4 * (-parseInt(__DECODE_0__(0xeb)) / 0x5) + parseInt(__DECODE_0__(0xe7)) / 0x6 * (-parseInt(__DECODE_0__(0xf2)) / 0x7) + parseInt(__DECODE_0__(0xf0)) / 0x8 * (parseInt(__DECODE_0__(0xf4)) / 0x9) + -parseInt(__DECODE_0__(0xf3)) / 0xa * (-parseInt(__DECODE_0__(0xee)) / 0xb) + parseInt(__DECODE_0__(0xf8)) / 0xc * (-parseInt(__DECODE_0__(0xf6)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2e89d);
function Main(input) {
  input = input[__DECODE_0__(0xec)]('\x0a');
  const input1 = input[0x0][__DECODE_0__(0xec)]('\x20');
  const N = parseInt(input1[0x0]);
  const K = parseInt(input1[0x1]);
  const As = input[0x1][__DECODE_0__(0xec)]('\x20')[__DECODE_0__(0xed)](x => parseInt(x));
  var count = 0x0;
  for (i = 0x0; i < N; i++) {
    var u = As[__DECODE_0__(0xe5)](i + 0x1)['filter'](x => x < As[i])[__DECODE_0__(0xe6)];
    var v = As['filter'](x => x < As[i])[__DECODE_0__(0xe6)];
    count += u * K % (0x3b9aca00 + 0x7);
    count += v * (K - 0x1) * K / 0x2 % (0x3b9aca00 + 0x7);
    count = count % (0x3b9aca00 + 0x7);
  }
  console['log'](count);
}
Main(require('fs')[__DECODE_0__(0xef)](__DECODE_0__(0xe8), __DECODE_0__(0xea)));
function __DECODE_0__(sILAPl, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe5;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(sILAPl, key);
}
function __STRING_ARRAY__() {
  const _0x43ad5f = ['13NSlmLk', '1060YNpXWj', '4267812WpplIx', 'slice', 'length', '48wkdWke', '/dev/stdin', '3014bKbdPe', 'utf8', '6215pPfoMH', 'split', 'map', '498124GIShma', 'readFileSync', '912MuESSk', '46XTinzw', '86471scIDtS', '80lsvRjF', '8361QFoQdQ', '665397SpGfsF'];
  __STRING_ARRAY__ = function () {
    return _0x43ad5f;
  };
  return __STRING_ARRAY__();
}
