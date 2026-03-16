function __DECODE_0__(pbkDDE, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1cc;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(pbkDDE, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1d1)) / 0x1 * (-parseInt(__DECODE_0__(0x1d8)) / 0x2) + -parseInt(__DECODE_0__(0x1d5)) / 0x3 + parseInt(__DECODE_0__(0x1d2)) / 0x4 + -parseInt(__DECODE_0__(0x1cc)) / 0x5 + parseInt(__DECODE_0__(0x1d7)) / 0x6 + parseInt(__DECODE_0__(0x1da)) / 0x7 * (parseInt(__DECODE_0__(0x1d4)) / 0x8) + parseInt(__DECODE_0__(0x1cf)) / 0x9 * (parseInt(__DECODE_0__(0x1ce)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb9536);
function Main(input) {
  console[__DECODE_0__(0x1d3)](__DECODE_0__(0x1d6) + input);
}
function __STRING_ARRAY__() {
  var _0x4a32cd = ['1946094NIGegt', 'ABC', '1428876RfTVbT', '2zrsHix', '/dev/stdin', '6016577qBqHEN', '7264715bNHfSG', 'utf8', '957330gbECHX', '18ziuKsG', 'readFileSync', '520999mnESVq', '4202452bWxrpo', 'log', '8nbDLoy'];
  __STRING_ARRAY__ = function () {
    return _0x4a32cd;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0x1d0)](__DECODE_0__(0x1d9), __DECODE_0__(0x1cd)));
