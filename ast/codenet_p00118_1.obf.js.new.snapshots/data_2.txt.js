function __STRING_ARRAY__() {
  var _0x35ce50 = ['push', '977049HRJbWZ', '422274yaghWg', 'shift', '/dev/stdin', 'split', 'readFileSync', '1096565UoZlBL', '580412vhEihf', '18MMOvtw', 'utf8', 'map', '4NaqfmC', '1748952oeUVqi', '656324PvaYcX', '5217816TQSGiI'];
  __STRING_ARRAY__ = function () {
    return _0x35ce50;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x108)) / 0x1 + -parseInt(__DECODE_0__(0x104)) / 0x2 + -parseInt(__DECODE_0__(0x107)) / 0x3 + parseInt(__DECODE_0__(0x112)) / 0x4 * (-parseInt(__DECODE_0__(0x10d)) / 0x5) + parseInt(__DECODE_0__(0x113)) / 0x6 + -parseInt(__DECODE_0__(0x10e)) / 0x7 + -parseInt(__DECODE_0__(0x105)) / 0x8 * (-parseInt(__DECODE_0__(0x10f)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x351fe);
function __DECODE_0__(fEwiCd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x104;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fEwiCd, key);
}
function bomb(y, x, v) {
  var dy = [0x0, 0x0, -0x1, 0x1];
  var dx = [-0x1, 0x1, 0x0, 0x0];
  for (var i = 0x0; i < 0x4; i++) {
    var yy = y + dy[i];
    var xx = x + dx[i];
    if (yy < 0x0 || yy >= n[0x0] || xx < 0x0 || xx >= n[0x1]) {
      continue;
    }
    if (v == yx[yy][xx]) {
      yx[yy][xx] = 0x0;
      bomb(yy, xx, v);
    }
  }
}
var input = require('fs')[__DECODE_0__(0x10c)](__DECODE_0__(0x10a), __DECODE_0__(0x110));
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
  var n = Arr[__DECODE_0__(0x109)]()[__DECODE_0__(0x10b)]('\x20')[__DECODE_0__(0x111)](Number);
  if (n[0x0] == 0x0 && n[0x1] == 0x0) {
    break;
  }
  var yx = [];
  for (var i = 0x0; i < n[0x0]; i++) {
    var arr = Arr[__DECODE_0__(0x109)]()[__DECODE_0__(0x10b)]('');
    yx[__DECODE_0__(0x106)](arr);
  }
  var cnt = 0x0;
  for (var i = 0x0; i < n[0x0]; i++) {
    for (var j = 0x0; j < n[0x1]; j++) {
      var v = yx[i][j];
      if (v == '@' || v == '#' || v == '*') {
        cnt++;
        yx[i][j] = 0x0;
        bomb(i, j, v);
      }
    }
  }
  console['log'](cnt);
}
