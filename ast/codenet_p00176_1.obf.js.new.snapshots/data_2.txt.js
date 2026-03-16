function __DECODE_0__(NujtYL, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd5;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NujtYL, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xe2)) / 0x1 * (parseInt(__DECODE_0__(0xd7)) / 0x2) + -parseInt(__DECODE_0__(0xdd)) / 0x3 * (parseInt(__DECODE_0__(0xe9)) / 0x4) + -parseInt(__DECODE_0__(0xe5)) / 0x5 + parseInt(__DECODE_0__(0xda)) / 0x6 * (parseInt(__DECODE_0__(0xea)) / 0x7) + -parseInt(__DECODE_0__(0xd6)) / 0x8 + -parseInt(__DECODE_0__(0xe6)) / 0x9 + parseInt(__DECODE_0__(0xe3)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xdfdad);
function __STRING_ARRAY__() {
  var _0x544363 = ['readFileSync', '88167nQycfQ', '27865860ituiBl', 'trim', '8408790oLdjSN', '7136964tMlgdE', 'utf8', 'white', '76mtBMEZ', '56ulJRQX', 'substr', 'red', '208928ArqORL', '28OLPiKx', 'fuchsia', 'length', '861078eQQHAF', 'lime', 'blue', '276513hJLQnL', 'pow', 'split', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x544363;
  };
  return __STRING_ARRAY__();
}
(function (input) {
  var lines = input[__DECODE_0__(0xdf)]('\x0a');
  var colors = [['black', 0x0, 0x0, 0x0], [__DECODE_0__(0xdc), 0x0, 0x0, 0xff], [__DECODE_0__(0xdb), 0x0, 0xff, 0x0], ['aqua', 0x0, 0xff, 0x0], [__DECODE_0__(0xd5), 0xff, 0x0, 0x0], [__DECODE_0__(0xd8), 0xff, 0x0, 0xff], ['yellow', 0xff, 0xff, 0x0], [__DECODE_0__(0xe8), 0xff, 0xff, 0xff]];
  for (var i = 0x0; i < lines[__DECODE_0__(0xd9)]; ++i) {
    if (lines[i][0x0] === '#') {
      var best_color;
      var min_d = 0x3 * 0x100 * 0x100 + 0x1;
      var r = parseInt(lines[i]['substr'](0x1, 0x2), 0x10);
      var g = parseInt(lines[i][__DECODE_0__(0xeb)](0x3, 0x2), 0x10);
      var b = parseInt(lines[i][__DECODE_0__(0xeb)](0x5, 0x2), 0x10);
      for (var j = 0x0; j < colors['length']; ++j) {
        var d = Math[__DECODE_0__(0xde)](r - colors[j][0x1], 0x2) + Math['pow'](g - colors[j][0x2], 0x2) + Math[__DECODE_0__(0xde)](b - colors[j][0x3], 0x2);
        if (d < min_d) {
          min_d = d;
          best_color = colors[j][0x0];
        }
      }
      console[__DECODE_0__(0xe0)](best_color);
    }
  }
})(require('fs')[__DECODE_0__(0xe1)]('/dev/stdin', __DECODE_0__(0xe7))[__DECODE_0__(0xe4)]());
