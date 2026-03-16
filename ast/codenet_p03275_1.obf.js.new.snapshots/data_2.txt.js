function __DECODE_0__(ZyBIXS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x19c;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZyBIXS, key);
}
function __STRING_ARRAY__() {
  var _0x3bed21 = ['push', '1123969ssFEWO', '188qwAOWE', '42jxTwbi', '13188065AeipzF', 'utf8', '382osPKxL', '660BInpyk', '3730490VHYxXW', '12PWwkix', 'sort', '9SlyOEA', 'length', 'readFileSync', '15892jraKWr', 'split', 'floor', 'log', '7459930MjszGN', '/dev/stdin', '2678384ztmfxy'];
  __STRING_ARRAY__ = function () {
    return _0x3bed21;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1aa)) / 0x1 * (parseInt(__DECODE_0__(0x1a6)) / 0x2) + -parseInt(__DECODE_0__(0x1ab)) / 0x3 * (-parseInt(__DECODE_0__(0x19d)) / 0x4) + -parseInt(__DECODE_0__(0x1ac)) / 0x5 + parseInt(__DECODE_0__(0x1a7)) / 0x6 * (-parseInt(__DECODE_0__(0x1a5)) / 0x7) + -parseInt(__DECODE_0__(0x1a3)) / 0x8 + parseInt(__DECODE_0__(0x1af)) / 0x9 * (parseInt(__DECODE_0__(0x1a1)) / 0xa) + -parseInt(__DECODE_0__(0x1a8)) / 0xb * (-parseInt(__DECODE_0__(0x1ad)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8d293);
function median(l) {
  return l[__DECODE_0__(0x1ae)]()[Math[__DECODE_0__(0x19f)](l[__DECODE_0__(0x1b0)] / 0x2)];
}
function Main(input) {
  input = input[__DECODE_0__(0x19e)]('\x0a');
  N = parseInt(input[0x0]);
  a = input[0x1]['split']('\x20');
  m = [];
  for (var i = 0x0; i < N; i++) {
    for (var j = i + 0x1; j < N + 0x1; j++) {
      m[__DECODE_0__(0x1a4)](median(a['slice'](i, j)));
    }
  }
  console[__DECODE_0__(0x1a0)](median(m));
}
Main(require('fs')[__DECODE_0__(0x19c)](__DECODE_0__(0x1a2), __DECODE_0__(0x1a9)));
