function __STRING_ARRAY__() {
  const _0x822111 = ['utf8', 'map', '8979SlTaEh', 'readFileSync', '407nILXBi', '6848550UIIDXB', '9275497DsvDfC', 'log', 'indexOf', '/dev/stdin', '1120ABdsAJ', '500VgOOLL', '177630devkdZ', '1119920NWpEBE', '36AIoOPV', '142IFnXmG', '6276432tYrjkU', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x822111;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xeb)) / 0x1 * (parseInt(__DECODE_0__(0xdd)) / 0x2) + parseInt(__DECODE_0__(0xe2)) / 0x3 * (-parseInt(__DECODE_0__(0xea)) / 0x4) + -parseInt(__DECODE_0__(0xda)) / 0x5 * (-parseInt(__DECODE_0__(0xdc)) / 0x6) + -parseInt(__DECODE_0__(0xe6)) / 0x7 + -parseInt(__DECODE_0__(0xde)) / 0x8 + -parseInt(__DECODE_0__(0xe5)) / 0x9 + parseInt(__DECODE_0__(0xdb)) / 0xa * (parseInt(__DECODE_0__(0xe4)) / 0xb);
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
  const [N] = parseNumberLine(lines[0x0]);
  const numbers = parseNumberLine(lines[0x1]);
  const [Q] = parseNumberLine(lines[0x2]);
  const operationLines = lines['slice'](0x3);
  let result = numbers['reduce']((t, v) => t + v, 0x0);
  for (let i = 0x0; i < Q; ++i) {
    const [B, C] = parseNumberLine(operationLines[i]);
    while (!![]) {
      const index = numbers[__DECODE_0__(0xe8)](B);
      if (index < 0x0) {
        break;
      }
      numbers[index] = C;
      result += C - B;
    }
    console[__DECODE_0__(0xe7)](result);
  }
}
function parseNumberLine(line, radix = 0xa) {
  return line[__DECODE_0__(0xdf)](/\s+/)[__DECODE_0__(0xe1)](_ => parseInt(_, radix));
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
main(require('fs')[__DECODE_0__(0xe3)](__DECODE_0__(0xe9), __DECODE_0__(0xe0))[__DECODE_0__(0xdf)]('\x0a'));
