function __DECODE_0__(LQtQVg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1e1;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LQtQVg, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1e9)) / 0x1 + -parseInt(__DECODE_0__(0x1f5)) / 0x2 * (parseInt(__DECODE_0__(0x1eb)) / 0x3) + -parseInt(__DECODE_0__(0x1e7)) / 0x4 * (-parseInt(__DECODE_0__(0x1e2)) / 0x5) + -parseInt(__DECODE_0__(0x1e6)) / 0x6 * (parseInt(__DECODE_0__(0x1f1)) / 0x7) + parseInt(__DECODE_0__(0x1ea)) / 0x8 * (-parseInt(__DECODE_0__(0x1ef)) / 0x9) + parseInt(__DECODE_0__(0x1f2)) / 0xa + -parseInt(__DECODE_0__(0x1f0)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x80d65);
function main(input) {
  var digits = input[__DECODE_0__(0x1ee)]()[__DECODE_0__(0x1f4)];
  var input = parseInt(input, 0xa);
  var divisor = Math[__DECODE_0__(0x1e3)](0xa, digits - 0x1);
  var arr = [];
  for (var i = 0x0; i < digits; i++) {
    arr[__DECODE_0__(0x1ec)](Math[__DECODE_0__(0x1e8)](input / divisor));
    input = input % divisor;
    divisor /= 0xa;
  }
  var answer = arr[__DECODE_0__(0x1f3)]((a, b) => a + b);
  if (answer == 0x1) {
    answer = 0xa;
  }
  console[__DECODE_0__(0x1e1)](answer);
}
main(require('fs')[__DECODE_0__(0x1e5)](__DECODE_0__(0x1e4), __DECODE_0__(0x1ed)));
function __STRING_ARRAY__() {
  var _0x4385a8 = ['416SIRjxq', 'log', '3672155YRIZpb', 'pow', '/dev/stdin', 'readFileSync', '351042xssxDz', '4ObuLCC', 'floor', '820675DXCmYK', '8asVeYG', '6057Ivrxnu', 'push', 'utf8', 'toString', '3100077LySTew', '4655904gTYmre', '7xsiVFE', '2187870SncAVF', 'reduce', 'length'];
  __STRING_ARRAY__ = function () {
    return _0x4385a8;
  };
  return __STRING_ARRAY__();
}
