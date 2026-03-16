(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xfb)) / 0x1 * (parseInt(__DECODE_0__(0xf1)) / 0x2) + parseInt(__DECODE_0__(0xfa)) / 0x3 + parseInt(__DECODE_0__(0xf8)) / 0x4 + -parseInt(__DECODE_0__(0xfc)) / 0x5 * (-parseInt(__DECODE_0__(0xf4)) / 0x6) + parseInt(__DECODE_0__(0xfe)) / 0x7 * (parseInt(__DECODE_0__(0xf2)) / 0x8) + -parseInt(__DECODE_0__(0xfd)) / 0x9 * (parseInt(__DECODE_0__(0xf9)) / 0xa) + -parseInt(__DECODE_0__(0xf6)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2bcfd);
function __DECODE_0__(oAHNKV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xef;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(oAHNKV, key);
}
function Main(input) {
  input = input[__DECODE_0__(0xf7)]();
  var tate = parseInt(input[__DECODE_0__(0xf3)]('\x0a')[0x0][__DECODE_0__(0xf3)]('\x20')[0x0]);
  for (var i = 0x1; i <= tate; i++) {
    console['log'](input[__DECODE_0__(0xf3)]('\x0a')[i]);
    console[__DECODE_0__(0xf0)](input[__DECODE_0__(0xf3)]('\x0a')[i]);
  }
}
function __STRING_ARRAY__() {
  var _0x4930ad = ['3189230cePtgx', 'trim', '75828XvKnvX', '184810xHYbtc', '986016TOKGyu', '2bpQqwY', '615iYAkfn', '18oEAXyJ', '7UXznpt', '/dev/stdin', 'log', '16636AgeLNh', '797656IGsoDK', 'split', '3690jcCNgO', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x4930ad;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0xf5)](__DECODE_0__(0xef), 'utf8'));
