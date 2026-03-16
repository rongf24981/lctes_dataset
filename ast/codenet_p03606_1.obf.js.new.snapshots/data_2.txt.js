(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1d6)) / 0x1 + -parseInt(__DECODE_0__(0x1d5)) / 0x2 * (parseInt(__DECODE_0__(0x1e0)) / 0x3) + parseInt(__DECODE_0__(0x1dc)) / 0x4 * (parseInt(__DECODE_0__(0x1d7)) / 0x5) + parseInt(__DECODE_0__(0x1d8)) / 0x6 * (parseInt(__DECODE_0__(0x1d2)) / 0x7) + parseInt(__DECODE_0__(0x1d4)) / 0x8 * (-parseInt(__DECODE_0__(0x1da)) / 0x9) + -parseInt(__DECODE_0__(0x1d3)) / 0xa * (parseInt(__DECODE_0__(0x1de)) / 0xb) + parseInt(__DECODE_0__(0x1e1)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb97b0);
function __DECODE_0__(gwILdO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d2;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(gwILdO, key);
}
Main(require('fs')[__DECODE_0__(0x1db)](__DECODE_0__(0x1df), 'utf8'));
function __STRING_ARRAY__() {
  var _0x11b68c = ['224AJPeqs', '10BCQWFO', '539048OdDIvu', '2258672pzMQjN', '1149983vmVsDK', '8335DqUUBr', '184260vFenwJ', 'log', '198kBONHh', 'readFileSync', '3436xqKHwk', 'split', '13363757SImPTC', '/dev/stdin', '3bdZTmN', '39859716zOEVTf'];
  __STRING_ARRAY__ = function () {
    return _0x11b68c;
  };
  return __STRING_ARRAY__();
}
function Main(args) {
  input = args[__DECODE_0__(0x1dd)]('\x0a');
  const N = parseInt(input[0x0]);
  var tmp;
  var result = 0x0;
  for (var i = 0x1; i <= N; i++) {
    tmp = input[i][__DECODE_0__(0x1dd)]('\x20');
    result += parseInt(tmp[0x1]) - parseInt(tmp[0x0]) + 0x1;
  }
  console[__DECODE_0__(0x1d9)](result);
}
