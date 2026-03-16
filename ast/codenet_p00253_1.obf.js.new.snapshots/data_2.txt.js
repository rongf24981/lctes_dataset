function __DECODE_0__(DfHedv, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ce;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DfHedv, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1d0)) / 0x1 + parseInt(__DECODE_0__(0x1d7)) / 0x2 + -parseInt(__DECODE_0__(0x1df)) / 0x3 + -parseInt(__DECODE_0__(0x1da)) / 0x4 * (parseInt(__DECODE_0__(0x1de)) / 0x5) + -parseInt(__DECODE_0__(0x1d2)) / 0x6 + -parseInt(__DECODE_0__(0x1db)) / 0x7 + parseInt(__DECODE_0__(0x1cf)) / 0x8 * (parseInt(__DECODE_0__(0x1d6)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xaa333);
function __STRING_ARRAY__() {
  var _0x111571 = ['shift', '23415111rwXcak', '2504324WqTSWs', 'filter', 'log', '8aimoJU', '5511184baLfWl', '/dev/stdin', 'split', '437455HXYjEY', '2000124eOdzjQ', 'utf8', '8LwisrT', '1229323pQwkwY', 'readFileSync', '1790262zuJaLG', 'map', 'trim'];
  __STRING_ARRAY__ = function () {
    return _0x111571;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')[__DECODE_0__(0x1d1)](__DECODE_0__(0x1dc), __DECODE_0__(0x1ce));
var Arr = input[__DECODE_0__(0x1d4)]()['split']('\x0a');
while (!![]) {
  var n = Arr[__DECODE_0__(0x1d5)]() - 0x0;
  if (n === 0x0) {
    break;
  }
  var arr = Arr[__DECODE_0__(0x1d5)]()[__DECODE_0__(0x1dd)]('\x20')[__DECODE_0__(0x1d3)](Number);
  for (var i = 0x0; i < n + 0x1; i++) {
    var a = arr[__DECODE_0__(0x1d8)](function (v, index) {
      return i != index;
    });
    var h = a[0x1] - a[0x0];
    var flag = !![];
    for (var j = 0x1; j < n; j++) {
      if (h != a[j] - a[j - 0x1]) {
        flag = ![];
      }
    }
    if (flag == !![]) {
      break;
    }
  }
  console[__DECODE_0__(0x1d9)](arr[i]);
}
