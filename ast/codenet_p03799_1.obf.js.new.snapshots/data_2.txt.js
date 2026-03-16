function __DECODE_0__(XKhYUQ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1de;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XKhYUQ, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1e5)) / 0x1 * (-parseInt(__DECODE_0__(0x1eb)) / 0x2) + -parseInt(__DECODE_0__(0x1e9)) / 0x3 * (parseInt(__DECODE_0__(0x1e0)) / 0x4) + parseInt(__DECODE_0__(0x1e7)) / 0x5 * (-parseInt(__DECODE_0__(0x1e1)) / 0x6) + -parseInt(__DECODE_0__(0x1e8)) / 0x7 + -parseInt(__DECODE_0__(0x1ed)) / 0x8 * (parseInt(__DECODE_0__(0x1de)) / 0x9) + parseInt(__DECODE_0__(0x1ea)) / 0xa + parseInt(__DECODE_0__(0x1df)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6dbba);
function __STRING_ARRAY__() {
  var _0x368e54 = ['readFileSync', '/dev/stdin', 'floor', '1gQGhXI', 'split', '55hCayuh', '2783102oRzcIe', '459kUtLCr', '8350370jPaoPI', '433018fVamNv', 'log', '3783400LtbNFx', '9lSEzGw', '15447388pQqceU', '13088qxyNuj', '346506UktamJ'];
  __STRING_ARRAY__ = function () {
    return _0x368e54;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  var inputArr = input[__DECODE_0__(0x1e6)]('\x20');
  var sNum = Number(inputArr[0x0]);
  var cNum = Number(inputArr[0x1]);
  var result = 0x0;
  if (sNum > cNum / 0x2) {
    result += Math[__DECODE_0__(0x1e4)](cNum / 0x2);
  } else {
    result += sNum;
    cNum -= result * 0x2;
    result += Math['floor'](cNum / 0x4);
  }
  console[__DECODE_0__(0x1ec)](result);
}
Main(require('fs')[__DECODE_0__(0x1e2)](__DECODE_0__(0x1e3), 'utf8'));
