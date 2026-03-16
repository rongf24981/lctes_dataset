function __STRING_ARRAY__() {
  var _0x23d9a4 = ['log', '/dev/stdin', '9JUiHGp', '7489426bSnTCy', '5754312hnZldJ', '1972326WrqVAd', 'map', '1483832HFcJHD', '473CUMfSJ', '5UvRMJg', 'toFixed', '926550NtDFbs', 'readFileSync', 'utf8', '8Jbtrdz', '4182296BMbFIw', 'floor', '499930gxQhKf'];
  __STRING_ARRAY__ = function () {
    return _0x23d9a4;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x195)) / 0x1 + -parseInt(__DECODE_0__(0x199)) / 0x2 + parseInt(__DECODE_0__(0x193)) / 0x3 * (parseInt(__DECODE_0__(0x19c)) / 0x4) + -parseInt(__DECODE_0__(0x197)) / 0x5 * (parseInt(__DECODE_0__(0x192)) / 0x6) + parseInt(__DECODE_0__(0x191)) / 0x7 + parseInt(__DECODE_0__(0x19d)) / 0x8 * (parseInt(__DECODE_0__(0x190)) / 0x9) + -parseInt(__DECODE_0__(0x18d)) / 0xa * (parseInt(__DECODE_0__(0x196)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc80c3);
var x = require('fs')[__DECODE_0__(0x19a)](__DECODE_0__(0x18f), __DECODE_0__(0x19b));
function __DECODE_0__(FwhDEi, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x18c;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FwhDEi, key);
}
var array = x['split']('\x20')[__DECODE_0__(0x194)](Number);
var a = array[0x0];
var b = array[0x1];
var d = Math[__DECODE_0__(0x18c)](a / b);
var r = a % b;
var f = (a / b)[__DECODE_0__(0x198)](0x5);
console[__DECODE_0__(0x18e)](d + '\x20' + r + '\x20' + f);
