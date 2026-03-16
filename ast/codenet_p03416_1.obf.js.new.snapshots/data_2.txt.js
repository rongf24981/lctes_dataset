function __DECODE_0__(sqJzeU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xeb;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(sqJzeU, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xeb)) / 0x1 * (parseInt(__DECODE_0__(0xf2)) / 0x2) + -parseInt(__DECODE_0__(0xef)) / 0x3 * (-parseInt(__DECODE_0__(0xf1)) / 0x4) + -parseInt(__DECODE_0__(0xec)) / 0x5 + -parseInt(__DECODE_0__(0xee)) / 0x6 * (-parseInt(__DECODE_0__(0xf0)) / 0x7) + -parseInt(__DECODE_0__(0xed)) / 0x8 + parseInt(__DECODE_0__(0xf8)) / 0x9 + parseInt(__DECODE_0__(0xf5)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x69c89);
function Main(input) {
  var input = input[__DECODE_0__(0xf3)]('\x20');
  var A = input[0x0];
  var B = input[0x1];
  var cnt = 0x0;
  function hoge() {
    var x = A[__DECODE_0__(0xf7)]();
    if (x[0x0] === x[0x4] && x[0x1] === x[0x3]) {
      return !![];
    }
  }
  while (A <= B) {
    if (hoge()) {
      cnt++;
    }
    A++;
  }
  console[__DECODE_0__(0xf9)](cnt);
}
function __STRING_ARRAY__() {
  var _0x984872 = ['split', '/dev/stdin', '9158430HYnfxv', 'utf8', 'toString', '1148724VqXiLw', 'log', '87990xKkKWr', '4165100WQIwGR', '1963528ONlFRx', '1788BMkeJi', '3285tKDhKO', '2359mjTnSK', '2308HKQtZv', '6aNPtlQ'];
  __STRING_ARRAY__ = function () {
    return _0x984872;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')['readFileSync'](__DECODE_0__(0xf4), __DECODE_0__(0xf6)));
