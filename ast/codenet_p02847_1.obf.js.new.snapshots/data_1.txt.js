function __STRING_ARRAY__() {
  var _0x2e9072 = ['1722156HSMsmv', '4670533DCbiEs', '949576IDuXlx', 'TUE', 'FRI', '19729701Tiudiq', '92XxnWCr', '/dev/stdin', '105959eXTngb', '40155KbBDQJ', '1674339wHaTDj', 'log', '10NhByPS', 'WED', '2CfzmeM'];
  __STRING_ARRAY__ = function () {
    return _0x2e9072;
  };
  return __STRING_ARRAY__();
}
var a0_0x17758a = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x52d40f = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x52d40f(0x1c0)) / 0x1 + -parseInt(_0x52d40f(0x1c6)) / 0x2 * (parseInt(_0x52d40f(0x1c2)) / 0x3) + parseInt(_0x52d40f(0x1cd)) / 0x4 * (-parseInt(_0x52d40f(0x1c1)) / 0x5) + -parseInt(_0x52d40f(0x1c7)) / 0x6 + -parseInt(_0x52d40f(0x1c8)) / 0x7 + parseInt(_0x52d40f(0x1c9)) / 0x8 + parseInt(_0x52d40f(0x1cc)) / 0x9 * (parseInt(_0x52d40f(0x1c4)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7bfd0);
function Main(input) {
  var _0x669205 = __DECODE_0__;
  var result;
  switch (input) {
    case 'SUN':
      result = '7';
      break;
    case 'MON':
      result = '6';
      break;
    case _0x669205(0x1ca):
      result = '5';
      break;
    case _0x669205(0x1c5):
      result = '4';
      break;
    case 'THU':
      result = '3';
      break;
    case _0x669205(0x1cb):
      result = '2';
      break;
    case 'SAT':
      result = '1';
      break;
  }
  console[_0x669205(0x1c3)](result);
}
function __DECODE_0__(rendgq, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1c0;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rendgq, key);
}
Main(require('fs')['readFileSync'](a0_0x17758a(0x1ce), 'utf8'));
