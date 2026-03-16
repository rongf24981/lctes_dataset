function __DECODE_0__(MvVkhF, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x115;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MvVkhF, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x11f)) / 0x1 * (-parseInt(__DECODE_0__(0x120)) / 0x2) + parseInt(__DECODE_0__(0x118)) / 0x3 + -parseInt(__DECODE_0__(0x117)) / 0x4 + parseInt(__DECODE_0__(0x11c)) / 0x5 + parseInt(__DECODE_0__(0x122)) / 0x6 * (-parseInt(__DECODE_0__(0x116)) / 0x7) + parseInt(__DECODE_0__(0x121)) / 0x8 + -parseInt(__DECODE_0__(0x119)) / 0x9 * (parseInt(__DECODE_0__(0x123)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5ef4e);
function main(input) {
  var inputs = input['split']('\x0a');
  var money = inputs[0x0]['split']('\x20')[0x0];
  var kRegexp = new RegExp(inputs[0x1][__DECODE_0__(0x11b)]('\x20', '|'));
  while (kRegexp[__DECODE_0__(0x11d)](String(money))) {
    money++;
  }
  return money;
}
console[__DECODE_0__(0x11e)](main(require('fs')[__DECODE_0__(0x115)]('/dev/stdin', __DECODE_0__(0x11a))));
function __STRING_ARRAY__() {
  var _0xb4a394 = ['6HuLEYg', '119850qWFuTS', 'readFileSync', '889301QQmsaT', '422680IKerOU', '2005425wDVhzf', '1737unnzRj', 'utf8', 'replace', '3853820pbWajm', 'test', 'log', '20SltTXK', '72974UUQPkY', '6126248PnKzJY'];
  __STRING_ARRAY__ = function () {
    return _0xb4a394;
  };
  return __STRING_ARRAY__();
}
