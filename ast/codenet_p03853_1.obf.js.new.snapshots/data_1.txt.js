var a0_0xe96346 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0xcc3126 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0xcc3126(0xfb)) / 0x1 * (parseInt(_0xcc3126(0xf1)) / 0x2) + parseInt(_0xcc3126(0xfa)) / 0x3 + parseInt(_0xcc3126(0xf8)) / 0x4 + -parseInt(_0xcc3126(0xfc)) / 0x5 * (-parseInt(_0xcc3126(0xf4)) / 0x6) + parseInt(_0xcc3126(0xfe)) / 0x7 * (parseInt(_0xcc3126(0xf2)) / 0x8) + -parseInt(_0xcc3126(0xfd)) / 0x9 * (parseInt(_0xcc3126(0xf9)) / 0xa) + -parseInt(_0xcc3126(0xf6)) / 0xb;
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
  var _0x2e6da0 = __DECODE_0__;
  input = input[_0x2e6da0(0xf7)]();
  var tate = parseInt(input[_0x2e6da0(0xf3)]('\x0a')[0x0][_0x2e6da0(0xf3)]('\x20')[0x0]);
  for (var i = 0x1; i <= tate; i++) {
    console['log'](input[_0x2e6da0(0xf3)]('\x0a')[i]);
    console[_0x2e6da0(0xf0)](input[_0x2e6da0(0xf3)]('\x0a')[i]);
  }
}
function __STRING_ARRAY__() {
  var _0x4930ad = ['3189230cePtgx', 'trim', '75828XvKnvX', '184810xHYbtc', '986016TOKGyu', '2bpQqwY', '615iYAkfn', '18oEAXyJ', '7UXznpt', '/dev/stdin', 'log', '16636AgeLNh', '797656IGsoDK', 'split', '3690jcCNgO', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x4930ad;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[a0_0xe96346(0xf5)](a0_0xe96346(0xef), 'utf8'));
