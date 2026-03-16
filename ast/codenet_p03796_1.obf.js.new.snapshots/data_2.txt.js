function __DECODE_0__(lwFsQU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1a8;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(lwFsQU, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1b1)) / 0x1 * (parseInt(__DECODE_0__(0x1ae)) / 0x2) + -parseInt(__DECODE_0__(0x1b3)) / 0x3 + -parseInt(__DECODE_0__(0x1b5)) / 0x4 * (parseInt(__DECODE_0__(0x1a8)) / 0x5) + -parseInt(__DECODE_0__(0x1a9)) / 0x6 * (-parseInt(__DECODE_0__(0x1b0)) / 0x7) + -parseInt(__DECODE_0__(0x1b9)) / 0x8 * (-parseInt(__DECODE_0__(0x1af)) / 0x9) + -parseInt(__DECODE_0__(0x1b6)) / 0xa * (parseInt(__DECODE_0__(0x1b8)) / 0xb) + -parseInt(__DECODE_0__(0x1b7)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xda42e);
process[__DECODE_0__(0x1aa)][__DECODE_0__(0x1ac)]();
function __STRING_ARRAY__() {
  var _0x21cda1 = ['10388rgWLRL', '1671686RiTyEs', 'utf8', '1894098uPWvxy', 'split', '2116816RFvrpN', '380bKpzba', '5299416YmIixT', '179828ssNsDV', '224PRDOmn', '/dev/stdin', '5gpUWtJ', '2928QEjbSk', 'stdin', 'readFileSync', 'resume', 'setEncoding', '2MjftCL', '231921JSHpwk'];
  __STRING_ARRAY__ = function () {
    return _0x21cda1;
  };
  return __STRING_ARRAY__();
}
process[__DECODE_0__(0x1aa)][__DECODE_0__(0x1ad)](__DECODE_0__(0x1b2));
function Main(input) {
  var tmp = input[__DECODE_0__(0x1b4)]('\x0a');
  var N = Number(tmp[0x0]);
  var pow = 0x1;
  for (var i = 0x1; i <= N; i++) {
    pow *= i;
    pow %= 0x3b9aca07;
  }
  console['log'](pow);
}
Main(require('fs')[__DECODE_0__(0x1ab)](__DECODE_0__(0x1ba), __DECODE_0__(0x1b2)));
