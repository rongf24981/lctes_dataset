(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xf3)) / 0x1 * (parseInt(__DECODE_0__(0xf6)) / 0x2) + parseInt(__DECODE_0__(0xf7)) / 0x3 * (parseInt(__DECODE_0__(0xfa)) / 0x4) + -parseInt(__DECODE_0__(0x101)) / 0x5 * (-parseInt(__DECODE_0__(0xfe)) / 0x6) + parseInt(__DECODE_0__(0x100)) / 0x7 * (parseInt(__DECODE_0__(0x103)) / 0x8) + parseInt(__DECODE_0__(0xf2)) / 0x9 * (-parseInt(__DECODE_0__(0xf4)) / 0xa) + parseInt(__DECODE_0__(0xfd)) / 0xb + -parseInt(__DECODE_0__(0xf9)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd9738);
function main(input) {
  var lines = input['split']('\x0a');
  var line0 = lines[0x0]['split']('\x20');
  var n = parseInt(line0[0x0]);
  var a = parseInt(line0[0x1]);
  var b = parseInt(line0[0x2]);
  var x = lines[0x1][__DECODE_0__(0x102)]('\x20')[__DECODE_0__(0xf5)](t => parseInt(t));
  var ans = 0x0;
  for (var i = 0x0; i < n - 0x1; i++) {
    ans += Math[__DECODE_0__(0xff)](a * (x[i + 0x1] - x[i]), b);
  }
  console[__DECODE_0__(0xfc)](ans);
}
main(require('fs')[__DECODE_0__(0xfb)]('/dev/stdin', __DECODE_0__(0xf8)));
function __DECODE_0__(MLkeDv, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xf2;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MLkeDv, key);
}
function __STRING_ARRAY__() {
  var _0x3ed69e = ['1438361wETIZe', '20cBWqnq', 'map', '2GIJNxp', '1650231MlDBMs', 'utf8', '50782236mWcRCN', '4fByiUP', 'readFileSync', 'log', '10510324USNZUn', '6SbsoQC', 'min', '10019548kwGtYy', '8346445hjMQwY', 'split', '8lBISXl', '4149189FkYVgw'];
  __STRING_ARRAY__ = function () {
    return _0x3ed69e;
  };
  return __STRING_ARRAY__();
}
