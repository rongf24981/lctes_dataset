function __STRING_ARRAY__() {
  var _0x1bacd5 = ['1121730kHDhHJ', '2098938clToCc', '3QhDLlA', 'ceil', 'max', '54SLRWCd', '516610AdfNIU', '21575850hitbFt', '7RvQOMO', '1984690njkGSy', 'readFileSync', '2532316jTSxKS', '683976EZLPsz', 'split', 'utf8'];
  __STRING_ARRAY__ = function () {
    return _0x1bacd5;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xb4)) / 0x1 + -parseInt(__DECODE_0__(0xba)) / 0x2 * (parseInt(__DECODE_0__(0xb6)) / 0x3) + parseInt(__DECODE_0__(0xb0)) / 0x4 + parseInt(__DECODE_0__(0xae)) / 0x5 + -parseInt(__DECODE_0__(0xb5)) / 0x6 * (parseInt(__DECODE_0__(0xad)) / 0x7) + parseInt(__DECODE_0__(0xb1)) / 0x8 * (-parseInt(__DECODE_0__(0xb9)) / 0x9) + parseInt(__DECODE_0__(0xac)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe6a7a);
function __DECODE_0__(DvPDVy, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xac;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DvPDVy, key);
}
function Main(input) {
  TT = 0x0;
  AA = 0x0;
  input = input[__DECODE_0__(0xb2)]('\x0a');
  N = input[0x0];
  for (i = 0x1; i <= N; i++) {
    tmp = input[i]['split']('\x20');
    T = tmp[0x0] * 0x1;
    A = tmp[0x1] * 0x1;
    if (TT <= T && AA <= A) {
      TT = T;
      AA = A;
    } else {
      ratioT = TT / T;
      ratioA = AA / A;
      ratio = Math[__DECODE_0__(0xb7)](Math[__DECODE_0__(0xb8)](ratioT, ratioA));
      TT = T * ratio;
      AA = A * ratio;
    }
  }
  console['log'](TT + AA);
}
Main(require('fs')[__DECODE_0__(0xaf)]('/dev/stdin', __DECODE_0__(0xb3)));
