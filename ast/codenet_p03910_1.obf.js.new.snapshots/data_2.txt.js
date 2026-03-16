(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x97)) / 0x1 + parseInt(__DECODE_0__(0x95)) / 0x2 * (-parseInt(__DECODE_0__(0x99)) / 0x3) + -parseInt(__DECODE_0__(0x9e)) / 0x4 + -parseInt(__DECODE_0__(0x96)) / 0x5 * (-parseInt(__DECODE_0__(0x93)) / 0x6) + -parseInt(__DECODE_0__(0x92)) / 0x7 + parseInt(__DECODE_0__(0x9a)) / 0x8 * (-parseInt(__DECODE_0__(0xa2)) / 0x9) + parseInt(__DECODE_0__(0x9c)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x38bc5);
function __DECODE_0__(MyUTnG, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x92;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MyUTnG, key);
}
function myout(text) {
  console[__DECODE_0__(0x94)](text);
}
function Main(input) {
  input = parseInt(input);
  var list = [];
  var output = 0x0;
  for (var i = 0x1; i <= input; i++) {
    output += i;
    list[__DECODE_0__(0xa3)](i);
    if (output == input) {
      myout(list[__DECODE_0__(0xa4)]('\x0a'));
      return;
    } else {
      if (output > input) {
        var diff = output - input;
        list[__DECODE_0__(0x98)](list[__DECODE_0__(0x9d)](diff), 0x1);
        myout(list[__DECODE_0__(0xa4)]('\x0a'));
        return;
      }
    }
  }
}
function __STRING_ARRAY__() {
  var _0x391f22 = ['readFileSync', '/dev/stdin', '3256128mMgqXW', 'push', 'join', '3220686SEahUj', '73974FgrJXS', 'log', '2JvpwvG', '155SnemOc', '129812XnEExJ', 'splice', '1186359aTAhuC', '8GfNaCa', 'trim', '15015230oxGpZF', 'indexOf', '1216712DCjYeB', 'utf8'];
  __STRING_ARRAY__ = function () {
    return _0x391f22;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0xa0)](__DECODE_0__(0xa1), __DECODE_0__(0x9f))[__DECODE_0__(0x9b)]());
