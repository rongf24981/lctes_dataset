(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0xe7)) / 0x1 + parseInt(__DECODE_0__(0xee)) / 0x2 + parseInt(__DECODE_0__(0xea)) / 0x3 + parseInt(__DECODE_0__(0xe4)) / 0x4 + -parseInt(__DECODE_0__(0xed)) / 0x5 * (parseInt(__DECODE_0__(0xf4)) / 0x6) + parseInt(__DECODE_0__(0xe6)) / 0x7 + -parseInt(__DECODE_0__(0xeb)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x32c97);
function __STRING_ARRAY__() {
  const _0x109196 = ['345474bHdLWB', 'abs', 'readFileSync', 'split', '/dev/stdin', 'YES', '366CYwlxv', '1441804xoMDXT', 'log', '2618014ODaQZN', '367175KUwxWU', 'map', 'utf8', '377964avahfm', '2812280ufXDAJ', 'trim', '8725cIdGpn'];
  __STRING_ARRAY__ = function () {
    return _0x109196;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  const arr = input[__DECODE_0__(0xec)]()[__DECODE_0__(0xf1)]('\x0a');
  const AV = arr[0x0]['split']('\x20')[__DECODE_0__(0xe8)](Number);
  const BW = arr[0x1][__DECODE_0__(0xf1)]('\x20')['map'](Number);
  const T = Number(arr[0x2]);
  if (Math[__DECODE_0__(0xef)](AV[0x0] - BW[0x0]) < T * (AV[0x1] - BW[0x1])) {
    console[__DECODE_0__(0xe5)](__DECODE_0__(0xf3));
  } else {
    console[__DECODE_0__(0xe5)]('NO');
  }
}
function __DECODE_0__(eqvUVe, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe4;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(eqvUVe, key);
}
Main(require('fs')[__DECODE_0__(0xf0)](__DECODE_0__(0xf2), __DECODE_0__(0xe9)));
