function __DECODE_0__(UxWbVm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x107;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UxWbVm, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x10c)) / 0x1 + -parseInt(__DECODE_0__(0x110)) / 0x2 * (-parseInt(__DECODE_0__(0x10a)) / 0x3) + -parseInt(__DECODE_0__(0x10e)) / 0x4 + parseInt(__DECODE_0__(0x109)) / 0x5 + parseInt(__DECODE_0__(0x10d)) / 0x6 + parseInt(__DECODE_0__(0x112)) / 0x7 + -parseInt(__DECODE_0__(0x10b)) / 0x8 * (parseInt(__DECODE_0__(0x108)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xee853);
function Main(s) {
  k = +s;
  var ans = [];
  var x = 0x1;
  var y = '';
  for (var i = 0x0; i < k; i++) {
    ans[i] = x + y;
    if (x === 0x9) {
      x = 0x1;
      y += '9';
    } else {
      x++;
    }
  }
  console[__DECODE_0__(0x107)](ans[__DECODE_0__(0x10f)]('\x0a'));
}
function __STRING_ARRAY__() {
  var _0x4456a7 = ['3773469fINGBr', 'log', '9OXjBAG', '956575AyKrrU', '9uQzMnq', '23720392lqUWyE', '1421704czmXHo', '9431184DKKKMj', '1835044iaAVMJ', 'join', '451226ZDgvGz', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x4456a7;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0x111)]('/dev/stdin', 'utf8'));
