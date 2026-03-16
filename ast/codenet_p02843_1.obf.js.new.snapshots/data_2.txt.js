(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xca)) / 0x1 + -parseInt(__DECODE_0__(0xcf)) / 0x2 + parseInt(__DECODE_0__(0xcb)) / 0x3 * (-parseInt(__DECODE_0__(0xd4)) / 0x4) + -parseInt(__DECODE_0__(0xd1)) / 0x5 * (parseInt(__DECODE_0__(0xcd)) / 0x6) + -parseInt(__DECODE_0__(0xd3)) / 0x7 + parseInt(__DECODE_0__(0xc9)) / 0x8 + -parseInt(__DECODE_0__(0xcc)) / 0x9 * (-parseInt(__DECODE_0__(0xd2)) / 0xa);
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
  const n = input[__DECODE_0__(0xd5)]('\x0a')[0x0];
  var ans = 0x0;
  if (n >= 0x9dd) {
    ans = 0x1;
    console[__DECODE_0__(0xd0)](ans);
  } else {
    for (var i = 0x1; i <= 0x19; i++) {
      if (n >= i * 0x65 && n <= i * 0x69) {
        ans = 0x1;
        break;
      }
    }
  }
  console[__DECODE_0__(0xd0)](ans);
}
Main(require('fs')[__DECODE_0__(0xce)](__DECODE_0__(0xc8), __DECODE_0__(0xc7)));
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
