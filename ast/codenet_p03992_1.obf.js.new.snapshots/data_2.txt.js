function __DECODE_0__(egdonw, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x13f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(egdonw, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x14b)) / 0x1 + -parseInt(__DECODE_0__(0x149)) / 0x2 * (-parseInt(__DECODE_0__(0x142)) / 0x3) + parseInt(__DECODE_0__(0x140)) / 0x4 * (-parseInt(__DECODE_0__(0x143)) / 0x5) + -parseInt(__DECODE_0__(0x13f)) / 0x6 * (parseInt(__DECODE_0__(0x14c)) / 0x7) + -parseInt(__DECODE_0__(0x144)) / 0x8 + parseInt(__DECODE_0__(0x145)) / 0x9 + parseInt(__DECODE_0__(0x141)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x41aae);
function Main(input) {
  input = input[__DECODE_0__(0x147)]('');
  input['splice'](0x4, 0x0, '\x20');
  console[__DECODE_0__(0x14a)](input[__DECODE_0__(0x14f)](''));
}
Main(require('fs')[__DECODE_0__(0x14d)](__DECODE_0__(0x148), __DECODE_0__(0x146))[__DECODE_0__(0x14e)]());
function __STRING_ARRAY__() {
  var _0x565b77 = ['470PgKkCL', '2131920EucGZK', '3515292YFMGYj', 'utf8', 'split', '/dev/stdin', '6Dovorc', 'log', '53036efSdjI', '63ZAGmsd', 'readFileSync', 'trim', 'join', '308784JLwvUC', '3176MvwIut', '4236300jxlrRF', '206022wZTCvx'];
  __STRING_ARRAY__ = function () {
    return _0x565b77;
  };
  return __STRING_ARRAY__();
}
