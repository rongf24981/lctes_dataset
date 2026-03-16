function __DECODE_0__(BneuWO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x8b;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BneuWO, key);
}
function __STRING_ARRAY__() {
  var _0x2a3d97 = ['586224yTUNOq', '31298Bnocaf', 'log', '72aBfAXo', 'split', '1122560NQHwYo', '1894740QOyDYs', '/dev/stdin', '5503338lOSgmW', '59515yWiNMQ', '461932XrRerZ', 'map', 'utf8', '116XjQAjH', '42JsiCHw', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x2a3d97;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x97)) / 0x1 + parseInt(__DECODE_0__(0x8e)) / 0x2 * (-parseInt(__DECODE_0__(0x90)) / 0x3) + -parseInt(__DECODE_0__(0x9a)) / 0x4 * (parseInt(__DECODE_0__(0x96)) / 0x5) + parseInt(__DECODE_0__(0x93)) / 0x6 + parseInt(__DECODE_0__(0x8b)) / 0x7 * (-parseInt(__DECODE_0__(0x8d)) / 0x8) + parseInt(__DECODE_0__(0x95)) / 0x9 + parseInt(__DECODE_0__(0x92)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x53425);
function Main(input) {
  input = input[__DECODE_0__(0x91)]('\x20');
  X = 0x2;
  N = input[__DECODE_0__(0x98)](input => parseInt(input, 0xa));
  if (N % X == 0x0) {
    console[__DECODE_0__(0x8f)](N[0x0]);
  } else {
    var ans = N[0x0] * X;
    console[__DECODE_0__(0x8f)](ans);
  }
}
Main(require('fs')[__DECODE_0__(0x8c)](__DECODE_0__(0x94), __DECODE_0__(0x99)));
