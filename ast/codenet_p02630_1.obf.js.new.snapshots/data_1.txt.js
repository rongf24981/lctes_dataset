const a0_0x4082f5 = __DECODE_0__;
function __STRING_ARRAY__() {
  const _0x822111 = ['utf8', 'map', '8979SlTaEh', 'readFileSync', '407nILXBi', '6848550UIIDXB', '9275497DsvDfC', 'log', 'indexOf', '/dev/stdin', '1120ABdsAJ', '500VgOOLL', '177630devkdZ', '1119920NWpEBE', '36AIoOPV', '142IFnXmG', '6276432tYrjkU', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x822111;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const _0x4d7cc2 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x4d7cc2(0xeb)) / 0x1 * (parseInt(_0x4d7cc2(0xdd)) / 0x2) + parseInt(_0x4d7cc2(0xe2)) / 0x3 * (-parseInt(_0x4d7cc2(0xea)) / 0x4) + -parseInt(_0x4d7cc2(0xda)) / 0x5 * (-parseInt(_0x4d7cc2(0xdc)) / 0x6) + -parseInt(_0x4d7cc2(0xe6)) / 0x7 + -parseInt(_0x4d7cc2(0xde)) / 0x8 + -parseInt(_0x4d7cc2(0xe5)) / 0x9 + parseInt(_0x4d7cc2(0xdb)) / 0xa * (parseInt(_0x4d7cc2(0xe4)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa6ee1);
function main(lines) {
  const _0x106cfe = __DECODE_0__;
  const [N] = parseNumberLine(lines[0x0]);
  const numbers = parseNumberLine(lines[0x1]);
  const [Q] = parseNumberLine(lines[0x2]);
  const operationLines = lines['slice'](0x3);
  let result = numbers['reduce']((t, v) => t + v, 0x0);
  for (let i = 0x0; i < Q; ++i) {
    const [B, C] = parseNumberLine(operationLines[i]);
    while (!![]) {
      const index = numbers[_0x106cfe(0xe8)](B);
      if (index < 0x0) {
        break;
      }
      numbers[index] = C;
      result += C - B;
    }
    console[_0x106cfe(0xe7)](result);
  }
}
function parseNumberLine(line, radix = 0xa) {
  const _0x37ca04 = __DECODE_0__;
  return line[_0x37ca04(0xdf)](/\s+/)[_0x37ca04(0xe1)](_ => parseInt(_, radix));
}
function __DECODE_0__(vgUALF, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xda;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vgUALF, key);
}
main(require('fs')[a0_0x4082f5(0xe3)](a0_0x4082f5(0xe9), a0_0x4082f5(0xe0))[a0_0x4082f5(0xdf)]('\x0a'));
