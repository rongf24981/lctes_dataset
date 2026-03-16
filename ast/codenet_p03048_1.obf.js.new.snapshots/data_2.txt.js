function __DECODE_0__(dSfqUJ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x18f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dSfqUJ, key);
}
function __STRING_ARRAY__() {
  var _0x24186a = ['1304309wNAUcq', 'log', '31857AhtIDe', '182iLPOWp', '3965643wKpuDs', 'split', 'utf8', '15825qIoORB', '122lgOCgd', '449720xekaOl', '102lzLBCt', '22776840iDzDRp', 'readFileSync', '6643920MNRTCD'];
  __STRING_ARRAY__ = function () {
    return _0x24186a;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x196)) / 0x1 + parseInt(__DECODE_0__(0x190)) / 0x2 * (-parseInt(__DECODE_0__(0x198)) / 0x3) + parseInt(__DECODE_0__(0x195)) / 0x4 + parseInt(__DECODE_0__(0x18f)) / 0x5 * (-parseInt(__DECODE_0__(0x192)) / 0x6) + -parseInt(__DECODE_0__(0x199)) / 0x7 * (parseInt(__DECODE_0__(0x191)) / 0x8) + parseInt(__DECODE_0__(0x19a)) / 0x9 + parseInt(__DECODE_0__(0x193)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xde9d4);
function main(input) {
  const args = input[__DECODE_0__(0x19b)]('\x20');
  const R = parseInt(args[0x0], 0xa);
  const G = parseInt(args[0x1], 0xa);
  const B = parseInt(args[0x2], 0xa);
  const N = parseInt(args[0x3], 0xa);
  var s = 0x0;
  var k = 0x0;
  for (var i = 0x0; i <= (N / R | 0x0); ++i) {
    for (var j = 0x0; j <= (N / G | 0x0); ++j) {
      k = (N - i * R - j * G) / B | 0x0;
      if (k >= 0x0 && i * R + j * G + k * B == N) {
        ++s;
      }
    }
  }
  console[__DECODE_0__(0x197)](s);
}
main(require('fs')[__DECODE_0__(0x194)]('/dev/stdin', __DECODE_0__(0x19c)));
