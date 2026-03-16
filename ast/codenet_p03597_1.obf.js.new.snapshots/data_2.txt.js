(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1d5)) / 0x1 * (-parseInt(__DECODE_0__(0x1de)) / 0x2) + -parseInt(__DECODE_0__(0x1cf)) / 0x3 + parseInt(__DECODE_0__(0x1d9)) / 0x4 * (-parseInt(__DECODE_0__(0x1d8)) / 0x5) + parseInt(__DECODE_0__(0x1dc)) / 0x6 * (parseInt(__DECODE_0__(0x1d1)) / 0x7) + -parseInt(__DECODE_0__(0x1d2)) / 0x8 + parseInt(__DECODE_0__(0x1d3)) / 0x9 + parseInt(__DECODE_0__(0x1d0)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1a2a9);
function Main(input) {
  input = input[__DECODE_0__(0x1d7)]('\x0a')['map'](n => parseInt(n, 0xa));
  console[__DECODE_0__(0x1db)](Math[__DECODE_0__(0x1d4)](input[0x0], 0x2) - input[0x1]);
}
function __DECODE_0__(dAqoQt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1cf;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dAqoQt, key);
}
Main(require('fs')[__DECODE_0__(0x1da)](__DECODE_0__(0x1dd), __DECODE_0__(0x1d6)));
function __STRING_ARRAY__() {
  var _0x4e667c = ['41635rbPLet', '8XYwPux', 'readFileSync', 'log', '18eIJlgI', '/dev/stdin', '2obkYAj', '620340CftHfn', '1789410ImZbuZ', '477673ZAHNtg', '1496848HHkwAz', '933966ttpSvB', 'pow', '30285liXgyY', 'utf8', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x4e667c;
  };
  return __STRING_ARRAY__();
}
