const a0_0x50c28d = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x5f07b4 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x5f07b4(0xe7)) / 0x1 + parseInt(_0x5f07b4(0xee)) / 0x2 + parseInt(_0x5f07b4(0xea)) / 0x3 + parseInt(_0x5f07b4(0xe4)) / 0x4 + -parseInt(_0x5f07b4(0xed)) / 0x5 * (parseInt(_0x5f07b4(0xf4)) / 0x6) + parseInt(_0x5f07b4(0xe6)) / 0x7 + -parseInt(_0x5f07b4(0xeb)) / 0x8;
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
  const _0x3baa5b = __DECODE_0__;
  const arr = input[_0x3baa5b(0xec)]()[_0x3baa5b(0xf1)]('\x0a');
  const AV = arr[0x0]['split']('\x20')[_0x3baa5b(0xe8)](Number);
  const BW = arr[0x1][_0x3baa5b(0xf1)]('\x20')['map'](Number);
  const T = Number(arr[0x2]);
  if (Math[_0x3baa5b(0xef)](AV[0x0] - BW[0x0]) < T * (AV[0x1] - BW[0x1])) {
    console[_0x3baa5b(0xe5)](_0x3baa5b(0xf3));
  } else {
    console[_0x3baa5b(0xe5)]('NO');
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
Main(require('fs')[a0_0x50c28d(0xf0)](a0_0x50c28d(0xf2), a0_0x50c28d(0xe9)));
