(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xdb)) / 0x1 + -parseInt(__DECODE_0__(0xd3)) / 0x2 + parseInt(__DECODE_0__(0xd0)) / 0x3 + parseInt(__DECODE_0__(0xd4)) / 0x4 * (-parseInt(__DECODE_0__(0xd1)) / 0x5) + parseInt(__DECODE_0__(0xd6)) / 0x6 * (parseInt(__DECODE_0__(0xd7)) / 0x7) + parseInt(__DECODE_0__(0xda)) / 0x8 + parseInt(__DECODE_0__(0xdc)) / 0x9 * (parseInt(__DECODE_0__(0xde)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd143b);
function __STRING_ARRAY__() {
  var _0xabb431 = ['4462530JfURpm', '8174165OzShUE', 'split', '2614424qzGwLA', '4FPRIQS', '/dev/stdin', '66hoNONG', '812707zaoejl', 'utf8', 'max', '3355560SvesyK', '121312KNLJWv', '56169qRdnUi', 'log', '1180YvsPeD', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0xabb431;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(FVhTxZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xcf;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FVhTxZ, key);
}
main = function (input) {
  var data = input[__DECODE_0__(0xd2)]('\x20');
  var n = parseInt(data[0x0]);
  var a = parseInt(data[0x1]);
  var b = parseInt(data[0x2]);
  var ans = (n - 0x2) * (b - a) + 0x1;
  console[__DECODE_0__(0xdd)](Math[__DECODE_0__(0xd9)](ans, 0x0));
};
main(require('fs')[__DECODE_0__(0xcf)](__DECODE_0__(0xd5), __DECODE_0__(0xd8)));
