function __DECODE_0__(CBxCGG, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x78;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CBxCGG, key);
}
var a0_0x16d327 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x4c2598 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x4c2598(0x78)) / 0x1 * (parseInt(_0x4c2598(0x79)) / 0x2) + parseInt(_0x4c2598(0x7c)) / 0x3 * (parseInt(_0x4c2598(0x82)) / 0x4) + -parseInt(_0x4c2598(0x80)) / 0x5 * (-parseInt(_0x4c2598(0x7a)) / 0x6) + -parseInt(_0x4c2598(0x7d)) / 0x7 + parseInt(_0x4c2598(0x85)) / 0x8 + -parseInt(_0x4c2598(0x83)) / 0x9 + -parseInt(_0x4c2598(0x7b)) / 0xa * (-parseInt(_0x4c2598(0x84)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4b018);
function Main(input) {
  var _0xa26e7b = __DECODE_0__;
  var input = input['split']('\x0a');
  const num = input[0x0];
  const arr = input[0x1][_0xa26e7b(0x81)]('\x20');
  var a = 0x1;
  var b = 0x0;
  arr[_0xa26e7b(0x7f)](i => a *= i);
  for (var i = 0x0; i < arr['length']; i++) {
    b += a / arr[i];
  }
  console['log'](a / b);
}
function __STRING_ARRAY__() {
  var _0xb6a3ce = ['2636624jRhyOh', '41iNLBPk', '8278ywbicN', '36XmJVNt', '385790jDrPFV', '3702TsFTeT', '2447354nxaHqc', 'utf8', 'forEach', '23245eBtqQz', 'split', '1108fTqfLg', '3645342lTLxam', '55iRziXG'];
  __STRING_ARRAY__ = function () {
    return _0xb6a3ce;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')['readFileSync']('/dev/stdin', a0_0x16d327(0x7e)));
