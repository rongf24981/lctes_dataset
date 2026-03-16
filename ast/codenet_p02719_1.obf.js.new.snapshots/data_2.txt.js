function __DECODE_0__(bHEWEs, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xdf;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bHEWEs, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xdf)) / 0x1 + parseInt(__DECODE_0__(0xea)) / 0x2 + parseInt(__DECODE_0__(0xe8)) / 0x3 + -parseInt(__DECODE_0__(0xeb)) / 0x4 * (parseInt(__DECODE_0__(0xec)) / 0x5) + -parseInt(__DECODE_0__(0xe7)) / 0x6 * (-parseInt(__DECODE_0__(0xe1)) / 0x7) + parseInt(__DECODE_0__(0xe6)) / 0x8 * (-parseInt(__DECODE_0__(0xed)) / 0x9) + parseInt(__DECODE_0__(0xe5)) / 0xa;
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
  input = input[__DECODE_0__(0xee)]('\x0a');
  tmp = input[0x0][__DECODE_0__(0xee)]('\x20');
  var N = Number(tmp[0x0]);
  var K = Number(tmp[0x1]);
  if (K === 0x1) {
    return console[__DECODE_0__(0xe2)](0x0);
  }
  var current = Math['abs'](N - K);
  N = current;
  while (current >= N) {
    N = current;
    current = Math[__DECODE_0__(0xe4)](N - K);
  }
  console[__DECODE_0__(0xe2)](current);
}
function __STRING_ARRAY__() {
  var _0x5c677b = ['44217fquXvM', 'split', '193319fhKAbE', 'utf8', '24542zrxiTJ', 'log', '/dev/stdin', 'abs', '121860cwZowO', '968wIKKOX', '1122XlaoXs', '519102VYmSrj', 'readFileSync', '993682UlLaWX', '79620IOnVUZ', '45GbZucm'];
  __STRING_ARRAY__ = function () {
    return _0x5c677b;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0xe9)](__DECODE_0__(0xe3), __DECODE_0__(0xe0)));
