function __DECODE_0__(bHEWEs, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xdf;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bHEWEs, key);
}
var a0_0x29bc6b = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x1f5d12 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x1f5d12(0xdf)) / 0x1 + parseInt(_0x1f5d12(0xea)) / 0x2 + parseInt(_0x1f5d12(0xe8)) / 0x3 + -parseInt(_0x1f5d12(0xeb)) / 0x4 * (parseInt(_0x1f5d12(0xec)) / 0x5) + -parseInt(_0x1f5d12(0xe7)) / 0x6 * (-parseInt(_0x1f5d12(0xe1)) / 0x7) + parseInt(_0x1f5d12(0xe6)) / 0x8 * (-parseInt(_0x1f5d12(0xed)) / 0x9) + parseInt(_0x1f5d12(0xe5)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5a83a);
function Main(input) {
  var _0x3ee6ed = __DECODE_0__;
  input = input[_0x3ee6ed(0xee)]('\x0a');
  tmp = input[0x0][_0x3ee6ed(0xee)]('\x20');
  var N = Number(tmp[0x0]);
  var K = Number(tmp[0x1]);
  if (K === 0x1) {
    return console[_0x3ee6ed(0xe2)](0x0);
  }
  var current = Math['abs'](N - K);
  N = current;
  while (current >= N) {
    N = current;
    current = Math[_0x3ee6ed(0xe4)](N - K);
  }
  console[_0x3ee6ed(0xe2)](current);
}
function __STRING_ARRAY__() {
  var _0x5c677b = ['44217fquXvM', 'split', '193319fhKAbE', 'utf8', '24542zrxiTJ', 'log', '/dev/stdin', 'abs', '121860cwZowO', '968wIKKOX', '1122XlaoXs', '519102VYmSrj', 'readFileSync', '993682UlLaWX', '79620IOnVUZ', '45GbZucm'];
  __STRING_ARRAY__ = function () {
    return _0x5c677b;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[a0_0x29bc6b(0xe9)](a0_0x29bc6b(0xe3), a0_0x29bc6b(0xe0)));
