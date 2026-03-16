function __DECODE_0__(QtKkIa, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xea;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QtKkIa, key);
}
function __STRING_ARRAY__() {
  const _0x5b95c4 = ['19590OVVzfY', '18627kLLAgO', 'Balanced', 'Left', '8jBygAr', '247398DbVNGs', 'map', 'readFileSync', 'log', '1328751jTWprT', 'utf8', '670oirEAb', '50iHnmKm', 'Right', '/dev/stdin', '120VwCMoB', '489863pjvgGh', '4710209OcpMzV', '1869828badjNS'];
  __STRING_ARRAY__ = function () {
    return _0x5b95c4;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xfb)) / 0x1 * (parseInt(__DECODE_0__(0xf3)) / 0x2) + -parseInt(__DECODE_0__(0xec)) / 0x3 + parseInt(__DECODE_0__(0xf9)) / 0x4 + parseInt(__DECODE_0__(0xf2)) / 0x5 * (-parseInt(__DECODE_0__(0xfa)) / 0x6) + parseInt(__DECODE_0__(0xf8)) / 0x7 * (-parseInt(__DECODE_0__(0xeb)) / 0x8) + parseInt(__DECODE_0__(0xf0)) / 0x9 + -parseInt(__DECODE_0__(0xf6)) / 0xa * (-parseInt(__DECODE_0__(0xf7)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x671a0);
function Main(input) {
  const numbers = input['split']('\x20')[__DECODE_0__(0xed)](n => Number(n));
  const l = numbers[0x0] + numbers[0x1];
  const r = numbers[0x2] + numbers[0x3];
  if (l > r) {
    console[__DECODE_0__(0xef)](__DECODE_0__(0xea));
  } else {
    if (l < r) {
      console['log'](__DECODE_0__(0xf4));
    } else {
      console[__DECODE_0__(0xef)](__DECODE_0__(0xfc));
    }
  }
}
Main(require('fs')[__DECODE_0__(0xee)](__DECODE_0__(0xf5), __DECODE_0__(0xf1)));
