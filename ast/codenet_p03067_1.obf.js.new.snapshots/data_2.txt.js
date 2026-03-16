(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x129)) / 0x1 * (-parseInt(__DECODE_0__(0x125)) / 0x2) + -parseInt(__DECODE_0__(0x130)) / 0x3 + parseInt(__DECODE_0__(0x124)) / 0x4 + -parseInt(__DECODE_0__(0x126)) / 0x5 + parseInt(__DECODE_0__(0x12f)) / 0x6 * (-parseInt(__DECODE_0__(0x123)) / 0x7) + parseInt(__DECODE_0__(0x12c)) / 0x8 + -parseInt(__DECODE_0__(0x12b)) / 0x9 * (parseInt(__DECODE_0__(0x12e)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1c4ae);
function __STRING_ARRAY__() {
  var _0x47955b = ['log', '619EJbzaE', 'readFileSync', '9DTgarX', '1190176GkXiHc', 'Yes', '2011510bVxDVi', '606lcuUGn', '266880BUZGwp', 'utf8', 'split', '266BbwCCY', '905532rrpCYf', '282SkQzdk', '262995RRutio', 'trim'];
  __STRING_ARRAY__ = function () {
    return _0x47955b;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(DdZELx, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x121;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DdZELx, key);
}
function Main(input) {
  var A = parseInt(input[0x0], 0xa);
  var B = parseInt(input[0x1], 0xa);
  var C = parseInt(input[0x2], 0xa);
  if (A < B) {
    if (A < C && C < B) {
      console['log'](__DECODE_0__(0x12d));
    } else {
      console[__DECODE_0__(0x128)]('No');
    }
  } else {
    if (B < C && C < A) {
      console['log'](__DECODE_0__(0x12d));
    } else {
      console[__DECODE_0__(0x128)]('No');
    }
  }
}
Main(require('fs')[__DECODE_0__(0x12a)]('/dev/stdin', __DECODE_0__(0x121))[__DECODE_0__(0x127)]()[__DECODE_0__(0x122)](/\n|\s/));
