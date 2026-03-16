function __STRING_ARRAY__() {
  var _0x379bf4 = ['2238294KNdyKS', '15258736rQvlqc', '3071257hOhxim', '836dIdgwt', 'split', '/dev/stdin', 'log', '4qJYKnS', 'map', 'utf8', 'readFileSync', '4530099QFFadW', '13445nfSMVA', '296612INabNv', '9142011oRMUzR'];
  __STRING_ARRAY__ = function () {
    return _0x379bf4;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1e1)) / 0x1 * (parseInt(__DECODE_0__(0x1d8)) / 0x2) + parseInt(__DECODE_0__(0x1e5)) / 0x3 + parseInt(__DECODE_0__(0x1dd)) / 0x4 * (parseInt(__DECODE_0__(0x1d7)) / 0x5) + -parseInt(__DECODE_0__(0x1da)) / 0x6 + -parseInt(__DECODE_0__(0x1dc)) / 0x7 + -parseInt(__DECODE_0__(0x1db)) / 0x8 + parseInt(__DECODE_0__(0x1d9)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xead67);
function __DECODE_0__(PZImDt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d7;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PZImDt, key);
}
function Main(input) {
  input = input[__DECODE_0__(0x1de)]('\x0a');
  n = Number(input[0x0][__DECODE_0__(0x1de)]('\x20'));
  a = input[0x1][__DECODE_0__(0x1de)]('\x20')[__DECODE_0__(0x1e2)](Number);
  b = input[0x2][__DECODE_0__(0x1de)]('\x20')[__DECODE_0__(0x1e2)](Number);
  c = input[0x3][__DECODE_0__(0x1de)]('\x20')[__DECODE_0__(0x1e2)](Number);
  var count = 0x0;
  for (var i = 0x0; i < n; i++) {
    count += b[a[i] - 0x1];
    if (a[i] === a[i - 0x1] + 0x1) {
      count += c[a[i] - 0x2];
    }
  }
  console[__DECODE_0__(0x1e0)](count);
}
Main(require('fs')[__DECODE_0__(0x1e4)](__DECODE_0__(0x1df), __DECODE_0__(0x1e3)));
