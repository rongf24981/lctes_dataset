function __DECODE_0__(CfipNB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xaf;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CfipNB, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xbd)) / 0x1 * (-parseInt(__DECODE_0__(0xbc)) / 0x2) + parseInt(__DECODE_0__(0xbb)) / 0x3 + parseInt(__DECODE_0__(0xb3)) / 0x4 * (-parseInt(__DECODE_0__(0xbf)) / 0x5) + -parseInt(__DECODE_0__(0xb6)) / 0x6 * (-parseInt(__DECODE_0__(0xb0)) / 0x7) + -parseInt(__DECODE_0__(0xb1)) / 0x8 + -parseInt(__DECODE_0__(0xb9)) / 0x9 + -parseInt(__DECODE_0__(0xb5)) / 0xa * (-parseInt(__DECODE_0__(0xba)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9c984);
function Main(input) {
  var a = input[0x0][__DECODE_0__(0xb7)]('\x20')[__DECODE_0__(0xb8)](v => v - 0x0);
  if (a[0x0] + a[0x1] == 0x0) {
    console[__DECODE_0__(0xb4)](0x0);
  } else {
    console[__DECODE_0__(0xb4)](~~(a[0x0] * (a[0x0] - 0x1) / 0x2 + a[0x1] * (a[0x1] - 0x1) / 0x2));
  }
}
function __STRING_ARRAY__() {
  var _0x427330 = ['4506432TqOktL', '/dev/stdin', '12AObyxQ', 'log', '10uIbkKY', '6HIpMgL', 'split', 'map', '8157960ykIbKq', '16833135lxDJKw', '2156811lfyviS', '2908dJAWhK', '281nSppwV', 'utf8', '850965dPbLPA', 'trim', '5467609zMhzSS'];
  __STRING_ARRAY__ = function () {
    return _0x427330;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')['readFileSync'](__DECODE_0__(0xb2), __DECODE_0__(0xbe))[__DECODE_0__(0xaf)]()[__DECODE_0__(0xb7)]('\x0a'));
