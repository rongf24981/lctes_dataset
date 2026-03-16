function __DECODE_0__(dvhWLP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1c7;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dvhWLP, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1d1)) / 0x1 * (parseInt(__DECODE_0__(0x1c7)) / 0x2) + -parseInt(__DECODE_0__(0x1ce)) / 0x3 * (-parseInt(__DECODE_0__(0x1cf)) / 0x4) + parseInt(__DECODE_0__(0x1d2)) / 0x5 * (parseInt(__DECODE_0__(0x1d0)) / 0x6) + -parseInt(__DECODE_0__(0x1ca)) / 0x7 + -parseInt(__DECODE_0__(0x1cb)) / 0x8 + parseInt(__DECODE_0__(0x1c8)) / 0x9 * (parseInt(__DECODE_0__(0x1cc)) / 0xa) + parseInt(__DECODE_0__(0x1d4)) / 0xb * (parseInt(__DECODE_0__(0x1cd)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5edf5);
function f(use, x, n, acc) {
  if (x > n) {
    return acc;
  }
  if (use === 0x7) {
    acc += 0x1;
  }
  acc += f(use | 0x1, x * 0xa + 0x3, n, 0x0);
  acc += f(use | 0x2, x * 0xa + 0x5, n, 0x0);
  acc += f(use | 0x4, x * 0xa + 0x7, n, 0x0);
  return acc;
}
function Main(input) {
  var n = parseInt(input);
  console[__DECODE_0__(0x1c9)](f(0x0, 0x0, n, 0x0));
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x1d5), __DECODE_0__(0x1d3)));
function __STRING_ARRAY__() {
  var _0x12dac6 = ['534eJKqWL', '3491xEKLcs', '16615mLumAr', 'utf8', '89617qFlLsq', '/dev/stdin', '434DfLPiw', '940743sqMcPz', 'log', '531923ujtZlM', '2603048sCsLRZ', '20OlOrXB', '624BXxUXt', '1857207lJDRWS', '4UWAeAV'];
  __STRING_ARRAY__ = function () {
    return _0x12dac6;
  };
  return __STRING_ARRAY__();
}
