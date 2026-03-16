function __STRING_ARRAY__() {
  var _0x500d3c = ['1933757kAPugq', 'trim', 'shift', '3965550cDsTLO', 'log', 'map', '/dev/stdin', '3956832eUEZnx', '1465990oUVgHi', '2481OfUtSM', 'utf8', '1145454CHKFWH', 'floor', '938692FiCAqW', '4376ntLmrp', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x500d3c;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(PmNSFO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x10f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PmNSFO, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x115)) / 0x1 + -parseInt(__DECODE_0__(0x113)) / 0x2 + parseInt(__DECODE_0__(0x111)) / 0x3 * (parseInt(__DECODE_0__(0x116)) / 0x4) + parseInt(__DECODE_0__(0x110)) / 0x5 + parseInt(__DECODE_0__(0x11b)) / 0x6 + -parseInt(__DECODE_0__(0x118)) / 0x7 + parseInt(__DECODE_0__(0x10f)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8a223);
(stdin => {
  var lines = stdin[__DECODE_0__(0x119)]()['split']('\x0a');
  var inputs = lines[__DECODE_0__(0x11a)]()[__DECODE_0__(0x117)]('\x20')[__DECODE_0__(0x11d)](Number);
  console[__DECODE_0__(0x11c)](Math[__DECODE_0__(0x114)]((inputs[0x0] * 0x3 + inputs[0x1]) / 0x2));
})(require('fs')['readFileSync'](__DECODE_0__(0x11e), __DECODE_0__(0x112)));
