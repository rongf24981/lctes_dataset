var a0_0x11846b = __DECODE_0__;
function __STRING_ARRAY__() {
  var _0x577795 = ['568287rzDYdZ', 'utf8', '190RiWbtZ', '/dev/stdin', '14GMXYay', '3847960oMyzcL', 'log', '3662380NYZfJr', 'toString', '8380884nXRalL', '8WeqBqv', '1542884xkVvzk', '1176428GSinZX', '2061069gsOxpA', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x577795;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var _0x529a52 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x529a52(0xa2)) / 0x1 + -parseInt(_0x529a52(0xa1)) / 0x2 + parseInt(_0x529a52(0xa3)) / 0x3 * (-parseInt(_0x529a52(0xa0)) / 0x4) + parseInt(_0x529a52(0xac)) / 0x5 + parseInt(_0x529a52(0x9f)) / 0x6 + parseInt(_0x529a52(0xa9)) / 0x7 * (parseInt(_0x529a52(0xaa)) / 0x8) + parseInt(_0x529a52(0xa5)) / 0x9 * (-parseInt(_0x529a52(0xa7)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe1387);
function __DECODE_0__(nNdVyE, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x9f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nNdVyE, key);
}
(function (stdin) {
  var _0x4f0296 = __DECODE_0__;
  var lines = stdin[_0x4f0296(0xad)]()[_0x4f0296(0xa4)]('\x20');
  var x = parseInt(lines[0x0], 0xa);
  var y = parseInt(lines[0x1], 0xa);
  console[_0x4f0296(0xab)](x * y, (x + y) * 0x2);
})(require('fs')['readFileSync'](a0_0x11846b(0xa8), a0_0x11846b(0xa6)));
