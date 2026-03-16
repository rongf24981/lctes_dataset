(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xb5)) / 0x1 * (-parseInt(__DECODE_0__(0xb9)) / 0x2) + -parseInt(__DECODE_0__(0xb8)) / 0x3 + parseInt(__DECODE_0__(0xb7)) / 0x4 * (parseInt(__DECODE_0__(0xb4)) / 0x5) + parseInt(__DECODE_0__(0xb0)) / 0x6 * (-parseInt(__DECODE_0__(0xb6)) / 0x7) + -parseInt(__DECODE_0__(0xb2)) / 0x8 + -parseInt(__DECODE_0__(0xae)) / 0x9 + parseInt(__DECODE_0__(0xbb)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x53016);
function Main(input) {
  input = input['split']('\x0a');
  const N = parseInt(input[0x0], 0xa);
  for (var i = 0x1; i > 0x0; i++) {
    var n = 0.5 * (Math[__DECODE_0__(0xb3)](0x8 * N * i + 0x1) - 0x1);
    if (Number[__DECODE_0__(0xba)](n) == !![]) {
      console['log'](n);
      break;
    }
  }
}
function __STRING_ARRAY__() {
  var _0xb1337f = ['2061Zswzaq', '40782aBbGLF', '6668CbkfLb', '32727eZaeaw', '282pSIFMC', 'isInteger', '11465860yUXtAL', '4167495ccULqb', 'readFileSync', '18dNjjXV', '/dev/stdin', '2876960EHzwzJ', 'sqrt', '1005BhRjGB'];
  __STRING_ARRAY__ = function () {
    return _0xb1337f;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(KltvmH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xae;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KltvmH, key);
}
Main(require('fs')[__DECODE_0__(0xaf)](__DECODE_0__(0xb1), 'utf8'));
