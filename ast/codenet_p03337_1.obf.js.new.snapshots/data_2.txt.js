function __DECODE_0__(zQiXVu, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ad;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(zQiXVu, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x1bd)) / 0x1 + -parseInt(__DECODE_0__(0x1b5)) / 0x2 + parseInt(__DECODE_0__(0x1b2)) / 0x3 * (parseInt(__DECODE_0__(0x1ae)) / 0x4) + parseInt(__DECODE_0__(0x1b7)) / 0x5 + parseInt(__DECODE_0__(0x1bc)) / 0x6 * (-parseInt(__DECODE_0__(0x1b9)) / 0x7) + -parseInt(__DECODE_0__(0x1b8)) / 0x8 * (-parseInt(__DECODE_0__(0x1b1)) / 0x9) + parseInt(__DECODE_0__(0x1b0)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc52de);
function main(input) {
  const a = parseInt(input[__DECODE_0__(0x1ad)]('\x20')[0x0], 0xa);
  const b = parseInt(input['split']('\x20')[0x1], 0xa);
  ptnAdd = a + b;
  ptnSub = a - b;
  ptnMul = a * b;
  ans = Math[__DECODE_0__(0x1b6)][__DECODE_0__(0x1bb)](null, [ptnAdd, ptnSub, ptnMul]);
  console[__DECODE_0__(0x1af)](ans);
}
function __STRING_ARRAY__() {
  const _0x17fcab = ['3934535yifGJX', '424uRzWZq', '742LoZRFp', '/dev/stdin', 'apply', '74454QkCAHK', '363819wciRUz', 'split', '190864QNNfgm', 'log', '11276730WCXJUA', '52767rZusQY', '54wRRCJn', 'readFileSync', 'utf8', '2650052RawddR', 'max'];
  __STRING_ARRAY__ = function () {
    return _0x17fcab;
  };
  return __STRING_ARRAY__();
}
main(require('fs')[__DECODE_0__(0x1b3)](__DECODE_0__(0x1ba), __DECODE_0__(0x1b4)));
