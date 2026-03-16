function __STRING_ARRAY__() {
  var _0x13bf65 = ['35nzzwlW', 'readFileSync', 'split', 'log', '1gzHZxJ', '985254FxRkfU', '4919354ipCgTy', '10LvrPQf', 'utf8', '9296442QaHYVK', '2163852RKNAUL', '460036pxpvrR', '804182hpLMyN', '5NgXPch', 'repeat', 'toString', '982664UTQnHX'];
  __STRING_ARRAY__ = function () {
    return _0x13bf65;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1d5)) / 0x1 * (parseInt(__DECODE_0__(0x1cc)) / 0x2) + -parseInt(__DECODE_0__(0x1db)) / 0x3 + -parseInt(__DECODE_0__(0x1cb)) / 0x4 + parseInt(__DECODE_0__(0x1cd)) / 0x5 * (parseInt(__DECODE_0__(0x1d6)) / 0x6) + parseInt(__DECODE_0__(0x1d1)) / 0x7 * (-parseInt(__DECODE_0__(0x1d0)) / 0x8) + -parseInt(__DECODE_0__(0x1da)) / 0x9 * (-parseInt(__DECODE_0__(0x1d8)) / 0xa) + parseInt(__DECODE_0__(0x1d7)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9181a);
function Main(arg) {
  var a = arg[__DECODE_0__(0x1d3)]('\x0a')[0x0]['split']('\x20')[0x0] - 0x0;
  var b = arg[__DECODE_0__(0x1d3)]('\x0a')[0x0][__DECODE_0__(0x1d3)]('\x20')[0x1] - 0x0;
  if (a < b) {
    console[__DECODE_0__(0x1d4)](a[__DECODE_0__(0x1cf)]()['repeat'](b));
  } else {
    console['log'](b[__DECODE_0__(0x1cf)]()[__DECODE_0__(0x1ce)](a));
  }
  return;
}
function __DECODE_0__(HuCIuO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1cb;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HuCIuO, key);
}
Main(require('fs')[__DECODE_0__(0x1d2)]('/dev/stdin', __DECODE_0__(0x1d9)));
