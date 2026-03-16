(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xdf)) / 0x1 * (-parseInt(__DECODE_0__(0xe1)) / 0x2) + -parseInt(__DECODE_0__(0xde)) / 0x3 * (parseInt(__DECODE_0__(0xe0)) / 0x4) + -parseInt(__DECODE_0__(0xec)) / 0x5 * (parseInt(__DECODE_0__(0xe2)) / 0x6) + -parseInt(__DECODE_0__(0xeb)) / 0x7 + parseInt(__DECODE_0__(0xe3)) / 0x8 + -parseInt(__DECODE_0__(0xe9)) / 0x9 * (parseInt(__DECODE_0__(0xe8)) / 0xa) + parseInt(__DECODE_0__(0xe4)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4ca38);
var ans = 0x0;
require('fs')[__DECODE_0__(0xe6)]('/dev/stdin', __DECODE_0__(0xea))[__DECODE_0__(0xe7)](/\d+/g)[__DECODE_0__(0xed)](function (elem) {
  ans += parseInt(elem, 0xa);
});
function __STRING_ARRAY__() {
  var _0x951911 = ['15620506mNAXpa', 'log', 'readFileSync', 'match', '3283330poljrj', '9wcbdhR', 'utf8', '3416602PZCPrg', '5xbMQmc', 'forEach', '1446JcMbTh', '143lkDeuS', '3424ylsovv', '2050vkjfUb', '490302KAmZoG', '464152fSJtmp'];
  __STRING_ARRAY__ = function () {
    return _0x951911;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(KpBpfY, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xde;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KpBpfY, key);
}
console[__DECODE_0__(0xe5)](ans);
