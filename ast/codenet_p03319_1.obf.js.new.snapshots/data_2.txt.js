function __STRING_ARRAY__() {
  var _0x20a502 = ['split', '2682711aWiWAB', '29713684diswHP', '11668400sxaAAt', 'ceil', '6926495GTGiCS', '100TyzlKf', '4RGrqOm', 'indexOf', '2076EowpBh', '838071YrIAwf', '12187RyhUUJ', '1kloBJl', 'readFileSync', '502666fKacJw'];
  __STRING_ARRAY__ = function () {
    return _0x20a502;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x112)) / 0x1 * (parseInt(__DECODE_0__(0x114)) / 0x2) + -parseInt(__DECODE_0__(0x116)) / 0x3 + -parseInt(__DECODE_0__(0x11c)) / 0x4 * (parseInt(__DECODE_0__(0x11a)) / 0x5) + parseInt(__DECODE_0__(0x11e)) / 0x6 * (parseInt(__DECODE_0__(0x120)) / 0x7) + -parseInt(__DECODE_0__(0x118)) / 0x8 + parseInt(__DECODE_0__(0x11f)) / 0x9 * (parseInt(__DECODE_0__(0x11b)) / 0xa) + parseInt(__DECODE_0__(0x117)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb6a23);
function __DECODE_0__(aWRmsK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x112;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(aWRmsK, key);
}
function Main(input) {
  var NKA = input[__DECODE_0__(0x115)]('\x0a');
  var NK = NKA[0x0]['split']('\x20');
  var N = parseInt(NK[0x0], 0xa);
  var K = parseInt(NK[0x1], 0xa);
  var A = NKA[0x1][__DECODE_0__(0x115)]('\x20')['map'](v => parseInt(v, 0xa));
  var minPoint = A[__DECODE_0__(0x11d)](0x1);
  var left = Math[__DECODE_0__(0x119)](minPoint / (K - 0x1));
  var right = Math[__DECODE_0__(0x119)]((N - minPoint - 0x1) / (K - 0x1));
  console['log'](left + right);
}
Main(require('fs')[__DECODE_0__(0x113)]('/dev/stdin', 'utf8'));
