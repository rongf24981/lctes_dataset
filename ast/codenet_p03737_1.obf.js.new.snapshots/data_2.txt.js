function __STRING_ARRAY__() {
  var _0x3468c9 = ['2820282qqgMZe', '/dev/stdin', 'map', '6480404rFYYRr', 'join', '780675rTLCcp', 'split', '10140NsHnCN', 'readFileSync', '2764194HFocVC', '787600pEPWVb', 'toUpperCase', '1860868EcKLAI', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x3468c9;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(fOvIlM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd9;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fOvIlM, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xe0)) / 0x1 + -parseInt(__DECODE_0__(0xd9)) / 0x2 + -parseInt(__DECODE_0__(0xe4)) / 0x3 + -parseInt(__DECODE_0__(0xe2)) / 0x4 + parseInt(__DECODE_0__(0xe5)) / 0x5 + parseInt(__DECODE_0__(0xdb)) / 0x6 + parseInt(__DECODE_0__(0xde)) / 0x7;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7519f);
function Main(input) {
  console[__DECODE_0__(0xda)]((input || '')[__DECODE_0__(0xe1)](/\s+/)[__DECODE_0__(0xdd)](function (entry) {
    return entry[0x0][__DECODE_0__(0xe6)]();
  })[__DECODE_0__(0xdf)](''));
}
Main(require('fs')[__DECODE_0__(0xe3)](__DECODE_0__(0xdc), 'utf8'));
