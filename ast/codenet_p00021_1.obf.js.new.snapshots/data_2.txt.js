function __DECODE_0__(QatzcM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xc0;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QatzcM, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xc6)) / 0x1 * (-parseInt(__DECODE_0__(0xd2)) / 0x2) + parseInt(__DECODE_0__(0xc2)) / 0x3 + -parseInt(__DECODE_0__(0xcc)) / 0x4 + parseInt(__DECODE_0__(0xcb)) / 0x5 * (parseInt(__DECODE_0__(0xd0)) / 0x6) + -parseInt(__DECODE_0__(0xca)) / 0x7 + -parseInt(__DECODE_0__(0xc8)) / 0x8 * (parseInt(__DECODE_0__(0xc1)) / 0x9) + parseInt(__DECODE_0__(0xc4)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6f4d1);
function __STRING_ARRAY__() {
  var _0x250e27 = ['utf8', 'replace', '4459734jkRLun', 'log', '22ZFrpGZ', 'readFileSync', '4869MxGUHt', '1560780KMRmOF', 'shift', '12345380yjeGEh', 'split', '74677xTiFUA', 'toFixed', '8976cRdYUw', 'YES', '3721459ueJcfY', '5jnzNAa', '328448IGXLOl', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x250e27;
  };
  return __STRING_ARRAY__();
}
(function (input) {
  var p = input[__DECODE_0__(0xcf)](/\n$/, '')[__DECODE_0__(0xc5)]('\x0a');
  var n = Number(p['shift']());
  var i = 0x0;
  while (i++ < n) {
    var args = p[__DECODE_0__(0xc3)]()[__DECODE_0__(0xc5)]('\x20')['map'](Number);
    var x1 = args['shift']();
    var y1 = args[__DECODE_0__(0xc3)]();
    var x2 = args[__DECODE_0__(0xc3)]();
    var y2 = args['shift']();
    var x3 = args['shift']();
    var y3 = args[__DECODE_0__(0xc3)]();
    var x4 = args[__DECODE_0__(0xc3)]();
    var y4 = args[__DECODE_0__(0xc3)]();
    console[__DECODE_0__(0xd1)](((y2 - y1) / (x2 - x1))[__DECODE_0__(0xc7)](0x5) === ((y4 - y3) / (x4 - x3))[__DECODE_0__(0xc7)](0x5) ? __DECODE_0__(0xc9) : 'NO');
  }
})(require('fs')[__DECODE_0__(0xc0)](__DECODE_0__(0xcd), __DECODE_0__(0xce)));
