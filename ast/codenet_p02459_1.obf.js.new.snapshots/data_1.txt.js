var a0_0x5ee3fa = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x16b793 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x16b793(0x11f)) / 0x1 + -parseInt(_0x16b793(0x11a)) / 0x2 * (-parseInt(_0x16b793(0x114)) / 0x3) + -parseInt(_0x16b793(0x110)) / 0x4 * (-parseInt(_0x16b793(0x10d)) / 0x5) + parseInt(_0x16b793(0x116)) / 0x6 * (-parseInt(_0x16b793(0x117)) / 0x7) + parseInt(_0x16b793(0x11c)) / 0x8 + parseInt(_0x16b793(0x119)) / 0x9 + -parseInt(_0x16b793(0x11e)) / 0xa * (parseInt(_0x16b793(0x118)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd6272);
var input = require('fs')['readFileSync'](a0_0x5ee3fa(0x11b), a0_0x5ee3fa(0x113));
var arr = input[a0_0x5ee3fa(0x11d)]()[a0_0x5ee3fa(0x115)]('\x0a');
var q = arr[a0_0x5ee3fa(0x10f)]() - 0x0;
function __DECODE_0__(RDmsMq, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x10d;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RDmsMq, key);
}
var str = '';
var map = new Map();
for (var i = 0x0; i < q; i++) {
  var [a, b, c] = arr[i][a0_0x5ee3fa(0x115)]('\x20');
  if (a == '0') {
    map[a0_0x5ee3fa(0x111)](b, c);
  } else {
    str += map[a0_0x5ee3fa(0x10e)](b) + '\x0a';
  }
}
console[a0_0x5ee3fa(0x112)](str[a0_0x5ee3fa(0x11d)]());
function __STRING_ARRAY__() {
  var _0x3077f2 = ['366GaQiLo', '14588IodNuQ', '422235xWdiae', '896814DnPdUY', '2WxsHby', '/dev/stdin', '1542416nuOoer', 'trim', '180fpGeZN', '313396Xdnddi', '2203715TySlkH', 'get', 'shift', '8NdyYjY', 'set', 'log', 'utf8', '623682pSReuR', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x3077f2;
  };
  return __STRING_ARRAY__();
}
