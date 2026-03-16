function __DECODE_0__(slWwDf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x124;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(slWwDf, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x124)) / 0x1 * (parseInt(__DECODE_0__(0x12e)) / 0x2) + -parseInt(__DECODE_0__(0x132)) / 0x3 * (parseInt(__DECODE_0__(0x134)) / 0x4) + parseInt(__DECODE_0__(0x136)) / 0x5 * (parseInt(__DECODE_0__(0x128)) / 0x6) + parseInt(__DECODE_0__(0x137)) / 0x7 + -parseInt(__DECODE_0__(0x12f)) / 0x8 * (-parseInt(__DECODE_0__(0x126)) / 0x9) + -parseInt(__DECODE_0__(0x12b)) / 0xa + parseInt(__DECODE_0__(0x12a)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x77f46);
function Main(arg) {
  var N = arg['split']('\x0a')[0x0]['split']('\x20')[0x0] - 0x0;
  var K = arg[__DECODE_0__(0x131)]('\x0a')[0x0][__DECODE_0__(0x131)]('\x20')[0x1] - 0x0;
  var P = arg[__DECODE_0__(0x131)]('\x0a')[0x1]['split']('\x20')[__DECODE_0__(0x133)](v => v - 0x0);
  var ans = [];
  for (var i = 0x0; i < N - K + 0x1; i++) {
    var tmp = P[__DECODE_0__(0x12d)](i, i + K);
    tmp[__DECODE_0__(0x135)](compareNumbers);
    ans[i] = P['slice'](0x0, i)[__DECODE_0__(0x125)](tmp)[__DECODE_0__(0x125)](P['slice'](i + K))[__DECODE_0__(0x12c)]();
  }
  var aa = new Set(ans);
  console[__DECODE_0__(0x129)](aa[__DECODE_0__(0x127)]);
}
Main(require('fs')[__DECODE_0__(0x130)]('/dev/stdin', 'utf8'));
function compareNumbers(a, b) {
  return a - b;
}
function __STRING_ARRAY__() {
  var _0x59f959 = ['8kOkVvX', 'readFileSync', 'split', '6BEBKcP', 'map', '580036ybPQpN', 'sort', '32530jxwzMP', '3731000qjVREB', '48226yDfoaS', 'concat', '895689gSTJbi', 'size', '138qSJniw', 'log', '14980086QCTQkr', '4463390CXZtHQ', 'toString', 'slice', '38NOUwsp'];
  __STRING_ARRAY__ = function () {
    return _0x59f959;
  };
  return __STRING_ARRAY__();
}
