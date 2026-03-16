var a0_0x5231dd = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x4a5081 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x4a5081(0xca)) / 0x1 + -parseInt(_0x4a5081(0xcf)) / 0x2 + parseInt(_0x4a5081(0xcb)) / 0x3 * (-parseInt(_0x4a5081(0xd4)) / 0x4) + -parseInt(_0x4a5081(0xd1)) / 0x5 * (parseInt(_0x4a5081(0xcd)) / 0x6) + -parseInt(_0x4a5081(0xd3)) / 0x7 + parseInt(_0x4a5081(0xc9)) / 0x8 + -parseInt(_0x4a5081(0xcc)) / 0x9 * (-parseInt(_0x4a5081(0xd2)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x99c28);
function Main(input) {
  var _0xf9383d = __DECODE_0__;
  const n = input[_0xf9383d(0xd5)]('\x0a')[0x0];
  var ans = 0x0;
  if (n >= 0x9dd) {
    ans = 0x1;
    console[_0xf9383d(0xd0)](ans);
  } else {
    for (var i = 0x1; i <= 0x19; i++) {
      if (n >= i * 0x65 && n <= i * 0x69) {
        ans = 0x1;
        break;
      }
    }
  }
  console[_0xf9383d(0xd0)](ans);
}
Main(require('fs')[a0_0x5231dd(0xce)](a0_0x5231dd(0xc8), a0_0x5231dd(0xc7)));
function __DECODE_0__(LrcLPn, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xc7;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LrcLPn, key);
}
function __STRING_ARRAY__() {
  var _0x10b6ee = ['1092490eWkqRM', '33WrnMQC', '1719rsNiyu', '6JjourK', 'readFileSync', '1752962RaRBvW', 'log', '1280635cUpLEe', '35380wzbVvW', '2834636LfHxXo', '203068ERxnJB', 'split', 'utf8', '/dev/stdin', '7660360QqUiqW'];
  __STRING_ARRAY__ = function () {
    return _0x10b6ee;
  };
  return __STRING_ARRAY__();
}
